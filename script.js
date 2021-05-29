function pilihanComputer(){
    var comp = Math.random();

    if(comp < 0.34)return 'gajah';
    if(comp >=0.34 && comp <0.67) return 'orang';
    return 'semut';
}
function getHasil(comp,player){
    var hasil = '';
    if(player == comp)return  'SERI';
    if(player=='gajah')return  (comp=='orang')? 'MENANG' : 'KALAH';//kita kertas komputer pilih gunting maka kita kalah selain itu  kita menang
    if(player=='orang')return (comp =='gajah')? 'KALAH' : 'MENANG';   
   if(player=='semut') return (comp == 'orang')? 'KALAH' : 'MENANG';
       
}
// putar
function putar(){
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah','semut','orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
    imgComputer.setAttribute('src','img/'+gambar[i++]+'.png');
        if(i == gambar.length) i = 0;
    },100)
}
//! biar ga loop manual function
const pilihan = document.querySelectorAll('li img');

pilihan.forEach(function(pill){
pill.addEventListener('click',function(){
    const pilihanComp = pilihanComputer();
   const pemain = pill.className;
  const hasil = getHasil(pilihanComp,pemain);
  
  putar();
  info = '';
  setTimeout(function(){
    //   mengubah gambar pilihan komputer
  const komputer = document.querySelector('.img-komputer');
  komputer.setAttribute('src','img/'+pilihanComp+'.png');
    //   memasukan hasil kedalam html
    
    const info = document.getElementsByClassName('info')[0];
    info.innerHTML= hasil;
  },1000)

})
});

//! akhir loop 
// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function(){
//    const pilihanComp = pilihanComputer();
//    const pemain = pGajah.className;
//   const hasil = getHasil(pilihanComp,pemain);
  
// //   mengubah gambar pilihan komputer
//   const komputer = document.querySelector('.img-komputer');
//   komputer.setAttribute('src','img/'+pilihanComp+'.png');
  
  
// //   memasukan hasil kedalam html
// const info = document.getElementsByClassName('info')[0];
// info.innerHTML= hasil;

// })