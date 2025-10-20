export const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",// 文字列で定義する
    fontSize: "45px",  // font-sizeがfontSizeというキャメルケースの記載になる
    margin: 100, // 数字での記載も可能
  };
  return (
    <>
      // インラインでスタイルを当てることも可能
      <h1 style={contentStyle}>こんにちは!</h1>
      <p>おげんきですか？</p>
      // キャメルケースでイベントを定義：onclick→onClickにする
      // {}の中は関数を指定できる
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
