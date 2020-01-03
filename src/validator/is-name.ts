import { IsString, Matches } from 'class-validator';
import * as XRegExp from 'xregexp';
import { applyDecorators } from '@nestjs/common';

const Alpha = XRegExp('^\\p{Latin}+$');
const AlphaSpace = XRegExp('^\\p{Latin}+(?: \\p{Latin}+)*$');
const MatchesAlpha = (spaces: boolean) => {
  return Matches(spaces ? AlphaSpace : Alpha, {
    message: '$property must contain only letters' + (spaces ? ' and spaces' : ''),
  });
};

export const IsName = (spaces = true) => {
  return applyDecorators(
    IsString(),
    // @ts-ignore
    MatchesAlpha(spaces),
  );
};
