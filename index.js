var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var data = require("sdk/self").data;

var comments;

var button = buttons.ActionButton({
    id: "mozilla-link",
    label: "Visit Mozilla",
    icon: {
        "16": "./icon-16.png",
        "32": "./icon-32.png",
        "64": "./icon-64.png"
    },
    onClick: handleClick
});

function handleClick(state) {
    var worker = tabs.activeTab.attach({
        contentScriptFile: [data.url("js/jquery-2.2.3.min.js"),
                        data.url("js/content-script.js")]
    });
    
    worker.port.emit("click", comments);
}