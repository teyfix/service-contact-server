import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { FaultRecordService } from 'src/module/panel/fault-record/fault-record.service';
import { CreateFaultRecordDto } from 'src/module/panel/fault-record/dto/create-fault-record.dto';
import { UpdateFaultRecordDto } from 'src/module/panel/fault-record/dto/update-fault-record.dto';
import { PaginateDto } from 'src/dto/paginate.dto';
import { FieldTeamService } from 'src/module/panel/field-team/field-team.service';
import { MinRole } from 'src/decorator/min-role';
import { Role } from 'src/module/auth/user/user.interface';

@Controller('fault-record')
@MinRole(Role.Moderator)
export class FaultRecordController {
  constructor(
    private readonly fieldTeamService: FieldTeamService,
    private readonly faultRecordService: FaultRecordService,
  ) {
  }

  @Get()
  getAllFaultRecords() {
    return this.faultRecordService.all();
  }

  @Get('paginate')
  async paginate(@Query() query: PaginateDto) {
    return this.faultRecordService.paginate(query);
  }

  @Get(':id')
  async getFaultRecord(@Param() {id}) {
    return this.faultRecordService.get(id);
  }

  @Post()
  async createFaultRecord(@Body() createFaultRecordDto: CreateFaultRecordDto) {
    if (createFaultRecordDto.fieldTeam == null) {
      createFaultRecordDto.fieldTeam = await this.fieldTeamService.findOne({
        city: createFaultRecordDto.city,
        fault: createFaultRecordDto.fault,
      });
    }

    return this.faultRecordService.create(createFaultRecordDto);
  }

  @Patch(':id')
  async updateFaultRecord(@Param() {id}, @Body() updateFaultRecordDto: UpdateFaultRecordDto) {
    return this.faultRecordService.getAndUpdate(id, updateFaultRecordDto);
  }

  @Delete(':id')
  async deleteFaultRecord(@Param() {id}) {
    return this.faultRecordService.remove(id);
  }
}
