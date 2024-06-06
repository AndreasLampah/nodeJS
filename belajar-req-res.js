
const http = require("http");
const port = 3000;

let server = http.createServer(function (request, respon) {
    if (request.url == "/") {
        respon.writeHead(200, {"Content-Type" : "text/html"});
        respon.write("halaman utama");
        respon.end();
    } else if (request.url == "/beranda") {
        respon.writeHead(200, {"Content-Type" : "text/html"});
        respon.write("halaman beranda");
        respon.end();
    } else if (request.url == "/beranda") {
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
    console.log(`server sudah on, buka http://localHost:${port}`);
})


