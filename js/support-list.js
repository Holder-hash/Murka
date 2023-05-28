const line1 = document.getElementById('info-line-1');
const line2 = document.getElementById('info-line-2');
const line3 = document.getElementById('info-line-3');
const line4 = document.getElementById('info-line-4');
const line5 = document.getElementById('info-line-5');
const line6 = document.getElementById('info-line-6');
let order1 = 0;
let order2 = 0;
let order3 = 0;
let order4 = 0;
let order5 = 0;
let order6 = 0;

line1.addEventListener('click', () =>{
    if(order1 === 0){
        line1.style.height = '240px';
        order1 = 1;
        line2.style.height = '60px';
        line3.style.height = '60px';
        line4.style.height = '60px';
        line5.style.height = '60px';
        line6.style.height = '60px';
        order2 = 0;
        order3 = 0;
        order4 = 0;
        order5 = 0;
        order6 = 0;
    } 
    else {
        line1.style.height = '60px';
        order1 = 0;
        
    }
});
line2.addEventListener('click', () =>{
    if(order2 === 0){
        line2.style.height = '240px';
        order2 = 1;
        line1.style.height = '60px';
        line3.style.height = '60px';
        line4.style.height = '60px';
        line5.style.height = '60px';
        line6.style.height = '60px';
        order1 = 0;
        order3 = 0;
        order4 = 0;
        order5 = 0;
        order6 = 0;
    } 
    else {
        line2.style.height = '60px';
        order2 = 0;
    }
});
line3.addEventListener('click', () =>{
    if(order3 === 0){
        line3.style.height = '240px';
        order3 = 1;
        line2.style.height = '60px';
        line1.style.height = '60px';
        line4.style.height = '60px';
        line5.style.height = '60px';
        line6.style.height = '60px';
        order2 = 0;
        order1 = 0;
        order4 = 0;
        order5 = 0;
        order6 = 0;
    } 
    else {
        line3.style.height = '60px';
        order3 = 0;
    }
});
line4.addEventListener('click', () =>{
    if(order4 === 0){
        line4.style.height = '240px';
        order4 = 1;
        line2.style.height = '60px';
        line3.style.height = '60px';
        line1.style.height = '60px';
        line5.style.height = '60px';
        line6.style.height = '60px';
        order2 = 0;
        order3 = 0;
        order1 = 0;
        order5 = 0;
        order6 = 0;
    } 
    else {
        line4.style.height = '60px';
        order4 = 0;
    }
});
line5.addEventListener('click', () =>{
    if(order5 === 0){
        line5.style.height = '240px';
        order5 = 1;
        line2.style.height = '60px';
        line3.style.height = '60px';
        line4.style.height = '60px';
        line1.style.height = '60px';
        line6.style.height = '60px';
        order2 = 0;
        order3 = 0;
        order4 = 0;
        order1 = 0;
        order6 = 0;
    } 
    else {
        line5.style.height = '60px';
        order5 = 0;
    }
});
line6.addEventListener('click', () =>{
    if(order6 === 0){
        line6.style.height = '240px';
        order6 = 1;
        line2.style.height = '60px';
        line3.style.height = '60px';
        line4.style.height = '60px';
        line5.style.height = '60px';
        line1.style.height = '60px';
        order2 = 0;
        order3 = 0;
        order4 = 0;
        order5 = 0;
        order1 = 0;
    } 
    else {
        line6.style.height = '60px';
        order6 = 0;
    }
});