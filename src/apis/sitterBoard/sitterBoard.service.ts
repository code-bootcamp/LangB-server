import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SitterLocation } from '../sitterLocation/entities/sitterLocation.entity';
import { SitterBoard } from './entities/sitterBoard.entity';

@Injectable()
export class SitterBoardService {
  constructor(
    @InjectRepository(SitterBoard)
    private readonly sitterBoardRepository: Repository<SitterBoard>,

    @InjectRepository(SitterLocation)
    private readonly sitterLocationRepository: Repository<SitterLocation>,
  ) {}

  async create({ createSitterBoardInput }) {
    const { sitterLocation, ...restSitterBoard } = createSitterBoardInput;

    const locationResult = await this.sitterLocationRepository.save({
      ...sitterLocation,
    });

    return await this.sitterBoardRepository.save({
      sitterLocation: locationResult,
      ...restSitterBoard,
    });
  }
}
