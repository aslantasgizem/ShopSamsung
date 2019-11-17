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
  
  new Vue({
    el:'#vue-app104',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app105',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app106',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app107',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app108',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app109',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app110',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app111',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app112',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app113',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app114',
    data: {
        message: 'Favorilere Ekle',
       
    },
})    
new Vue({
    el:'#vue-app115',
    data: {
        message75: 'Samsung 43 RU7090 4K UHD SMART TV',
       
    },
})    
new Vue({
    el:'#vue-app116',
    data: {
        message76: 'Samsung 50 RU7090 4K UHD SMART TV',
       
    },
})    

new Vue({
    el:'#vue-app117',
    data: {
        message77: ' Samsung 55  RU7090 4K UHD SMART TV',
       
    },
})    

new Vue({
    el:'#vue-app118',
    data: {
        message78: 'Samsung 65 RU7090 4K UHD SMART TV',
       
    },
})    

new Vue({
    el:'#vue-app119',
    data: {
        message79: 'Samsung 65  Q900R QLED 8K TV',
       
    },
})    

new Vue({
    el:'#vue-app120',
    data: {
        message80: 'Samsung 75  Q900R QLED 8K TV',
       
    },
})    

new Vue({
    el:'#vue-app121',
    data: {
        message81: 'Samsung 82  RU7090 4K UHD SMART TV',
       
    },
})    

new Vue({
    el:'#vue-app122',
    data: {
        message82: ' Samsung 98  Q900R QLED 8K TV ',
       
    },
})    

new Vue({
    el:'#vue-app123',
    data: {
        message83: ' Samsung  Q70R Harman Kardon Soundbar',
       
    },
})    

new Vue({
    el:'#vue-app124',
    data: {
        message84: 'Samsung 43  RU7100 4K UHD SMART TV',
       
    },
})    

new Vue({
    el:'#vue-app125',
    data: {
        message85: 'Samsung 43  RU7400 4K UHD SMART TV',
       
    },
})    

new Vue({
    el:'#vue-app126',
    data: {
        message86: ' Samsung  49 RU7100 4K UHD SMART TV',
       
    },
})    

new Vue({
    el:'#vue-app127',
    data: {
        message87: 'Samsung 49  RU7300 Curved  4K UHD SMART TV',
       
    },
})    

new Vue({
    el:'#vue-app128',
    data: {
        message88: ' Samsung 50  RU7400 4K UHD TV ',
       
    },
})    

new Vue({
    el:'#vue-app129',
    data: {
        message89: ' Samsung 55  RU7100 4K UHD TV ',
       
    },
})    

new Vue({
    el:'#vue-app130',
    data: {
        message90: 'Samsung 55 RU7400 4K UHD TV',
       
    },
})    

new Vue({
    el:'#vue-app131',
    data: {
        message91: 'Samsung 55  RU7440 4K UHD TV',
       
    },
})    

new Vue({
    el:'#vue-app132',
    data: {
        message92: 'Samsung 58 RU7100 4K UHD TV ',
       
    },
})    

new Vue({
    el:'#vue-app133',
    data: {
        message93: 'Samsung 65  RU7100 4K UHD SMART TV',
       
    },
})    

new Vue({
    el:'#vue-app134',
    data: {
        message94: 'Samsung 65 RU7300 Curved 4K UHD SMART TV',
       
    },
})


//Footer kısmının componenti
Vue.component('siteharitasıcomponent', {
   
    template: '<div class="footer-section-siteharitası"><h4 class="site"><span>Site Haritası</span></h4><li class="altmenu1"><a class="altmenu1-a" href="#">Samsung Hakkında</a></li><li class="altmenu1"><a class="altmenu1-a" href="#">Yatırımcılar</a></li><li class="altmenu1"><a class="altmenu1-a" href="#">Basın Bilgileri</a></li><li class="altmenu1"><a class="altmenu1-a" href="Magazalar.html">Mağazalar</a></li><li class="altmenu1"><a class="altmenu1-a" href="#">Bize Ulaşın</a></li><li class="altmenu1"><a class="altmenu1-a" href="#">Sosyal Sorumluluk</a></li>              </div>'
  })
  new Vue({ el: '#siteharitası' })

  Vue.component('faydalıbilgilercomponent', {
      template:'<div class="footer-section-faydalıbilgiler"><h4 class="site"><span>Faydalı Bilgiler</span></h4><li class="altmenu1"><a class="altmenu1-a" href="#">Samsung Mağazaları</a></li><li class="altmenu1"><a class="altmenu1-a" href="#">Bize Ulaşın</a></li><li class="altmenu1"><a class="altmenu1-a" href="Kampanyalar.html">Kampanyalar</a></li></div>'
  })
  new Vue({ el: '#faydalıbilgiler' })

Vue.component('destekcomponent', {
      template:'<div class="footer-section-destek"><h4 class="site"><span>Desteğe İhtiyacınız Var Mı?</span></h4><li class="altmenu1"><a class="altmenu1-a" href="Tel.html">Telefon</a></li><li class="altmenu1"><a class="altmenu1-a" href="CanlıDestek.html">Canlı Destek</a></li><li class="altmenu1"><a class="altmenu1-a" href="Eposta.html">E-Posta</a></li><li class="altmenu1"><a class="altmenu1-a" href="SıkSorulanSorular.html">Sık Sorulan Sorular</a></li></div>'
  })
  new Vue({ el:'#destek' })

