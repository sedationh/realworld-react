import { CSSProperties, PropsWithChildren } from "react";

type FlexProps = PropsWithChildren<{
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
  style?: CSSProperties;
}>;

function Flex(props: FlexProps) {
  const {
    alignItems = "center",
    justifyContent = "center",
    children,
    style = {},
  } = props;
  return (
    <div
      style={{
        display: "flex",
        alignItems: alignItems,
        justifyContent: justifyContent,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default Flex;
