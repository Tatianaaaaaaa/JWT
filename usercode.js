const SECRET_KEY = 'cAtwa1kkEy';
const unsignedToken = base64urlEncode(header) + '.' + base64urlEncode(payload);
const signature = HMAC-SHA256(unsignedToken, SECRET_KEY);

//header = { "alg": "HS256", "typ": "JWT"};

/*module.exports = (data) => {
    data.hello = "Hello World!";

    return data;
};
*/
