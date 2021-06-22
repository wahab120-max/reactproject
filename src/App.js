import React,{useState, useEffect} from 'react'
import './App.css';
import TextField from './components/TextField'
const App = () => {
  const [name, setName] = useState('');
  const [errname, setErrName] =useState('');
  const [last, setLast] = useState('');
  const [errlast, setErrLast] = useState('');
  const [mobile, setMobile] = useState('');
  const [errmobile, setErrMobile] = useState('');
  const [age,setage] = useState('');
  const [errage, setErrage] = useState('');
  const [names, setnames] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(true);


useEffect(() => {
  console.log("names", names)
  setloading(false)
}, [names])

const addToArray = () => {
  var isValid = [];
  if (!name){
    setErrName("Name Required");
    isValid.push(false);
  } else {
    setErrName("");
    isValid.push(true);

    }

  if (!last) {
    setErrLast("Last Name Required");
    isValid.push(false);
} else {
  setErrLast("");
  isValid.push(true);
}
if (!mobile) {
  setErrMobile("Mobile No Required");
  isValid.push(false);
} else {
  if(mobile.lenght===10){
    setErrMobile("");
    isValid.push(true);
  }else{
    setErrMobile("invalid Mobile No.");
    isValid.push(false);
  }
}

if (!age) {
  setErrage("Age Required");
  isValid.push(false);
}else {
  setErrage("");
  isValid.push(true);
}
console.log("isvalid",isValid);
if (isValid.includes(false) !==true){
  var data ={
    name: name,
    last:last,
    mobile: mobile,
    age: age
  }
}
}
 
return(
<div className="App">
  <TextField
  val={name}
  placeholder="name"
  change={(event) =>{
    setName(event.target.value)
        }}
        height={30}
        error={errname}
      />

      <TextField
        val={last}
        placeholder="Last Name"
        change={(event) => {
          setLast(event.target.value)
        }}
        height={30}
        error={errlast}
      />

      <TextField
        val={mobile}
        placeholder="Mobile"
        change={(event) => {
          setMobile(event.target.value)
        }}
        height={30}
        error={errmobile}
      />
      <TextField
        val={age}
        placeholder="Age"
        change={(event) => {
          setage(event.target.value)
        }}
        height={30}
        error={errage}
      />

      <button
        onClick={addToArray}
        style={{
          height: 40,
          width: '10%',
          padding: 5,
        }}
      >
        Click
      </button>

      {
        names &&
        names.map((item, index) => {
          return (
            <p>{item}</p>
          )
        })
      }


    </div>
);
    }
export default App;
    



