function randNexter(array) {
  var lastIndex;
  var nextThing = () => {
    var nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * array.length);
    } while (array.length > 1 && nextIndex === lastIndex);
    lastIndex = nextIndex;
    return array[lastIndex];
  };
  return nextThing;
};

function setCoolThing(coolThing, fade) {
  var $a = $('<a/>', {href: coolThing.link, class: 'coolThing'}).text(coolThing.description);
  if (!fade) {
    $('#cool-thing').html($a);
    return;
  }
  $('#cool-thing').fadeOut(function() {
    $(this).html($a).fadeIn();
  });
};

$(document).ready(() => {
  $.get('/api/lastTweet.json').then (resp => {
    var nextLastTweet = randNexter(resp.lastTweets);
    $('#last-tweet').html(nextLastTweet());
    $('#last-tweet-wrapper').fadeIn();
    setInterval(function() {
      $('#last-tweet').fadeOut(function() {
        $(this).html(nextLastTweet()).fadeIn();
      });
    }, 15000);
  });

  $.get('/api/coolThings.json').then(resp => {
    var nextCoolThing = randNexter(resp.coolThings);
    setCoolThing(nextCoolThing());
    $('#cool-thing-wrapper').fadeIn();
    setInterval(function() {
      setCoolThing(nextCoolThing(), true);
    }, 5000);
  });
});
