
$(document).ready(function() {
    /*
     * ogni tag con classe "toggle" diventa un toggle-button
     * che mostra nasconde l'elemento successivo
     */
    $(".toggle").each(function() {
        // nasconde il contenuto e aggiunge il supporto per il mostra/nascondi
        if($(this).attr('rel'))
            var target = $($(this).attr('rel'));
        else
            var target = $(this).next();
        var trigger = $(this);
        target.hide();
        trigger.addClass('trigger-collapsed');
        trigger.click(function() {
            target.toggle();
            if(target.is(":visible")) {
                trigger.removeClass('trigger-collapsed');
                trigger.addClass('trigger-expanded');
            }
            else {
                trigger.addClass('trigger-collapsed');
                trigger.removeClass('trigger-expanded');
            }
        });
    });
});

/*
 * crea un div di feedback per mostrare il testo passato all'utente; il div
 * viene distrutto dopo un po' di tempo
 */
function feedback(msg) {
    $('div.feedback').remove();
    var f = $('#feedback-js');
    if(f.length != 0) {
        f.html(msg);
    }
    else {
        var f = $('<div id="feedback-js" class="feedback"></div>');
        f.html(msg);
        f.prependTo(document.body)
        setTimeout(function() { f.remove() }, 10000);
    }
}

// http://stackoverflow.com/questions/1418050/string-strip-for-javascript
if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function() 
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}
