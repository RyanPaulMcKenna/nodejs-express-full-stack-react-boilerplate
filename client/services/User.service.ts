function observableUser(user: IUser): ObservableUser {
    const makeDate = (date: string): Date => new Date(date);
    return {
        id: user.id,
        name: user.name,
        surname: user.surname,
        createdAt: makeDate(user.createdAt),
        updatedAt: makeDate(user.updatedAt),
    };
}

class UserService implements IUserService {
    constructor(private userRepository: IUserRepository) {

    }
    public async getUsers(): Promise<ObservableUser[]> {
        try {
            const users = await this.userRepository.getUsers();
            return users.map(user => observableUser(user));
        } catch (error) { 
            throw new Error(error);
        }
    }
}