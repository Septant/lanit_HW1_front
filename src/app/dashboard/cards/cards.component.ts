import {Component, OnDestroy, OnInit} from '@angular/core';
import {Cards, ActivityData} from "../../models/app.model";
import {AppManager} from "../../managers/app.manager";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, OnDestroy {
  cards: Cards[] = [
    {type: 'work', background_picture_path: '/assets/images/icon-work.svg', background_color: 'hsl(15, 100%, 70%)'},
    {type: 'play', background_picture_path: '/assets/images/icon-play.svg', background_color: 'hsl(195, 74%, 62%)'},
    {type: 'study', background_picture_path: '/assets/images/icon-study.svg', background_color: 'hsl(348, 100%, 68%)'},
    {type: 'exercise', background_picture_path: '/assets/images/icon-exercise.svg', background_color: 'hsl(145, 58%, 55%)'},
    {type: 'social', background_picture_path: '/assets/images/icon-social.svg', background_color: 'hsl(264, 64%, 52%)'},
    {type: 'self-Care', background_picture_path: '/assets/images/icon-self-care.svg', background_color: 'hsl(43, 84%, 65%)'}
  ]

  dataSet: ActivityData[] = [];
  subscription: Subscription;
  activityMode: number = 0;

  constructor(private appManager: AppManager) {
    this.subscription = appManager.activity().subscribe(result => {
      if (result) {
        this.dataSet = result;
        console.log('result:', this.dataSet);
      }
    });
    this.subscription.add(appManager.activityMode$.subscribe(result => {

        this.activityMode = result;
      console.log('mode:', this.activityMode);
      }
    ));
  }

  ngOnInit(): void {
    this.appManager.getActivity();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
