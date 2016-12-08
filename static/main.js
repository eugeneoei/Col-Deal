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

  $(document).on("click", ".edit-option-button", function() {
    $('#edit-option-form').remove();
    $('#profile-tab-content').hide();
    $('#footer').css('border-top', '1px solid #e5e5e5');
    $('body').css('background-color', 'white');

    $.ajax({
      url: '/options/' + this.value + '/edit',
      method: "GET"
    }).done(function(dataFromServer) {
      $('#profile-container').append(
        '<div id="edit-option-form" class="row col-md-4 col-sm-4 col-xs-4">' +
          '<form action="/options/' + dataFromServer.id + '?_method=PUT" method="post">' +
            dataFromServer.name + '<br>' +
            'Description<br>' +
            '<input type="text" name="productDescription" value="' + dataFromServer.productDescription + '"><br>' +
            'Retail Price<br>' +
            '<input type="text" name="productRetailsPrice" value="' + dataFromServer.productRetailsPrice + '"><br>' +
            'Product Link<br>' +
            '<input type="text" name="productUrl" value="' + dataFromServer.productUrl + '"><br>' +
            'Product Image URL<br>' +
            '<input type="text" name="productImageUrl" value="' + dataFromServer.productImageUrl + '"><br>' +
            '<button type="submit" class="btn btn-default" name="button">SUBMIT</button>' +
          '</form><br>' +
          '<div id="profile-back">' +
          'Back' +
          '</div>' +
        '</div>'
      )
      $(document).on('click', '#profile-back', function() {
        console.log('back button clicked');
        $('body').css('background-color', '#f4f4f4');
        $('#footer').css('border-top', 'none');
        $('#profile-back').hide();
        $('#edit-option-form').hide();
        $('#profile-tab-content').show();
      });
    }).fail(function() {
      console.log("failed to retrieve data from app");
    });
  });

  $('#about-tab').on('click', function() {
    $('#profile-back').hide();
    $('#edit-option-form').hide();
    $('#profile-tab-content').show();
  });

  $('#drops-tab').on('click', function() {
    $('#profile-back').hide();
    $('#edit-option-form').hide();
    $('#profile-tab-content').show();
  });



});
