let vm = new Vue({
  el: '#app',
  data(){
      return{
          citys:null,
          selectedCity:'',
          percentage:'',
          send:false,
          data:null
      }
  },
  mounted(){
      this.getCityJson()
  },
  methods:{
      getData(){
        axios.get("./data.json")
        .then(res=>{
            this.data=res.data
            if (!this.selectedCity && !this.percentage){
              this.send=false
            }else this.send=true
        })
      },
    getCityJson(){
          axios.get("./citys.json")
              .then(res=>{
                  this.citys=res.data.citys
              })
      }
  }
})