import * as React from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import Explorer from "./routes/Explorer";
import Checker from "./routes/Checker";
import Home from "./routes/Home";
import theme from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <BrowserRouter basename="/have-i-been-botted/">
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="explorer">
            <Route index element={<Checker />} />
            <Route path=":chain" element={<Explorer />} />
          </Route>

          {/* <Route path="about" element={<About />} /> */}

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
