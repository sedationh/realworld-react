import React from "react";
import Flex from "../../components/Flex";
import MainBox from "../../components/MainBox";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const nav = useNavigate();
  function clickSignIn() {
    console.log({ email, password });
  }

  return (
    <MainBox width="540px">
      <Flex
        style={{
          fontSize: "40px",
          color: "#373a3c",
          flexDirection: "column",
        }}
      >
        <p> Sign in</p>
        <p
          style={{
            fontSize: "16px",
            color: "#5cb85c",
            marginTop: "10px",
            cursor: "pointer",
          }}
          onClick={() => {
            nav("/register");
          }}
        >
          Need an account?
        </p>
      </Flex>
      <div
        style={{
          marginTop: "20px",
        }}
      >
        <Input
          placeholder="Email"
          value={email}
          size="large"
          allowClear
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          placeholder="Password"
          value={password}
          type="password"
          size="large"
          allowClear
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <Flex justifyContent="flex-end">
        <Button type="primary" onClick={clickSignIn} size="large">
          Sign In
        </Button>
      </Flex>
    </MainBox>
  );
}

export default Login;
