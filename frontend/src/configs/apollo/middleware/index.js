import { onError } from "apollo-link-error";

const errorMiddleware = onError(({ graphQLErrors, networkError, response }) => {
  if (graphQLErrors) {
    if (response) {
      // @ts-ignore
      response.errors = graphQLErrors[0];
    }

    // @ts-ignore
    if (graphQLErrors[0].extensions.code === "UNAUTHENTICATED") {
      sessionStorage.clear();
      localStorage.clear();
      window.location.href = "/login";
    }
  }
  if (networkError) {
    console.error(`[Network Error]: ${networkError}`);
  }
});

export { errorMiddleware };
