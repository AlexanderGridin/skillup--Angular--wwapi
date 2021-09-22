import { User } from '../interfaces/user/user';
import { UserOfUsersTable } from '../interfaces/user/user-of-users-table';

export class UserMapper {
  public prepareForRenderInUsersTable(user: User): UserOfUsersTable {
    return {
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      address: `${user.address.city}, ${user.address.street}, ${user.address.building}`,
      phone: user.phone,
    };
  }
}
