import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {ServerResponse, ServerResponseActivity, ServerStatus} from "../models/server.model";
import {ActivityData, TitledText} from "../models/app.model";
import {ServerAction} from "../models/server.model";

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  activity = new BehaviorSubject<ActivityData[]>([]);
/*  alert = new Subject<TitledText>();*/

  constructor() {
  }

  public serverResponse(res: Observable<ServerResponse>, action: ServerAction): void {
    res.subscribe(
      result => {
        if (result) {
          /*if (result.status === ServerStatus.success) {*/
          switch (action) {
            case ServerAction.activity:
              /*const responseActivity = result as ServerResponseActivity;*/
              // @ts-ignore
              this.activity.next((result) ? result : []);
              break;
          }
          /*} else if (result.status === ServerStatus.error) {
            this.alert.next({
              title: 'Внимание!',
              text: (result.message) ? result.message : 'Неизвестная ошибка'
            });
          } else {
            this.alert.next({title: 'Внимание', text: 'Неверный статус ответа'});
          }
        }
      },
      error => {
        const errorText = (error.statusText)
          ? error.statusText
          : (error.message)
            ? error.message
            : (error.detail)
              ? error.detail
              : (error.details)
                ? error.details
                : error.toString();
        console.error(error);
        this.alert.next({title: 'Внимание', text: errorText});
      });*/
        }
      })
  }
}

