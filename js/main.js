$(document).ready(function() {
    $('#main').hide()

    // Intro animation

    var container = $("#intro")
        // RegEx identifies end of sentence
    var _sentenceEndExp = /(\.|\?|!)$/g;

    function machineGun(text) {

        var words = text.split(" "),
            tl = new TimelineMax({
                delay: 1,
                repeat: 0,
                repeatDelay: 4
            }),
            wordCount = words.length,
            time = 0,
            word, element, duration, isSentenceEnd, i;

        // For each word in the given string...
        for (i = 0; i < wordCount; i++) {
            word = words[i];
            isSentenceEnd = _sentenceEndExp.test(word);

            // Populate element variable with correct HTML
            element = $("<h3>" + word + "</h3>").appendTo(container)

            // Longer words stay on screen longer
            duration = Math.max(0.5, word.length * 0.12)


            // Last word stays on the screen for longer
            if (i == wordCount - 1) {
                duration += 2
                time += 0.8
            }

            // Long pause after each sentence
            if (isSentenceEnd) {
                duration += 0.8
                time += 0.8
            }

            TweenLite.set(element, {
                autoAlpha: 0,
                scale: 0,
                z: 0.01
            })
            tl.to(element, duration, {
                    scale: 1.2,
                    ease: SlowMo.ease.config(0.25, 0.9)
                }, time)
                .to(element, duration, {
                    autoAlpha: 1,
                    ease: SlowMo.ease.config(0.25, 0.9, true)
                }, time)
            time += duration - 0.05
        }
    }

    // machineGun("Hi. Welcome. I'm Max and I love to build cool stuff. Enjoy.")
    var timerBuffer = 0  // 15000

    setTimeout(function() {
        $('#intro').fadeOut(1000)
    }, timerBuffer)

    setTimeout(function() {
        $('#main').fadeIn(3000)
        $('#top').hide().slideDown(3000).fadeIn(3000)
        $('body').animate({
            'backgroundColor': '#fff',
            'color': '#000'
        }, 500)

        $.ajax({
          url: 'https://www.strava.com/api/v3/athletes/23542708/stats',
          headers: {'Authorization': 'Bearer ' + 'e330a184e1b841c74d8825096707843c6984cd99'}
        }).done(function(strava_data) {
          process_recent_run(strava_data, 'recent_run_totals');
          process_run(strava_data, 'ytd_run_totals');
          process_run(strava_data, 'all_run_totals');
        });

    }, timerBuffer + 1000)

})

function process_recent_run(data, time_frame) {
  var timely_data = data[time_frame];
  var run_data = '<b>' + Math.round(timely_data['distance']) + '</b> meters ran<br>' +
    '<b>' + Math.round(timely_data['elapsed_time']/60) + '</b> minutes moving<br>' +
    '<b>' + Math.round(timely_data['elevation_gain'] * 10)/10 + '</b>  meters ascended';
  $('#' + time_frame).html(run_data);
}

function process_run(data, time_frame) {
  var timely_data = data[time_frame];
  var km_ran = Math.round(timely_data['distance']/100)/10;
  var km_ascent = Math.round(timely_data['elevation_gain']/100)/10;
  var run_data =
  '<b>' + km_ran + '</b> km ran (<b>' + Math.round(timely_data['distance']/100 * 0.621371)/10 + '</b> miles)<br>' +
    '<b>' + Math.round(timely_data['elapsed_time']/60/60) + '</b> hours moving<br>' +
    '<b>' + km_ascent + '</b> km elevation (<b>' + Math.round(timely_data['elevation_gain']/100 * 0.621371)/10 + '</b> miles)<br>';
  $('#' + time_frame).html(run_data);
}
