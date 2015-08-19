$(document).ready(function() {
  $('.nav-toggle button').on("click", function () {
    $('nav').toggleClass('active');
  });

  // $('.email-subscribe').click(
  //     function() { $('.subscribe').toggleClass('active')}
  //   )

  $(function() {
    $( ".email-subscribe" ).accordion({
        active: false,
        collapsible: true
    });
  });

  $(document).on("click",function(e) {

  //   if (!$( ".subscribe" ).is(e.target) && !$(".mc-field-group .email").is(":focus")) {
  //     $('.email-subscribe').accordion("option", "active", false);
  //     //window.alert("sometext");

  //   }
  // });
  // $(" div .subscribe").hide();
  // $(".email-subscribe").on("click", function () {
  //   $(".email-subscribe .subscribe").toggle("blind");

    if (!$( ".email-subscribe" ).is(e.target) && !$( ".email-subscribe" ).has(e.target).length) {
        $(".email-subscribe").accordion("option", "active", false);
    }
  });
});


