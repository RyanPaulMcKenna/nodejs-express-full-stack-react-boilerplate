import { ObservableUser } from "../interfaces/interfaces";

interface IUserService {
    getUsers(): Promise<ObservableUser[]>;
}

export { IUserService };