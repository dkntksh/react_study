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
   * 開発効率のために（ディレクトリ/ファイルを）分けるが、本番環境は分かれている必要はないし、パフォーマンスも落ちるので、まとめる
   * 依存関係もいい感じに判定してまとめてくれる
 * トランスパイラー
   * Javascriptの新しい記法を古い記法に変更してくれる
   * Babel/SWC(Next.jsで内部的に使われている)
   * 新しい記法に対応していないブラウザに対応する（ex.IE）

# SPA
 * Single Page Application
 * 画面は一つでJavascriptで表現していく

