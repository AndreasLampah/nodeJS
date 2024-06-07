let nama = "andre";
let alamat = "manado";

function biodata() {
    return `nama : ${nama}\n alamat : ${alamat}\n pekerjaan : pengusaha`

}

// console.log(nama + " " + alamat);
module.exports = {
    nama, alamat, cetakbiodata: biodata()
}