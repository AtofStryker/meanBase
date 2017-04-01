import { Serializable } from '../common/serializable-model';

export class User extends Serializable{
  firstName = '';
  lastName = '';
  address = '';
  company = '';
}