$(document).ready(function () {

    //? Forismatic API request
    function randomQuote() {
        $.ajax({
            url: "https://api.forismatic.com/api/1.0/?",    
            dataType: "jsonp",                             
            data: "method=getQuote&format=jsonp&lang=en&jsonp=?",   //? metodo, formato, lingua
            success: function (quoteData) {                 //? store data

                if (quoteData.quoteAuthor === '') {
                    quoteData.quoteAuthor = 'Unknown'
                };

                $('#text').html('<span id="text">' + quoteData.quoteText + '</span>');
                $('#author').html('<div id="author">- ' + quoteData.quoteAuthor + '</div>')
            }
        });
    }


    //? random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function setRandomColor() {
        let color = getRandomColor();
        $('html').css('background-color', color);
        $('.social').css('background-color', color);
        $('#new-quote').css('background-color', color);
        $('#footer').css('background-color', color);
        $('#wrapper').css('boxShadow', `0px 0px 0px 24px ${color}`);
        $('#quote-text').css('color', color);
        $('#author').css('color', color)
    }

    $('#new-quote').ready(function () {
        randomQuote();
        setRandomColor();
    })
    $('#new-quote').click(function () {
        randomQuote();
        setRandomColor();
    });
});
