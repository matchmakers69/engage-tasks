import { getUsers } from "api/UsersApiClient";
import mockAxios from "axios";
import { AxiosPromise } from "axios";
import mockedUserData from "utils/mocks/usersMock.json";

const mockedAxios = mockAxios as jest.Mocked<typeof mockAxios>;

describe("getUsers", () => {
  it("should call fetching users", async () => {
    mockedAxios.get.mockImplementationOnce(
      () =>
        Promise.resolve({
          data: mockedUserData,
        }) as unknown as AxiosPromise<void>,
    );
    const users = await getUsers();
    expect(users).toEqual(mockedUserData.data);
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });
});
