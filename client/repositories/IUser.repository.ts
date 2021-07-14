interface IUserRepository {
    getUsers(): Promise<IUser[]>;
}