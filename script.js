alert("Aws")
console.log(15);
console.log("انا طالب في الصف العاشر" );
console.log('%c CCCCCCCColor ', 'color: #f9c74f');

//javascript is not java


let badget = 20;

console.log(badget>=30 && badget<=80)
console.log(badget + 30 >=30 && badget +30<=80 )
console.log(badget + 30 - 30>=30 && badget + 30 - 30<=80)

let grade = prompt("قم بادخال نسبتك")

//if(grade>=90){
  //  console.log( "لقد حصلت على امتياز 🥳")
//}else if(grade>=80){
  //  console.log( "لقد حصلت على جيد جداً🤩")
//}else if (grade>=70){
  //  console.log("لقد حصلت على جيد🙂" )
//}else if(grade>=60){
  //  console.log("لقد حصلت على مقبول😕")
//}else if (grade>=50){
  //  console.log("لقد حصلت على ضعيف☹️")
//}else{
   // console.log( "راسب💔")
//}

switch(grade){
    case "90": case "91": case "92":case "93":case "94":case "95":case "96":case "97":case "98":case "99":case "100":
        console.log( "لقد حصلت على امتياز 🥳")
        break;
        case "80":case "81":case "82":case "83":case "84":case "85":case "86":case "87":case "88":case "89":
            console.log( "لقد حصلت على جيد جداً🤩")
            break;
                    case "70":case "71":case "72":case "73":case "74":case "75":case "76":case "77":case "78":case "79":
                        console.log("لقد حصلت على جيد🙂" )
                        break;
                        case "60":case "61":case "62":case "63":case "64":case "65":case "66":case "67":case "68":case "69":
                            console.log("لقد حصلت على مقبول😕")
                            break;
                            case "59":case "50":case "51":case "52":case "53":case "54":case "55":case "56":case "57":case "58":
                                console.log("لقد حصلت على ضعيف☹️")
                           break;
                           default:
                           console.log( "راسب💔")
                        
}