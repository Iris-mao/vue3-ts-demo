const config = {
    'oauth_uri': 'https://github.com/login/oauth/authorize',
    'redirect_uri': 'https://biaochenxuying.cn/login',
    'client_id': 'XXXXXXXXXX',
    'client_secret': 'XXXXXXXXXX',
};

// 本地开发环境下
if (process.env.NODE_ENV === 'development') {
    config.redirect_uri = "http://localhost:8080/login"
    config.client_id = "502176cec65773057a9e"
    config.client_secret = "65d444de381a026301a2c7cffb6952b9a86ac235"
}
export default config;