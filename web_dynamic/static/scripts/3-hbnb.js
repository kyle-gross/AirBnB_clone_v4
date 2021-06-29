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
});

$(function () {
  $.getJSON(
    'http://2a7794c2eec7.7e5652f1.hbtn-cod.io:5001/api/v1/status/',
    function (data) {
      if (data.status === 'OK') {
        $('DIV#api_status').addClass('available');
      } else {
        $('DIV#api_status').removeClass('available');
      }
    });
});

$(function () {
  $.ajax({
    url: 'http://2a7794c2eec7.7e5652f1.hbtn-cod.io:5001/api/v1/places_search/',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({}),
    success: function (data) {
      for (let i = 0; i < data.length; i++) {
        const place = data[i];
        $('.places').append(
          '<article>' +
          '<div class="title_box"><h2>' + place.name + '</h2>' +
          '<div class="price_by_night">$' + place.price_by_night + '</div></div>' +
          '<div class="information"><div class="max_guest">' + place.max_guest +
          (place.max_guest != 1 ? 'Guests </div>' : 'Guest </div>') +
          '<div class="number_rooms">' + place.number_rooms +
          (place.number_rooms != 1 ? 'Bedrooms </div>' : 'Bedroom </div') +
          '<div class="number_bathrooms">' + place.number_bathrooms +
          (place.number_bathrooms != 1 ? 'Bathrooms </div>' : 'Bathroom </div>') +
          '</div><div class="description">' + place.description + '</div></article>');
      }
    }
  });
});
