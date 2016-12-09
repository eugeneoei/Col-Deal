$("document").ready(function(){
  console.log("loaded");
  $('#alert').delay(5000).fadeOut(2000)

  $('#sign-up-modal-toggle').on('click', function() {
    $('#log-in-modal').modal('hide');
    $('#sign-up-modal').modal('show');
  });

  $('#log-ing-modal-toggle').on('click', function() {
    $('#log-in-modal').modal('show');
    $('#sign-up-modal').modal('hide');
  });

});
