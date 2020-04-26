import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListUserService {
  data = [
    {
      _id: '5e3d031bca40d447a2ee100a',
      index: 0,
      isActive: true,
      picture: 'https://i.picsum.photos/id/230/200/200.jpg',
      name: 'Luna Avila',
      email: 'lunaavila@inear.com',
      address: '707 Fane Court, Maplewood, Louisiana, 7153'
    },
    {
      _id: '5e3d031b140c7e818e891a5c',
      index: 1,
      isActive: false,
      picture: 'https://i.picsum.photos/id/231/200/200.jpg',
      name: 'Clara Bridges',
      email: 'clarabridges@inear.com',
      address: '523 Tabor Court, Gorst, Connecticut, 2033'
    },
    {
      _id: '5e3d031bd4f7f1d2afbd5e3c',
      index: 2,
      isActive: true,
      picture: 'https://i.picsum.photos/id/232/200/200.jpg',
      name: 'Hollie Dale',
      email: 'holliedale@inear.com',
      address: '391 Putnam Avenue, Sena, North Dakota, 1009'
    },
    {
      _id: '5e3d031b03fce49fab0a4bee',
      index: 3,
      isActive: true,
      picture: 'https://i.picsum.photos/id/233/200/200.jpg',
      name: 'Browning Cabrera',
      email: 'browningcabrera@inear.com',
      address: '535 Coyle Street, Crucible, Alabama, 1903'
    },
    {
      _id: '5e3d031b621bacb61b01f884',
      index: 4,
      isActive: true,
      picture: 'https://i.picsum.photos/id/234/200/200.jpg',
      name: 'Rodriguez Rush',
      email: 'rodriguezrush@inear.com',
      address: '504 Sandford Street, Robbins, Federated States Of Micronesia, 8064'
    },
    {
      _id: '5e3d031bbeb9dddf56c31122',
      index: 5,
      isActive: false,
      picture: 'https://i.picsum.photos/id/235/200/200.jpg',
      name: 'Deborah Holcomb',
      email: 'deborahholcomb@inear.com',
      address: '547 Huron Street, Cloverdale, South Carolina, 2003'
    },
    {
      _id: '5e3d031b9884897b4802ed77',
      index: 6,
      isActive: true,
      picture: 'https://i.picsum.photos/id/236/200/200.jpg',
      name: 'Rush Ware',
      email: 'rushware@inear.com',
      address: '884 Fleet Walk, Whipholt, Minnesota, 875'
    }
  ];
  constructor() { }

  getListUser() {
    return this.data;
  }
}
