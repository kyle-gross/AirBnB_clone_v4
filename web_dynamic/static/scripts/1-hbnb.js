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
