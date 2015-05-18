var exec = require('cordova/exec'),
    cordova = require('cordova');

// Link the onLine property with the Cordova-supplied network info.
// This works because we clobber the navigator object with our own
// object in bootstrap.js.
//if (typeof navigator != 'undefined') {
//    utils.defineGetter(navigator, 'onLine', function() {
//        return this.connection.type != 'none';
//    });
//}

function SSIDPlugin() {
    //
}

SSIDPlugin.prototype.getInfo = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "SSIDPlugin", "getConnectedSSID", []);
};

var me = new SSIDPlugin();

module.exports = me;
