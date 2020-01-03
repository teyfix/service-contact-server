import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { DealerService } from './dealer.service';
import { MinRole } from 'src/decorator/min-role';
import { Role } from 'src/module/auth/user/user.interface';
import { CreateDealerDto } from 'src/module/panel/dealer/dto/create-dealer.dto';
import { UpdateDealerDto } from 'src/module/panel/dealer/dto/update-dealer.dto';

@Controller('dealer')
@MinRole(Role.Moderator)
export class DealerController {
  constructor(private readonly dealerService: DealerService) {
  }

  @Get()
  getAllDealers() {
    return this.dealerService.all();
  }

  @Get(':id')
  async getDealer(@Param() {id}) {
    return this.dealerService.get(id);
  }

  @Post()
  async createDealer(@Body() createDealerDto: CreateDealerDto) {
    return this.dealerService.create(createDealerDto);
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
