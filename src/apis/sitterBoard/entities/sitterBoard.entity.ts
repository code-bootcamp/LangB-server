import { Field, Int, ObjectType } from '@nestjs/graphql';
import { SitterLocation } from 'src/apis/sitterLocation/entities/sitterLocation.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class SitterBoard {
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
  date: string;

  @Column()
  @Field(() => String)
  startTime: string;

  @Column()
  @Field(() => String)
  sittingTime: string;

  @Column()
  @Field(() => Int)
  maxPetNum: number;

  @Column()
  @Field(() => Boolean)
  isReserve: boolean;

  @JoinColumn()
  @OneToOne(() => SitterLocation)
  @Field(() => SitterLocation)
  sitterLocation: SitterLocation;
}
