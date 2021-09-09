// https://dev.to/bartosjiri/creating-a-preloader-for-gatsby-site-3kh1

var body = document.querySelector("body");
document.onreadystatechange = function () {
  console.info('FOOOOBAAAAR')
  if (document.readyState === "complete") {
    body.classList.add("preloader_ready");
    setTimeout(function () {
      body.classList.remove("preloader_active");
      body.classList.remove("preloader_ready");
    }, 500);
  }
};