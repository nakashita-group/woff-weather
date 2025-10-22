

document.getElementById("sendMessage").addEventListener("click", function () {
    const UserName = document.getElementById("UserName").innerText;
    let strWorkTime = document.getElementById("StrWorkTime").value;
    woff.sendMessage({
        content: {
            type: "text", // ← メッセージタイプを必ず指定！
            text: `${UserName}：${strWorkTime}`, // ← テキスト内容
        },
    })
        .then(() => {
            console.log("メッセージ送信完了");
        })
        .catch((err) => {
            console.log('error', err);
        });

});

