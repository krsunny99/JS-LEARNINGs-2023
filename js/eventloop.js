//   The working of  js involves four thing ===>


//   ----call stack  , --- web api , ---event loop , ----call back queue

//   first of all task will go to CALL STACK it will check whether it is synchronous or asynchronous if it is synchronous 

//   it will execute else it will go to web API's it will wait for that particular time after that's it call back will go to CALL BACK QUEQUE


// now the call back is in CALL BACK QUEUE and event loop will kept checking for call stack if it is emty then it will push it to the CALL STACK 
// and it will get executed