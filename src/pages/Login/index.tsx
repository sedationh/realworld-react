import Flex from "../../components/Flex";
import MainBox from "../../components/MainBox";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { login } from "../../service";

function Login() {
  const nav = useNavigate();
  const onFinish = (values: any) => {
    login({
      email: values.email,
      password: values.password,
    }).then((res) => {
      if (!res) return;
      alert("登录成功");
      nav("/home");
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    alert("登录失败 请检查邮箱和密码" + errorInfo);
  };

  type FieldType = {
    email?: string;
    password?: string;
    remember?: string;
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
        <div> Sign in</div>
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
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </MainBox>
    </MainBox>
  );
}

export default Login;
