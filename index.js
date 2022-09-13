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
//         console.log(`vale at coord(${i},${j})`, '');
//     }
// }
// console.log('Done!');

//this code continue isn't allowed here 
// if (i > 5 ){
//     console.log(i);
// } else {
//     continue;
// }

// can't run code
// outer: for (let i = 0 ; i < 3 ; i++ ) {
//     for (let j = 0 ; j  < 3 ; j++ ) {
//         let input = prompt (`Value at coords (${i},${j})`, '');
//         if (!input) break outer;
//     }
// }
// console.log('Done!');

// let i = 3 ;
// while (i){
//     console.log(i--);
// }

//unlimited
// let i = 3;
// while (i) {
//     console.log(i++);
// }

// let i = 3 ;
// console.log(i--);
// console.log(i--);
// console.log(i--);

// let i = 0;
// while (i++ < 5) 
// console.log( i );

// let i = 0;
// while (++i < 5) console.log( i );

// for (let i = 0 ; i < 5 ; ++i) console.log(i);
// for (let i = 0 ; i < 5 ; i++)console.log(i);

// for (i = 2 ; i <= 10 ; i++ ){
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// for (let i = 0 ; i < 3 ; i++){
//     console.log(`Number is ${i}!` );
// }

// let i = 0;
// while (i < 3){
//     console.log(`Number is ${i}!`);
//     i++;
// }

// let num;
// do{
//     num = prompt("Enter a number gteater than 100!", 0);
// } while (num <=100 && num);

// let n = 10 ; 
// nextprime:
// for (let i = 2; i <= n ; i++) {
//     for (let j = 2 ; j < i ; j++) {
//         if ( i % j == 0) continue nextprime;
//     }
//     console.log(i);
// }

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 3);

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

// Code 2 challenge mend
// let massmark = 78;
// let heightmark = 1.69;
// let massjohn = 92;
// let heightjohn = 1.95;

// // let massmark = 95;
// // let heightmark = 1.88;
// // let massjohn = 85;
// // let heightjohn = 1.76;

// let BMIMark = massmark / heightmark ** 2;
// let BMIJohn = massjohn / heightjohn ** 2;
// console.log( BMIMark , BMIJohn );

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
// } else if (BMIMark < BMIJohn){
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
// }

// Code 3 challenge do 
// let scoreDolphins = (96 + 108 + 89) / 3;
// let scoreKoalas = (88 + 91 + 110) / 3;
// console.log("scoreDolpins",scoreDolphins,"\nscoreKoalas",scoreKoalas);

// if (scoreDolphins > scoreKoalas){
//     console.log("The winner of the competition  is scoreDolphins", scoreDolphins);
// }
// else {
//     console.log("The winner of the competition is scoreKoalas", scoreKoalas);
// }

//Code 3 challenge result
// let scoreDolphins = (96 + 108+ 89) / 3 ;
// let scoreKoalas = ( 88 + 91 + 110) / 3 ;
// console.log(scoreDolphins, scoreKoalas);

// if ( scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins ){
//     console.log('Koalas the win trophy');
// } else if (scoreDolphins === scoreKoalas){
//     console.log('Both win the trophy');
// }

//BONUS 1
// let scoreDolphins = (97 + 112 + 80) / 3 ;
// let scoreKoalas = (109 + 95 + 50) / 3 ;
// console.log(scoreDolphins, scoreKoalas);

// if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
//     console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log('Koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log('Both win the trophy!');
// } else {
//     console.log('No one wins the trophy XD');
// }

//BONUS 2
// let scoreDolphins = (97 + 112 + 101) / 3 ;
// let scoreKoalas = (109 + 95 + 106) / 3 ;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins> scoreKoalas && scoreDolphins >= 100) {
//     console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log('koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas & scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log('Both win the trophy');
// } else {
//     console.log('No one win the trophy XD');
// }

// let sum = 0 ;
// while (true) {
//     let vale = +prompt ('Enter the number', '');
//     if (!value) break ;
//     sum += value;
// }
// console.log('Sum' + sum);

// let year = prompt('In which year was ECMAscripte-2015 specification published?', '');
// if ( year == 2015)
//     console.log('You are right!' );

// let year = prompt ('In which year was ECMAscripte-2015 specification published?', '');
// if ( year == 2015){
//     console.log("That's correct!");
//     console.log('You are smart!');
// }

// let year = prompt ('In which year was ECMAscripte-2015 specification published?', '');
// if (year == 2015){
//     console.log("You guessed it right!");
// } else {
//     console.log("How can you be so wrong?");
// }

// let year = prompt ('In which year was ECMAscripte-2015 specification published?', '');
// if (year < 2015 ){
//     console.log('To early ...');
// } else if (year > 2015) {
//     console.log('To late');
// } else {
//     console.log('Exactly!');
// }

