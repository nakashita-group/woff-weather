woff
  .init({
    //EndPointURLに初めてリダイレクトされるタイミングで実行
    woffId: "ZhRmxxurxLzM8K1h_krRGg" // 発行された WOFF ID を指定する
  })
  .then(() => {
    console.log("初期化完了！！");
    console.log(woff.getAccessToken() );
    console.log(woff.getProfile());
  })
  .catch((err) => {
    // 初期化処理中にエラーが発生した場合
    console.log("エラー発生！！");
    console.log(err.code, err.message);
  });