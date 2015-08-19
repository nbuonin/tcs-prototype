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
    $('.email-subscribe').accordion('activate', -1);

    if ($( ".email-subscribe" ).is(e.target) && !$("input[type=email]:focus")) {
      window.alert("sometext");

    }
  });
});