// let accessAllowed;
// let age = prompt('How old are you?', '');
// if ( age > 18 ) {
//     accessAllowed = true ;
// } else{
//     accessAllowed = false ;
// }
// console.log(accessAllowed);

// let age = prompt ('age?', '');
// let message = (age < 3) ? 'Hi, baby!' :
//     (age < 18) ? 'Hello! ' :
//     (age < 100) ? 'Greetings!' :
//     'What an unsual age!';
// console.log(message);

// let message;
// let age = prompt ('age!', '');
// if (age < 3 ){
//     message = 'Hi, Baby!';
// } else if (age < 18 ) {
//     message = 'Hello!';
// } else if (age < 100 ) {
//     message = 'Greeting!';
// } else {
//     message = 'What an unsual age!';
// }
// console.log(message);

// let company = prompt('Which company created JavaScript','');
// (company == 'Netscape') ?
// console.log('Right!') : alert ('Wrong.') ;

// let company = prompt ( 'Which company created JavaScript', '');
// if ( company == 'Netscape') {
//     console.log('Right!');
// } else {
//     console.log('Wrong.');
// }

// if ("0"){
//     console.log('Hello');
// }

// let value = ("Which is the 'Official' name if JavaScript", '');
// if (value == 'ECMAScript') {
//     console.log('Right!');
// } else {
//     console.log("You don't know ECMAScript1");
// }

// let value = prompt ('Try a number', 0);
// if (value > 0) {
//     console.log(1);
// } else if (value < 0) {
//     console.log(-1);
// } else {
//     console.log(0);
// }

// let result;
// if (a + b < 4 ) {
//     console.log('Below');
// } else {
//     console.log('Over');
// }

// let result = (a + b < 4) ? true : false ;

// let message;
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// let login = prompt ('Login','');
// let message = (login == 'Employee') ? 'Hello!' :
//     (login == 'Director') ? 'Greeting' :
//     (login == '') ? 'No login' :
//     '';
// console.log(message);

// function showMessage () {
//     console.log('Hello eveyone!');
// }
// showMessage();

// function showMessage(){
//     let message = "Hello, I'm JavaScript!";
//     console.log(message);
// }
// showMessage();

// let userName = 'John';
// function showMessage (){
//     let message = 'Hello, ' + userName;
//     console.log(message);
// }
// showMessage();

// let userName = 'John';
// function showMessage(){
//     userName = 'Bob';
//     let message = 'Hello, ' + userName ;
//     console.log(message);
// }
// showMessage();

// function showMessage (from , text ){
//     console.log(from + ': ' + text);
// }
// showMessage('Ann','Hello!');
// showMessage('Ann', "What's up!");

// function showMessage( from , text){
//     from = '*' + from + '*';
//     console.log(from + ': ' + text);
// }
// let from = 'Ann';
// showMessage(from, 'Hello!');
// console.log(from);

// Simple test
// function showMessage (from ,text) {
//     from = '*' + from + '*';
//     console.log(from + ': ' +text);
// }
// let from = 'Crush';
// showMessage(from, "Hello");
// showMessage(from, "What are you doing?")
// showMessage(from, "Work hard na, Please Take care ^^")
// console.log(from);

// function showMessage(from , text = "No text given"){
//     console.log(from + ': ' + text);
// }
// showMessage("Ann");

// function showMessage (from , text ) {
//     if (text == undefined ) {
//         text = "no text given";
//     }
//     console.log(from + ': ' + text);
// }
// showMessage()

// function showMessage (from , text ) {
//     text = text || 'no text given';
//     console.log(from + ': ' + text);
// }
// showMessage()

// function showMessage( text ) {
//     if( text == undefined){
//         text = 'empty given';
//     }
//     console.log(text);
// }
// showMessage();

// function showMessage(text){
//     text = text || 'empty given';
//     console.log(text);
// }
// showMessage();

// function showCount ( count){
//     console.log(count ??  "unknown");
// }
// showCount(0);
// showCount(null);
// showCount();

// function sum(a,b){
//     return a + b ;
// }
// let result = sum (1,2);
// console.log(result);

// function checkAge(age){
//     if (age >= 18){
//         return true;
//     } else {
//         return confirm ('Do you have permission from youe parents?');
//     }
// }
// let age = prompt('How old are you', 18);
// if (checkAge(age)){
//     console.log('Access granted' );
// } else {
//     console.log('Access denied' );
// }

// Not Working
// function showMovie (age){
//     if (!check(age)){
//         return;
//     }
//     console.log("showing you the movie");
// }

// function doNothing(){ /* empty */}
// console.log(doNothing() === undefined);

