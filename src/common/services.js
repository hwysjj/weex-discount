let stream;
__weex_define__('@weex-temp/api', function (__weex_require__) {
    stream = __weex_require__('@weex-module/stream')
});
let request = (options) => {
    return new Promise((resolve, reject) => {
        stream.fetch(options, res => {
            if (res.ok) { 
                resolve(res);
            } else {
                reject(res);
            }
        }, () => {});
    });
}
let apiURL = {
    baseurl: 'https://139.224.55.211',
    login: '/auth/token',
    changePassword: '/auth/account/changepassword'
};

exports.login = (email, password) => {
    let req = `grant_type=password&username=${encodeURI(email)}&password=${encodeURI(password)}&client_id=consoleApp&client_secret=123%40abc`;
    let options = {
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

exports.changePassword = (userName, currentPassword, newPassword, confirmPassword) => {
    let req = {
        UserName: userName,
        OldPassword: currentPassword,
        NewPassword: newPassword,
        ConfirmNewPassword: confirmPassword
    };
    let options = {
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