var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

tabs.activeTab.attach({
  contentScriptFile: './js/content-script.js'
});

var worker = tabs.activeTab.attach({
  contentScriptFile: './js/content-script.js'
});

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
    worker.port.emit("click");
}