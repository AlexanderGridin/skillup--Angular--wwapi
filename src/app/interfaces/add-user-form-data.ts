import { Address } from './address';
import { Company } from './company';

export interface AddUserFormData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
