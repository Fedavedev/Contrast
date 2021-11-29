$("document").ready(function () {
  $(".hamburger").click(function () {
    $(".mobile-menu").toggleClass("open-menu");
  });

    $(".hamburger-btn").click(function () {
        $(".line-2").toggleClass("close");
        $(".line-1").toggleClass("open-1");
        $(".line-3").toggleClass("open-2");
      });
});
