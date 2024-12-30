// @name         Let Me Leave, Bro
// @author       Christopher Conley
// @copyright    Copyright (C) 2024 Christopher Conley
// @license      MIT
// @version      0.2.1
// @description  Do you hate "Are you SURE you want to leave this page?" dialogs that pop up when you try to close a tab? So do I. This is a Chrome extension and Tampermonkey script that prevents execution of those Javascript dialogs that prevent you from leaving a page.
//

console.log('LMLB: Let Me Leave, Bro extension loaded.')

const StopIt = (event) => {
    console.log('LMLB: Intercepting unload events.')
    event.stopImmediatePropagation();
    event.stopPropagation();
};

const AddListeners = () => {
    window.addEventListener("beforeunload", StopIt, { capture: true });
    document.addEventListener("beforeunload", StopIt, { capture: true });
    window.addEventListener("unload", StopIt, { capture: true });
    document.addEventListener("unload", StopIt, { capture: true });
    console.log('LMLB: Added listeners.');
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('LMLB: Document loaded, adding listeners.');
        AddListeners();
    });
} else {
    console.log('LMLB: Document already loaded, adding listeners.');
    AddListeners();
}
