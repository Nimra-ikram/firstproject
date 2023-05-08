 // statement within body r head tag is known as inpage js
        // every statement must end with ;
        //! for printing document.write and statement can be in dbl r sngl quotes
                       // document.write ("hello <br>");
        

    //! html tags in js
                    //document.write ("heyyyyyyyyyyyy <br>");
                    //document.write ("babyyyyyyyy");

    //! variable declaration
            //let
            //var
            //const
                   
    //! 1 var
                     //var x = "nimooo";
            //var can over write yan jo last me value dyn gy wo print hgi or dbara declre b kr skty
                    //document.write(x);

    //! 2 let
             //dbara declare ni kr skty pr we can overwrite
                     //let y= 100;

    //! 3 const
              //! we can't redeclare and  reassign
                       //const z= 'cantRedeclare';         
              
//! how to check typeOf variable
                     //   var x = "anime";
                    //   document.write (typeof x) ;       
    
 //! in js both array and object is considered as object
                 //!array
                    //  var x= ['html', 'css'];
                    //  document.write(typeof x);

                 //! object in js
                      // var x;
                    //    x =  {
                    //         name: "nimra",
                    //         country: 'pak'   
                    //             }  
                    //             document.write(x);
                    //             document.write(typeof x);   

            //! for error on console
                      // console.error("something went wrong");

            //! for printing in table form
                         //console.table([1,2,3]);    

    //!for warning
                       //console.warn("hwww warninggggg");  
                       
    //!to clear
                         //console.clear();

//!command to check time to run command
                        //console.time("test");
                        //console.warn("hwww warninggggg");
                        //console.warn("hwww warninggggg");  
                        //console.timeEnd("test");
//!conditional statement
              //!if
                    //    var a= 10;
                    //    var b = 20;
                    //    if( a<b )
                    //    {
                    //     document.write("a is samller");
                    //    }


//! logical operators
                     // (|| && !)
                     // to chk if one is true ||
                     // to chk if both are true &&
                     // to reverese the result !

//!concatenation
                    //  var name= "nimra";
                    //  document.write("my name is" + name);

//!ternary operators
                     // (condition)? trueStatement : false statement;

//! switch statement
                    //  var day = 0;
                    //  switch (day)
                    //  {
                    //          case 0:
                    //               document.write("mondayyyy");
                    //             break;

                    //         case 1:
                    //               document.write("tuesdayyyyyyyyyyy");
                    //               break;
                    //          default:
                    //                document.write("entr valid day");     

                    //  }

//! alert msg
                                  // alert("sshhhh");


//! confirm
                                //confirm("do u like it");

//!prompt(to get value from user)
                             //    var a= prompt("wotx ur name");
                            //     document.write(a);
        
//!function
                        //      function hello()
                        //      {
                        //         document.write("hey i m func");

                        //      }
                        //      hello();
           
                    
//!function with return value
                        //  function sum (m,e,s)
                        //     {
                        //          var a= m+e+s;
                        //          return a;

                        //     }        
                        //        var b=  sum(2,3,4);
                        //        document.write (b);


//!Events in js
                // function hello()
                // {
                //         alert("i love uuuuuuuuuuuuuu");

                // }
                    
                // <button onmousedown="hello()"> click me </button>

//!2 methods to define array
                //     var a= [10,20]
                //     document.write (a[0]);

                // var a= new Array();
                // a[0]=1000000000;
                // document.write(a[0]);

//!to dlt
                   //   var a= [10,20]
                   // document.write (a[0] + "<br>");
                  //  delete a[0];
              //  document.write(a[1]);

//!to sort and reverse
                //     var a =["nimra", "ali", "amigo", "sven"];
                //         a.sort();
                //     document.write(a +"<br>");

                //     a.reverse();
                       
                //     document.write(a +"<br>");
             
//!push and pop to add and subtract value from array end
        // var a =["nimra", "ali", "amigo", "sven"];
        // a.pop();
        // a.push("alina");
        // document.write(a +"<br>");

//!push and pop to add and subtract value from array start
//        var a =["nimra", "ali", "amigo", "sven"];
//          a.shift();
//          a.unshift("yumna");
//         document.write(a +"<br>");
           

//!concat to merge two strings or arrays
          //       var a =["nimra", "ali", "amigo", "sven"];
           //         var b= a.concat("yumna", "habib");
           //         document.write(b +"<br>");
