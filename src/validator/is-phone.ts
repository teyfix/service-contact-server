import { IsPhoneNumber } from 'class-validator';

export const IsPhone = () => IsPhoneNumber(process.env.phoneLocal);
