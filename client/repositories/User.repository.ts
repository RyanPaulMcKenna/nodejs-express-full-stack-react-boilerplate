class UserRepository implements IUserRepository {
    public URL_ENDPOINT: string = '/api/users';
    public async getUsers(): Promise<IUser[]> {
        try {
            const response = await fetch(this.URL_ENDPOINT, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            if (response.status >= 200 && response.status < 300) {
                const jsonResponse = response.json();
                return jsonResponse;
            } else {
                throw new Error(response.statusText);
            }
        } catch (error) {
            throw error;
        }
    }
}