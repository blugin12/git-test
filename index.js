// test console
// let name; 
// name = 'john';
// console.log(name);  

// console.log(` I\'m the Walrus`); 

// let str = "Hello";
// console.log( str[0]);
// console.log( str.charAt(0));
// console.log( str[str.length -1]);

// for (let char of 'Hello'){
//     console.log(char)
// }

// let str = 'Hi';
// str = 'h' + str[1];
// console.log(str);

// console.log('interface'.toUpperCase());
// console.log('interface'.toLowerCase());
// console.log('interface'[0].toUpperCase());

// let str = 'Wiget with id';
// console.log(str.indexOf('Wiget'));
// console.log(str.indexOf('wiget'));
// console.log(str.indexOf("id") );

// let str = 'Wiget with id';
// console.log(str.indexOf('id',2) );

// let str = 'As sly as a fox, as strong as an ox';
// let target = 'as';
// let pos = 0;
// while (true){
//     let foundpos = str.indexOf(target,pos);
//     if (foundpos == -1) break;
//     console.log(`Found at ${foundpos}`);
//     pos = foundpos + 1;
// }

// let str = 'As sly as a fox, as strong as an ox';
// let target = 'as';
// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1){
//     console.log(pos);
// }

// console.log( ~2 ); 
// console.log( ~1 ); 
// console.log( ~0 ); 
// console.log( ~-1 ); 

// let str = "Widget";
// if(~str.indexOf("Widget"));
// console.log('Found it!');

// console.log("Widget with id".includes("Widget") );
// console.log("Hello".includes("Bye"));

// console.log("Widget".includes("id"));
// console.log("Widget".includes("id", 3));

// console.log("Widget".startsWith('Wid'));
// console.log("Widget".endsWith('get'));

// let str = "stringify";
// console.log(str.slice(0,5));
// console.log(str.slice(0,1));

// let str = "stringify";
// console.log(str.slice(2));

// let str = "stringify";
// console.log(str.slice(-4,-1));

// let str = "stringify";
// console.log(str.substring(2,6));
// console.log(str.substring(6,2));
// console.log(str.slice(2,6));
// console.log(str.slice(6,2));

// let str = "stringify";
// console.log(str.substr(2,4));
// console.log(str.substr(-4,2));

// console.log( 'a' >' Z' );

// console.log('z'.codePointAt(0));
// console.log('Z'.codePointAt(0));

// console.log(String.fromCodePoint(90));
// console.log(String.fromCodePoint(122));

// let str = '';
// for (let i = 65 ; i <= 220; i++) {
//     str += String.fromCodePoint(i) ;
// }
// console.log( str );

// function ucFirst(str){
//     if (!str) return str;
//     return str[0].toUpperCase() + str.slice(1);
// }
// console.log(ucFirst("john"));

// function checkspam(str){
//     let lowerStr = str.toLowerCase();
//     return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// }
// console.log(checkspam('buy ViAgRA now'));
// console.log(checkspam('free xxxxx'));
// console.log(checkspam("innocent rebbit"));

// function truncate(str, maxlength){
//     return ( str.maxlength > maxlength) ?
//     str.slice(0, maxlength -1) + '...' ;
//      str;
// } (Note write html and only open html)

//Array topice
// let fruits = ["Apple" , "Orange" , "Plum" ]
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// square bracket,replace,add,length,alert
// let fruits = ["Apple", "Orange", "Plum"]
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2] = 'Pear');
// console.log(fruits[3] = 'Lemon');
// console.log(fruits.length);
// console.log(fruits);

// let arr = [ 'Apple', {name: 'John' } , true , function() { 
//     console.log('hello');}];
// console.log( arr[1].name);
// arr[3]();

// let fruits = [
//     "Apple",
//     "Orange",
//     "Plum",
// ];
// console.log(fruits);

// let fruits = ["Apple", "Orange", "Plum"];
// console.log(fruits[fruits.length-1]);

// let fruits = [ "Apple", "Orange", "Plum"];
// console.log(fruits.at(-1));

// let fruits= ["Apple", "Orange", "Pear"];
// console.log(fruits.pop());
// console.log(fruits);

// let fruits = ["Apple", "Orange"];
// fruits.push("Pear");
// console.log(fruits);

// let fruits = ["Apple", "Orange", "Pear"];
// console.log(fruits.shift());
// console.log(fruits);

// let fruits = ["Orange", "Pear"];
// fruits.unshift('Apple');
// console.log(fruits);

// let fruits = ["Banana"];
// fruits.push("Orange", "Peach");;
// fruits.unshift("Pineapple" ,"Lemon");
// console.log(fruits);

// let fruits = ["Banana"]
// let arr = fruits;
// console.log( arr === fruits );
// arr.push("Pear");
// console.log(fruits);

// Code 1 Challenge 
// let mark = 'name';
//     john = 'name';
//     weight = 78;
//     tall = 1.69;
//     BMO = weight / (tall * tall);
//     weight = 92;
//     tall = 1.95;
//     BMI = weight / (tall * tall);
//     markHeighterBMI = BMO > BMI ;
// console.log(BMO , BMI);
// console.log(markHeighterBMI)

// let Mark = 'name',
//     John = 'name';

