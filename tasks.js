
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  // console.log("console " +text.trim().split(" ")[0]);
  if (text.trim() === 'quit' || text.trim() === 'exit') {
    quit();
  }
  else if(text.trim().split(" ")[0] === 'hello'){
    hello(text);
  }
  else if(text.trim() === 'help'){
    help();
  }else if(text.trim() === 'list'){
    list();
  }else if(text.trim().split(" ")[0] === 'add'){
    add(text);
  }else if(text.trim().split(" ")[0] === 'del'){
    del(text);
  } else if(text.trim().split(" ")[0] === 'edit'){
    edit(text);
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * if you type"hello xxx", you will get "hello xxx!"
 * if you just type hello, you will get "hello!"
 *
 * @returns {void}
 */
function hello(c){
  console.log(c.trim()+'!');
}

/**
 * print out the commands' list
 *
 * @returns {void}
 */
//  function help(){
//   console.log('list of commands:\n quit:to quit\n exit:to quit\n hello:say hello\n help:type all of this');
// }
function help(){

  console.log('1_hello for saying just hello or hello plus your additional input like hello x ==> \'hello x\'  \n'+
              '2_quit or exit to quit the app\n' +
              '3_list to see all the tasks you have \n' +
              '4_add to add tasks\n' +
              '5_del to remove a task\n' 
           );
  
  }
  


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}



/**
 * List commands
 */

 
var toDo=[ ["buy Chips",true],["go to the doctor",false],["visit parent",true] ];


var sign="";
function list(){

var m="";
for (let i = 1; i <= toDo.length; i++) {

  if(toDo[i-1][1]===true){
        sign=" [✔] ";
      }else{
        sign=" [ ] ";
      }
        m= m+i+sign+toDo[i-1][0]+"\n";
      }
    
console.log(m);
}


/**
 * add to the ToDo list
 *
 * 
 */
 function add(c){
  if (x= c.trim().split(" ")[1] == undefined) { console.log("error");}
else{
  // toDo.push(c.substring(3).trim());}
  toDo.length=toDo.length+1;

  var newlen=toDo.length;
  var newtxt=c.substring(3).trim();

 toDo[newlen-1]=[newtxt,false];
}
 }

function del(c){
  var i=c.substring(3).trim();

if(c.trim().split(" ")[1] == undefined){
 toDo.pop();
}else if (isNaN(i)){
 console.log("enter a valid number");
}else{
  if (i> toDo.length) {
    console.log("number out of Range");
  } else
  {toDo.splice(i-1,1);}
}

}

function edit(c){    
  var i=c.substring(4).trim(); 
  var j;
  var t;

if(c.trim().split(" ")[1] == undefined){               //edit
  console.log("enter valid input to edit");
}else if (isNaN(c.trim().split(" ")[1])){             //edit  buy some bread
 
  toDo[toDo.length -1][0] = i;
  toDo[toDo.length -1][1]=false;

}else{
        j=c.trim().split(" ")[1] ; 
        var m=c.indexOf(c.trim().split(" ")[2]);
        
        if (m==-1 ){                                 // edit 2
          console.log("enter something to edit ");
        }
        else if (j> toDo.length) {
          console.log("number out of Range");
        } else{
          toDo[j-1][0]=c.substring(m).trim();
          toDo[j-1][1]         // edit 2 buy chocolat
             }
      }

}

// The following line starts the application
startApp("Dania Captan");
