import { Address } from "./address";
import { Company } from "./company";

export type Contact = {
  id: number;
  name: string;
  email: string;
  phone: string;
  username: string;
  website: string;
  address: Address;
  company: Company;
};
