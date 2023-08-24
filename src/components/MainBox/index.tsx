function MainBox({ children, width = "1140px" }) {
  return (
    <div
      style={{
        width: width,
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  );
}

export default MainBox;
