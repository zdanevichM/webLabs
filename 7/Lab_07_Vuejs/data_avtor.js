let listAvtor = [
    {
        'name': 'Юзьеров Константин Агапович',
        'login': '@OtherUserAccountName',
        'subscribers': '5',
        'subscribed': '4',
        'records': '108'
    },
    {
        'name': 'Пример2',
        'login': '@Primer2',
        'subscribers': '11',
        'subscribed': '2',
        'records': '1'
    },
    {
        'name': 'Пример3',
        'login': '@Polzovatel3',
        'subscribers': '253',
        'subscribed': '21',
        'records': '2'
    },
    {
        'name': 'Пользователь 4',
        'login': '@Primer4',
        'subscribers': '34',
        'subscribed': '7',
        'records': '3'
    }

];

function OptionsListCreated (){
    let Select = document.querySelector('#autor-select')
    

    listAvtor.forEach(el =>{
        let iteam = document.createElement("option");
        iteam.value = el.login;
        iteam.innerHTML = el.name;

        Select.appendChild(iteam);
    });
};

OptionsListCreated();
