jQuery(function($, undefined) {
    $('#term').terminal(function(command,term) {
        if(command == 'whois') {
            term.echo("usage: whois [username]");
        } else if(command == 'about') {
            term.echo("\
                I'm a <span style='color: #204A87'>software engineer</span> based out of Manhattan, Kansas.\n\
                To see my portfolio, type <span style='color: #d6c3b6'>links.</span>\
                <br>\
                ", {raw: true});
        } else if(command == 'contact') {
            term.echo("\
                You can email me at<br \>\
                <span style='color: #d6c3b6'>troxler.ryan</span>@<span style='color: #d6c3b6'>gmail.com</span>\
                <br>\
                ", {raw: true});
        } else if(command == 'links') {
            term.echo("\
                <br\>\
                ", {raw: true});
        } else if(command == 'archey') {
            term.echo("\
                <img src='img/arch.png' width=500px> \
                <br>\
                ", {raw: true});
        } else if(command == 'cat about.txt') {
            term.echo("\
                Senior in Computer Science/Software Engineering at Kansas State University. \
                <br><br>\
                Lead Student Application Developer for K-State Office of Mediated Education. \
                <br><br>\
                Linux Enthusiast. \
                <br>\
                ", {raw: true});
        } else if(command == 'help') {
            term.echo("\nabout   contact    links   clear  ls\n");
        } else if(command == 'ls') {
            term.echo("\
                    about.txt   &nbsp; <span style='color: #3465A4'>bin</span>   &nbsp; <span style='color: #3465A4'>img</span>  &nbsp;  <span style='color: #3465A4'>docs</span> \
                    <br>\
                    ", {raw: true});
        } else if(command == 'ls -lsa') {
            term.echo("\
                <br\>\
                total 48<br \>\
                 4 drwxr-xr-x  7 rtroxler users  4096 Jul 12 19:30 .<br \>\
                 4 drwx------  6 rtroxler users  4096 Jul 10 08:28 ..<br \>\
                 4 -rw-r--r--  1 rtroxler users  &#160 16 Jul  10 08:58 bin<br \>\
                 4 drwxr-xr-x  2 rtroxler users  4096 Jul 12 09:35 css<br \>\
                 4 drwxr-xr-x  2 rtroxler users  4096 Jul 10 10:18 fonts<br \>\
                 4 drwxr-xr-x  8 rtroxler users  4096 Jul 11 20:40 .git<br \>\
                 4 drwxr-xr-x  2 rtroxler users  4096 Jul 11 20:02 img<br \>\
                 4 -rw-r--r--  1 rtroxler users  2367 Jul 12 19:30 index.html<br \>\
                 4 drwxr-xr-x  2 rtroxler users  4096 Jul 12 19:43 js<br \>\
                <br\>\
            ", {raw: true});
        } else {
            term.echo(command + " not found. Type <span style='color:#D6C3B6'>help</span> for command list <br\>"
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


    $('.floating').draggable().resizable();

    function greetings(term) {
        term.clear();
        term.echo("Welcome! <br/> Type help for a list of commands ...<br/>", {raw:true});
    }

});

