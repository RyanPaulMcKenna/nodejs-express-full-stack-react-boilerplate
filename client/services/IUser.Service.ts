interface IUserService {
    getUsers(): Promise<ObservableUser[]>;
}