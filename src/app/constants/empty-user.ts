import { User } from '../interfaces/user/user';

export const EMPTY_USER: User = {
  id: -1,
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  address: {
    city: '',
    zipcode: '',
    building: '',
    street: '',
  },
  phone: '',
  website: '',
  company: {
    name: '',
    scope: '',
  },
};
