import { Model } from 'mongoose';
import { BaseInterface } from 'src/mongo/base.interface';
import { ConflictException, NotFoundException } from '@nestjs/common';

export class BaseService<Interface extends BaseInterface, CreateDto, UpdateDto> {
  constructor(private readonly model: Model<Interface>) {
  }

  async create(createDto: CreateDto) {
    return this.model.create(createDto);
  }

  async get(id: string) {
    const entity = this.model.findById(id);

    if (entity) {
      return entity;
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
    return this.get(id).then(_ => _.updateOne(updateDto, {new: true}));
  }

  async count(query?) {
    return this.model.count(query || {});
  }

  async available(query) {
    if (await this.count(query)) {
      throw new ConflictException();
    }

    return true;
  }

  async remove(id: string) {
    return this.get(id).then(_ => _.remove());
  }
}
