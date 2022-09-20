import { Query, Resolver } from '@nestjs/graphql';
import { User } from '../models/user.model';

@Resolver()
export class GraphqlResolver {
  @Query(() => User)
  sayHello(): User {
    return {
      id: 1,
      firstName: 'Ciccio',
      lastName: 'Pasticcio',
    };
  }
}