//!join to make string as one or put sth inbetween
         
                        //  var a =["nimra", "ali", "amigo", "sven"];
                        //  var b= a.concat("alina");
                        //  var c= b.join ("  ");
                        //  document.write(c +"<br>");

//!slice= is sy na hm aik array sy new array bnai gy.. yani uska slice nikalyn gy
                        //   var a =["nimra", "ali", "amigo", "sven"];
                        //     var b= a.slice(1,2);
                        //     document.write(b +"<br>");

//!splice to add sth in between array at particular position
                        //splice(index, howmany, "new value", "delete");
                        //        var a =["nimra", "ali", "amigo", "sven"];
                        //        a.splice(2,0,"neha");
                        //        document.write(a +"<br>");

//!isArray - method to check if var is array or not
                //       var a =["nimra", "ali", "amigo", "sven"];
                //       var b= Array.isArray(a);
                //       document.write(b +"<br>");

//!indexOf- to check index of string/int in array  from strt
                     //indexOf("search item", start);
                //      var a =["nimra", "ali", "amigo", "sven"];
                //      var b= a.indexOf("sven",0);
                //      document.write(b +"<br>");

//!indexOf- to check index of string/int in array but from end
                          
                //     var a =["nimra", "ali", "amigo", "sven", "alina", "sven"];
                //      var b= a.lastIndexOf("sven",0);
                //       document.write(b +"<br>");

//!includes- to check if string exists in array or not
                         
                        //   var a =["nimra", "ali", "amigo", "sven", "alina", "sven"];
                        //     var b= a.includes("sven");
                        //       document.write(b +"<br>");

//!some- to chk if array pass tst or not
                        //   var age= [18,20,12,16,10,9];
                        //   var b= age.some(checkAdult);
                        //   document.write(b +"<br>");

                        //   function checkAdult(age)
                        //   {

                        //         return age >= 18;
                        //   }

//!every- to chk if every value pass the test
                //        var age= [18,20,12,16,10,9];
                //           var b= age.every(checkAdult);
                //           document.write(b +"<br>");

                //           function checkAdult(age)
                //           {

                //                 return age >= 18;
                //           }

//!for each- to print like for loop
                       //   var a =["nimra", "ali", "amigo", "sven", "alina", "sven"];
                      //       a.forEach(funtion (value)
                    //       {
                      //         document.write(value +"<br>");    
               
                     //       } 
                     //       );
//!object 1 method
                // var a ={
                //           fname: "nimra",
                //           lname: "ikram",
                //           cgpa: 3.51,
                //           age: 21,
                //            favmovie: ["hobbit","divergent","lotr"] ,    //!array
                //             salary : function()
                //             {                         //function
                //                  return 2500;
                //            },


                //          fullname : function()                  //!func
                //          {
                //                 return this.fname+"  "+this.lname;
                //          },
            //!we can also define object within object
                //              living: 
                //              {
                //                'city': 'rwp',
                //                'country': 'pak'

                //              }
                //        }
                //        console.log(a);
                //        document.write(a.age);
                //        //document.write(a.favmovie[0]); //array
                //       document.write(a.salary());

                   //  document.write(a.fullname());
                  // document.write(a.living.city);    //obj call

//!obj 2nd mthd
//                       var person = new Object();
//                       person.fname= 'nimra';
//                       person.lname='ikram';
//                       document.write(person.fname);

//!array of object
                //     var student=[
                //        {name:"nimra" , age:21}

                //     ];

                //     document.write(student[0].name);

//!const with array and object
                // const a={

                //         name: "nimra",
                //         age: 21
                // };

                //   a.name= "nimoo khan";                  //!we can't modify whole but one by one
                //   console.log(a);

//!for in loop for objct printing
        //  var a ={
        //                    fname: "nimra",
        //                    lname: "ikram",
        //                    cgpa: 3.51,
        //                    age: 21
        //         };
        //            for(var i in a)
        //            { 
        //                document.write(i + ":" + a[i]+ " "+ "<br>");
        //            }


//! array nd map method to do calculations
                //  var a= [10,20,30];
                //  var b= a.map(test);
                //  document.write(b+"<br>");

                //   function  test(x)
                //  {    return x*10;   }

 //! array of obj with map mthd
                //       var student=[
                       
                //       {name:"nimra" , age:21},
                //       {name:"sven" , age:40},
                //      ];
                //      var b= student.map(test);
                //   document.write(b);

                //    function  test(x)
                //  {    return x.name;   }

//! string and its func
           //! length
            //  var str = "my name is khan";
            //   var b =  str.length;
            //   document.write(b);

