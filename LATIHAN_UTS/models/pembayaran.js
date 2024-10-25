const mongoose = require('mongoose');

const pembayaranSchema = new mongoose.Schema({

    transaksi_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Transaksi',
        required : true,
    },

   metode_pembayaran:{
        type: Number,
    },

    jumlah:{
        type: Number,
    },

    tanggal_pembayaran:{
        type: Date,
    },
    
    status:{
        type: Boolean,
    },

});
const Pembayaran = mongoose.model ('Pembayaran', pembayaranSchema);
module.exports = Pembayaran;