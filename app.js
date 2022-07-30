//Q1

function pow(a,b){
    var c=1;
   for(var i=1;i<=b;i++){
      c=c*a;
   }
   console.log(c);
}

pow(2,3);
//Q2
function leapYear(){
    var year=+prompt("Enter Year");
    var rem=year%4;
    if(rem==0){
       alert(year+"is LeapYear");
    }
    else{
       alert(year+"is not LeapYear");
    }
 }
 leapYear();
 //Q3
function area(a,b,c){
   function dis(){
     return (a+b+c)/2
     
   }
  var s=dis();
  console.log( "S="+s);
  return s*((s-a)*(s-b)*(s-c))
}
console.log( area(2,2,3));
//Q4
function main(){
   var math=+prompt("Enter Maths marks");
   var physics=+prompt("Enter phsics marks");
   var chem=+prompt("Enter Chem Marks");
   function avg(){
     return (math+physics+chem)/3;
   }
   function percentage(){
     return ((math+physics+chem)/300)*100
   }
  console.log("Avg="+ avg());
   console.log("Percentage="+percentage());
 }
 main();
 //Q5
function indexof(){
   var char=prompt("Enter Char");
   var a="saraib";
   for(var i=0;i<a.length;i++){
     if(a[i]===char){
       alert(char +"is at index"+ i)
       break;
     }
     else{
       alert("Char Not Present")
     }
   }
 }
 indexof();
 //Q6
function vowel(){
   var a="Saraib";
   for(var i=0;i<a.length;i++){
     if(a[i]==="a" || a[i]==="e" || a[i]==="i" || a[i]==="o" || a[i]==="u" ){
       var b=a.split('');
      var c= b.splice(i,1)
     }
   }
   var d=b.join('');
   alert(d)
 
 }
 vowel();
 //Q8
function distance(){
   var km=+prompt("Enter Distance in KM");
   function meter(){
     var meter=km*1000
     console.log("meter="+meter)
   }
   function feet(){
     var feet=km*3280.84
     console.log("feet="+feet)
   }
   function inches(){
     var inches=km*39370.1
     console.log("inches="+inches)
   }
   function centimeters(){
     var centimeters=km*100000
     console.log("fcentimeters="+centimeters)
   }
   meter();
   feet();
   inches();
   centimeters();
 }
 distance();
 //Q10
function cash(){
   var currency=prompt("Enter Cash");
   
   console.log(currency[0]+" "+"100 notes")
   if(currency[1]<5){
     console.log(currency[1]+"10 notes")
     
   }
   else  {
     
     console.log("1"+" "+"50 note" )
     document.write("<br>")
     console.log((currency[1]-5)+" "+"10 note")
   
   }
  
 }
 cash();
 