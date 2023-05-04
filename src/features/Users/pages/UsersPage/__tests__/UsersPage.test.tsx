import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { useUsersFetchQuery } from "../../../hooks/useUsersFetchQuery";
import mockedUserData from "utils/mocks/usersMock.json";
import UsersPage from "..";

const mockedUseUsersFetchQuery = useUsersFetchQuery as any;
jest.mock("../../../hooks/useUsersFetchQuery");

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const renderWithReactQueryProvider = (component: JSX.Element) => {
  const Wrapper: React.FC<PropsWithChildren> = ({ children }) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
  };
  return render(component, { wrapper: Wrapper });
};

describe("<UsersPage />", () => {
  it("should display Loader component when data is loading", () => {
    mockedUseUsersFetchQuery.mockImplementation(() => ({
      isLoading: true,
    }));
    renderWithReactQueryProvider(<UsersPage />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
    expect(screen.getByText(/Loading.../i)).toBeVisible();
  });

  it("should display error message if error", () => {
    mockedUseUsersFetchQuery.mockImplementation(() => ({
      isLoading: false,
      isError: true,
    }));
    renderWithReactQueryProvider(<UsersPage />);
    expect(screen.getByTestId("error")).toBeInTheDocument();
    expect(screen.getByText(/Sorry error occured!/i)).toBeVisible();
  });

  it("should render list of users", () => {
    mockedUseUsersFetchQuery.mockImplementation(() => ({
      isLoading: false,
      status: "success",
      data: mockedUserData.data,
    }));
    renderWithReactQueryProvider(<UsersPage />);
    expect(screen.getByTestId("users-list-wrapper")).toBeInTheDocument();
    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Smith")).toBeInTheDocument();
  });
});
