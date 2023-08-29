import Flex from "../../components/Flex";
import MainBox from "../../components/MainBox";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, message } from "antd";
import { register } from "../../service";

function Register() {
  const nav = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (values: any) => {
    register({
      username: values.username,
      email: values.email,
      password: values.password,
    })
      .then(() => {
        messageApi.open({
          type: "success",
          content: "注册成功",
        });
        nav("/");
      })
      .catch((err) => {
        const msg = Object.keys(err.response.data.errors);
        msg.map((item) => {
          messageApi.open({
            type: "error",
            content: item + "已被注册",
          });
        });
      });
  };

  type FieldType = {
    email?: string;
    password?: string;
    username?: string;
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
          <Form onFinish={onFinish}>
            <Form.Item<FieldType>
              name="username"
              rules={[
                {
                  required: true,
                  message: "昵称不能为空！",
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
                Sign up
              </Button>
            </Form.Item>
          </Form>
        </MainBox>
      </MainBox>
    </>
  );
}

export default Register;
