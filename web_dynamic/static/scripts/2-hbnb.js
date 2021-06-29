$(document).ready(function () {
  new_dict = {};
  $('input').click(function () {
    $(':input').each(function () {
      if (this.checked == true) {
        new_dict[$(this).data('name')] = $(this).data('id');
      } else {
        delete new_dict[$(this).data('name')];
      }
    });
    let arr = [];
    for (const key in new_dict){
      arr.push(key);
    }
    $('.amenities h4').html(arr.join(', '));
  });
  $(function () {
    $.getJSON(
      'http://0.0.0.0:5001/api/v1/status/',
      function (data) {
        if (data.status === 'OK') {
          $('DIV#api_status').addClass('available');
        } else {
          $('DIV#api_status').removeClass('available');
        }
      }
    );
  });
});
    
