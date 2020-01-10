import { IsInt, IsOptional, Max } from 'class-validator';
import { Transform } from 'class-transformer';

export class PaginateDto {
  @Transform(value => parseInt(value, 10))
  @IsInt()
  @IsOptional()
  skip: number;

  @Transform(value => parseInt(value, 10))
  @IsInt()
  @Max(50)
  @IsOptional()
  limit: number;
}
