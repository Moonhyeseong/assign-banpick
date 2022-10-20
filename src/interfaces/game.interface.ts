import { IUser } from './user.interface';

export type UserList = {
  blue: IUser[];
  red: IUser[];
};

export type BanPickList = {
  ban: {
    blue: string[];
    red: string[];
  };
  pick: {
    blue: string[];
    red: string[];
  };
};

export type Turn = {
  phase: string;
  side: string;
  role: string;
};

export interface IGame {
  _id: string;
  title: string;
  blueTeamName: string;
  redTeamName: string;
  mode: number;
  password: string;
  timer: boolean;
  userList: UserList;
  banpickList: BanPickList;
  banpickTurnData: Turn[];
  banpickCount: number;
  isProceeding: boolean;
  createdAt: string;
}