Vue.component('sosyalmedyacomponent', {
      template:'<div class="footer-section-sosyalmedya"><h4 class="site"><span>Sosyal Medyada Takip Edin</span></h4><a href="https://www.facebook.com/SamsungTurkey/"><img style="height:55px; width:55px;" class="facebook" src="Photos/indir.png" alt="facebook"> </a><a href="https://twitter.com/SamsungTurkiye" >    <img style="height:55px; width:55px;" class="twitter" src="Photos/indir (1).png" alt="twitter"></a><a href="https://www.youtube.com/user/SamsungTurkiye" > <img style="height:55px; width:55px;" class="youtube" src="Photos/indir (2).png" alt="youtube">                   </a><a href="https://www.instagram.com/SamsungTurkiye/"><img style="height:55px; width:55px;" class="instagram" src="Photos/indir (3).png" alt="instagram"></a></div>'
  })
  new Vue({ el:'#sosyalmedya' })

//Footercontent kısmının componenti
Vue.component('footercontentcomponent', {
      template:'<div class="footer2-content"><div class="footer2-section"> <li class="altmenu"><a class="altmenu-a" href="#">Gizlilik ve Güvenlik</a></li> <li class="altmenu"><a class="altmenu-a"  href="#">Sosyal Sorumluluk</a></li><li class="altmenu"><a class="altmenu-a" href="Erisilebilirlik.html">Erişebilirlik</a></li><li class="altmenu"><a  class="altmenu-a" href="#">Kullanım Şartları</a></li></div><div class="footerı2-ımage"><img class="vısa" src="Photos/ind4.png" alt="vısaa"><img class="mastercard" src="Photos/ind.png" alt="mastercardd"><img class="amerıcanexpress" src="Photos/ind1.png" alt="amerıcan"><img class="payu" src="Photos/ind2.png" alt="pay"></div><div class="footer2-text"><p class="altmenuyazı">Bu web sitesi en iyi Chrome, Firefox, Safari, Edge gibi güncel tarayıcılar ile görüntülenir.</p></div><div class="databinding"><input class="input-group-field" type="email" placeholder="E-posta adresiniz" style="font-family:SamsungSharpSans-Medium; border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;height: 50px;width: 250px;margin-right: -100px; ;" required><a class="kaydol"  href="#">Kaydol</a></div><div class="robotdegilim"><input type="checkbox" id="checkboxrobot" style="height: 25px;width: 25px;margin-top: 25px;margin-left: 25px;;" v-model="checked"><label for="checkbox" style="font-size: 18;margin-left: 35px;;" >Ben Robot Değilim</label><img  src="robotdegilimımg.PNG" style="margin-left:240px; margin-top:-65px;width:60px; height:60px;" /></div><div class="footer2-text2"></div><p class="altmenuyazı">Copyright © 1995-2019 SAMSUNG All Rights Reserved.</p></div><div class="designedby"><li class="designed"><a class="designed-a" href="#">designed by</a></li><img class="kreatif" src="Photos/kreatif-logo.png" alt="kreaatif"></div></div>'
  })
  new Vue({ el:'#footercontent' })

//Üst menüdeki üye kısmının componenti
Vue.component('dropdownuyeolcomponent', {
    template:'<ul class="menu5"><li class="uyegirisi1"><a class="uyegirisi" href="#"><img class="icon1" src="Photos/header-user-icon.png" ></a><ul class="uyegirisi2"><li><a class="uyegirisi3" href="uyeol.html">Üye Ol</a> </li><li><a class="uyegirisi3" href="uyegirisi.html">Üye Girişi</a> </li><li><a class="uyegirisi3" href="index.html" >Şifremi Unuttum</a> </li> <li><a class="uyegirisi3" href="#">İstek Listesi</a></li></ul> </li></ul>'
})
new Vue({ el:'#dropdownuyeol' })

//Samsung Logo componenti
Vue.component('samsunglogocomponent',{
    template:'<li><a href="file:///C:/Users/Tu%C4%9F%C3%A7e%20Gizem/Desktop/Samsung.com/anasayfa.htm"><img class="sms" alt="samsung" height="19" src="Photos/samsung-logo.png" width="129" /></li>'
})
new Vue({ el:'#samsunglogo' })

//galaxy m serisi ürününü detay sayfasındaki 80 ve 120 derece butonlarına basıldığında konumun aynı kalıp resmin değişmesi 
var img = document.getElementById("img-area");
	function genisaci(){
		img.src='https://images.samsung.com/is/image/samsung/tr-feature-galaxy-m30s-m307-184748593?$FB_TYPE_E_JPG$';
	}
	function ultragenisaci(){
		img.src='https://images.samsung.com/is/image/samsung/tr-feature-galaxy-m30s-m307-184748594?$FB_TYPE_E_JPG$';
    }
//açılır kapanır footer
new Vue({
    el: '#demo',
    data: {
         show: true
     }
})

//ürün sayfasındaki "Sar Bilgisi" üstüne gelindiğinde çıkan mesaj
new Vue({
    el:'#sarb2',
    data: {
        message95: 'Yeni Bir Pencerede Aç',
       
    },
})


Vue.use(Dropdown);
new Vue({
  el: '#app9',
  data () {
    return {
      options: [
        { name: 'İsim: A dan Z ye', id: 'isim' },
        { name: 'İsim: Z den A ya', id: 'isim1' },
        { name: 'Fiyat: Düşük --> Yüksek', id: 'fiyat' },
        { name: 'Fiyat: Yüksek --> Düşük', id: 'fiyat1' },
        { name: 'Özel Sıralama', id: 'ö' },
                  
      ],
      selected: { name: null, id: null }
    }
  },
  
});


//Checkbox 
// Kontrol edilmesi:
vm.toggle === 'yes'
// Kontrol edilmemesi:
vm.toggle === 'no'




// register modal component
Vue.component('modal', {
template: '#modal-template'
})

// start app
new Vue({
el: '#app2',
data: {
showModal: false
}
})

