const app = require('./app');
const db = require('./db')

const startServer = async () => {
    try{
        db.connect((error) => {
            if(error){
                return console.error(error);
            }

            console.log("Connected to database");
        })
        await app.listen(process.env.PORT, () => {
            console.log(`Server listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error(error);
    }
}

startServer();