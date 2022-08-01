const dbconnection = require('./mongodb')


const deleteData = async ()=>{
    let data=await dbconnection();
    let result = await data.deleteOne({name:"XCV2"});
    console.log(result);
}

deleteData();