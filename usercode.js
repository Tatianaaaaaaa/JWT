const base64url = require('base64url');



/*module.exports = (data) => {
   /*function utf8_to_b64(str) {
      return window.btoa(unescape(encodeURIComponent(str)));
    }*/
   
  /* function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str));
   }
    data.res = b64EncodeUnicode("✓ à la mode");
    
    return data;*/
};*/



/*module.exports = (data) => {
    var signature = 'saffadddf';
    data.res = base64UrlEncode(signature); 
    
    return data;
};*/


/*const sha1 = require("crypto-js/sha1");

module.exports = (data) => {
    data.res = sha1(data.in).toString(); 
    
    return data;
};
*/
/*const SECRET_KEY = 'cAtwa1kkEy';
const unsignedToken = base64urlEncode(header) + '.' + base64urlEncode(payload);
const signature = HMAC-SHA256(unsignedToken, SECRET_KEY);*/

//header = { "alg": "HS256", "typ": "JWT"};

/*module.exports = (data) => {
    data.hello = "Hello World!";

    return data;
};
*/
