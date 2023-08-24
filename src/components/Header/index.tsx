import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import Flex from "../Flex";
import TopMenu from "../TopMenu";

function Header() {
  const items: MenuProps["items"] = [
    {
      label: <Link to="/"> home</Link>,
      key: "mail",
      icon: <MailOutlined />,
    },
    {
      label: <Link to="/create"> create</Link>,
      key: "app",
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link to="/setting"> setting</Link>,
      key: "SubMenu",
      icon: <SettingOutlined />,
    },
    {
      label: <Link to="/user/hh"> user</Link>,
      key: "user",
    },
    {
      label: <Link to="/login"> login</Link>,
      key: "login",
    },
    {
      label: <Link to="/register"> register</Link>,
      key: "register",
    },
  ];

  return (
    <div
      style={{
        width: "1140px",
        margin: "0 auto",
        justifyContent: "space-between",
      }}
    >
      <Flex justifyContent="space-between">
        <div>Logo</div>
        <div
          style={{
            width: "800px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <TopMenu items={items} />
        </div>
      </Flex>
      {/* <TopMenu items={items} /> */}
    </div>
  );
}

export default Header;
