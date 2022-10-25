export interface IUser {
  _id: string | null;
  gameId: string | null;
  userId: string | null;
  clientId: string | null;
  name: string | null;
  side: string | null;
  role: string | null;
  mode: number | null;
  isReady: boolean | null;
  createdAt: string | null;
}

export interface UserData {
  userData: IUser | string;
}
export type UserList = {
  userList: {
    blue: IUser[] | string[];
    red: IUser[] | string[];
  };
};
