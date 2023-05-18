import { ISubmodule } from './submodule.inteface';

export interface IModule {
  id: number;
  name: string;
  subModules: ISubmodule[];
}
