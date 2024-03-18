import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersistedStateService {
  private stateSubject = new BehaviorSubject<any>(null);

  constructor() {
    // Възстановяване на състоянието от local storage при инициализация
    const persistedState = localStorage.getItem('persistedState');
    if (persistedState) {
      this.stateSubject.next(JSON.parse(persistedState));
    }
  }

  getState(): Observable<any> {
    return this.stateSubject.asObservable();
  }

  setState(newState: any): void {
    // Запазване на състоянието в local storage
    localStorage.setItem('persistedState', JSON.stringify(newState));
    // Обновяване на текущото състояние в BehaviorSubject
    this.stateSubject.next(newState);
  }
}
