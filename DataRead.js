const dbconnection = require('./mongodb')


// This is using then and catch in Promise

// dbconnection().then((response) => {
//     response.find().toArray().then((data) => {
//         console.log(data)
//     })
// })

// This is using Async await 
const main = async () => {
    let data = await dbconnection();
    data=await data.find().toArray();
    console.log(data)
}

main();

