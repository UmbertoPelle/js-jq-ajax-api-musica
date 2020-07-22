function downloadAlbum() {
  var album = [];
  $.ajax({
    url:'https://flynn.boolean.careers/exercises/api/array/music',
    method:'GET',
    success:function (data) {
      album = data['response'];
      writeOnHtml(album);
    },
    error:function (error) {
      console.log('error');
    }
  });

}

function writeOnHtml(album) {
  var template = $('#cd-template').html();
  var compiled = Handlebars.compile(template)
  var target = $('#album');

  for (var i = 0; i < album.length; i++) {
    var cd = album[i];
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

function init() {
  downloadAlbum()
}

$(document).ready(init);
