const mockAxios = {
  get: jest.fn(() => Promise.resolve({ data: {} })),
  create: () => mockAxios,
  interceptors: {
    request: { use: jest.fn(), eject: jest.fn() },
    response: { use: jest.fn(), eject: jest.fn() },
  },
  defaults: {
    adapter: {},
  },
};

export default mockAxios;
