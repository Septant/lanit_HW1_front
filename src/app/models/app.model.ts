export interface Cards {
  type: string,
  background_picture_path: string,
  background_color: string
}

export interface ActivityData {
  title: string;
  timeframes: {
    daily: {
      current: number,
      previous: number
    }
    weekly: {
      current: number,
      previous: number
    }
    monthly: {
      current: number,
      previous: number
    }
  }
}

export interface TitledText {
  title: string;
  text: string;
}

export enum activityType {
  'daily' = 0,
  'weekly' = 1,
  'monthly' = 2
}
