import mongoose from "mongoose";

const Connection = async(username = '10govindgupta10' , password = 'Govind123') => {
    const URL = `mongodb+srv://${username}:${password}@docsclone.al6vn.mongodb.net/?retryWrites=true&w=majority&appName=DocsClone`

    try{
       await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
       console.log('Database connected successfully ');
    }
    catch(error){
        console.log('Error while connecting with th e database', error);
    }
}

export default Connection;   