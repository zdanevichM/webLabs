let vueApp = new Vue({
    el: "#app",
    data:{
        elements: null
    },
    mounted(){
        axios
        .get('https://isidea.ru/rgups_data.json')
        .then(respose => this.elements = respose.data)
    }
})