//     weight = 95;
//     tall = 1.88;
//     BMO = weight / (tall * tall);
//     weight = 85;
//     tall = 1.76;
//     BMI = weight / (tall * tall);
// let markHighterBMT = BMO > BMI ;
// console.log( BMO , BMI);
// console.log(markHighterBMT);

// let massMark = 95;
// let heightMark = 1.88;
// let massJohn= 85;
// let heightJohn= 1.76;

// let massMark = 78;
// let heightMark = 1.69;
// let massJohn= 92;
// let heightJohn= 1.95;
// let BMIMark = massMark / (heightMark * heightMark);
// let BMIJohn = massJohn / (heightJohn * heightJohn);
// let MarkHeighterBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, MarkHeighterBMI);


// let fruits = ["Apple" ,"Orange","Plum" ,"Lemon"];
// console.log(fruits.length);

// let arr = ["Apple", "Orange", "Pear"]
// for (let i = 0; i < arr.length ; i++) {
//     console.log(arr[i]);
// }

// let fruits = ["Apple", "Orange" ,"Pear"];
// for (let fruit of fruits){
//     console.log(fruit);
// }

// let arr = ["Apple", "Orange" , "Pear"];
// for ( let key in arr){
//     console.log(arr[key]);
// }

// let fruit =[];
// fruit [123] = "Apple";
// console.log(fruit.length);

// let arr = [1, 2, 3, 4, 5];
// arr.length = 2;
// console.log(arr);
// arr.length = 5;
// console.log(arr[3]);

// let arr = new Array(2);
// console.log(arr[0]);
// console.log(arr.length);

// let matrix = [
//     [ 1 , 2 , 3 ],
//     [ 4 , 5 , 6 ],
//     [ 7 , 8 , 9 ]
// ];
// console.log(matrix[0][0]);

// let arr = [1 , 2, 3];
// console.log(arr);
// console.log(String(arr) === '1,2,3');

// console.log( [] + 1);
// console.log( [1] + 1);
// console.log( [1,2] + 1);

// console.log( "" + 1);
// console.log( "1" + 1);
// console.log( "1,2" + 1);

// console.log( 0 == []);

// console.log( 0 == '');

// console.log( 2 > 1);
// console.log( 2 == 1);
// console.log( 2 != 1);

// let result = 5 > 4 ;
// console.log( result);

// console.log( 'Z' > 'A');
// console.log( 'Glow' > 'Glee');
// console.log( 'Bee' > 'Be');

// console.log( '2' > 1 );
// console.log( '01' == 1);

// console.log( true == 1);
// console.log( false == 0);

// let a = 0;
// console.log( Boolean(a) );
// let b = "0" ;
// console.log( Boolean(b) );
// console.log( a == b );

// console.log( '2' == 2);

// console.log( 0 == false);
// console.log( '' == false);

// console.log( null > 0);
// console.log( null == 0);
// console.log( null >= 0);

// // console.log( undefined > 0);
// // console.log( undefined < 0);
// // console.log( undefined == 0);
// console.log( undefined == null);

// // console.log( "2" > "12");

// let i = 0 ;
// while ( 1 < 3 ){
//     console.log( i );
// i++;
// }

// let i= 3;
// while (i){
//     console.log(i);
//     i--;
// }

// let i = 3;
// while (i)
// console.log(i--);

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 3);

// for (let i= 0; i <3 ; i++ ){
//     console.log(i);
// }

// let i = 0;
// for (; i< 3 ; i++){
//     console.log(i);
// }

// let i = 0;
// for(; i < 3 ; ){
//     console.log(i++)
// }

// let i = 0;
// for (let i = 0 ; i < 10 ; i++){
//     if ( i % 2 == 0 ) continue;
//     console.log(i);
// }

// let i = 0;
// for ( i = 0 ; i < 10 ; i++ ){
//     if ( i % 2 ){
//         console.log(i);
//     }
// }

// for (let i = 0 ; i < 3 ; i++ ){
//     for ( let j= 0 ; j < 3 ; j++ ){
//         console.log(`vale at coord(${i},${j}`, '');
//     }
// }

// Code 2 Challenge2
// let Mark = 'name';
// let John = 'name';
// let massmark = 78;
// let heightmark = 1.69;
// let massjohn = 92;
// let heightjohn = 1.95;

// let massmark = 95;
// let heightmark = 1.88;
// let massjohn = 85;
// let heightjohn = 1.76;

// let BMImark = massmark / (heightmark * heightmark);
// let BMIjohn = massjohn / (heightjohn * heightjohn);
// let BMIBOTH = BMImark > BMIjohn;
// if ( BMImark > BMIjohn){
//     console.log("Mark's BMI is higher than John's!");
//     console.log("Mark's BMI is ",BMImark, "is higher than John's" ,BMIjohn);
// }
// else {
//     console.log("John's BMI is higher than Mark's!");
//     console.log("John's BMI is ", BMIjohn, "is higher than Mark's",BMImark);
// }
// console.log(BMIBOTH);

let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;
console.log("scoreDolpins",scoreDolphins,"\nscoreKoalas",scoreKoalas);

if (scoreDolphins > scoreKoalas){
    console.log("The winner of the competition  is scoreDolphins", scoreDolphins);
}
else {
    console.log("The winner of the competition is scoreKoalas", scoreKoalas);
}

