
const grid = new gridjs.Grid({
    search:true,
    sort:true,
    resizable:true,
    pagination:{
        limit:15
    },

    style:{
        th:{
            'background-color': 'gold',
            'color':'white',
            'text-align':'center'
        },
        td:{
            'text-align':'center'
        }
    },
    columns: ['Id','Name', 'Email', 'Gender','Status'],
    server: {
      url: 'https://gorest.co.in/public/v2/users',
      then: data =>{
        return data.map(item =>[ 
        item.id,
        item.name,   
        item.email,
        item.gender,
        item.status
    ])
    } 
}
  }).render(document.getElementById('wrapper'));;

/*new gridjs.Grid({
    columns:['Name','Email','Phone Number'],
    data:[
       ["JUAN", "JUAN@GMAIL.COM", "(324) 01 596 2447"],
       ["JUAN", "JUAN@GMAIL.COM", "(324) 01 596 2447"],
       ["JUAN", "JUAN@GMAIL.COM", "(324) 01 596 2447"],
       ["JUAN", "JUAN@GMAIL.COM", "(324) 01 596 2447"],
       ["JUAN", "JUAN@GMAIL.COM", "(324) 01 596 2447"],
    ]
}).render(document.getElementById('wrapper'));*/