import React, { useState }  from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Button from '@mui/material/Button';



function App() {
  const [todos, setTodos] = useState([]);
  const [pvm,setPvm] =useState(new Date())
  const [descStr,setDescStr] =useState('');

  const addTehtava = (event) => {
    event.preventDefault();
    let pvmStr = pvm.getDate() + "." + (pvm.getMonth()+1) + "." + pvm.getFullYear();
    setTodos([...todos,{desc:descStr, date:pvmStr}]);
  }

   const handleChange = (event) => {
    setDescStr(event.target.value);
   } 

  return (
    <div className="App" >
      <h1>Todolist</h1>
      
     <TextField value={descStr} label="Description" variant="outlined"  onChange={handleChange}/>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker label = "Valitse päivämäärä"
      value = {pvm}
      onChange={(pvm) => setPvm(pvm)}
      renderInput={(params) => <TextField {...params} />}
      />
      </LocalizationProvider>
      <Button variant="contained" onClick={addTehtava}>Add</Button >
      <table>
        <tbody>
      {
      todos.map((todo, index) => 
        <tr key={index}>
          <td>{todo.date}</td>
          <td>{todo.desc}</td>
        </tr>)
      }
      </tbody></table>
    </div>
  );
}

export default App;
