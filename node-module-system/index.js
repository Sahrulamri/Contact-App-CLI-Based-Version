// =====================================================

// const fs = requuire('fs');  // core module
// const halo = require('./coba');     //local module
// const moment = require('moment');   // third party module / npm module / node_modules

const coba = require('./coba')

console.log(
    coba.cetakNama('Sandhika'), 
    coba.pi, coba.mahasiswa.cetakMhs(), 
    new coba.Orang()
);
