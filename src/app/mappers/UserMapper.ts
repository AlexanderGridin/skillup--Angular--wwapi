import { User } from '../interfaces/user/user';
import { UserOfUsersTable } from '../interfaces/user/user-of-users-table';
import { AddUserFormData } from '../interfaces/form-data/add-user-form-data';
import { UserOfUserInfo } from '../interfaces/user/user-of-user-info';

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

  public prepareForRenderInUserInfo(user: User): UserOfUserInfo {
    return {
      fullName: `${user.firstName} ${user.lastName}`,
      email: user.email,
      address: `${user.address.zipcode}, ${user.address.city}, ${user.address.street}, ${user.address.building}`,
      phone: user.phone,
      website: user.website,
      companyInfo: `${user.company.name}, ${user.company.scope}`,
    };
  }

  public prepareFofAdding(userFormData: AddUserFormData): AddUserFormData {
    return {
      ...userFormData,
      phone: `+38${userFormData.phone}`,
    };
  }
}
