var stream;
__weex_define__('@weex-temp/api', function (__weex_require__) {
    stream = __weex_require__('@weex-module/stream')
});
var request = function(options) {
    return new Promise(function(resolve, reject) {
        stream.fetch(options, function(res) {
            if (res.ok) { 
                resolve(res);
            } else {
                reject(res);
            }
        }, function() {});
    });
}
var apiURL = {
    baseurl: 'http://139.224.55.211:8000',
    login: '/auth/token',
    changePassword: '/auth/account/changepassword'
};

exports.login = function(email, password) {
    var req = "grant_type=password&username="+encodeURI(email)+"&password="+encodeURI(password)+"&client_id=consoleApp&client_secret=123%40abc";
    var options = {
        method: 'POST',
        url: apiURL.baseurl + apiURL.login,
        type:'json',
        body: req,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        }
    }
    return request(options);
};

exports.changePassword = function(userName, currentPassword, newPassword, confirmPassword) {
    var req = {
        UserName: userName,
        OldPassword: currentPassword,
        NewPassword: newPassword,
        ConfirmNewPassword: confirmPassword
    };
    var options = {
        method: 'POST',
        url: apiURL.baseurl + apiURL.changePassword,
        type:'json',
        body: JSON.stringify(req),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    return request(options);
};