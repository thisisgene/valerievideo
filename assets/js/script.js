function getRdmVid(obj) {

  $img = $('.home-wrapper');

  $img.fadeOut();

  var rdmNumber = Math.floor((Math.random() * 5) + 1);

  console.log(rdmNumber);
  var source = 'assets/img/videos/screen_' + rdmNumber + '.mov';
  var $video = $('#video-background');
  var $source = $video.find('#video-src');
  $source.attr('src', source);
  console.log($source);

  $video.get(0).load();
  $video.show();
  $video.get(0).play();
  $video.on('ended', function() {
    $video.hide();
    $img.fadeIn();

  });
}

