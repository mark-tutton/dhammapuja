//= requires jquery/jquery.smooth-scroll

jQuery.fx.interval = 10;

var audio = $("#audio audio")[0];
var display;
var data = $("#data");
var timeLineNodes = [];

if (data && data.val()) {
  display = $('<ul class="display"></ul>');
  time = $('<div id="time">00:00.0</div>');
  var contain = $("#main"); /* for materialize <main> */
  contain.append(time);
  contain.append(display); /* for materialize <main> */
  /*$('body').append('<div id="time">00:00.0</div>'); // bootstrap */
  /*$('body').append(display); //boostrap */

  data.val().split(/\n+/).forEach(function (line) {
    var match = line.match(/^\s*(\[(.+?)\])?(\s*)(.+)\s*$/);
    if (match) {
      var time   = humanToTime(match[2]),
          indent = match[3],
          text   = match[4],
          node;
      if (text === "") {
        console.log("empty");
        return;
      } else if (text[0] == "#") {
        var match = text.match(/^(#+)\s*(.+)$/),
            depth = match[1].length,
            text  = match[2];
        console.log(match);
        node = $('<li><h' + depth +'>' + text + '</h' + depth + '></li>');
      } else {
        var pclass;
        if (indent.length > 1) {
          pclass = "en flow-text";
        } else {
          pclass = "pali flow-text";
        }
        text = vocalize(text);
        text = underline(text);
        node = $('<li><p class="' + pclass + '">' + text + '</p></li>');
      }
      if (time !== null) {
        var timeNode = $('<div class="time" data-time="' + time + '">' + timeToHuman(time) + '</div>');
        node.on("click", function(event) {
          // Binding event
          //audio.oncanplay = function() {
          //  console.log("Can start playing audio");
          //}


          audio.currentTime = time;
          audio.play();
        });
        node.prepend(timeNode);
        timeLineNodes.push({ time: time, node: node });
      }
      display.append(node);
    }
  });
}

function timeToHuman(time, digits) {
  return "" + parseInt(time / 60) + ":" + ("0" + (time % 60).toFixed(1)).slice(-4);
}

function humanToTime(time) {
  if (typeof(time) == "string") {
    var match = time.match(/^\s*(\d+)\s*:\s*([\d\.]+)\s*$/);
    if (match) {
      return (parseInt(match[1]) * 60) + parseFloat(match[2]);
    }
  }
  return parseFloat(time) || null;
}

function vocalize(text) {
  return text.replace(/(([\^`]+)(.))/g, function(t1, t2, m, c) {
    console.log([m, c]);
    var dir;
    if (m[0] == "^") {
      dir = "u";
    } else {
      dir = "d";
    }
    if (m.length > 1) {
      dir = dir + dir;
    }
    return '<span class="t">' + c + '<span><span class="' + dir + '"></span></span></span>';
  });
}

function underline(text) {
  return text.replace(/_(.+?)_/g, function(t1, m) {
    return '<span class="un">' + m + '</span>';
  });
}

function findLineByTime(time) {
  var min = 0, mid = 0, max = timeLineNodes.length;
  if (max === 0) {
    return null;
  }
  while (min < max) {
    mid = parseInt((min + max) / 2);
    midTime = timeLineNodes[mid].time;
    if (time < midTime) {
      if (max == mid) {
        max = mid - 1;
      } else {
        max = mid;
      }
    } else {
      if (min == mid) {
        min = mid + 1;
      } else {
        min = mid;
      }
    }
  }
  return timeLineNodes[mid].node;
}

function trackTime(track) {
  var lineNode = findLineByTime(track.currentTime);
  if (lineNode) {
    if (!lineNode.hasClass("highlight")) {
      $('li.highlight').removeClass("highlight");
      lineNode.addClass("highlight");
      console.log();
      if (!elementInScreen(lineNode, 150)) {
        $.smoothScroll({
          scrollTarget: lineNode,
          offset: -100,
          easing: 'swing',
          speed: 1000
        });
      }
    }
  }
  $("#time").text(timeToHuman(track.currentTime));
}

function elementInScreen(el, tolerance) {
  var el      = $(el),
      win     = $(window),
      top     = el.offset().top,
      height  = el.height(),
      wTop    = win.scrollTop(),
      wHeight = win.height();
  return ((wTop < top - tolerance) &&
          (wTop + wHeight > top + height + tolerance));
}
