module.exports = (data) => 

  header = { "alg": "HS256", "typ": "JWT"}  ;
  payload = { "userId": "b08f86af-35da-48f2-8fab-cef3904660bd" } ;
  const SECRET_KEY = 'cAtwa1kkEy';
  const unsignedToken = base64urlEncode(header) + '.' + base64urlEncode(payload);
  const signature = HMAC-SHA256(unsignedToken, SECRET_KEY);
  data.token = encodeBase64Url(header) + '.' + encodeBase64Url(payload) + '.' + encodeBase64Url(signature);
  

    return data;
};
