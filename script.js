
// toggle dropdown menu
$("#dropdown-button").click(function(e){
    e.preventDefault();
    $(".nav--header").toggle();
});

// get the regular header back if window width is greater than 895px, hide it when it is less.
$( window ).resize(function() {
    if ( $(window).width() >= 895 ) {
        $(".nav--header").toggle(true);
    } else if ( $(window).width() <= 895) {
        $(".nav--header").toggle(false);
    }
});

// when the top of the section reaches bottom of the page, trigger CSS transition
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