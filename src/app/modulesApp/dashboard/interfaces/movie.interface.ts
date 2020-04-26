export interface MovieDataInterface {
  id?: string;
  nameMovie: string;
  date: any;
  state: string;
}

export interface ConfigPopup {
  width: number;
  data: MovieDataInterface;
}

export class DataMovie {

  id?: string;
  nameMovie: string;
  date: any;
  state: string;

  constructor() {
  }

}
