import React from "react";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import router from "./routes.tsx";

function App() {
  return (
    <React.StrictMode>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#5cb85c",
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </React.StrictMode>
  );
}

export default App;
