import { Controller, Get } from '@nestjs/common';
import { CityService } from 'src/module/location/city/city.service';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {
  }

  @Get()
  async getCities() {
    return this.cityService.all();
  }
}
