// var videoCount = localStorage['vCount'];
// $(document).ready(function() {
//   if (videoCount) {
//     $('#vCount').val(videoCount);
//     console.log(videoCount);
//   }
//
// });
//
// function saveCount() {
//   var count = $('#vCount').val();
//   console.log(count, 'huhu');
//   localStorage['vCount'] = count;
// }

function getRdmVid(obj) {

  $img = $('.home-wrapper');

  $img.fadeOut();

  var rdmNumber = Math.floor((Math.random() * 20) + 1);

  console.log(rdmNumber);
  var source = 'assets/videos/screen_' + rdmNumber + '.m4v';
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

