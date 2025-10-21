import { useState, useEffect } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  console.log("-- APP --");
  // numの初期値を()で指定し、更新関数を,の後で指定
  // 一番上の構造からしか、userXXXのようなフックは呼び出せない
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(false);
  const onClickCountUp = () => {
    // numの更新関数を設定する
    // バッチ化されており、まとめて処理するようになっている
    setNum((prev) => prev + 1);
  };
  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        isShowFace || setIsShowFace(true);
      } else {
        isShowFace && setIsShowFace(false);
      }
    }
  }, [num]);

  const contentStyle = {
    color: "blue",
    fontSize: "45px",
  };
  return (
    <>
      <h1 style={contentStyle}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green">元気です!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>( ;∀;)</p>}
    </>
  );
};
