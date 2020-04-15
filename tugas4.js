function tinggibadan(){
  var adi = 170;
  var budi = 165;
  var charli = 155;

  if(adi>budi){
    if(adi>charli){
      console.log("adi merupakan siswa dengan tinggi badan tertinggi");
    }else{
      console.log("adi merupakan siswa dengan tinggi badan tertinggi kedua");
    }
  }else{
    if(adi<charli){
      console.log("adi merupakan siswa dengan tinngi badan terpendek");
    }else{
      console.log("adi merupakan siswa dengan tinggi badan terpendek kedua");
    }
  }
  if(budi<adi){
    if(budi>charli){
      console.log("budi lebih pendek dari adi dan leih tinggi dari charli");
    }else{
      console.log("budi lebih tinggi dari adi dan lebih pendek dari charli");
    }
  }else{
    console.log("budi disarankan untuk pengecekan tinggi badan kembali");
    }
  if (charli<adi) {
    if (charli<budi) {
      console.log("charli merupakan siswa dengan tinggi badan terpendek");
    } else {
      console.log("charli merupakan siswa dengan tinggi badan terpendek kedua");
    }
  } else {
    if (charli>budi) {
      console.log("charli merupakan siswa dengan tinggi badan tertinggi");
    } else {
      console.log("charli merupakan siswa dengan tinggi badan tertinggi kedua");
    }
  }

  }

tinggibadan();
