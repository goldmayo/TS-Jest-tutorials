export interface UserClientInterface {
  login: (id: string, password: string) => Promise<any>;
}

export class UserClient implements UserClientInterface {
  login = async (id: string, password: string) => {
    return fetch("https://expample.com/login/id+password") //
      .then((response) => response.json());
  };
}
