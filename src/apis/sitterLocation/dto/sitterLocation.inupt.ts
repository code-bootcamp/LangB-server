import { InputType, OmitType } from '@nestjs/graphql';
import { SitterLocation } from '../entities/sitterLocation.entity';

@InputType()
export class SitterLocationInput extends OmitType(
  SitterLocation,
  ['id'],
  InputType,
) {}
