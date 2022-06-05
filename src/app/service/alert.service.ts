import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  articleEmitter=new EventEmitter<any>();
  refreshListEmitter =new EventEmitter<any>();
  constructor() { }
}
