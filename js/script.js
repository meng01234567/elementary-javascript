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

// // クラス追加
// jQuery("#js-btn").addClass("btn-register");

// // クラス削除
// jQuery("#js-register").removeClass("btn-register");

// // CSSプロパティーの設定
// jQuery("#js-title").css({
//   color: "red",
//   fontSize: "80px",
// });
// // jQuery("#js-title").text("Daily traial");
// const title = jQuery("#js-title").text();
// alert(title);

// jQuery("#js-title").css("color", "red");
// jQuery("#js-title").text("Daily trial");
// jQuery("#js-title").css("color", "red").text("Daily trial");

// .fadeIn() フワッと表示。
// jQuery("#js-title").fadeIn(1500);
// .fadeOut() フワッと消える。

// jQuery("#js-btn").fadeOut(1500);

// // .slideDown() スライドして表示。
// jQuery("#js-title").slideDown(1500);

// .slideUp() スライドして消える。

// jQuery("#js-btn").slideUp(1500);

// jQuery("セレクタ").on("イベント名", function () {});
jQuery("#js-btn").on("click", function () {
  jQuery("#js-title").text("Daily trial");
});

jQuery("#js-title").on({
  mouseenter: function () {
    jQuery("#js-title").css("color", "red");
  },
  mouseleave: function () {
    jQuery("#js-title").css("color", "black");
  },
});
