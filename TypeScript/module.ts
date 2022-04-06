import { ValidatorCLS } from "./validator/validator"
import { Constants} from "./constant/constant"

let email = "zala6206@gmail.com";
let name = "Jayrajsinh Zala";
let pincode = "382350";
let phoneNo = "8200780738";

let validator = new ValidatorCLS();

let emailResult = validator.isValid(email,Constants.emailRegex,3,200);
let nameResult = validator.isValid(name,Constants.nameRegex,5,20);
let pincodeResult = validator.isValid(pincode,Constants.numberRegex,6);
let phoneNoResult = validator.isValid(phoneNo,Constants.numberRegex,10);  

console.log("Valid Email Id Or Not:",emailResult);
console.log("Valid Name Or Not:",nameResult);
console.log("Valid Pincode Or Not:",pincodeResult);
console.log("Valid Phone Or Not:",phoneNoResult);
