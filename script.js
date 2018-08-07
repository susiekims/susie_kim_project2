$("#dropdown-button").click(function(e){
    e.preventDefault();
    $(".nav--header").toggle();
});

$(document).ready(function () {
    // $('header__content').addClass("visible");
    console.log('ready!');
});

$(document).on("scroll", function () {
    let pageTop = $(document).scrollTop()
    let pageBottom = pageTop + $(window).height()
    let tags = $(".scroll")
  
    for (let i = 0; i < tags.length; i++) {
      let tag = tags[i]
  
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible")
      } else {
        $(tag).removeClass("visible")
      }
    }
  });