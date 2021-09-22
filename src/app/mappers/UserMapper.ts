import { User } from '../interfaces/user/user';
import { UserOfUsersTable } from '../interfaces/user/user-of-users-table';
import { AddUserFormData } from '../interfaces/add-user-form-data';

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

  public createUserFromAddUserFormDataWithId(
    addUserFormData: AddUserFormData,
    userId: number
  ): User {
    return {
      id: userId,
      firstName: addUserFormData.firstName,
      lastName: addUserFormData.lastName,
      username: addUserFormData.username,
      email: addUserFormData.email,
      address: {
        street: addUserFormData.address.street,
        building: addUserFormData.address.building,
        city: addUserFormData.address.city,
        zipcode: addUserFormData.address.zipcode,
      },
      phone: addUserFormData.phone,
      website: addUserFormData.website,
      company: {
        name: addUserFormData.company.name,
        scope: addUserFormData.company.scope,
      },
    };
  }
}
