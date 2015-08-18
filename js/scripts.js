$(document).ready(function() {
  $('.nav-toggle button').click(
      function() { $('nav').toggleClass('active')}
    )

  // $('.email-subscribe').click(
  //     function() { $('.subscribe').toggleClass('active')}
  //   )

  $(function() {
    $( ".email-subscribe" ).accordion({
        active: false,
        collapsible: true
    });
  });
  $(document).click(function(e) {
    if (!$( ".email-subscribe" ).is(e.target) && !$(input[type=email] ).has(e.target).length) {
        $('.email-subscribe').accordion('activate', -1);
    }
  });
});


