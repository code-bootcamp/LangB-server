import { Field, InputType, Int } from '@nestjs/graphql';
import { SitterLocation } from 'src/apis/sitterLocation/entities/sitterLocation.entity';

@InputType()
export class CreateSitterBoardInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  detail: string;

  @Field(() => String)
  date: string; // 펫시터 일 날짜

  @Field(() => String)
  startTime: string;

  @Field(() => String)
  sittingTime: string;

  @Field(() => Int)
  maxPetNum: number;

  @Field(() => Boolean)
  isReserved: boolean;

  @Field(() => SitterLocation)
  sitterLocation: SitterLocation;
}
