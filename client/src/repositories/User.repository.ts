import { IUser } from "../interfaces/interfaces";
import { IUserRepository } from "./IUser.repository";

const proxy = "http://localhost:4000"

class UserRepository implements IUserRepository {
    public URL_ENDPOINT: string = '/api/users';
    public async getUsers(): Promise<IUser[]> {
        try {
            const response = await fetch(proxy + this.URL_ENDPOINT, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            if (response.status >= 200 && response.status < 300) {
                const jsonResponse = await response.json();
                let data = jsonResponse.data;
                return data;
            } else {
                throw new Error(response.statusText);
            }
        } catch (error) {
            throw error;
        }
    }
}

export { UserRepository };