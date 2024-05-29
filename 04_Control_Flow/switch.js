// Switch

const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default: // Note: It's like else, if nothing matches then this will print.
        console.log("Default case match");
        break;
} // Output: March


const day = "wednesday"

switch (day) {
    case "monday":
        console.log("1");
        break;
    case "tuesday":
        console.log("2");
        break;
    case "wednesday":
        console.log("3");
        break;
    case "thrusday":
        console.log("4");
        break;

    default:
        console.log("Default");
        break;
} // Output: 3

/* Note: If suppose break keyword is not available after any case then it 
will execute all the other codes except default. 

Note: Break keyword breaks that control flow. */