
const http = require("http");
const fs = require("fs");
const port = 3000;


let server = http.createServer(function (request, respon) {
    if (request.url == "/") {
        respon.writeHead(200, {"Content-Type" : "text/html"});
        fs.createReadStream("./view/utama.html").pipe(respon);

    } else if (request.url == "/beranda") {
        respon.writeHead(200, {"Content-Type" : "text/html"});
        fs.createReadStream("./view/beranda.html").pipe(respon);
       
    } else if (request.url == "/profil") {
        respon.writeHead(200, {"Content-Type" : "text/html"});
        respon.write("profil saya");
        respon.end();

    } else {
        respon.writeHead(200, {"Content-Type" : "text/html"});
        respon.write("file tidak ada");
        respon.end();
    }
})

server.listen(port, () => {
    console.log(`server sudah on, buka http://localhost:${port}`);
})


