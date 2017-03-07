//sorry for anyone who has to read this, i did it while half asleep and in a rush.
$(document).ready(function() {
    var nope = false;
    //resizes the cards proportionally
    function resizeCards() {
        $('.card').css('width', window.innerHeight * 0.25);
        $('.card').css('height', window.innerHeight * 0.25);
    }
    resizeCards();
    window.addEventListener('resize', resizeCards);
    /*
    ██████  ██    ██ ████████ ████████  ██████  ███    ██ ███████
    ██   ██ ██    ██    ██       ██    ██    ██ ████   ██ ██
    ██████  ██    ██    ██       ██    ██    ██ ██ ██  ██ ███████
    ██   ██ ██    ██    ██       ██    ██    ██ ██  ██ ██      ██
    ██████   ██████     ██       ██     ██████  ██   ████ ███████
    */
    function makeOpaque (thingToMakeVisible) {
        $('#' + thingToMakeVisible).css('opacity', 1);
    }
    function makeNotOpaque (thingToMakeInvisible) {
        $('#' + thingToMakeInvisible).css('opacity', 0);
    }
    function displayNone (displayToNone) {
        if (nope === false) {
            $('#' + displayToNone).css('display', 'none');
        }
    }
    function nopeFalse () {
        nope = false;
    }
    function nopeTrue () {
        nope = true;
    }
    $.each($('.card > div'), function (index, val) {
        console.log(val.id);
        var temp = val.id.split('');
        temp.splice(temp.length -6, 6);
        temp = temp.join('') + 'Page';
        $('#' + val.id).click(function () {
            $('#' + temp).css('display', 'flex');
            nope = true;
            window.setTimeout(makeOpaque, 16, temp);
            window.setTimeout(nopeFalse, 550);
        });
        $('#main').click(function () {
            console.log(nope);
            makeNotOpaque(temp);
            setTimeout(displayNone, 500, temp);
            setTimeout(nopeFalse, 550);
        });
    });
});
