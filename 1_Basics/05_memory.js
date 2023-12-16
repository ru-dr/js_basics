//> Stack(premitive) & Heap(Non-premitive)

//> Stack
let myBento = "https://bento.me/rudr/";
let otherBento = myBento;
otherBento = "https://bento.me/en/home";

console.log(myBento);

console.log(otherBento);

//> Heap
const user = {
  email: "user@bento.me",
  upi: "user@upi",
};

const otherUser = user;
otherUser.email = "user@gg.com";

console.log(user.email);

//note: in stack, the value is copied to the new variable and when we try to change the value of new variable,it change the copied value only, not the original value.

//note: but in heap the refefence is copied to the new variable and when we try to change the value of new variable, it change the original value, because the reference is same.
