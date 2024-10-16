import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Router from "./Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={QueryClient}>
      <HelmetProvider>
        <ChakraProvider theme={theme}>
          <Router />
        </ChakraProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
