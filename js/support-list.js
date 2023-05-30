const line1 = document.getElementById('info-line-1');
const line2 = document.getElementById('info-line-2');
const line3 = document.getElementById('info-line-3');
const line4 = document.getElementById('info-line-4');
const line5 = document.getElementById('info-line-5');
const line6 = document.getElementById('info-line-6');
const ltxt1 = document.getElementById('text_support_convolutions_1');
const ltxt2 = document.getElementById('text_support_convolutions_2');
const ltxt3 = document.getElementById('text_support_convolutions_3');
const ltxt4 = document.getElementById('text_support_convolutions_4');
const ltxt5 = document.getElementById('text_support_convolutions_5');
const ltxt6 = document.getElementById('text_support_convolutions_6');
let order1 = 0;
let order2 = 0;
let order3 = 0;
let order4 = 0;
let order5 = 0;
let order6 = 0;

line1.addEventListener('click', () =>{
    if(order1 === 0){
        line1.style.height = '340px';
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
        ltxt1.style.display = 'block';
        ltxt2.style.display = 'none';
        ltxt3.style.display = 'none';
        ltxt4.style.display = 'none';
        ltxt5.style.display = 'none';
        ltxt6.style.display = 'none';
    } 
    else {
        line1.style.height = '60px';
        order1 = 0;
        time.sleep(0.5)
        ltxt1.style.display = 'none';
    }
});
line2.addEventListener('click', () =>{
    if(order2 === 0){
        line2.style.height = '180px';
        order2 = 1;
        line1.style.height = '60px';
        line3.style.height = '60px';
        line4.style.height = '60px';
        line5.style.height = '60px';
        line6.style.height = '60px';
        ltxt1.style.display = 'none';
        ltxt2.style.display = 'block';
        ltxt3.style.display = 'none';
        ltxt4.style.display = 'none';
        ltxt5.style.display = 'none';
        ltxt6.style.display = 'none';
        order1 = 0;
        order3 = 0;
        order4 = 0;
        order5 = 0;
        order6 = 0;
    } 
    else {
        line2.style.height = '60px';
        order2 = 0;
        time.sleep(0.5)
        ltxt2.style.display = 'none';
    }
});
line3.addEventListener('click', () =>{
    if(order3 === 0){
        line3.style.height = '270px';
        order3 = 1;
        line2.style.height = '60px';
        line1.style.height = '60px';
        line4.style.height = '60px';
        line5.style.height = '60px';
        line6.style.height = '60px';
        ltxt1.style.display = 'none';
        ltxt2.style.display = 'none';
        ltxt3.style.display = 'block';
        ltxt4.style.display = 'none';
        ltxt5.style.display = 'none';
        ltxt6.style.display = 'none';
        order2 = 0;
        order1 = 0;
        order4 = 0;
        order5 = 0;
        order6 = 0;
    } 
    else {
        ltxt3.style.display = 'none';
        line3.style.height = '60px';
        order3 = 0;
    }
});
line4.addEventListener('click', () =>{
    if(order4 === 0){
        line4.style.height = '265px';
        order4 = 1;
        line2.style.height = '60px';
        line3.style.height = '60px';
        line1.style.height = '60px';
        line5.style.height = '60px';
        line6.style.height = '60px';
        ltxt1.style.display = 'none';
        ltxt2.style.display = 'none';
        ltxt3.style.display = 'none';
        ltxt4.style.display = 'block';
        ltxt5.style.display = 'none';
        ltxt6.style.display = 'none';
        order2 = 0;
        order3 = 0;
        order1 = 0;
        order5 = 0;
        order6 = 0;
    } 
    else {
        line4.style.height = '60px';
        order4 = 0;
        time.sleep(0.5)
        ltxt4.style.display = 'none';
    }
});
line5.addEventListener('click', () =>{
    if(order5 === 0){
        line5.style.height = '100px';
        order5 = 1;
        line2.style.height = '60px';
        line3.style.height = '60px';
        line4.style.height = '60px';
        line1.style.height = '60px';
        line6.style.height = '60px';
        ltxt1.style.display = 'none';
        ltxt2.style.display = 'none';
        ltxt3.style.display = 'none';
        ltxt4.style.display = 'none';
        ltxt5.style.display = 'block';
        ltxt6.style.display = 'none';
        order2 = 0;
        order3 = 0;
        order4 = 0;
        order1 = 0;
        order6 = 0;
    } 
    else {
        line5.style.height = '60px';
        order5 = 0;
        time.sleep(0.5)
        ltxt5.style.display = 'none';
    }
});
line6.addEventListener('click', () =>{
    if(order6 === 0){
        line6.style.height = '100px';
        order6 = 1;
        line2.style.height = '60px';
        line3.style.height = '60px';
        line4.style.height = '60px';
        line5.style.height = '60px';
        line1.style.height = '60px';
        ltxt1.style.display = 'none';
        ltxt2.style.display = 'none';
        ltxt3.style.display = 'none';
        ltxt4.style.display = 'none';
        ltxt5.style.display = 'none';
        ltxt6.style.display = 'block';
        order2 = 0;
        order3 = 0;
        order4 = 0;
        order5 = 0;
        order1 = 0;
    } 
    else {
        line6.style.height = '60px';
        order6 = 0;
        time.sleep(0.5)
        ltxt6.style.display = 'none';
    }
});