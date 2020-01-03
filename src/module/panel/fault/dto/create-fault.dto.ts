import { IsName } from 'src/validator/is-name';

export class CreateFaultDto {
  @IsName()
  title: string;
}
