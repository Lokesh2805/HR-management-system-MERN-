import mongoose from "mongoose";

export const connection = async (password) =>{
    try{
        const URL = `mongodb+srv://rejeevseth1971:${password}@cluster0.ttk4ktd.mongodb.net/?retryWrites=true&w=majority`;
       await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
       console.log("connected to database");
    }catch(error){
        console.log("error in connection", error.message);
    }
}
export default connection;