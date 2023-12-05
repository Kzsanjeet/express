// const mongoose = require("mongoose")

// const connectDb = async()=>{
//     try{
//         const connect = await mongoose.connect(process.env.CONECTION_STRING)
//         console.log("Database connected",
//         connect.connection.host,
//         connect.connection.name)
//     }catch(err){
//         console.log('err')
//         process.exit(1)
//     }
// }

// module.exports = connectDb;


const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONECTION_STRING, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log(
            "Database connected",
            connect.connection.host,
            connect.connection.name
        );
    } catch (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
};

module.exports = connectDb;
