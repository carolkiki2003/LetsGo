let vm = new Vue({
  el: '#app',
  data(){
      return{
          citys:null,
          selectedCity:'臺北市',
          percent:10,
      }
  },
  mounted(){
      this.getData()
  },
  methods:{
      getData(){
          axios.get("./citys.json")
              .then(res=>{
                  this.citys=res.data.citys
              })
      }
  }
})
