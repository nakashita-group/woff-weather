woff
  .init({
    //EndPointURLに初めてリダイレクトされるタイミングで実行
    woffId: "ZhRmxxurxLzM8K1h_krRGg" // 発行された WOFF ID を指定する
  })
  .then(() => {
    console.log("初期化完了！！");

    if (!woff.getAccessToken()) {
      console.log("トークンなし → 認可フロー開始");
      woff.login(); // ← これがポイント！
      return;
    }

    console.log(woff.getAccessToken() );
    document.getElementById("acessToken").innerText=woff.getProfile().displayName;
    
    // console.log(woff.getProfile());
  })
  .catch((err) => {
    // 初期化処理中にエラーが発生した場合
    console.log("エラー発生！！");
    console.log(err.code, err.message);
  });