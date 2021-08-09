3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  private data = [];
 
  constructor() { }
 
  setData(id, data) {
    this.data[id] = data;
  }
 
  getData(id) {
    return this.data[id];
  }
}