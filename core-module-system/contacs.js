const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');
// const { exit } = require('process');

    // Membuat folder jika belum ada
    const dirPath = './data';
    if(!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }

    // Membuat file jika belum ada
    const dataPath = './data/contacs.json';
    if(!fs.existsSync(dataPath)) {
        fs.writeFileSync(dataPath, '[]', 'utf-8');
    }

const loadContact = () => {
    const file = fs.readFileSync('data/contacs.json', 'utf-8');
    const contacs = JSON.parse(file);
    return contacs;
}


const simpanContacs = (nama, eMail, noHp) => {
    const data = {
        nama : nama,
        eMail : eMail,
        noHp :noHp
    }

    const contacs = loadContact();
    // const file = fs.readFileSync('data/contacs.json', 'utf-8');
    // const contacs = JSON.parse(file);
    const duplicate = contacs.find((data) => data.eMail === eMail);
    if(duplicate) {
        console.log(chalk.red.bold.inverse`Email sudah ada`);
        return false;
    }

    // Cek email
    if(eMail) {
        if(!validator.isEmail(eMail)) {
            console.log(chalk.red.inverse.bold`Masukkan email yang benar`);
            return false;
        }
    }

    // Cek Nomor
    if(!validator.isMobilePhone(noHp, 'id-ID')) {
        console.log(chalk.red.bold.inverse`nomor HP anda tidak valid`);
        return false;
    }

    contacs.push(data);
    fs.writeFileSync('data/contacs.json', JSON.stringify(contacs, null, 2), (err) => {
    if (err) throw err;
        console.log(err);
    });
    console.log(chalk.green.bold.inverse`Terima kasih sudah memasukkan data`);


}

// List Contact

const listContact = () => {
    const contacs = loadContact();
    console.log(chalk.blue.bold.inverse`Daftar Kontak :`)
    
    contacs.forEach((contact, i) => {
        console.log(`${i + 1}. ${contact.nama} - ${contact.noHp}`)
    })
}

// Detail Contact 

const detailContact = (nama) => {
    const contacs = loadContact();
    const contact = contacs.find((contact) => {
        return contact.nama.toLowerCase() === nama.toLowerCase();
    }
);


if (!contact) {
    console.log(chalk.red.bold.inverse(`nomor HP dengan nama ${nama} tidak ditemukan.`));
    return false;
} 
    console.log(chalk.blue.bold.inverse(`Daftar Kontak :`));
console.log(`nama : ${contact.nama}`);
console.log(`noHP : ${contact.noHp}`);
    if (contact.eMail) {
        console.log(`Email : ${contact.eMail}`);
    }

}

// const deleteContact= (nama) => {
//     const contact = loadContact();
//     const newContact = contact.filter((c) => {
//         return c.nama.toLowerCase() !== nama.toLowerCase();
//     })

//     if(contact.length === newContact.length) {
//         console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan`));
//         return false;
//     }


//     fs.writeFileSync('data/contacs.json', JSON.stringify(newContact, null, 2), (err) => {
//         if (err) throw err;
//             console.log(err);
//         });
//         console.log(chalk.green.bold.inverse`${nama} berhasil dihapus`);
// }

const deleteContact= (nama) => {
    const contacts = loadContact();
    const contact = contacts.findIndex((contact) => {
        return contact.nama.toLowerCase() === nama.toLowerCase();
    })

    // console.log(contact);
    if (contact === -1) {
        console.log(chalk.red.bold.inverse(`Kontak dengan Nama ${nama} tidak ditemukan`));
        return false;

    }
    
    const del = contacts.splice(contact, 1);
    fs.writeFileSync('data/contacs.json', JSON.stringify(contacts.splice(del), null, 2), (err) => {
                if (err) throw err;
                    console.log(err);
                });
                console.log(chalk.green.bold.inverse`kontak dengan nama ${nama} berhasil dihapus`);
        }






module.exports = {
    simpanContacs : simpanContacs,
    listContact : listContact,
    detailContact : detailContact,
    deleteContact : deleteContact
}


