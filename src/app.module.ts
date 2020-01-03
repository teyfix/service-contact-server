import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { set } from 'mongoose';
import { AuthModule } from './module/auth/auth.module';
import { LocationModule } from './module/location/location.module';
import { PanelModule } from './module/panel/panel.module';

set('useCreateIndex', true);

@Module({
  imports: [
    MongooseModule.forRoot(process.env.mongoUrl, {
      createIndexes: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    AuthModule,
    LocationModule,
    PanelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
