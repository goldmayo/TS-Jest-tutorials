import { UserClientInterface } from "./user_client";

export class UserService {
  public userClient: UserClientInterface;
  public isLoggedin: boolean;

  constructor(userClient: UserClientInterface) {
    this.userClient = userClient;
    this.isLoggedin = false;
  }

  login = async (id: string, password: string) => {
    if (!this.isLoggedin) {
      // UserService에서 login을 하지 않고 userClient에서 수행하는 이유는 네트워크 결과에 의존성을 가지게 되어
      // 단위 테스트가 어렵기 때문에 네트워크를 사용하는 곳은 유닛 테스트를 위해 분리한다.
      // 특정 상황에서 함수의 호출 여부를 테스트해야 한다면 mock test를 한다.
      const response = await this.userClient.login(id, password);
      console.log(response);
      this.isLoggedin = true;
    }
  };
}
