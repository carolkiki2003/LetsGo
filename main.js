let vm = new Vue({
  el: '#app',
  data(){
      return{
          citys:null
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
