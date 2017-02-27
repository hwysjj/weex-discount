exports.EmailReg = /^([A-Za-z\d]+)\.([A-Za-z\d]+)@greendotcorp.com$/;
exports.PasswordReg = /^[A-Za-z0-9!@#$*.+-_]{5,20}$/;
exports.getBaseUrl = function(bundleUrl, isnav) {
    bundleUrl = new String(bundleUrl);
    var nativeBase;
    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
    if (isAndroidAssets) {
        nativeBase = 'file://assets/dist/';
    }
    else if (isiOSAssets) {
        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
    }
    else {
        var host = 'localhost:8080';
        var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
        if (matches && matches.length >= 2) {
            host = matches[1];
        }
        if (typeof window === 'object') {
            nativeBase = isnav ? 'http://' + host + '/web/index.html?page=../dist/' : '/dist/';
        } else {
            nativeBase = 'http://' + host + '/dist/';
        }
    }

    return nativeBase;
};