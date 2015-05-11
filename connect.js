var mongoClient=require('mongodb').MongoClient;
var mongoDbObj;
 
mongoClient.connect('mongodb://localhost/studentDb', function(err, db){
  if(err)
    console.log(err);
  else{
    console.log("Connected to MongoDB");
    mongoDbObj={db: db,
      students: db.collection('students')
    };
}

// to find values 
mongoDbObj.students.find().toArray(function(err, data){
  if(err){
    console.log(err);
  else{
    //operate with the deta
  }
});

mongoDbObj.students.find({studentId:1})    //Fetches the student with value of studentId 1
mongoDbObj.students.find({studentId:{$gte:2}})    //Fetches the student with value of studentId greater than or equal to 2
mongoDbObj.students.find({"marks.totalMarks":500})    //Fetches the student with at least one of the values of totalMarks 500
mongoDbObj.students.find({"marks.totalMarks":{$lte:500}})    //Fetches the student with at least one of the values of totalMarks less than or equal to 500

// To insert data into mongoDB

mongoDbObj.students.insert(newStudent,{w:1},function(err, result){
  if(err){
    //Handle the failure case
  }
  else{
    //Handle the success case
  }
});

// updating data 

mongoDbObj.students.update({studentId:1},{name:”Ravi Kiran”},{w:1}, function(err, result){
    //Handle success and failure
});

mongoDbObj.students.update({studentId:1},{$set: {name:”Ravi Kiran”}},{w:1}, function(err, result){
  //Handle success and failure
});

// deleting  data 

mongoDbObj.students.remove(function(err, result){
    //Handle success and failure
});

mongoDbObj.students.remove({studentId:studentId},{w:1},function(err, result){
    //Handle success and failure
});