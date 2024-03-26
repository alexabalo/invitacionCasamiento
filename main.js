
simplyCountdown('#Contador', {
    year: 2024, // required
    month: 4, // required
    day: 26, // required
    hours: 12, // Default is 0 [0-23] integer
    minutes: 40, // Default is 0 [0-59] integer
    seconds: 30, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: { singular: 'Dia', plural: 'Dias' },
        hours: { singular: 'Hs', plural: 'Hs' },
        minutes: { singular: 'Min', plural: 'Min' },
        seconds: { singular: 'Seg', plural: 'Seg' }
    },
    plural: true, //use plurals
    inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: true,
    onEnd: function () {
        // your code
        return;
    },
    refresh: 1000, //default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: false,
    countUp: false, // enable count up if set to true
});


document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("myAudio");
    let playButton = document.getElementById("playButton");


    playButton.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            playButton.textContent = "Pausar";
        } else {
            audio.pause();
            playButton.textContent = "Play";
        }

    });


});










