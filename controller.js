import users from "./data.js";

const index = () => {
  console.log("List Users:");
  users.map((user, i) => {
    console.log(
      `${i + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`
    );
  });
};
const store = (user) => {
    users.push(user);
    console.log("Data Berhasil Ditambahkan!");
};

const destroy = (indexUser) => {
    if (indexUser <= users.length) {
        users.splice(indexUser - 1, 1);
        console.log("Data Berhasil Dihapus!");
    } else {
        console.log("Data Tidak Ditemukan!");
    }
};

export { index, store, destroy };