import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { DealerService } from './dealer.service';
import { MinRole } from 'src/decorator/min-role';
import { Role } from 'src/module/auth/user/user.interface';
import { CreateDealerDto } from 'src/module/panel/dealer/dto/create-dealer.dto';
import { UpdateDealerDto } from 'src/module/panel/dealer/dto/update-dealer.dto';
import { CityService } from 'src/module/location/city/city.service';
import { PaginateDto } from 'src/dto/paginate.dto';

@Controller('dealer')
@MinRole(Role.Moderator)
export class DealerController {
  constructor(
    private readonly cityService: CityService,
    private readonly dealerService: DealerService,
  ) {
  }

  @Get()
  getAllDealers() {
    return this.dealerService.all();
  }

  @Post()
  async createDealer(@Body() createDealerDto: CreateDealerDto) {
    if ('string' === typeof createDealerDto.city) {
      createDealerDto.city = await this.cityService.get(createDealerDto.city);
    }

    return this.dealerService.create(createDealerDto);
  }

  @Get('paginate')
  async paginate(@Query() query: PaginateDto) {
    return this.dealerService.paginate(query);
  }

  @Get(':id')
  async getDealer(@Param() {id}) {
    return this.dealerService.get(id);
  }

  @Patch(':id')
  async updateDealer(@Param() {id}, updateDealerDto: UpdateDealerDto) {
    return this.dealerService.getAndUpdate(id, updateDealerDto);
  }

  @Delete(':id')
  async deleteDealer(@Param() {id}) {
    return this.dealerService.remove(id);
  }
}
