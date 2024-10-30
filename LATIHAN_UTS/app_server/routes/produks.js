const express = require("express"); // Corrected the module name
const router = express.Router();
const produkController = require("../controllers/controllerProduk");

// Fungsi dan Rute Index digunakan untuk memanggil semua data dalam database mongodb
router.get("/produk", produkController.index);
router.post("/tambah/produk", produkController.insert);
module.exports = router;