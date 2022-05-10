import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateSitterBoardInput } from './dto/sitterBoard.input';
import { SitterBoard } from './entities/sitterBoard.entity';
import { SitterBoardService } from './sitterBoard.service';

@Resolver()
export class SitterBoardResolver {
  constructor(private readonly sitterBoardService: SitterBoardService) {}

  @Mutation(() => SitterBoard)
  createSitterBoard(
    @Args('createSitterBoardInput')
    createSitterBoardInput: CreateSitterBoardInput,
  ) {
    return this.sitterBoardService.create({ createSitterBoardInput });
  }
}
