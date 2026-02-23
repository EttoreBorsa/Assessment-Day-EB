export interface CustomerListQueryCustomerCategory {
  code: string;
  description: string;
}

export interface CustomerListQuery {
  id: number;
  name: string;
  address: string;
  email: string;
  phone: string;
  iban: string;
  customerCategory?: CustomerListQueryCustomerCategory;
}