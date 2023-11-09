import mongoose from "mongoose";


const CreateCategorySchema = new mongoose.Schema({
    category: String
 })

 const CreateCategoryModel = mongoose.model("newcategorys", CreateCategorySchema);

 export default CreateCategoryModel;