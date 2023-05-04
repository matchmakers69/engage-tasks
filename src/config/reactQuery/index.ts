import { QueryClient } from "@tanstack/react-query";

/**
 * @staleTime can be added as an individual setting to each API call
 * @cacheTime same as above, however we can set staletime as well as cacheTime as default settings here
 * @returns :
 */

export function generateQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: 600000,
        // cacheTime: 900000,
        useErrorBoundary: false,
        retry: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
    },
  });
}

export const queryClient = generateQueryClient();
