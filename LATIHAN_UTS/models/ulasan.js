const mongoose = require('mongoose');

const ulasanSchema = new mongoose.Schema({
    produk_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produk',
        required: true,
    },

    pengguna_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pengguna',
        required: true,
    },

    rating:{
        type: Number,
    },

    komentar:{
        type: String,
    },

    tanggal_transaksi:{
        type: Date,
    },
});
const Ulasan = mongoose.model ('Ulasan', transaksiSchema);
module.exports = Ulasan;