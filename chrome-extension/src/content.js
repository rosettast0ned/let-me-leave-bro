// @name         Let Me Leave, Bro
// @author       Christopher Conley
// @copyright    Copyright (C) 2024 Christopher Conley
// @license      MIT
// @version      0.2.1
// @description  Do you hate "Are you SURE you want to leave this page?" dialogs that pop up when you try to close a tab? So do I. This is a Chrome extension and Tampermonkey script that prevents execution of those Javascript dialogs that prevent you from leaving a page.
//

console.log('LMLB: Let Me Leave, Bro extension loaded.')

function StopIt(event) {
    console.log('LMLB: Intercepting unload events.')
    event.stopPropagation();
}

window.addEventListener("beforeunload", StopIt, { capture: true });
window.addEventListener("onbeforeunload", StopIt, { capture: true });
window.addEventListener("unload", StopIt, { capture: true });
window.addEventListener("onunload", StopIt, { capture: true });
document.addEventListener("beforeunload", StopIt, { capture: true });
document.addEventListener("onbeforeunload", StopIt, { capture: true });
document.addEventListener("onunload", StopIt, { capture: true });
document.addEventListener("unload", StopIt, { capture: true });



// window.addEventListener("beforeunload", event => event.stopPropagation(), { capture: true });
// window.addEventListener("onbeforeunload", event => event.stopPropagation(), { capture: true });
// window.addEventListener("unload", event => event.stopPropagation(), { capture: true });
// window.addEventListener("onunload", event => event.stopPropagation(), { capture: true });
// document.addEventListener("beforeunload", event => event.stopPropagation(), { capture: true });
// document.addEventListener("onbeforeunload", event => event.stopPropagation(), { capture: true });
// document.addEventListener("onunload", event => event.stopPropagation(), { capture: true });
// document.addEventListener("unload", event => event.stopPropagation(), { capture: true });
