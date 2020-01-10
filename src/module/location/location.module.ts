import { Module } from '@nestjs/common';
import { CityController } from './city/city.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CountrySchema } from './country/country.schema';
import { CitySchema } from './city/city.schema';
import { DistrictSchema } from './district/district.schema';
import { ProvinceSchema } from './province/province.schema';
import { NeighborhoodSchema } from './neighborhood/neighborhood.schema';
import { CityService } from './city/city.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Country', schema: CountrySchema},
      {name: 'City', schema: CitySchema},
      {name: 'District', schema: DistrictSchema},
      {name: 'Province', schema: ProvinceSchema},
      {name: 'Neighborhood', schema: NeighborhoodSchema},
    ]),
  ],
  exports: [MongooseModule, CityService],
  controllers: [CityController],
  providers: [CityService],
})
export class LocationModule {
}
