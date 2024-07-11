// You have built your own social networking website. Now, since you wanted your website to be unique, you applied some rules on making friends according to the age of the people
// So, the distance within which people can make friends depends on their age. Therefore, you have to print the output, which is the distance within which people can make friends according to the following rules
// You are given the age of a person, stored in the variable with the name N


// note. take input from the  user use the input tag and show it on the display

// question
// If the value stored in N is less than 13, print "1 Kms", without quotes
// Else if the age of the person is greater than or equal to 13, but less than 18, print "5 Kms", without quotes﻿﻿﻿Else if the age of the person is greater than or equal to 18, but less than 30, print "10 Kms", without quotes﻿﻿﻿Else print "You can have friends from anywhere", without quotes
let a = 8;

if (a < 13) {
    console.log("1 Kms");
} else if (a >= 13 && a < 18) {
    console.log("5 Kms");
} else if (a >= 18 && a < 30) {
    console.log("10 Kms");
} else {
    console.log("You can have friends from anywhere");
}
