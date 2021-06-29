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
});
    
