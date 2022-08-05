export interface Cards {
  type: string,
  backgroundPicturePath: string,
  backgroundColor: string
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

export interface ShownData {
  title: string;
  period:{
    current: number,
    previous: number
  }
}

export interface TitledText {
  title: string;
  text: string;
}

export enum ActivityType {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly'
}
