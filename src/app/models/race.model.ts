import { PonyModel } from './pony.model';
export interface RaceModel {
  name: string;
  id: number;
  startInstant: string;
  ponies: Array<PonyModel>;
}
