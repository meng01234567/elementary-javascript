// jQuery("主語").動詞("補語");

// // document.querySelector("#js-title").innerText = "Daily Trial";
// jQuery("#js-title").text("Daily Trial");
// // jQuery("#js-title").css("color", "red");
// jQuery("h1, h2").css("color", "red");

// const elements = jQuery(".text");
// elements.each(function () {
//   console.log(jQuery(this).text());
// });

// // #js-sectionを起点に子孫要素のpタグを操作
// jQuery("#js-section").find("p").css("color", "red");

// // #js-sectionを起点に子要素のpタグを操作

// jQuery("#js-section").children("p").css("color", "blue");

// クラス追加
jQuery("#js-btn").addClass("btn-register");

// クラス削除
jQuery("#js-register").removeClass("btn-register");

// CSSプロパティーの設定
jQuery("#js-title").css({
  color: "red",
  fontSize: "80px",
});
// jQuery("#js-title").text("Daily traial");
const title = jQuery("#js-title").text();
alert(title);
