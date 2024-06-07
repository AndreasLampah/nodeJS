

let nama = "andre";
let alamat = "manado";


const http = require("http");

let server = http.createServer((req, res) => {
    // mendefinisikan status code dan tipe konten yang ingin diberikan ke user
    res.writeHead(200, { "Content-Type" : "text/plain"});
    // isi dari konten
    res.end(nama + alamat);
})
// konfigurasi port yang ingin digunakan
// karena port default (80) sudah dipakai software lain
// jadi kita pakai port yg free
server.listen(3000, () => {
    console.log("server sudah siap<hr><hr>");
})
