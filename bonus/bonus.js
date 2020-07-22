
function bonustips() {
  var btn = $('#btnAlbum');

  btn.click(function () {
    $('#album').html('');
    var choice = $('.genreTips').val();

    var album = [];
    $.ajax({
      url:'https://flynn.boolean.careers/exercises/api/array/music',
      method:'GET',
      success:function (data) {
        album = data['response'];
        choiceOnHtml(album , choice);
      },
      error:function (error) {
        console.log('error');
      }
    });
  });

}

function choiceOnHtml(album , choice) {
  var template = $('#cd-template').html();
  var compiled = Handlebars.compile(template)
  var target = $('#album');

  for (var i = 0; i < album.length; i++) {
    var cd = album[i];
    if (cd['genre'] == choice) {
      var cdHTML= compiled({
        'poster': cd['poster'],
        'title' : cd['title'],
        'author': cd['author'],
        'genre': cd['genre'],
        'year': cd['year']
      });
      target.append(cdHTML);
    }

  }
}

function init() {
  bonustips();
}

$(document).ready(init);
