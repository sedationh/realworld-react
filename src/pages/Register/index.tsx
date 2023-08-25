import Flex from "../../components/Flex";
import MainBox from "../../components/MainBox";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { register } from "../../service";

function Register() {
  const nav = useNavigate();
  const onFinish = (values: any) => {
    register({
      username: values.username,
      email: values.email,
      password: values.password,
    }).then((res) => {
      if (!res) return;
      alert("注册成功");
      nav("/home");
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    alert("注册失败  " + errorInfo);
  };

  type FieldType = {
    email?: string;
    password?: string;
    username?: string;
  };

  return (
    <MainBox width="540px">
      <Flex
        style={{
          fontSize: "40px",
          color: "#373a3c",
          flexDirection: "column",
        }}
      >
        <div> Sign up</div>
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
      <MainBox
        width="540px"
        style={{
          marginTop: "20px",
        }}
      >
        <Form
          name="loginForm"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ width: "100%" }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
                whitespace: true,
              },
            ]}
          >
            <Input
              placeholder="Username"
              style={{
                width: "540px",
                padding: "12px 24px",
              }}
            />
          </Form.Item>
          <Form.Item<FieldType>
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input
              placeholder="Email"
              style={{
                width: "540px",
                padding: "12px 24px",
              }}
            />
          </Form.Item>
          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              placeholder="Password"
              style={{
                width: "540px",
                padding: "12px 24px",
              }}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 8, offset: 20 }}>
            <Button type="primary" htmlType="submit">
              Sign up
            </Button>
          </Form.Item>
        </Form>
      </MainBox>
    </MainBox>
  );
}

export default Register;
