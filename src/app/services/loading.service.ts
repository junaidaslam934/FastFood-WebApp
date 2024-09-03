import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  constructor() { }
  
  // getCurrentLocation(): Observable<LatLngLiteral>{
  //   return new Observable((observer) => {
  //     if(!navigator.geolocation) return;

  //     return navigator.geolocation.getCurrentPosition(
  //       (pos) => {
  //         observer.next({
  //           lat: pos.coords.latitude,
  //           lng: pos.coords.longitude
  //         })
  //       },
  //       (error) => {
  //         observer.error(error);
  //       }
  //     )
  //   })
  // }

  showLoading(){
    this.isLoadingSubject.next(true);
  }

  hideLoading(){
    this.isLoadingSubject.next(false);
  }

  get isLoading(){
    return this.isLoadingSubject.asObservable();
  }
}
