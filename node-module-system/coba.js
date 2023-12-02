
function cetakNama (nama) {
    console.log(`halo nama saya ${nama} salam kenal ya...`)
}
const pi = 3.14;

const mahasiswa = {
    nama : 'Doddy Setyawan',
    umur : 20,
    jurusan : 'Teknik Industri',
    cetakMhs () {
        return ` Halo nama saya ${this.nama} saya umur ${this.umur}, dan saya berasal dari jususan ${this.jurusan}`;
    }
}

// Class
class Orang {
    constructor() {
        console.log('Class orang sudah selesai dibuat tjang moelia');
    }
    
}


// module.exports.cetakNama = cetakNama;
// module.exports.pi = pi;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//     cetakNama : cetakNama,
//     pi : pi,
//     mahasiswa : mahasiswa,
//     Orang : Orang
// }

// Jika nama objek dan isisnya sama kita bisa isi namanya saja

module.exports = {cetakNama, pi, mahasiswa, Orang}


