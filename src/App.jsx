import { useState } from 'react'
import './App.css'

function App() {
  const [access, setAccess] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit= (e) => {
      e.preventDefault();
      const time = new Date()
      const data = {'name':name, 'email':email, 'datetime': time.toString()}
      setAccess(data)
      console.log(data)
      fetch('http://localhost:3000/access',{
        body:JSON.stringify(data),
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*',
        }
      }).then(res => res.json())
    }
  
    return (
      <form onSubmit={e => { handleSubmit(e) }}>
        <label>Nome:</label>
        <br />
        <input 
          name='name' 
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br/>
        <label>Email:</label>
        <br />
        <input 
          name='email' 
          type='text' 
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <input 
          type='submit' 
          value='Confirmar' 
        />
      </form>
  )
}

export default App
