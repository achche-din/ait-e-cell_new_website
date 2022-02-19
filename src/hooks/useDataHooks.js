import { useQuery } from "react-query";
import { BACKEND_DATA_QUERY } from "../graphql-query";

export const useDataHooks = () => {
  // var endpoint = "http://127.0.0.1:8000/";
  var endpoint = process.env.REACT_APP_DJANGO_API_ENDPOINT;
  if (process.env.NODE_ENV === "production") {
    var endpoint = process.env.REACT_APP_DJANGO_API_ENDPOINT;
  }

  return useQuery("launches", () => {
    return fetch(`${endpoint + "graphql/"}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: BACKEND_DATA_QUERY }),
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Error fetching data");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        return data.data;
      });
  });
};
