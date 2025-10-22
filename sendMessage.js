

document.getElementById("sendMessage").addEventListener("click", function () {
    document.getElementById("message").innerText="clicked";
    const UserName = document.getElementById("UserName").innerText;
    let strWorkTime = document.getElementById("StrWorkTime").value;
    let endWorkTime = document.getElementById("EndWorkTime").value;
    woff.sendMessage({
        content: `${UserName}:開始時間${strWorkTime}~終了時間:${endWorkTime}`
    })
        .then(() => {
            console.log("メッセージ送信完了");
        })
        .catch((err) => {
            console.log('error', err);
        });

});

