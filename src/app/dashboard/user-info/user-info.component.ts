import { Component, OnInit } from '@angular/core';
import {activityType} from "../../models/app.model";
import {AppManager} from "../../managers/app.manager";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  constructor(private appManager: AppManager) { }

  ngOnInit(): void {
  }
  activityType: number = activityType.daily;
  changeActivityView(activityType: number) {
    this.activityType = activityType;
    this.appManager.changeActivityMode(this.activityType);
  }
}
