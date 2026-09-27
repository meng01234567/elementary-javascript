// jQuery("主語").動詞("補語");

// document.querySelector("#js-title").innerText = "Daily Trial";
jQuery("#js-title").text("Daily Trial");
// jQuery("#js-title").css("color", "red");
jQuery("h1, h2").css("color", "red");

const elements = jQuery(".text");
elements.each(function () {
  console.log(jQuery(this).text());
});
