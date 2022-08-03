import {Injectable} from '@angular/core';
import {ResponseService} from "../server/response.service";
import {RequestService} from "../server/request.service";
import {BehaviorSubject, Subject} from "rxjs";
import {ActivityData} from "../models/app.model";

@Injectable({
  providedIn: 'root'
})
export class AppManager {

  constructor(private responseService: ResponseService,
              private requestService: RequestService) {
  }

    public activity(): BehaviorSubject<ActivityData[]> {
      return this.responseService.activity;
    }

    public getActivity(): void {
      this.requestService.getActivity();
    }

  public activityMode$ = new Subject<number>();

  public changeActivityMode(mode: number) {
    this.activityMode$.next(mode);
  }

}
