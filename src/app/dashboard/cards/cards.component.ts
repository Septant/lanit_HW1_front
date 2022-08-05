import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivityData, ActivityType, Cards, ShownData} from "../../models/app.model";
import {AppManager} from "../../managers/app.manager";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, OnDestroy {
  cards: Cards[] = [
    {
      type: 'work',
      backgroundPicturePath: '/assets/images/icon-work.svg',
      backgroundColor: 'hsl(15, 100%, 70%)'
    },
    {
      type: 'play',
      backgroundPicturePath: '/assets/images/icon-play.svg',
      backgroundColor: 'hsl(195, 74%, 62%)'
    },
    {
      type: 'study',
      backgroundPicturePath: '/assets/images/icon-study.svg',
      backgroundColor: 'hsl(348, 100%, 68%)'
    },
    {
      type: 'exercise',
      backgroundPicturePath: '/assets/images/icon-exercise.svg',
      backgroundColor: 'hsl(145, 58%, 55%)'
    },
    {
      type: 'social',
      backgroundPicturePath: '/assets/images/icon-social.svg',
      backgroundColor: 'hsl(264, 64%, 52%)'
    },
    {
      type: 'self-Care',
      backgroundPicturePath: '/assets/images/icon-self-care.svg',
      backgroundColor: 'hsl(43, 84%, 65%)'
    }
  ]

  dataSet: ActivityData[] = [];
  ActivityType = ActivityType;
  activityMode: ActivityType = ActivityType.DAILY;
  subscription: Subscription;
  selectedData: ShownData[] = [{title: 'none', period: {current: 0, previous: 0}}];

  constructor(private appManager: AppManager) {
    this.subscription = appManager.activity().subscribe(result => {
      if (result) {
        this.dataSet = result;
        this.resetData();
      }
    });
    this.subscription.add(appManager.activityMode$.subscribe(result => {

        this.activityMode = result;
        this.resetData();
      }
    ));
  }

  ngOnInit(): void {
    this.appManager.getActivity();
    this.resetData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  resetData(): void {
    this.selectedData = this.dataSet.map((data: any) => {
      if (data) {
        return {title: data.title, period: data.timeframes[this.activityMode]}
      } else {
        return {title: 'none', period: {current: 0, previous: 0}}
      }
    });
  }
}

