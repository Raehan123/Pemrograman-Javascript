import { index, store, destroy } from "./controller.js";

const main = () => {
    // Data Awal
    index();

    store({ nama: "Rehan", umur: 30, alamat: { jalan: "Jl. Apel", kota: "Jakarta" }, email: "rehan@gmail" });
    store({ nama: "Husaini", umur: 25, alamat: { jalan: "Jl. Semangka", kota: "Malang" }, email: "husaini@gmail" });

    // Data yang baru ditambahkan
    index();

    // Data yang baru dihapus id: 1
    destroy(1);

    // Menampilkan data baru
    index();
};

main();
