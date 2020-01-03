import { IsString, Matches, MinLength } from 'class-validator';
import * as XRegExp from 'xregexp';
import { applyDecorators } from '@nestjs/common';

const Password = XRegExp('^(?=.*[\\pL])(?=.*[0-9])(?=.*[^\\pL0-9]).{6,}$');

export const IsPassword = () => {
  return applyDecorators(
    IsString(),
    MinLength(6),
    // @ts-ignore
    Matches(Password, {message: '$property must contain letter, number and symbol'}),
  );
};
