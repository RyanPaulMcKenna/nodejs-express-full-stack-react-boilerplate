import { IUser } from "../interfaces/interfaces";

interface IUserRepository {
    getUsers(): Promise<IUser[]>;
}

export { IUserRepository };