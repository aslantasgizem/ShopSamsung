new Vue({
  el:"#vue-app",

methods:{

click:function(){
}

}
})

//Burda plugin aranıyor.
    $(document).ready(function(){
      $('.slider').bxSlider();
    });



// Reference : https://github.com/romainsimon/vue-simple-search-dropdown
//Dropdown menünün içine yazılacak olan Ürünler listelendi.    

Vue.use(Dropdown);
new Vue({
  el: '#app3',
  data () {
    return {
      options: [
      {name:"M30s-Pasifik Mavisi "},
      {name:"M30s-Karbon Siyahı"},
      {name:"M30s-Köpük Beyazı"},
      {name:"Note10-(Duman Siyahı)"},
      {name:"Note10-Ay Tozu Grisi"},
      {name:"Note10-Fildişi Beyazı"},
      {name:"S10-Plus-Seramik Beyaz"},
      {name:"S10e-Prizma Yeşil"},
      {name:"SM-M205FZBATUR "},
      {name:"Watch-Active2-Siyah"},
      {name:"Watch-Active2-Aluminyum"},
      {name:"LC34J791WTMXUF"},
      {name:"Powerbot-Robot-Süpürge"},
      {name:"AX34R3020WW/SK"},
      {name:"A30s-Yeşil"},
      {name:"Tab-S6-Duman Siyahı"},
      {name:"M10-Mavi"},
      {name:"49-RU7300-TV"},
      {name:"65-RU7300-TV"},
      {name:"A80-Açık Gri"},
      {name:"A50-Prizma Siyah"},
      {name:"32-CF39M-LED"},
      {name:"MS23F300EEK-Mikrodalga"},
      {name:"RT38K5100WW-Buzdolabı"},
      {name:"Watch-Active-Siyah"},
      {name:"AR12RSFSCWK/SK-Klima"},
      {name:"65-Q900R-TV"},
      {name:"NV70M3541RS/TR-Fırın"},
      {name:"RT43K6000WW-Buzdolabı"},
      {name:"WW90M74FNOA/AH-Çamaşır"},
      {name:"Tab-S5e"},
      {name:"Watch-Pembe"},
      {name:"MS23K3555ES-Mikrodalga"},
      {name:"WW80K5410UW-Çamaşır"},
      {name:"DW60M6072FS-Bulaşık"}

      ],
      selected: { name: null}
    }
  },
  
  methods: {
    validateSelection(selection) {
      this.selected = selection;
      console.log(selection.name+' has been selected');
    },
    // Baş harf seçimine göre ürünler listeleniyor.
    getDropdownValues(keyword) {
      console.log('You could refresh options by querying the API with '+keyword);
    }
  }
});



// modal bileşeni kaydediliyor.
Vue.component('modal', {
  template: '#modal-template'
})

//  app başlatılıyor.
new Vue({
  el: '#app4',
  data: {
    showModal: false
  }
})

// Arttır fonksiyonu satın al butonuna basınca sepetteki ürün sayısını arttırıyor.
function arttir(){
 
var sonuc=document.getElementById("sonuc");
sonuc.value=Number(sonuc.value)+1;
}



// Reference: https://ceaksan.com/tr/vue-js-nedir/
//el etkileşimli alanın Vue’ya iletildiği alan. data'da iletilecek mesaj barındırılıyor.

