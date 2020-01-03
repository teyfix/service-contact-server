import { IsPhoneNumber } from 'class-validator';

export const IsPhone = () => IsPhoneNumber(process.env.PHONE_LOCAL);
