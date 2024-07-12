const repeatString = function(string, number) {
    let repeatString = "";
//  while(number > 0){
//    repeatString += string;
//    number --;
//  }
for(repeatString; number > 0; number --){
    repeatString += string;
}
 return repeatString;
};

// Do not edit below this line
module.exports = repeatString;