new Vue({
    el:'#vue-app1',
    data: {
        message: 'Favorilere Ekle'
        
       
    },
})    
new Vue({
    el:'#vue-app2',
    data: {
        message1: 'Samsung Galaxy M30s (Çift SIM) Karbon Siyahı'
    },
})
new Vue({
    el:'#vue-app3',
    data: {
        message: 'Favorilere Ekle'
        
       
    },
})    
new Vue({
    el:'#vue-app4',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app5',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app6',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app7',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app8',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app9',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app10',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app11',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app12',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app13',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app14',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app15',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app16',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app17',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app18',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app19',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app20',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app21',
    data: {
        message: 'Favorilere Ekle',
       
    },
})        
new Vue({
    el:'#vue-app22',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app23',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app24',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app25',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app26',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app27',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app28',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app29',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app30',
    data: {
        message: 'Favorilere Ekle',
       
    },
})
new Vue({
    el:'#vue-app31',
    data: {
        message1: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app32',
    data: {
        message2: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app33',
    data: {
        message3: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app34',
    data: {
        message4: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app35',
    data: {
        message5: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app36',
    data: {
        message6: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app37',
    data: {
        message7: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app38',
    data: {
        message8: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app39',
    data: {
        message9: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app40',
    data: {
        message10: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app41',
    data: {
        message11: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app42',
    data: {
        message12: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app43',
    data: {
        message13: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app44',
    data: {
        message14: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app45',
    data: {
        message15: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app46',
    data: {
        message16: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app47',
    data: {
        message17: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app48',
    data: {
        message18: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app49',
    data: {
        message19: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app50',
    data: {
        message20: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app51',
    data: {
        message21: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app52',
    data: {
        message22: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app53',
    data: {
        message23: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app54',
    data: {
        message24: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app55',
    data: {
        message25: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app56',
    data: {
        message26: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app57',
    data: {
        message27: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app58',
    data: {
        message28: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app59',
    data: {
        message29: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app60',
    data: {
        message30: 'Favorilere Ekle',
       
    },
})    

new Vue({
    el:'#vue-app61',
    data: {
        message31: 'Samsung Galaxy M30s (Çift SIM) Pasifik Mavisi',
       
    },
})    

new Vue({
    el:'#vue-app62',
    data: {
        message32: 'Samsung Galaxy M30s (Çift SIM) Köpük Beyazı',
       
    },
})    

new Vue({
    el:'#vue-app63',
    data: {
        message33: 'Samsung Galaxy Note10 256GB (Duman Siyahı)',
       
    },
})    

new Vue({
    el:'#vue-app64',
    data: {
        message34: 'Samsung Galaxy Note10+ 256GB (Ay Tozu Grisi)',
       
    },
})    

new Vue({
    el:'#vue-app65',
    data: {
        message35: 'Samsung Galaxy Note10+ 256GB (Fildişi Beyazı)',
       
    },
})    

new Vue({
    el:'#vue-app66',
    data: {
        message36: ' Samsung Galaxy S10 Plus 512GB (Seramik Beyaz)',
       
    },
})    

new Vue({
    el:'#vue-app67',
    data: {
        message37: 'Samsung Galaxy S10e 128GB (Prizma Yeşil)',
       
    },
})    

new Vue({
    el:'#vue-app68',
    data: {
        message38: 'Samsung Galaxy M20 32GB SM-M205FZBATUR ',
       
    },
})    

new Vue({
    el:'#vue-app69',
    data: {
        message39: 'Samsung Galaxy Watch Active2 Siyah ',
       
    },
})    

new Vue({
    el:'#vue-app70',
    data: {
        message40: 'Samsung Galaxy Watch Active2 Aluminyum',
       
    },
})    

new Vue({
    el:'#vue-app71',
    data: {
        message41: 'Samsung LC34J791WTMXUF QHD Monitör',
       
    },
})    

new Vue({
    el:'#vue-app72',
    data: {
        message42: 'Samsung Powerbot Robot Süpürge',
       
    },
})    

new Vue({
    el:'#vue-app73',
    data: {
        message43: 'Samsung AX34R3020WW/SK Hava Temizleyici',
       
    },
})    

new Vue({
    el:'#vue-app74',
    data: {
        message44: 'Samsung Galaxy A30s 64GB Çift SIM (Yeşil)',
       
    },
})    

new Vue({
    el:'#vue-app75',
    data: {
        message45: 'Samsung Galaxy Tab S6 Wifi (Duman Siyahı)',
       
    },
})    

new Vue({
    el:'#vue-app76',
    data: {
        message46: 'Samsung Galaxy M10 16GB Mavi',
       
    },
})    

new Vue({
    el:'#vue-app77',
    data: {
        message47: 'Samsung 49" RU7300 Curved 4K UHD TV',
       
    },
})    

new Vue({
    el:'#vue-app78',
    data: {
        message48: ' Samsung 65" RU7300 Curved 4K UHD TV',
       
    },
})    

new Vue({
    el:'#vue-app79',
    data: {
        message49: 'Samsung Galaxy A80 128GB (Açık Gri)',
       
    },
})    

new Vue({
    el:'#vue-app80',
    data: {
        message50: 'Samsung Galaxy A50 64GB (Prizma Siyah)',
       
    },
})    

new Vue({
    el:'#vue-app81',
    data: {
        message51: 'Samsung 32" CF39M Ekran',
       
    },
})    

new Vue({
    el:'#vue-app82',
    data: {
        message52: 'Samsung MS23F300EEK Fırın',
       
    },
})    

new Vue({
    el:'#vue-app83',
    data: {
        message53: 'Samsung RT38K5100WW Buzdolabı',
       
    },
})    

new Vue({
    el:'#vue-app84',
    data: {
        message54: ' Samsung Galaxy Watch Active (Siyah)',
       
    },
})    

new Vue({
    el:'#vue-app85',
    data: {
        message55: 'Samsung AR12RSFSCWK/SK Klima',
       
    },
})    

new Vue({
    el:'#vue-app86',
    data: {
        message56: 'Samsung 65” Q900R QLED 8K TV',
       
    },
})    

new Vue({
    el:'#vue-app87',
    data: {
        message57: 'Samsung NV70M3541RS/TR Fırın',
       
    },
})    

new Vue({
    el:'#vue-app88',
    data: {
        message58: 'Samsung RT43K6000WW 454 L',
       
    },
})    

new Vue({
    el:'#vue-app89',
    data: {
        message59: 'Samsung WW90M74FNOA/AH Quick',
       
    },
})    

new Vue({
    el:'#vue-app90',
    data: {
        message60: ' Samsung Galaxy Tab S5e',
       
    },
})    

new Vue({
    el:'#vue-app91',
    data: {
        message61: 'Samsung Galaxy Watch Pembe Altın',
       
    },
})    

new Vue({
    el:'#vue-app92',
    data: {
        message62: ' Samsung MS23K3555ES Solo Mikrodalga',
       
    },
})    

new Vue({
    el:'#vue-app93',
    data: {
        message63: 'Samsung WW90M74FNOA/AH Quick',
       
    },
})    

new Vue({
    el:'#vue-app94',
    data: {
        message64: 'Samsung DW60M6072FS Bulaşık Makinesi',
       
    },
})    

new Vue({
    el:'#vue-app95',
    data: {
        message65: 'Samsung Galaxy M30s (Çift SIM) Karbon Siyahı',
       
    },
})    

new Vue({
    el:'#vue-app96',
    data: {
        message66: 'Samsung Galaxy M30s (Çift SIM) Köpük Beyazı',
       
    },
})    

new Vue({
    el:'#vue-app97',
    data: {
        message67: 'Samsung Galaxy M30s (Çift SIM) Pasifik Mavisi',
       
    },
})    

new Vue({
    el:'#vue-app98',
    data: {
        message68: ' Samsung Galaxy Note10+ 256GB (Ay Tozu Grisi)',
       
    },
})    

new Vue({
    el:'#vue-app99',
    data: {
        message69: 'Samsung Galaxy Note10 256GB (Duman Siyahı)',
       
    },
})    

new Vue({
    el:'#vue-app100',
    data: {
        message70: 'Samsung Galaxy Note10+ 256GB (Fildişi Beyazı)',
       
    },
})    

new Vue({
    el:'#vue-app101',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app102',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app103',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    

