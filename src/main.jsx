import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import { ThemeProvider } from "./Provider/ThemeContext";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
      {/* <ToastContainer /> */}
    </ThemeProvider>
  </StrictMode>
);
