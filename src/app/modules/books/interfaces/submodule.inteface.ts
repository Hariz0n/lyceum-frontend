import { IParagraph } from './paragraph.interface';

export interface ISubmodule {
  id: number;
  name: string;
  paragraphs: IParagraph[];
}
