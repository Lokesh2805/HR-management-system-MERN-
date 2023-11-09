import  express, { request, response } from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";
import EmployeeModel from "./models/Employee.js";
import bodyParser from "body-parser";
import connection from "./database/connections.js";
import multer from "multer";
import path from "path";
import CreateEmployeeModel from "./models/CreateEmployee.js";
import CreateCategoryModel from "./models/AddCategory.js";

const app = express();
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };
   
  
  app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

const storage = multer.diskStorage({
  destination: (request, file, cb)=>{
    cb(null, 'public/images')
  },
  filename: (request, file, cb) =>{
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  }
})


const upload = multer({
  storage: storage
})
const password = "Loko2244";
  connection(password);  

  app.get('/getEmployee', async(request, response)=>{
    try {
      const employees =  await CreateEmployeeModel.find();
     response.json({status:"success", result: employees});
    } catch (error) {
      response.status(500).json({ error: 'Internal server error' });
    }
  });
 
  app.post('/login', async(request, response)=>{
    const {email, password} = request.body;

    EmployeeModel.findOne({email: email})
    .then(user =>{
      if(user){
        if(user.password === password){
          response.json({status:"success"})
        }else{
          return response.json({ status:"Error", Error:"password is inncorect"})
        }
      }
      else{
        return response.json({ status:"Error", Error:"No such email exsist"})
      }
    })

  })


  app.get('/get/:id', async(request, response)=>{

    
     
    try{
    const result = await CreateEmployeeModel.findOne({ id:request.params._id});

    return response.json({status:"success", Result: result})
    }catch(err){
      console.log("getEmployee error");
    }
  // try {
    //   const id = request.params._id;
    //   console.log('Received Object ID:', id);
  
    //   // Rest of your code to fetch the document
    // } catch (error) {
    //   console.error('Error fetching data:', error);
    //   res.status(500).send('Internal Server Error');
    // }
  }
  )

  app.put('/update/:id', async (request, response)=>{
    try{
       await CreateEmployeeModel.updateOne(request.params._id, request.body );
  
      return response.json({status:"success"})
      }catch(err){
        console.log("updateEmployee error");
      }
  })

app.post('/register', async (request, response) =>{


try{

   
    const { firstname, lastname, email, password } = request.body;

    const employee = new EmployeeModel({ firstname, lastname, email, password });
    
   
     const savedEmployee = await employee.save();
     response.status(201).json(savedEmployee);
    } catch (error) {
     response.status(500).json({ message: error.message });
    }
}
)

app.post('/create', upload.single('image'), async (request, response) => {
  try {
    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(request.body.password.toString(), 10);

    // Create an employee record
    const newEmployee = new CreateEmployeeModel({
      name: request.body.name,
      email: request.body.email,
      password: hashedPassword,
      salary:request.body.salary,
      address: request.body.address,
      imageFilename: request.file.filename
    });
    const savednewEmployee =   newEmployee.save();
    response.status(201).json(savednewEmployee);
  } catch (err) {
    response.status(500).json({ error: "Internal server error" });
  }
});

app.post('/add_category', async(req, response)=>{
  try{
    
    const categorylist = new CreateCategoryModel({ category: req.body.category });
    const savedCategory = await categorylist.save();
     response.status(201).json({Status: true});
  } catch (err) {
    response.status(500).json({ Error: "Internal server error" });
  }
  }
)
  


app.listen(8080, () =>{
    console.log("running on port 8080");
})