import Flex from "../../components/Flex";
import MainBox from "../../components/MainBox";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, message } from "antd";
import { login } from "../../service";

function Login() {
  const nav = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (values: any) => {
    login({
      email: values.email,
      password: values.password,
    })
      .then(() => {
        messageApi.open({
          type: "success",
          content: " 登陆成功",
        });
        nav("/");
      })
      .catch(() => {
        messageApi.open({
          type: "error",
          content: "邮箱或密码填写错误",
        });
      });
  };

  type FieldType = {
    email?: string;
    password?: string;
    remember?: string;
  };

  return (
    <>
      {contextHolder}
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
          <Form onFinish={onFinish}>
            <Form.Item<FieldType>
              name="email"
              rules={[
                {
                  type: "email",
                  message: "E-mail 格式不正确！",
                },
                {
                  required: true,
                  message: "E-mail 不能为空！",
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
              rules={[{ required: true, message: "密码不能为空！" }]}
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
    </>
  );
}

export default Login;
