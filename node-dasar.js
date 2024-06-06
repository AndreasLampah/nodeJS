let nama = "andre";
let alamat = "manado";



const http = require("http");

let server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type" : "text/plain"});
    res.end(nama + alamat);
})

server.listen(3000, () => {
    console.log("server sudah siap<hr><hr>");
})
