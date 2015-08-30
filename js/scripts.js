$(document).ready(function() {
  //Creates accordion toggle for email signup form
  $('.nav-toggle button').on("click", function () {
    $('nav').toggleClass('active');
  });

  $(function() {
    $( ".email-subscribe" ).accordion({
        active: false,
        collapsible: true
    });
  });

  $(document).on("click",function(e) {
    if (!$( ".email-subscribe" ).is(e.target) && !$( ".email-subscribe" ).has(e.target).length) {
        $(".email-subscribe").accordion("option", "active", false);
    }
  });

  // modifies markup of profile page for RWD
  function profilePage () {
    if ($(window).width() > 850) {
      $(".profile-info-container").append($(".profile-bio"));
      $(".profile-headshot-container").append($(".profile-info > .contact"));
    };
  }

  $(document).ready(profilePage);
  $(window).resize(profilePage);
});


