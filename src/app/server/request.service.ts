import {Injectable} from '@angular/core';
import {ServerService} from "./server.service";
import {ResponseService} from "./response.service";
import {ServerAction} from "../models/server.model";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private serverService: ServerService,
              private responseService: ResponseService) {
  }

    public getActivity(): void {
      this.responseService.serverResponse(this.serverService.getServer(ServerAction.activity, ''), ServerAction.activity);
    }

}
