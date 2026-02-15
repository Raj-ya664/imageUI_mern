

1) for handleing the file data we use multer the multer give the capability to read the file to express app

const upload = multer({storage: multer.memoryStorage()})// it help to read files 

it is similer type of middle ware called 
like   
   app.use(express.json());


2) why we created the services folder in it becouse in future what if we want to change the service 
example today we use cloud imagekit 
in future we want to change theservice to aws that is why  it is impoertant to keep the code of third party sepratly 