import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { FaultService } from 'src/module/panel/fault/fault.service';
import { CreateFaultDto } from 'src/module/panel/fault/dto/create-fault.dto';
import { UpdateFaultDto } from 'src/module/panel/fault/dto/update-fault.dto';
import { PaginateDto } from 'src/dto/paginate.dto';
import { MinRole } from 'src/decorator/min-role';
import { Role } from 'src/module/auth/user/user.interface';

@Controller('fault')
@MinRole(Role.Moderator)
export class FaultController {
  constructor(private readonly faultService: FaultService) {
  }

  @Get()
  async getAllFaults() {
    return this.faultService.all();
  }

  @Get('paginate')
  async paginate(@Query() query: PaginateDto) {
    return this.faultService.paginate(query);
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
  async updateFault(@Param() {id}, @Body() updateFaultDto: UpdateFaultDto) {
    return this.faultService.getAndUpdate(id, updateFaultDto);
  }

  @Delete(':id')
  async deleteFault(@Param() {id}) {
    return this.faultService.remove(id);
  }
}
