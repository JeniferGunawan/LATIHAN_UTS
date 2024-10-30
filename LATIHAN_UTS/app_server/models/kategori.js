const mongoose = require('mongoose');

const kategoriSchema = new mongoose.Schema({
    nama_kategori:{
        type: String,
    },

    deskripsi:{
        type: String,
    },

    created_at:{
        type: Date,
    },

    updated_at:{
        type: Date,
    },

    status:{
        type: boolean,
    },
});
const Kategori = mongoose.model ('Kategori', kategoriSchema);
module.exports = Kategori;