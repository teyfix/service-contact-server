import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { LocationModule } from '../location/location.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DealerSchema } from './dealer/dealer.schema';
import { FaultController } from './fault/fault.controller';
import { FaultService } from './fault/fault.service';
import { FaultSchema } from 'src/module/panel/fault/fault.schema';
import { FieldTeamSchema } from 'src/module/panel/field-team/field-team.schema';
import { FieldTeamController } from './field-team/field-team.controller';
import { FieldTeamService } from './field-team/field-team.service';
import { DealerService } from 'src/module/panel/dealer/dealer.service';
import { DealerController } from 'src/module/panel/dealer/dealer.controller';
import { FaultRecordController } from './fault-record/fault-record.controller';
import { FaultRecordService } from './fault-record/fault-record.service';
import { FaultRecordSchema } from 'src/module/panel/fault-record/fault-record.schema';

@Module({
  imports: [
    AuthModule,
    LocationModule,
    MongooseModule.forFeature([
      {name: 'Dealer', schema: DealerSchema},
      {name: 'Fault', schema: FaultSchema},
      {name: 'FieldTeam', schema: FieldTeamSchema},
      {name: 'FaultRecord', schema: FaultRecordSchema},
    ]),
  ],
  controllers: [DealerController, FaultController, FieldTeamController, FaultRecordController],
  providers: [DealerService, FaultService, FieldTeamService, FaultRecordService],
})
export class PanelModule {
}
