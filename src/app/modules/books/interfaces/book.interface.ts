import { IModule } from './module.interface';

export interface IBook {
  id: number;
  name: string;
  year: string;
  modules?: IModule[];
}
