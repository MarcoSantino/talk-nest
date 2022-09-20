import { GraphqlModule } from './graphql/graphql.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [GraphqlModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
