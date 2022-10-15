function errorValidator(obj) {
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let uriPattern = /^[\w.]+$/g;
    let supportedVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    let specialCharacters = [`<`, `>`, `\\`, `&`, `'`, `"`];

    if(!validMethods.includes(obj.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }

    if(!obj.hasOwnProperty('uri')) {
        throw new Error("Invalid request header: Invalid URI");
    }


    if(obj.uri !== '*' && !obj.uri.match(uriPattern)) {
        throw new Error("Invalid request header: Invalid URI");
    }

    if(!supportedVersions.includes(obj.version)) {
        throw new Error("Invalid request header: Invalid Version");
    }

    if(!obj.hasOwnProperty('message')) {
        throw new Error("Invalid request header: Invalid Message");

    }

    for(let ch of obj.message) {
        if (specialCharacters.includes(ch)) {
        throw new Error("Invalid request header: Invalid Message");
        }
    }

    return obj
}
console.log(errorValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
  }))