{
  let elements = document.querySelectorAll("#js-title");
  for (let element of elements) {
    console.log(element.outerHTML);
  }
}
document.querySelector("#js-title").innerText = "書き換えた文字";

// ボタン追加
const button = document.createElement("a");
button.innerText = "ログイン";
button.setAttribute("class", "btn");
button.setAttribute("href", "https://tokyofreelance.jp/");
document.querySelector("#js-btn-wrap").appendChild(button);
