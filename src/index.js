import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/page.js";
import reportWebVitals from "./reportWebVitals";
import { router } from "./routes/routes.js";
import GlobalStyles from "./components/GlobalStyles/index.js";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevTools } from "@tanstack/react-query-devtools";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient()
root.render(
  <React.StrictMode>
    <GlobalStyles>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </GlobalStyles>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
