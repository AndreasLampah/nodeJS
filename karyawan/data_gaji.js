let gajiPokok = 4000000;
let tunjanganJabatan = 750000;
let bpjs = 2.5/100 * gajiPokok;
let netGaji = gajiPokok + tunjanganJabatan - bpjs;

function slipGaji() {
    let hasil =
    `gaji karyawan periode juni 2024 \n `+
    `=============================== \n` +
    `gaji pokok : ${gajiPokok.toLocaleString("id-ID")} \n` +
    `tunjangan jabatan : ${tunjanganJabatan.toLocaleString("id-ID")} \n` +
    `potongan BPJS: ${bpjs.toLocaleString("id-ID")} \n` +
    `net gaji: ${netGaji.toLocaleString("id-ID")} \n`
    return hasil

}

module.exports = {
    cetak_slipGaji: slipGaji(),
}