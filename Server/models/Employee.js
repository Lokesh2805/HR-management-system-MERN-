import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String          
}
)
 const EmployeeModel = mongoose.model("employees", EmployeeSchema);
 
 export default EmployeeModel;
