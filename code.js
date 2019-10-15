new Vue({
  el:"#vue-app",

methods:{

click:function(){
}

}
})

    $(document).ready(function(){
      $('.slider').bxSlider();
    });

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'koyu mavi ', 
    message1: 'koyu gri'
  }
})

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
    getDropdownValues(keyword) {
      console.log('You could refresh options by querying the API with '+keyword);
    }
  }
});


