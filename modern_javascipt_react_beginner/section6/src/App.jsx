import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "45px",
  };
  const contentStyleB = {
    color: "green",
    fontSize: "45px",
  };
  return (
    <>
      <h1 style={contentStyle}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green">元気です!</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
