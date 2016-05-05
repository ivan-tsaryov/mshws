var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var data = require("sdk/self").data;

var worker;

var curr_id = 1;

var button = buttons.ActionButton({
    id: "mozilla-link",
    label: "Click me",
    icon: {
        "16": "./icon-16.png",
        "32": "./icon-32.png",
        "64": "./icon-64.png"
    },
    onClick: handleClick
});

function handleClick(state) {
    worker.port.emit("click", curr_id);
}

tabs.on('activate', function(tab) {
	console.log(tab.url);

    worker = tab.attach({
        contentScriptFile: [data.url("js/jquery-2.2.3.min.js"),
                        data.url("js/content-script.js") ]
    });

    worker.port.on("curr_id_change", function(input_id) {
        curr_id = input_id;
    });
});

