let userRole="Admin";
let accessLevel;
if(userRole==="Admin"){
    accessLevel="Full access granted";
}else if(userRole=="manager"){
    accessLevel="Limited access granted";
}else{
    accessLevel="No access granted";
}
console.log("Access Level:",accessLevel);
let isLoggedIn=true;
let userMessage;
if(isLoggedIn){
    if(userRole==="Admin"){
        userMessage="Welcome, Admin!";
    }else{
        userMessage="Welcome, User!"; 
    }
}else{
    userMessage="Please log in to access the system.";
}
console.log("User message:",userMessage);
let userType="subscriber";
let userCategory;
switch(userType){
    case "Admin":
        userCategory="Administrator";
    break;
    case "manager":
        userCategory="Manager"
    break;
    case "subscriber":
        userCategory="Subscriber";
        break;
    default:
        userCategory="Unknown";
}
console.log("User Category:",userCategory);
let isAuthenticated=true;
let authenticationStatus=isAuthenticated?"Authenticated":"Not Authenticated";
console.log("Authentication Status:",authenticationStatus);
