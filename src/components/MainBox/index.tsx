import { ComponentProps } from "react";

type MainBoxProps = {
  children: React.ReactNode;
  width?: string;
} & ComponentProps<"div">;

function MainBox(props: MainBoxProps) {
  return (
    <div
      style={{
        width: props.width || "1140px",
        margin: "0 auto",
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
}

export default MainBox;
