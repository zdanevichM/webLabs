let app = new Vue({
    el: "#app",
    data: {
        base_login: '@all',
        aName: 'none',
        aLogin: 'none',
        subscribers: '0',
        subscribed: '0',
        records: '0',
        data_post_list: data_iteam
    },
    computed:{
        GetSortForLoginPost: function(){
            let avtor = this.base_login;

            return this.data_post_list.filter( pos => {
                if(avtor === '' || avtor === '@all') {
                    this.aName = 'Все посты';
                    this.aLogin = '@all';
                    this.subscribers = 0;
                    this.subscribed = 0;
                    this.records = data_iteam.length;
                    return true;
                }
                else {
                    if (pos.author === avtor) {
                        listAvtor.forEach(listArray => {
                            if (listArray.login === pos.author) {
                                this.aName = listArray.name;
                                this.aLogin = listArray.login;
                                this.subscribers = listArray.subscribers;
                                this.subscribed = listArray.subscribed;
                                this.records = listArray.records;
                            }
                        });
                    }
                    return pos.author === avtor;
                }
            })
        }
    }
});