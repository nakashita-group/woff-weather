

document.getElementById("sendMessage").addEventListener("click", function () {
    document.getElementById("message").innerText="clicked";
    const UserName = document.getElementById("UserName").innerText;
    let strWorkTime = document.getElementById("StrWorkTime").value;
    woff.sendMessage({
        content: `${UserName}:${strWorkTime}`
    })
        .then(() => {
            console.log("メッセージ送信完了");
        })
        .catch((err) => {
            console.log('error', err);
        });

});

