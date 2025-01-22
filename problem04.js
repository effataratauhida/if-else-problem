

// ৪. বছর লিপ ইয়ার কিনা তা চেক করা
//একটি বছর ইনপুট নাও। যদি বছরটি ৪ দিয়ে ভাগ যায় এবং ১০০ দিয়ে ভাগ না যায়, অথবা ৪০০ দিয়ে ভাগ যায়, তাহলে এটি লিপ ইয়ার।

var year = 2004;

if (year % 400 === 0) {
    console.log("Leap Year")
}
else if (year % 4 === 0) {
    if (year % 100 !== 0) {
        console.log("Leap Year")
    }
}
else {
    console.log("Not Leap Year")
}