//! to lowercase
            // var str = "My Name is Khan";
            //    var b =  str.toLowerCase();
            //   document.write(b);
//! to upper case
        //    var str = "My Name is Khan";
        //    var b =  str.toUpperCase();
        //   document.write(b);

//! include to see if exists
// var str = "My Name is Khan";
// var b =  str.includes("Khan");
// document.write(b);

//! start and ends with
// var str = "My Name is Khan";
// var b =  str.startsWith("khan");
// document.write(b);

// var str = "My Name is Khan";
//                var b =  str.endsWith("Khan");
//               document.write(b);

//! search- return index of word
// var str = "My Name is Khan";
// var b =  str.search("is");
// document.write(b);

//! match- returns as an array
// var str = "My Name is is  Khan";
// var b =  str.match(/is/g);                //! g for globbally
// document.write(b);

//! indexOf and lastIndexOf
          //to see index 

//! replace
// var str = "My Name is Khan";
//                var b =  str.replace("My", "your");
//               document.write(b);

//! form me spc remove krny k liay
// var str = "               nimra              ";
// var b =  str.trim();
// alert(b);

//! char at
// var str = "My Name is Khan";
// var b =  str.charAt(4);
// document.write(b);

//! char code at- returns ASCI code
// var str = "My Name is Khan";
// var b =  str.charCodeAt(4);
// document.write(b);

//! concat of string

// var str = "My Name is Khan";
// var str2 = "      hello ji"
//                var b =  str.concat(str2);
//               document.write(b);

//!split
// var str = "My Name is Khan";
//                var b =  str.split(" ");
//               document.write(b);

//! repeat
// var str = "My Name is Khan  ";
// var b =  str.repeat(3);
// document.write(b);

//! slice
// var str = "My Name is Khan";
// var b =  str.slice(3,10);
// document.write(b);

//! substr- similar to slice pr 2nd parameter jo hga wo 1st k bd sy count kry ga
// var str = "My Name is Khan";
//                var b =  str.substr(3,7);
//               document.write(b);

              
//! substr- similar to slice pr 2nd parameter jo hga wo 1st k bd sy count kry ga pr last wly ko add ni kry ga
// var str = "My Name is Khan";
// var b =  str.substring(3,10);
// document.write(b);


//! tostring
    // var a= 50;
    // var b= a.toString();
    //     document.write(b + 20);

//! number - for converting to num
//! parseInt-  to int
//!parseFlloat-  returns fractional value
//! isINT-  to chk if int return true
//! inInfinite_ chk if finite num or not
//! to precision- roundoff

//! date methods
                 //! isky liay phly date ka obj bnaty just like
                           var now = new Date();   // ab ye noe date ka obj
                           //document.write(now);        //!also print GMT
//document.write(now.toDateString());            //! date in readable form
//document.write(now.getDate()+ "<br>");          //! simple date
//document.write(now.getFullYear + "<br>");      //! year
//document.write(now.getMonth()+ "<br>");         //! index start with 0
//document.write(now.getDay()+ "<br>");                //! current day
      //! if we want to print day of specific year r month
      //var now = new Date("january 5 2010");
//document.write(now.getDay()+ "<br>");

// document.write(now.getHours()+ "<br>");
// document.write(now.getMinutes()+ "<br>");
// document.write(now.getSeconds()+ "<br>");
// document.write(now.getMilliseconds()+ "<br>");
// var now = new Date();
// now.setDate(2025);
// document.write(now);       //! just like this there r many set functions to set date hour month year




                 //! javascript DOM
            //! how to target DOM objects 
        //3 methods
        //id             //! document.getElementById(id);
        //class name     //! document.getElementsByClassName(name);
        //tag name        //! document.getElementsByTagName(name);
//document
//document.all[];
//document.title or head or body //! based on ur choice which chtml you want to see
//document.links       //! to see anker tags
//document.image          //! to target image
//document.URL
//document.DOmain
//document.baseURI               //! returns URL
//document.getElementById(id)


//!get methods in DOM
//innerText                 //! to see inner text in tag
//innerHTML                 //!text + tag
//getAttribute                 //!show the value of attribute
//getAttributeNode              //! show the name and value of targted attribute
//Attributes              //! show in arrray form all the attributes of id or class


//! set methods in DOM
//innerText
//InnerHtml
//setAttribute
//Attributes
//RemoveAttributes

//! querySelector
//! querySelectorAll


                //! DOM CSS styling methods
//style
//classname
//classlst