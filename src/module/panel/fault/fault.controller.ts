import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { FaultService } from 'src/module/panel/fault/fault.service';
import { CreateFaultDto } from 'src/module/panel/fault/dto/create-fault.dto';
import { UpdateFaultDto } from 'src/module/panel/fault/dto/update-fault.dto';

@Controller('fault')
export class FaultController {
  constructor(private readonly faultService: FaultService) {
  }

  @Get()
  async getAllFaults() {
    return this.faultService.all();
  }

  @Get(':id')
  async getFault(@Param() {id}) {
    return this.faultService.get(id);
  }

  @Post()
  async createFault(@Body() createFaultDto: CreateFaultDto) {
    return this.faultService.create(createFaultDto);
  }

  @Patch(':id')
  async updateFault(@Param() {id}, updateFaultDto: UpdateFaultDto) {
    return this.faultService.getAndUpdate(id, updateFaultDto);
  }

  @Delete(':id')
  async deleteFault(@Param() {id}) {
    return this.faultService.remove(id);
  }
}
