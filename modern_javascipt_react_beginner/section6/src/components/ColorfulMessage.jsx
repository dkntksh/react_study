export const ColorfulMessage = ({ color, children }) => {
  const contentStyleA = {
    color,
    fontSize: "45px",
  };

  return <p style={contentStyleA}>{children}</p>;
};
