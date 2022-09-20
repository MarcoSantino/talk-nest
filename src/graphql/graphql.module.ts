import { GraphqlController } from './controller/graphql.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphqlResolver } from './resolver/graphql.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  controllers: [GraphqlController],
  providers: [GraphqlResolver],
})
export class GraphqlModule {}
