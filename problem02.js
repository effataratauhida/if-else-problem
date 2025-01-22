

// ২.তিনটি সংখ্যার মধ্যে সবচেয়ে বড়টি খুঁজে বের করা

// তিনটি সংখ্যা ইনপুট নাও। যদি প্রথমটি সবচেয়ে বড় হয়,তাহলে কনসোলে "Number 1 is largest" প্রিন্ট করবে,অন্যথায় দ্বিতীয় বা তৃতীয়টি চেক করবে।

var numOne = 5;
var numTwo = 8 ;
var numThree = 101;

if (numOne > numTwo) {
    if (numOne > numThree) {
        console.log("Number 1 is largest");
    } else {
        console.log("Number 3 is largest");   // N2 < N1 < N3
    }
}   
else if (numTwo > numThree) {
    console.log("Number 2 is largest"); 
}  
else {
    console.log("Number 3 is largest");

}
