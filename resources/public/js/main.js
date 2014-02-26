jQuery(function($, undefined) {
    $('#term').terminal(function(command,term) {
        if(command == 'whois') {
            term.echo("usage: whois [username]");
        } else if(command == 'about') {
            term.echo("\
                <br\>\
                I'm a <span style='color: #204A87'>software engineer</span> based out of Manhattan, Kansas.\n\
                To see my portfolio, type <span style='color: #d6c3b6'>links</span>\
                <br><br>\
                ", {raw: true});
        } else if(command == 'contact') {
            term.echo("\
                You can email me at<br \>\
                <span style='color: #d6c3b6'>troxler.ryan</span>@\
                <span style='color: #d6c3b6'>gmail.com</span>\
                <br>\
                ", {raw: true});
        } else if(command == 'links') {
            term.echo("\
                <br\>\
                ", {raw: true});
        } else if(command == 'help') {
            term.echo("\nabout   contact    links   clear  ls\n");
        } else if(command == 'ls') {
        } else if(command == 'ls -lsa') {
            term.echo("\
                <br\>\
                total 48<br \>\
                 4 drwxr-xr-x  7 windelicato users  4096 Jul 12 19:30 .<br \>\
                 4 drwx------  6 windelicato users  4096 Jul 10 08:28 ..<br \>\
                 4 -rw-r--r--  1 windelicato users  &#160 16 Jul  10 08:58 CNAME<br \>\
                 4 drwxr-xr-x  2 windelicato users  4096 Jul 12 09:35 css<br \>\
                 4 drwxr-xr-x  2 windelicato users  4096 Jul 10 10:18 fonts<br \>\
                 4 drwxr-xr-x  8 windelicato users  4096 Jul 11 20:40 .git<br \>\
                 4 drwxr-xr-x  2 windelicato users  4096 Jul 11 20:02 img<br \>\
                 4 -rw-r--r--  1 windelicato users  2367 Jul 12 19:30 index.html<br \>\
                 4 drwxr-xr-x  2 windelicato users  4096 Jul 12 19:43 js<br \>\
                <br\>\
            ", {raw: true});
        } else {
            term.echo( "<br\>" + command + " not found. Type <span style='color:#D6C3B6'>help</span> for command list <br\>"
            ,{raw: true});
        }
            
    }, {
        prompt: "[rtroxler] ~ » ", 
        name:'urxvt', 
        height:'550px',
        width:'500px',
        greetings: null,
        onInit: function(term) {
            greetings(term);
        }
        });

    function updateClock(){
        var currentTime = new Date();
        var currentHours = currentTime.getHours ( );
        var currentMinutes = currentTime.getMinutes ( );
        var currentSeconds = currentTime.getSeconds ( );
        currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
        currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
        var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
        currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
        currentHours = ( currentHours == 0 ) ? 12 : currentHours;
        var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
        document.getElementById("clock").firstChild.nodeValue = currentTimeString;
    } setInterval(updateClock, 100);

    $('.floating').draggable().resizable();

    function greetings(term) {
        term.clear();
        term.echo("Welcome! <br/> <br/ >Type help for a list of commands ...", {raw:true});
    }

});

