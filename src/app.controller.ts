import {Controller, Get, Res} from '@nestjs/common';
import {ActivityData, AppService} from './app.service';


@Controller('activity')
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    getActivityData(): ActivityData[] {
        return this.appService.getActivityData();

    }
}
