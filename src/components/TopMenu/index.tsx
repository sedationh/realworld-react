import React, { useState } from "react";

import type { MenuProps } from "antd";
import { Menu } from "antd";

type TopMenuProps = {
  current?: string;
  onClick?: MenuProps["onClick"];
  items: MenuProps["items"];
  style?: React.CSSProperties;
};

const TopMenu: React.FC = (props: TopMenuProps) => {
  const [current, setCurrent] = useState(props.current);

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e, current);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[props.current]}
      mode="horizontal"
      items={props.items}
      style={props.style}
    />
  );
};

export default TopMenu;
