$(function() {
  // 初始化轮播
  // $("#myCarousel").carousel('cycle');
  // header nav
  $(".menu-mobil").click(function() {
    $(".heaNav-ulMobil").show();
    $(".menu-mobil").hide();
    $(".nav-popup").show();
    $(".menu-mobilClose").show();
  });
  $(".nav-popup").click(function() {
    $(".heaNav-ulMobil").hide();
    $(".nav-popup").hide();
    $(".menu-mobilClose").hide();
    $(".menu-mobil").show();
  });
  $(".menu-mobilClose").click(function() {
    $(".heaNav-ulMobil").hide();
    $(".nav-popup").hide();
    $(".menu-mobilClose").hide();
    $(".menu-mobil").show();
  });
  $(".hea-nav ul li a").click(function() {
    $(".heaNav-ulMobil").hide();
    $(".nav-popup").hide();
    $(".menu-mobilClose").hide();
    // $(".menu-mobil").show();
  });
  $(".aboutBtn").click(function() {
    $(".heaNav-ulMobil").hide();
    $(".nav-popup").hide();
    $(".menu-mobilClose").hide();
    $(".menu-mobil").show();
  });
  // faq
  // $(".faq-content .faq-textBox").each(function (i) {
  //        $(this).hover(function () {
  //            $(".faq-content .faq-textBox").removeClass("heiAuto");
  //            $(this).addClass("heiAuto");
  //        })
  //    });

  $(".faq-textBox").each(function(i) {
    $(this).hover(function() {
      // $(".faq-content .faq-textBox").removeClass("heiAuto");
      $(this)
        .addClass("heiAuto")
        .siblings()
        .removeClass("heiAuto");
      $(this)
        .children(".faq-messtex")
        .slideDown()
        .parent()
        .siblings()
        .children(".faq-messtex")
        .slideUp();
    });
  });





});






