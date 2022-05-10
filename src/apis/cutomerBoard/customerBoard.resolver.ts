import { CustomerBoardService } from './customerBoard.service';
import { Query, Resolver } from '@nestjs/graphql';
// @  데코레이터

// :  typescript
@Resolver()
export class CustomerBoardResolver {
  constructor(private readonly boardService: CustomerBoardService) {}

  @Query(() => String) //String Int Boolean
  fetchBoards(): string {
    //number boolean
    return this.boardService.aaa();
  }
}
