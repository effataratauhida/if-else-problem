
// ৭. মাসের দিন নির্ধারণ 
// একটি মাসের নাম ইনপুট নাও (যেমন:  "January", " February")। কনসোলে মাসটির দিন সংখ্যা প্রিন্ট করো। উদাহরণ:
// ➤"January" হলে প্রিন্ট করবে "31 days"।
// ➤"February" হলে চেক করবে লিপ ইয়ার কিনা এবং "28 or 29 days" প্রিন্ট করবে।

var month = "January";

var year = 2003;

if (month === "January") {
    console.log("31 days");
}
else if (month === "February") {
    

    if (year % 400 === 0) {
        console.log("29 days");
    }
    else if (year % 4 === 0) {
        if (year % 100 !== 0) {
            console.log("29 days");
        } 
    }
    else {
        console.log("28 days");
    }
} 
else {
    console.log("Invalid month!!!")
}