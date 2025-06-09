"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PropsWithChildren, useState } from "react";
import { ModalContainer } from "../components/modals/ModalContainer";
import { AppProvider } from "./AppProvider";

export function RootProviders({ children }: PropsWithChildren) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: true,
        },
      },
    })
  );

  return (
    <QueryClientProvider client={client}>
      <AppProvider>{children}</AppProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      <ModalContainer />
    </QueryClientProvider>
  );
}
