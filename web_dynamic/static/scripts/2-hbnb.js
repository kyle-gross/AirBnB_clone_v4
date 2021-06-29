$(document).ready(function () {
  const newDict = {};
  $('input').click(function () {
    $(':input').each(function () {
      if (this.checked === true) {
        newDict[$(this).data('name')] = $(this).data('id');
      } else {
        delete newDict[$(this).data('name')];
      }
    });
    const arr = [];
    for (const key in newDict) {
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
