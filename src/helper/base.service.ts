import { Model } from 'mongoose';
import { BaseInterface } from 'src/mongo/base.interface';
import { ConflictException, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { PaginateDto } from 'src/dto/paginate.dto';

export class BaseService<Interface extends BaseInterface, CreateDto = any, UpdateDto = any> {
  constructor(private readonly model: Model<Interface>) {
  }

  async create(createDto: CreateDto) {
    return this.model.create(createDto);
  }

  async get(id: string) {
    try {

      const entity = await this.model.findById(id);

      if (entity) {
        return entity;
      }
    } catch (e) {
      if (e.name === 'CastError') {
        throw new UnprocessableEntityException('Cast to ' + e.kind + ' failed for value "' + e.stringValue + '"');
      }
    }

    throw new NotFoundException();
  }

  async all() {
    return this.model.find();
  }

  async findOne(query) {
    const entity = await this.model.findOne(query);

    if (entity) {
      return entity;
    }

    throw new NotFoundException();
  }

  async getAndUpdate(id: string, updateDto: UpdateDto) {
    const entity = await this.get(id);

    await entity.updateOne(updateDto, {new: true});

    return this.get(id);
  }

  async countDocuments(query?) {
    return this.model.countDocuments(query || {});
  }

  async available(query) {
    if (await this.countDocuments(query)) {
      throw new ConflictException();
    }

    return true;
  }

  async remove(id: string) {
    return this.get(id).then(_ => _.remove());
  }

  async paginate(paginateDto: PaginateDto) {
    return {
      data: await this.model.find().skip(+paginateDto.skip || 0).limit(+paginateDto.limit || 20),
      count: await this.countDocuments(),
    };
  }
}
