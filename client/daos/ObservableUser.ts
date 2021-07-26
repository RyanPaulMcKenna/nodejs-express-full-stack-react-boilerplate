import { IObservableUser, IUser } from '../interfaces/interfaces';

export default class ObservableUser implements IObservableUser {
    public readonly id: number;
    public readonly name: string;
    public readonly surname: string;
    public readonly createdAt: Date;
    public readonly updatedAt: Date;
    constructor(obj: IUser) {
        this.id = obj.id;
        this.name = obj.name;
        this.surname = obj.surname;
        this.createdAt = new Date(obj.createdAt);
        this.updatedAt = new Date(obj.updatedAt);
    }

}