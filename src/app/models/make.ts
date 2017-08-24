import { Model } from '../models/model';

export interface Make {
  id: number;
  name: string;
  models: Model[]
}