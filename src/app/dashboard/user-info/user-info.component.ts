import {Component, OnInit} from '@angular/core';
import {ActivityType} from "../../models/app.model";
import {AppManager} from "../../managers/app.manager";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  ActivityType = ActivityType;
  activityType: ActivityType = ActivityType.DAILY;

  constructor(private appManager: AppManager) {
  }

  ngOnInit(): void {
  }


  changeActivityView(activityType: ActivityType) {
    this.activityType = activityType;
    this.appManager.changeActivityMode(this.activityType);
  }
}
