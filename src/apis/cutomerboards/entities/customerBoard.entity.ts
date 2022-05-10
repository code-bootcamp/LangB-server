import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class CustomerBoard {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  title: string;

  @Column()
  @Field(() => String)
  detail: string;

  @Column()
  @Field(() => String)
  date: string; // 펫시터 일 날짜

  @Column()
  @Field(() => String)
  startTime: string;

  @Column()
  @Field(() => String)
  sittingTime: string;

  @Column()
  @Field(() => Int)
  petNumber: number;
}
