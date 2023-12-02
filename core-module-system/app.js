// Mengambil argumen dari command line
const yargs = require('yargs');
const contacts = require('./contacs');

yargs.command({
    command : 'add',
    describe : 'Menambahkan Contact baru',
    builder : {
        nama : {
            describe : 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        },
        email : {
            describe : 'Email',
            demandOption : false,
            type : 'string',
        },
        noHp: {
            describe : 'Nomor Handphone',
            demandOption : true,
            type : 'string',
        },
    },
    handler(argv) {
        contacts.simpanContacs(argv.nama, argv.email, argv.noHp);
    }
}).demandCommand();
// demandCommand() : untuk munculkan warning jika argument kosong

// Menampilkan nama dan no Hp
yargs.command({
    command : 'list',
    describe : 'Memunculkan semua daftar kontak.',
    handler() {
        contacts.listContact();
    }
})

// Menampilkan Detail kontak
yargs.command({
    command : 'detail',
    describe : 'Memunculkan detail kontak berdasarkan nama',
    builder : {
        nama : {
            describe : 'Nama Lengkap',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {
        contacts.detailContact(argv.nama);
    }
})

// Menghapus kontact berdasarkan nama
yargs.command({
    command : 'delete',
    describe : 'Menghapus kontak berdasarkan nama',
    builder : {
        nama : {
            describe : 'Nama Lengkap',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {
        contacts.deleteContact(argv.nama);
    }
})


yargs.parse();















// const contacs = require('./contacs.js');


// const main = async () => {
//     const nama = await contacs.tulisPertanyaan(`masukkan Nama Anda :`);
//     const eMail = await contacs.tulisPertanyaan('Masukkan Email Anda :');
//     const noHp = await contacs.tulisPertanyaan(`Masukkan no Hp Anda :`);

//     contacs.simpanContacs(nama, eMail, noHp);
// }

// main();
