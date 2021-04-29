const express = require('express')
//import bodyParser from 'body-parser';
const app = express()
const port = 3001
let data = [{id:19617,name:"Chanda", course: "engineering",yearOfGraduation:2021},
{id:19616,name:"swati", course: "engineering",yearOfGraduation:2021},
{id:19608,name:"juhi", course: "engineering",yearOfGraduation:2021}
];
//app.use(bodyParser.json());
// let jsonData = JSON.stringify(data);
// const objData = JSON.parse(jsonData);
app.use(express.json());

// app.get('/', (req, res) => {
//     res.send(objData);
//   })

app.get('/data', (req, res) => {
    res.json((data));
});
//delete data;
// app.get('/', (req, res) => {
//     res.json(((data)));
// })
// app.delete('/:name',(req,res)=>{
//     res.send(objData);
// })
app.get('/data/:id',(req,res) => {
    let User=data.find(item => item.id == parseInt(req.params['id']));    
    if(!User)res.status(404).send("Not Found");
    res.send(User);
});

app.delete('/data/:id',(req,res)=>{
    const User=data.find(item => item.id == parseInt(req.params['id']));    
    const index=data.indexOf(User);    
    data.splice(index,1);    
    res.send(data);
});

// app.get('/data', (req, res) => {
//     delete data[1]; // it removes only index1 elements but still array's length is 3 because delete removes a value by the key. 
//     res.send(data);
//   })
// app.get('/data/:id', (req,res) => {
//     let newArray = data.filter(item => item.id <= parseInt(req.params['id']) );
//     if(!newArray) res.status(404).send("Not Found");
//     res.send(newArray);
// })

app.post('/data',(req,res) => {
    const user= {
    id : data.length+1,
    name : req.body.name,
    course : req.body.course,
    yearOfGraduation : req.body.yearOfGraduation,
    }
    data.push(user);
    // if(!req.body.name){
    //     res.status(400)
    //     return res.json({error:"name is required"});
    // }
    res.json(user);
});
app.put('/data/:id',(req,res) => {
    let User=data.find(item => item.id == parseInt(req.params['id'])); 
    let index=data.indexOf(User);   
    if(index >= 0){
        let std = data[index];
        std.name = req.body.name;
        //std.course= req.body.course;
       // std.yearOfGraduation = req.body.yearOfGraduation;
        res.json(std);
    }else{
        res.status(404).json({Error:"id not found"});
    }
});
app.listen(port, () => {
    console.log(3000);
})
