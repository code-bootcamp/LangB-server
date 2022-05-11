import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardModule } from './apis/board/board.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    BoardModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '10.127.112.4',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'teamproject',
      entities: [__dirname + '/apis/**/*.entity.*'], //각 경로 설정
      synchronize: true,
      logging: true,
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
