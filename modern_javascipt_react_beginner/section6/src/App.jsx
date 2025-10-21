import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  // numの初期値を()で指定し、更新関数を,の後で指定
  const [num, setNum] = useState(0);
  const onClickCountUp = () => {
    // numの更新関数を設定する
    setNum(num + 1);
  };
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
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};
