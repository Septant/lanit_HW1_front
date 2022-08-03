import {ActivityData} from "./app.model";

export enum ServerAction {
  activity = 'activity'
}

export enum ServerStatus {
  success = 'success',
  error = 'error'
}

export type ServerResponse =
  ServerResponseActivity;

/*export interface BaseServerResponse {
  status: ServerStatus,
  message?: string
}*/

export interface ServerResponseActivity/* extends BaseServerResponse*/ {
  data: ActivityData[]
}
