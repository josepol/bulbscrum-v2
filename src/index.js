import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const defaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
  mutate: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};
console.log(process.env);
if (
  process.env.NODE_ENV === "development" &&
  process.env.REACT_APP_WITH_MOCKS === "true"
) {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const client = new ApolloClient({
  uri: "https://bulbscrum.com/api/graphql",
  cache: new InMemoryCache(),
  defaultOptions,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);

reportWebVitals();
