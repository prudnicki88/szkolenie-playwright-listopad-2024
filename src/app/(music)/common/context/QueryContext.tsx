"use client";
import React, { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: false,
    },
  },
});

const QueryContext = (props: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <>{props.children}</>
    </QueryClientProvider>
  );
};

export default QueryContext;
// Create a client
