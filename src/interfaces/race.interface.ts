import { PonyInterface } from './pony.interface';
export interface RaceInterface {
    name: string;
    id: number;
    startInstant: string;
    ponies: Array<PonyInterface>;
}
