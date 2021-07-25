import { IUser, IObservableUser } from "../interfaces/interfaces";
import { IUserRepository } from "../repositories/IUser.repository";
import { IUserService } from "./IUser.Service";

// function observableUser(user: IUser): ObservableUser {
//     const makeDate = (date: string): Date => new Date(date);
//     return {
//         id: user.id,
//         name: user.name,
//         surname: user.surname,
//         createdAt: makeDate(user.createdAt),
//         updatedAt: makeDate(user.updatedAt),
//     };
// }

class UserService implements IUserService {
    constructor(private userRepository: IUserRepository) {

    }
    private observableUser(user: IUser): IObservableUser {
        const makeDate = (date: string): Date => new Date(date);
        return {
            id: user.id,
            name: user.name,
            surname: user.surname,
            createdAt: makeDate(user.createdAt),
            updatedAt: makeDate(user.updatedAt),
        };
    }
    
    public async getUsers(): Promise<IObservableUser[]> {
        try {
            const users = await this.userRepository.getUsers();
            return users.map(user => this.observableUser(user));
        } catch (error: any) { 
            throw new Error(error);
        }
    }
}

export { UserService };