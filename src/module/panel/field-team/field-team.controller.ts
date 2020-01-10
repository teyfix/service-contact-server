import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { FieldTeamService } from 'src/module/panel/field-team/field-team.service';
import { CreateFieldTeamDto } from 'src/module/panel/field-team/dto/create-field-team.dto';
import { UpdateFieldTeamDto } from 'src/module/panel/field-team/dto/update-field-team.dto';
import { PaginateDto } from 'src/dto/paginate.dto';

@Controller('field-team')
export class FieldTeamController {
  constructor(private readonly fieldTeamService: FieldTeamService) {
  }

  @Get()
  getAllFieldTeams() {
    return this.fieldTeamService.all();
  }

  @Get('paginate')
  async paginate(@Query() query: PaginateDto) {
    return this.fieldTeamService.paginate(query);
  }

  @Get(':id')
  async getFieldTeam(@Param() {id}) {
    return this.fieldTeamService.get(id);
  }

  @Post()
  async createFieldTeam(@Body() createFieldTeamDto: CreateFieldTeamDto) {
    return this.fieldTeamService.create(createFieldTeamDto);
  }

  @Patch(':id')
  async updateFieldTeam(@Param() {id}, updateFieldTeamDto: UpdateFieldTeamDto) {
    return this.fieldTeamService.getAndUpdate(id, updateFieldTeamDto);
  }

  @Delete(':id')
  async deleteFieldTeam(@Param() {id}) {
    return this.fieldTeamService.remove(id);
  }
}
