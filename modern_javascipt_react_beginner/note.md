# 環境
## 使用するサービス(web editor)
 * [CodeSandbox](https://codesandbox.io/)
   * テンプレートが用意されていて、ブラウザ上でプロジェクトを作成することができる。
 * [StackBlitz](https://stackblitz.com/)
   * テンプレートが用意されていて、ブラウザ上でプロジェクトを作成することができる。

 * いずれもUIが変わることがある

# DOMと仮想DOM
* DOMとは
  * Document Object Modelの略で、HTMLなどを解釈し木構造で表現したもの　
* 従来のDOM操作
  * これまではDOMを直接操作していた
  * 素のJavascriptやjQuery
* 仮想DOM
  * javascriptのオブジェクトで仮想的に作られたDOM
  * DOMをいきなり操作せず、JS上で操作して、差分を出してからDOMに反映
  * 開発者が意識しなくてよい裏側の仕組み

# パッケージマネージャー
* NPM
  * パッケージのレジストリ
* package.json
  * 設計書的な役割
* package-loc.json または yarn.lock
  * 自動で生成される。依存関係バージョンの解決
* node_modules
  * 各モジュールの実態
  * jsファイル等、サイズが膨大で、Guthubには上げない

# EC(ECMScript)
 * えくますくりぷと
 * Javascrtiptの標準規格
 * 欧州電子計算機工業会(ECMA: European Computer Manufactures Association)
 * 毎年1回発表
 * EC6=EC2015となり、ややこしいので西暦が一般的
 * 

# モジュールバンドラー・トランスパイラー
 * モジュールバンドラー
   * 複数のjs/css/imageを1つにまとめるためのもの
   * webpac/Vite
     * 他にもgulp、esbuild、rollup、Parcelがある
   * Parcel
     * 環境構築の手軽さ、設定ファイルの記述が不要なのが特徴
     * 簡単なマークアップを行う場合はParcelと相性がいい
   * 開発効率のために（ディレクトリ/ファイルを）分けるが、本番環境は分かれている必要はないし、パフォーマンスも落ちるので、まとめる
   * 依存関係もいい感じに判定してまとめてくれる
 * トランスパイラー
   * Javascriptの新しい記法を古い記法に変更してくれる
   * Babel/SWC(Next.jsで内部的に使われている)
   * 新しい記法に対応していないブラウザに対応する（ex.IE）

# SPA
 * Single Page Application
 * 画面は一つでJavascriptで表現していく


# ES2015の記法

知らない記法のみ記載していく

## テンプレート文字列
 * シングルクォートを用いて、文字の全体を定義し、変数を埋め込む
 * 変数を埋め込むのは、$(ドルマーク)と{}(波カッコ)を埋め込む
```js
const name = "dkntksh";
const age = 10040;

// テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);
// 私の名前はdkntkshです。年齢は10040歳です。

```

## アロー関数
 * functionでの定義が今までの記載方法
 * ()が引数、{}が関数の本体
 * 引数が一つの場合は、カッコをとることが可能：コード整形ツールで合わせた方がよい
 * 関数の中が単一式の場合は、{}を削除できる。{}がある場合は、returnを書かないと何も返却しないので注意

```js
// 1.引数が一つで引数の文字列を戻す
const funcA = (str) => {
  return str;
}

console.log(funcA("funcAです"));
// ⇒funcAです

// 引数が一つの場合の省略記載
const funcA = str => {
  return str;
}

// 関数の単一式を省略する
const funcA = (str) => str;


// 2.複数の引数があるもの
// 引数num1とnum2を合計して返却する
const funcB = (num1, num2) => {
  return num1 + num2;
}

console.log(funcB(10, 20));
// ⇒30

// {}を省略する記法(引数の()は省略できない)
const funcB = (num1, num2) => num1 + num2;

// 3.オブジェクトを返す
const funcB = (num1, num2) => ({
  hoge: num1,
  huga: num2,
});
// ⇒{hoge: 10, huga: 20}


```

## 分割代入
 * オブジェクトのプロパティには.でアクセスできるが、オブジェクト名.プロパティ名と書くと冗長に感じるので、const{}としてプロパティを定義して、直接アクセスする
 * オブジェクトや配列が対象

```js
// オブジェクトの分割代入

const myProfile = {
  name: "dkntksh",
  age: 10040,
};

const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
console.log(message1);
// ⇒名前はdkntkshです。年齢は10040です。

// 分割代入①
const { name, age } = myProfile;
const message2 = `名前は${name}です。年齢は${age}です。`;
console.log(message2);
// ⇒名前はdkntkshです。年齢は10040です。

// 配列の分割代入

// 通常の記法
const myProfile = ["dkntksh",10040];
const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
console.log(message3);
// ⇒名前はdkntkshです。年齢は10040です。

// 0番目はname、1番目をageとして定義してる
const [name, age] = myProfile;
const message4 = `名前は${name}です。年齢は${age}です。`;
console.log(message4);
// ⇒名前はdkntkshです。年齢は10040です。

```

## デフォルト値
 * 関数やオブジェクトの分割代入で使用できる
 * undefinedとなってしまうのを防ぐ

``` js

// 関数のデフォルト値（引数nameがないとき、ゲストと使用する）
const sayHello = (name = "ゲスト") => console.log(`こんちには!${name}さん!`);
sayHello("dnkntksh");
// ⇒こんにちは！dnkntkshさん！
sayHello();
// ⇒こんにちは！ゲストさん！

// オブジェクトの分割代入のデフォルト値:設定しないとundefinedとなってしまう
const myProfile = {
  age: 10040
};
const { age, name = "ゲスト" } = myProfile;
console.log(age);　// ⇒10040
console.log(name); // ⇒ゲスト

```

## オブジェクトの省略記法
 * オブジェクトの同じ名前のプロパティに値を設定する

```js
const name = "dkntksh";
const age = 10040;
// nameにname、ageにageを入れている
const myProfile = {
  name: name,
  age: age,
};

console.log(myProfile);
// ⇒{name: 'dkntksh', age: 10040}


// 省略記法
const myProfile = {
  name,
  age,
};
console.log(myProfile);
// ⇒{name: 'dkntksh', age: 10040}


```

## スプレット構文
 * 配列に対して...を使うもので、実際に中身を展開して出力している。配列の展開
 * まとめることも可能
 * 配列のコピーにも使用するので、代入元のオブジェクトにお互いに影響を与えない形になる

```js
const arr1 = [1, 2];
console.log(arr1);
// (2) [1, 2]
// スプレッド構文
console.log(...arr1);
// 1 2

// 関数での使用例
const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
// ⇒3
sumFunc(...arr1);
// ⇒3

// まとめることも可能
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
// ⇒ 1
console.log(num2);
// ⇒ 2
console.log(arr3);
// ⇒(3) [3, 4, 5] 残りの配列が出力される

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

// arr4をarr6にコピーする（別参照にする）
const arr6 = [...arr4];
console.log(arr6);
// ⇒(2) [10, 20]

// arr4とarr5を合わせたarr7を作る
const arr7 = [...arr4, ...arr5];
console.log(arr7);
// ⇒(4) [10, 20, 30, 40]

// 代入してしまうと、同じ参照をしている状態
const arr8 = arr4;
arr8[0] = 100;
console.log(arr8);
// ⇒(2) [100, 20]
console.log(arr4);
// ⇒(2) [100, 20] arr4も書き換わってしまう


```
