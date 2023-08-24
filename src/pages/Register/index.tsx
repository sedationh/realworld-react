import React from "react";
import Flex from "../../components/Flex";
import MainBox from "../../components/MainBox";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";

function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
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
        <p> Sign Up</p>
        <p
          style={{
            fontSize: "16px",
            color: "#5cb85c",
            marginTop: "10px",
            cursor: "pointer",
          }}
          onClick={() => {
            nav("/login");
          }}
        >
          Have an account?
        </p>
      </Flex>
      <div
        style={{
          marginTop: "20px",
        }}
      >
        <Input
          placeholder="Username"
          value={username}
          size="large"
          allowClear
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
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
          Sign Up
        </Button>
      </Flex>
    </MainBox>
  );
}

export default Register;
