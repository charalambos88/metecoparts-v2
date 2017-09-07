import { Version } from '../models/version';

export interface Model {
  id: number;
  make_id: number;
  name: string;
  versions: Version[];
}