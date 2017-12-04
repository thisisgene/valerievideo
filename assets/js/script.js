function getRdmVid(obj) {
  var rdmNumber = Math.floor((Math.random() * 3) + 1);

  console.log(rdmNumber);
  var source = '../assets/img/videos/screen_' + rdmNumber + '.mov';
  var $video = $('#video-background');
  var $source = $video.find('#video-src');
  $source.attr('src', source);
  console.log($source);

  $video.show();
  $video.get(0).load();
  $video.get(0).play();
  $video.on('ended', function() {
    $video.hide();
  });
}

