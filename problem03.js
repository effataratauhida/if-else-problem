
// ৩. গ্রেড নির্ণয় 
// একটি নম্বর ইনপুট নাও(০-১০০ এর মধ্যে)। গ্রেড এইভাবে নির্ধারণ করো:
// ➤ ৮০ বা তার বেশি: "A"
// ➤ ৬০-৭৯: "B"
// ➤ ৪০-৫৯: "C"
// ➤ ৩৯ বা এর নিচে: "F"


var number = 79;

if (number >= 80) {
    console.log ("A");
} 
else if (number >= 60) {
    console.log("B")
}
else if (number >= 40) {
    console.log("C")
}
else {
    console.log("F")
}
