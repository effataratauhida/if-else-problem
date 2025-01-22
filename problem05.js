

//৫. জোড় এবং ৫ এর গুণিতক চেক করা
//একটি সংখ্যা ইনপুট নাও। যদি সংখ্যা জোড় হয় এবং ৫ দিয়ে বিভাজ্য হয়, তাহলে "Even and divisible by 5" প্রিন্ট করো।  অন্যথায়,  "Not both" প্রিন্ট করো।

var number = 14;

if (number % 2 === 0) {
    if (number % 5=== 0) {
        console.log("Even and divisible by 5");
    }
    else {
        console.log("Not both!!!");
    }
}
 else {
    console.log("Not both");
}