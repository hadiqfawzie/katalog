import Image from "next/image";
import Card from "./components/Card";
import supabase from "../../utils/supabase";

export default async function Home() {
  const { data : katalog, error } = await supabase.from('katalog').select('')

  console.log(katalog);
  
  if (error) {
    console.log(error.message);
  }
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-4">
       {katalog.map((brg,idx) => (
          
          <Card key={idx} foto={brg.foto} deskripsi={brg.deskripsi} 
                bintang={brg.bintang} harga={brg.harga} diskon={brg.diskon} 
                hargaAsal={brg.hargaAsal} 
                />        
        ))}
      </div>           
    </>
  );
}
