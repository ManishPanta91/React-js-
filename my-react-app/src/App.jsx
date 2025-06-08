import Hello from "./hello";
import Greeting from "./Greeting";
import Hello from "./hello";
const App=()=>{
const name=["manish","sagar","shrish","abishek","sagar","rohan","roshann","prabin","dipesh","sandhhya","prasamsha"]

 return(
  <>
 {name.map((friend,index)=>(
  <Greeting key={index} name={friend}/>
 
 ))}
  <Hello/>
  </>
 );
}
export default App;