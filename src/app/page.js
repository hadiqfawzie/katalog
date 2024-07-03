import Image from "next/image";
import Card from "./components/Card";

export default function Home() {
  const barang = [
    {"foto" : "pbj/desa/kamera", "deskripsi" : "Kamera Pengaman joss gandoss", "bintang" : "4.6", "harga" : "2.500.000", "diskon" : "10", "hargaAsal" : "3.500.000"}, 
    {"foto" : "pbj/desa/meja-kerja-1", "deskripsi" : "Meja Kantor istimewa kuat wes", "bintang" : "4.7", "harga" : "1.750.000", "diskon" : "15", "hargaAsal" : "2.000.000"}, 
    {"foto" : "pbj/desa/meja-kerja-2", "deskripsi" : "Meja Kantor maut...", "bintang" : "4.8", "harga" : "2.000.000", "diskon" : "10", "hargaAsal" : "2.200.000"}, 
    {"foto" : "pbj/desa/mejakerjahitam", "deskripsi" : "Meja Kantor maut... hitam", "bintang" : "4.8", "harga" : "2.000.000", "diskon" : "10", "hargaAsal" : "2.200.000"},
    {"foto" : "pbj/desa/meja-kursi-rapat", "deskripsi" : "Meja kursi rapat enjoy", "bintang" : "5.0", "harga" : "7.000.000", "diskon" : "5", "hargaAsal" : "7.350.000"},
    {"foto" : "pbj/desa/meja-rapat-oval", "deskripsi" : "Meja rapat oval yahuy", "bintang" : "5.0", "harga" : "5.000.000", "diskon" : "15", "hargaAsal" : "5.750.000"},
    {"foto" : "pbj/desa/nama-kantor-desa", "deskripsi" : "Nama kantor desa estetik", "bintang" : "5.0", "harga" : "17.000.000", "diskon" : "3", "hargaAsal" : "17.500.000"},
    {"foto" : "pbj/desa/tempat-sampah", "deskripsi" : "Tempat sampah anti pecah nan menawan", "bintang" : "5.0", "harga" : "500.000", "diskon" : "3", "hargaAsal" : "550.000"},

  ]

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-4">
       {barang.map((brg) => (
          <Card foto={brg.foto} deskripsi={brg.deskripsi} bintang={brg.bintang} harga={brg.harga} diskon={brg.diskon} hargaAsal={brg.hargaAsal} />
        ))}
        {/* <Card /> */}
      </div>

      
    </>
  );
}
