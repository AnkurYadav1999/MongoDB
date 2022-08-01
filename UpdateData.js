const dbconnection = require('./mongodb')


const updateData = async () => {
    let data = await dbconnection();
    let result=await data.updateOne(
        {name:"ABZ2"},{ 
            $set:{name:"LCR5"}
        }
        );
    console.log(result);
}

updateData();