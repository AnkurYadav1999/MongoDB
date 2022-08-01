const dbconnection = require('./mongodb')

const insert = async () => {
    const db = await dbconnection();
    const result = await db.insert(
        [
            {name:'ABZ2',brand:'cisco',price:2999,category:'wellness'},
            {name:'XCV2',brand:'cisco',price:4999,category:'Neural Network'}
        ]
        
    );

    if(result.acknowledged){
        console.log("Data Inserted");
    }
}

insert();
