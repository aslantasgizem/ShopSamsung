
//Resimli slider kısmı items kısmında Photos dosyasındaki resimler bulunmaktadır.
new Vue({
    el: '#app',
    data: {
      count: 0,
      items: [
            {
              src: 'Photos/1.PNG',
              
            },
            {
              src: 'Photos/2.PNG'
            },
            {
              src: 'Photos/3.PNG'
            },
            {
              src: 'Photos/4.PNG'
            },
            {
              src: 'Photos/5.PNG'
            },
            {
              src: 'Photos/77.PNG'
            },
            {
              src: 'Photos/9.PNG'
            },
           
            {
              src: 'Photos/10.PNG'
            },
            
            {
              src: 'Photos/12.PNG'
            },
            {
              src: 'Photos/13.PNG'
            },
            {
              src: 'Photos/14.PNG'
            },
            {
              src: 'Photos/15.PNG'
            }
          ],
          direction: 'forward',
          frame: 2
    },
    created(){
        var slide = setInterval(()=>this.slideLoop(this.direction),2000)
    },
    methods:{
        slideLoop(pass) {
             let steps = this.items.length - this.frame
          if(this.count >= steps & pass == "forward"){
            this.direction = "backward"
          this.previous()
          return
        }
        if(this.count <= steps & pass == "backward"){
            if(this.count <= 0){
              this.count = 0
              this.direction = "forward"
            this.next();
            return
          }
            this.previous()
          return
        }
        if(this.count < steps & pass == "forward"){
            if(this.count < 0){
              this.resetScroll()
            return
          } else if(this.count == 0){
              this.next()
            return
          }
            this.next()
          return
        }
        this.resetScroll()
      },
      resetScroll(){
          this.count = 0
        this.direction = "forward"
        this.scroll("reset")
      },
        previous() {
          this.count--
        this.scroll("previous")
          },
      next() {
          this.count++
        this.scroll("next")
      },
      scroll(position) {
          let el = document.getElementById("slide")
        let pos = 0;
        let id = setInterval(frame, 5);
        let num = this.items.length - this.frame
        let width = 250;
        let resize = num * width
        let check = position == "reset" ? resize : width 
            function frame() {
              if (pos == check) {
                clearInterval(id);
              } else {
                pos += 5; 
                if(position == 'next'){
                    el.scrollLeft += 5
                }else{
                    el.scrollLeft -= 5
                }  
              }
            }
      }
    }
  })
  //Arama Butonuna basınca çıkıcak olan mesaj.
  var canlıdestek8 = new Vue({
    el: '#canlıdestek8',
    data: {
      name: 'Vue.js'
    },
    methods: {
      greet: function (event) {
        alert('Lütfen model kodunuzu kontrol ediniz.')
  
      }
    }
  })
  
  //Başlat butonuna basınca çıkıcak olan mesaj
  var canlıdestek14 = new Vue({
    el: '#canlıdestek14',
    data: {
      name: 'Vue.js'
    },
    methods: {
      greet: function (event) {
        alert('Lütfen kategori seçiminizi yapınız.')
       
       
      }
    }
  })