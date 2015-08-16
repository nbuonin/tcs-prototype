$(document).ready(function() {
  $('.nav-toggle button').click(
      function() { $('nav').toggleClass('active')}
    )

  $('.email-subscribe').click(
      function() { $('.subscribe').toggleClass('active')}
    )
});
