

document.getElementById("sendMessage").addEventListener("click", function () {
    document.getElementById("message").innerText="clicked";
    const UserName = document.getElementById("UserName").innerText;
    const strWorkTime = document.getElementById("StrWorkTime").value;
    const endWorkTime = document.getElementById("EndWorkTime").value;
    const areaName=document.getElementById("name").innerText;
    const description=document.getElementById("description").innerText;

    woff.sendMessage({
        content: `${UserName}:開始時間${strWorkTime}~終了時間:${endWorkTime}\n天気:${areaName} ${description}`
    })
        .then(() => {
            console.log("メッセージ送信完了");
        })
        .catch((err) => {
            console.log('error', err);
        });

});

