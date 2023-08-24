import { CSSProperties, PropsWithChildren } from "react"

type FlexProps = PropsWithChildren<{
  alignItems?: CSSProperties["alignItems"]
  style?: CSSProperties
}>

function Flex(props: FlexProps) {
  const { alignItems = "center", children, style = {} } = props
  return (
    <div
      style={{
        display: "flex",
        alignItems: alignItems,
        justifyContent: "",
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default Flex
