import { Facelift } from '../models/facelift';

export interface Version {
  id: number;
  model_id: number;
  version: string;
  trim: string;
  doors: number;
  chassis: string;
  start_date: number;
  end_date: number;
  facelifts: Facelift[];
}
