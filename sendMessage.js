

document.getElementById("sendMessage").addEventListener("click", function () {
    document.getElementById("message").innerText="clicked";
    const UserName = document.getElementById("UserName").innerText;
    const strWorkTime = document.getElementById("StrWorkTime").value;
    const endWorkTime = document.getElementById("EndWorkTime").value;
    const areaName=document.getElementById("name").value;

    woff.sendMessage({
        content: `${UserName}:開始時間${strWorkTime}~終了時間:${endWorkTime}\n${areaName}`
    })
        .then(() => {
            console.log("メッセージ送信完了");
        })
        .catch((err) => {
            console.log('error', err);
        });

});

