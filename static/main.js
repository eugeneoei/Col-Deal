$("document").ready(function(){
  console.log("loaded");

  $('#alert').delay(5000).fadeOut(2000)

  $('#user-icon-dropdown-menu').hide();
  $('#user-icon-dropdown').on('click', function() {
    $('#user-icon-dropdown-menu').show();
  });
  $(document).on('click', function() {
    $('#user-icon-dropdown-menu').hide();
  });

  // CREATE POLL HIDE SHOW TOGGLE
  $('#create-form-container').hide();
  $('.new-poll-button').on('click', function() {
    $('#footer').css('border-top', '1px solid #e5e5e5');
    $('body').css('background-color', 'white');
    $('#create-form-container').show();
    $('#main-container').hide();
  });
  $('#back').on('click', function() {
    $('body').css('background-color', '#f4f4f4');
    $('#create-form-container').hide();
    $('#main-container').show();
  });

  // ADD AN OPTION HIDE SHOW TOGGLE
  $('#add-option-form').hide();
  $('#add-option-thumbnail').on('click', function() {
    $('#poll-title').hide();
    $('#options-container').hide();
    $('#add-option-form').show();
    $('#footer').css('border-top', '1px solid #e5e5e5');
    $('body').css('background-color', 'white');
  });
  $('#back-option').on('click', function() {
    $('#poll-title').show();
    $('#options-container').show();
    $('#add-option-form').hide();
    $('body').css('background-color', '#f4f4f4');
    // $('#back-option').hide();
  });



});
