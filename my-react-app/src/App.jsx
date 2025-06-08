import Greeting from "./Greeting";
const App=()=>{
const name=["manish","sagar","shrish","abishek","sagar","rohan","roshann","prabin","dipesh","sandhhya","prasamsha"]

 return(
  <>
 {name.map((friend,index)=>(
  <Greeting key={index} name={friend}/>
 ))}
  </>
 );
}
export default App;