// function doNothing(){
//     return;
// }
// console.log(doNothing() === undefined);

// Not Working
// function showPrimes(n){
//     nextPrime: for (let i = 2 ; i < n ; i++) {
//         for (let j = 2 ; j < i ; i++) {
//             if ( i % j == 0) continue nextPrime;
//         }
//         console.log(i);
//     }
// }

// Not Working
// function showPrimes(n){
//     for (let i = 2 ; i < n ; i++){
//         if (!isPrime(i)) continue;
//         console.log(i);
//     }
// }
// function isPrime(n) {
//     for (let i = 2 ; i < n ; i++) {
//         if (n % i == 0 ) return false;
//     }
//     return true;
// }

// Not Working
// function checkAge(){
//     if ( age > 18){
//         return true;
//     } else {
//         return confirm('Did your parents allow you?');
//     }
// }

// Not Working
// function checkAge(){
//     if (age > 18){
//     }
//     return confirm ('Did your parents allow you?');
// }

// Not Working
// function checkAge(){
//     return (age < 18 ) ? true : confirm ('Did your parents allow you?');
// }

// Not working
// function checkAge(){
//     return (age < 18 ) || confirm ('Did your parents allow you?');
// }

// Not Working
// min (2 , 5) == 2
// min (3 , -1) == -1
// min (1, 1) == 1
// function min (a, b) {
//     if (a < b ){
//         return(a);
//     } else {
//         return(b);
//     }
// }

// Not Working
// function min (a, b){
//     return a < b ? 'a' : 'b';
// }

// function pow( x, n ){
//     let result = x ;
//     for (let i = 1 ; i < n ; i++){
//         result *= x;
//     }
//     return result ;
// }
// let x = prompt ("x?", '');
// let n = prompt ("n?", '');
// if (n < 1 ){
//     console.log(`Power ${n} is not supported, use a positive integer`);
// } else {
//     console.log(pow(x , n));
// }

// code 4 challenge
// let MarkMiller = 'fullname';
// let massmark = 78;
// let heightmark = 1.69;
// let BMImark = massmark / (heightmark * heightmark);
// let JohnSmith = 'fullname';
// let massjohn = 92;
// let heightjohn = 1.95;
// let BMIjohn = massjohn / (heightjohn * heightjohn);
// function calcBMI () {
//     if (BMIjohn > BMImark){
//         console.log("John Smith's BMI ", BMIjohn ," is higher than Mark Miller's " , BMImark ,"!" );
//     } else {
//         console.log("Mark MIller's BMI ", BMImark ," is higher than John Smith's " , BMIjohn ,"!" );
//     };    
// }
// calcBMI();

// Answer code 4 Challenge
// let mark = {
//     fullname : 'Mark Miller',
//     mass : 78,
//     height : 1.69,
// };
// let john = {
//     fullname : 'john Smith',
//     mass : 92,
//     height : 1.95,
// };
// function calcBMIMark() {
//     return mark.mass / (mark.height ** 2);
// }
// function calcBMIJohn() {
//     return john.mass / (john.height ** 2);
// }
// if (calcBMIMark() > calcBMIJohn()) {
//     console.log(`${mark.fullname}'s BMI (${calcBMIMark()}) is higher than ${john.fullname}'s BMI (${calcBMIJohn()})`);
// } else if (calcBMIJohn() > calcBMIMark()) {
//     console.log(`${john.fullname}'s BMI (${calcBMIJohn()}) is higher than ${mark.fullname}'s BMI (${calcBMIMark()})`);
// }

// let sum = (a,b) => a + b ;
// console.log(sum(1,2));

// let double = n => n * 2;
// console.log(double(3));

// let sayhi= () => console.log('Hello!');
// sayhi();

// let age = prompt("What's your age", 18);
// let welcome = (age < 18)?
//  () => console.log('Hello!') :
//  () => console.log('Greeting');
//  welcome();

// let sum = (a,b) => {
//     let result = a + b ;
//     return result;
// };
// console.log(sum(1,2));

// code 4 challenge
let MarkMiller = 'fullname';
let massmark = 78;
let heightmark = 1.69;
let BMImark = massmark / (heightmark * heightmark);
let JohnSmith = 'fullname';
let massjohn = 92;
let heightjohn = 1.95;
let BMIjohn = massjohn / (heightjohn * heightjohn);
function calcBMI () {
    if (BMIjohn > BMImark){
        console.log("John Smith's BMI ", BMIjohn ," is higher than Mark Miller's " , BMImark ,"!" );
    } else {
        console.log("Mark MIller's BMI ", BMImark ," is higher than John Smith's " , BMIjohn ,"!" );
    };    
}
calcBMI();