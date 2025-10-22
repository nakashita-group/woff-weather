

document.getElementById("sendMessage").addEventListener("click", function () {
    const UserName = document.getElementById("UserName").innerText;
    let strWorkTime = document.getElementById("StrWorkTime").value;
    woff.sendMessage({
        content: "Hello、World！"
    })
        .then(() => {
            console.log("メッセージ送信完了");
        })
        .catch((err) => {
            console.log('error', err);
        });

});

