export interface MovieDataInterface {
  id?: number;
  nameMovie: string;
  date: any;
  state: string;
}

export interface ConfigPopup {
  width: number;
  data: MovieDataInterface;
}

export class DataMovie {

  id?: number;
  nameMovie: string;
  date: any;
  state: string;

  constructor() {
  }

}
