import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { FaultRecordService } from 'src/module/panel/fault-record/fault-record.service';
import { CreateFaultRecordDto } from 'src/module/panel/fault-record/dto/create-fault-record.dto';
import { UpdateFaultRecordDto } from 'src/module/panel/fault-record/dto/update-fault-record.dto';

@Controller('fault-record')
export class FaultRecordController {
  constructor(private readonly faultRecordService: FaultRecordService) {
  }

  @Get()
  getAllFaultRecords() {
    return this.faultRecordService.all();
  }

  @Get(':id')
  async getFaultRecord(@Param() {id}) {
    return this.faultRecordService.get(id);
  }

  @Post()
  async createFaultRecord(@Body() createFaultRecordDto: CreateFaultRecordDto) {
    return this.faultRecordService.create(createFaultRecordDto);
  }

  @Patch(':id')
  async updateFaultRecord(@Param() {id}, updateFaultRecordDto: UpdateFaultRecordDto) {
    return this.faultRecordService.getAndUpdate(id, updateFaultRecordDto);
  }

  @Delete(':id')
  async deleteFaultRecord(@Param() {id}) {
    return this.faultRecordService.remove(id);
  }
}
