interface IObservableUser {
    id: number;
    name: string;
    surname: string;
    createdAt: Date;
    updatedAt: Date;
}

interface IUser {
    id: number;
    name: string;
    surname: string;
    createdAt: string;
    updatedAt: string;
}

export type { IObservableUser, IUser };