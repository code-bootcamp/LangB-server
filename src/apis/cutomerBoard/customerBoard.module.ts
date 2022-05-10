import { Module } from '@nestjs/common';
import { CustomerBoardResolver } from './customerBoard.resolver';
import { CustomerBoardService } from './customerBoard.service';

@Module({
  // imports: [],
  // controllers: [AppController],
  providers: [CustomerBoardResolver, CustomerBoardService],
})
export class CustomerBoardModule {}
