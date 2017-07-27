import { InMemoryDbService } from 'angular-in-memory-web-api';
export class ApiService implements InMemoryDbService {
  createDb() {
    const attendees = [
      { id: 0,  firstName: 'Ana', lastName: 'Lopez', photo: 'mujer-silueta.jpg',
      lastUpdateDate: '2017-07-24', hw1: 4, hw2: 3, hw3: 4, hw4: 4, hw5: 5 },
      { id: 1,  firstName: 'Aliz', lastName: 'Rey', photo: 'mujer-silueta.jpg',
      lastUpdateDate: '2017-07-24', hw1: 1, hw2: 0, hw3: 1, hw4: 1, hw5: 2 },
      { id: 2,  firstName: 'Juan', lastName: 'Perez', photo: 'hombre-silueta.jpg',
      lastUpdateDate: '2017-07-24', hw1: 2, hw2: 1, hw3: 1, hw4: 4, hw5: 1 },
      { id: 3,  firstName: 'Luis', lastName: 'Torres', photo: 'hombre-silueta.jpg',
      lastUpdateDate: '2017-07-24', hw1: 4, hw2: 0, hw3: 0, hw4: 0, hw5: 2 },
    ];
    const homeworks =  [
     { id: 1, name: 'Trabajo dia 1'},
     { id: 2, name: 'Trabajo dia 2'},
     { id: 3, name: 'Trabajo dia 3'},
     { id: 4, name: 'Trabajo dia 4'},
     { id: 5, name: 'Trabajo dia 5'}
   ];
    return {attendees, homeworks};
  }
}
