$("document").ready(function(){
  console.log("loaded");

  $('#alert').delay(5000).fadeOut(2000)

  $('#user-icon-dropdown-menu').hide();
  $('#user-icon-dropdown').on('click', function() {
    $('#user-icon-dropdown-menu').show();
  })
  $(document).on('click', function() {
    $('#user-icon-dropdown-menu').hide();
  })

});
