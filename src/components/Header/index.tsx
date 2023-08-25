import { Link, useLocation } from "react-router-dom";
import { Space } from "antd";
import Flex from "../Flex";
import MainBox from "../MainBox";
import { useEffect, useState } from "react";

function Header() {
  const location = useLocation();
  const [current, setCurrent] = useState("home");
  useEffect(() => {
    const current = location.pathname.split("/")[1] || "home";
    setCurrent(current);
  });
  return (
    <MainBox>
      <Flex
        justifyContent="space-between"
        style={{
          padding: "8px 16px",
        }}
      >
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#5CB85C",
          }}
        >
          conduit
        </div>
        <Space>
          <span>
            <Link
              to="/"
              style={{
                color: current === "home" ? "rgba(0, 0, 0, 0.8)" : "",
              }}
            >
              {" "}
              Home
            </Link>
          </span>
          <span>
            <Link
              to="/create"
              style={{
                color: current === "create" ? "rgba(0, 0, 0, 0.8)" : "",
              }}
            >
              {" "}
              Create
            </Link>
          </span>
          <span>
            <Link
              to="/setting"
              style={{
                color: current === "setting" ? "rgba(0, 0, 0, 0.8)" : "",
              }}
            >
              {" "}
              Setting
            </Link>
          </span>
          <span>
            <Link
              to="/user/hh"
              style={{
                color: current === "user" ? "rgba(0, 0, 0, 0.8)" : "",
              }}
            >
              {" "}
              User
            </Link>
          </span>
          <span>
            <Link
              to="/login"
              style={{
                color: current === "login" ? "rgba(0, 0, 0, 0.8)" : "",
              }}
            >
              {" "}
              Login
            </Link>
          </span>
          <span>
            <Link
              to="/register"
              style={{
                color: current === "register" ? "rgba(0, 0, 0, 0.8)" : "",
              }}
            >
              {" "}
              Register
            </Link>
          </span>
        </Space>
      </Flex>
    </MainBox>
  );
}

export default Header;
