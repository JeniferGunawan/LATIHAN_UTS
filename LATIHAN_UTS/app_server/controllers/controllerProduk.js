const Produk = require("../models/produk");

const index = (req, res, next) => {
    Produk.find({}, { __v: 0 })
        .then((prd) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successful",
                data: prd
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 400,
                success: false,
                message: "Bad request"
            };
            res.status(400).json(responseMessage);
        });
};

// Handle the insert request for Produk
const insert = (req, res, next) => {
    const prd = new Produk({
        nama: req.body.nama,
        deskripsi: req.body.deskripsi,
        harga: req.body.harga,
        stok: req.body.stok,
    });

    prd.save()
        .then((result) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Product successfully created",
                data: prd
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 400,
                success: false,
                message: "Bad request"
            };
            res.status(400).json(responseMessage);
        });
};

module.exports = { index, insert };