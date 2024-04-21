function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    } else {
        change.target.classList.remove('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let namesectiontwo = document.querySelectorAll('.name-section-two');
let textsectiontwo = document.querySelectorAll('.text-section-two');
let titlesectionone = document.querySelectorAll('.title-section-one');
let buttonSectionOne = document.querySelectorAll('.button-section-one');
// let advertext = document.querySelectorAll('.adver-text');
// let vegetablestitle = document.querySelectorAll('.vegetables-title');
// let vegetablestext = document.querySelectorAll('.vegetables-text');
// let reviewslogo = document.querySelectorAll('.reviews-logo');
// let reviewstext = document.querySelectorAll('.reviews-text');
// let ordertitle = document.querySelectorAll('.order-title');
// let ordertext = document.querySelectorAll('.order-text');

for (let elm of namesectiontwo) {
  observer.observe(elm);
}
for (let elm of textsectiontwo) {
  observer.observe(elm);
}
for (let elm of titlesectionone) {
  observer.observe(elm);
}
for (let elm of buttonSectionOne) {
  observer.observe(elm);
}
// for (let elm of advertext) {
//   observer.observe(elm);
// }
// for (let elm of vegetablestitle) {
//   observer.observe(elm);
// }
// for (let elm of vegetablestext) {
//   observer.observe(elm);
// }
// for (let elm of reviewslogo) {
//   observer.observe(elm);
// }
// for (let elm of reviewstext) {
//   observer.observe(elm);
// }
// for (let elm of ordertitle) {
//   observer.observe(elm);
// }
// for (let elm of ordertext) {
//   observer.observe(elm);
// }
