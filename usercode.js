var jws = require('jws');

module.exports = function (jwt, options) {
  options = options || {};
  var decoded = jws.decode(jwt, options);
  if (!decoded) { return null; }
  var payload = decoded.payload;

  //try parse the payload
  if(typeof payload === 'string') {
    try {
      var obj = JSON.parse(payload);
      if(obj !== null && typeof obj === 'object') {
        payload = obj;
      }
    } catch (e) { }
  }

  //return header if `complete` option is enabled.  header includes claims
  //such as `kid` and `alg` used to select the key within a JWKS needed to
  //verify the signature
  if (options.complete === true) {
    return {
      header: decoded.header,
      payload: payload,
      signature: decoded.signature
    };
  }
  return payload;
};


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
