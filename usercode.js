function base64_encode_data(data, len, b64x) {
    var dst = ""
    var i

    for (i = 0; i <= len - 3; i += 3)
    {
        dst += b64x.charAt(data.charCodeAt(i) >>> 2)
        dst += b64x.charAt(((data.charCodeAt(i) & 3) << 4) | (data.charCodeAt(i+1) >>> 4))
        dst += b64x.charAt(((data.charCodeAt(i+1) & 15) << 2) | (data.charCodeAt(i+2) >>> 6))
        dst += b64x.charAt(data.charCodeAt(i+2) & 63)
    }

    if (len % 3 == 2)
    {
        dst += b64x.charAt(data.charCodeAt(i) >>> 2)
        dst += b64x.charAt(((data.charCodeAt(i) & 3) << 4) | (data.charCodeAt(i+1) >>> 4))
        dst += b64x.charAt(((data.charCodeAt(i+1) & 15) << 2))
        dst += b64pad
    }
    else if (len % 3 == 1)
    {
        dst += b64x.charAt(data.charCodeAt(i) >>> 2)
        dst += b64x.charAt(((data.charCodeAt(i) & 3) << 4))
        dst += b64pad
        dst += b64pad
    }

    return dst
}


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
