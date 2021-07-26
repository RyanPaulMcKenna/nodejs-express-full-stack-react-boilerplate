import { IUser, IObservableUser } from "../interfaces/interfaces";
import { IUserRepository } from "../repositories/IUser.repository";
import { IUserService } from "./IUser.Service";
import ObservableUser from '../daos/ObservableUser';

class UserService implements IUserService {
    constructor(private userRepository: IUserRepository) {

    }
    /*
     // The servcice can have private utility functions for working with the repository data
     // Using a data access layer instead of these extra functions in the service is better from a SOLID perspective
     // But I suspect the class based solution of a DAO is slower than the the functional approach below. 
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
    */
    public async getUsers(): Promise<IObservableUser[]> {
        try {
            // All promise to happen asychronously at the time of assignment.
            let promise: Promise<IUser[]> = this.userRepository.getUsers();
            // But then await it aftwards to ensure the value is present when you need it.
            const users = await promise;
            // Allows you to leverage some of the extra throughput of the asychronous 
            // behavior whilst still being able to rely on the value being present when you need it.
            const observables = users.map((user) => new ObservableUser(user));
            return observables;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}

export { UserService };