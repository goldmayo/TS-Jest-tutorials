import { UserService } from "../user_service";
import { UserClient } from "../user_client";

jest.mock("../user_client");

describe("UserService", () => {
  const userClientMock = UserClient as jest.MockedClass<typeof UserClient>;
  const login = jest.fn(async () => "success");
  userClientMock.prototype.login = jest.fn().mockImplementation(() => {
    return login();
  });
  let userService: UserService;
  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  it("calls login() on UserClient when tries to login", async () => {
    await userService.login("abc", "abc");
    expect(login.mock.calls.length).toBe(1);
  });
  it("should not call login() on UserClient again if already logged in", async () => {
    await userService.login("abc", "abc");
    await userService.login("abc", "abc");
    expect(login.mock.calls.length).toBe(1);
  });
});
