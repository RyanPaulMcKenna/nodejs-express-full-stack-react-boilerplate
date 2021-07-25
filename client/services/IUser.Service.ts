import { IObservableUser } from "../interfaces/interfaces";

interface IUserService {
    getUsers(): Promise<IObservableUser[]>;
}

export type { IUserService };