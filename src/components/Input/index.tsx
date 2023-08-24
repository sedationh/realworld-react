import React from "react";
import { Input } from "antd";

type InputProps = {
  type?: string;
  value?: string;
  placeholder: string;
  size: "large" | "middle" | "small";
  allowClear: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
function InputBox(props: InputProps) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "12px 24px",
        borderRadius: "8px",
        marginBottom: "12px",
      }}
    >
      <Input
        value={props.value}
        placeholder={props.placeholder}
        size={props.size}
        allowClear={props.allowClear}
        onChange={props.onChange}
        bordered={false}
      />
    </div>
  );
}

export default InputBox;
