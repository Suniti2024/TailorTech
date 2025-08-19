export interface Tailor {
  _id?: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  services: string[];
  experience: string;
  photos: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
