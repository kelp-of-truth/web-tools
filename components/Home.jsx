
function App(){
  document.title="Webツール一覧";
  return (
    <div className="App m-auto px-[5%] w-1/2">
      <h1 className="mt-15 title">Webツール一覧</h1>
      <p className="text text-center mt-10 text-xl">
        制作したWebツールまとめてあります。用途はどれも限定的。
      </p>
      <div className="list">
        <div>
          <a href="./tl-maker">
            <p className="anchor">TLメーカー</p>
          </a>
          <p className="text">ブルーアーカイブのTLを組むためのツール。</p>
        </div>
        <div className="">
          <a href="https://kelpoftruth.com/pdf-viewer/shelf">
            <p className="anchor">PDF Viewer</p>
          </a>
            <p className="mt-2 ml-5 text">PDFを読み込んでブラウザ上で読めるサイト。本棚やしおり機能がある。AI任せなところがあるためバグがちらほら。</p>
        </div>
        <div className="">
          <a href="https://kelpoftruth.com/tools/binomial_distribution">
            <p className="anchor">二項分布計算ツール</p>
          </a>
            <p className="mt-2 ml-5 text">二項分布の計算をするツール。ソシャゲのガチャの確率を求めるときなんかに使える。</p>
        </div>
        <div className="">
          <a href="">
            <p className="anchor">GetFavicon</p>
          </a>
          <p className="mt-2 ml-5 text">入力したURLのファイビコンを取得するツール。Webサイトの高画質ファイビコンが欲しい時に。</p>
        </div>
        <div className="">
          <a href="">
            <p className="anchor">Open in popup window</p>
          </a>
            <p className="mt-2 ml-5 text">入力したURLをポップアップウィンドウで開くツール。小さいウィンドウでWebページ見れる。</p>
        </div>
      </div>
    </div>
  )

}
export default App