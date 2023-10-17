import { IItem } from './IItems';

export interface IPayer {
  name: string;
  items?: IItem[];
}
