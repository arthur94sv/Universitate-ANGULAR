import {GetPromotionStudent} from './GetPromotionStudent';

export class Student {
  id: number;
  nume: string;
  prenume: string;
  email: string;
  listOfPromotions: GetPromotionStudent[];
}
