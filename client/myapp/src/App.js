import './App.css';
import React,{ useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    employee_code: '',
    salary: '' // Initialize with the properties you want to collect
  });

  const handleInputChangeName = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value});
  };
  
  const handleInputChangeCode = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInputChangeSalary = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use the formData to make a fetch API request
    fetch('https://localhost:3001/api/employees/', {
      method: 'POST', // or 'GET', 'PUT', etc., depending on your API
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response here
        console.log(data);
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error:', error);
      });
  };

  return (
    <>
      <h1 style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
        REGISTER YOURSELF
      </h1>

    <form onSubmit={handleSubmit}>
    <div  style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <div className="input-group mb-3" style={{width: '800px'}}>
       <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" name="name"
       onChange={handleInputChangeName} value={formData.name || ''}/>
      </div>
      <div className="input-group mb-3" style={{width: '800px'}}>
       <input type="text" className="form-control" placeholder="Employee Code" aria-label="Employee Code" aria-describedby="basic-addon2" name="employee_code"
       onChange={handleInputChangeCode} value={formData.employee_code || ''}/>
      </div>
      <div className="input-group mb-3" style={{width: '800px'}}>
       <input type="text" className="form-control" placeholder="Salary" aria-label="Salary" aria-describedby="basic-addon2" name="salary"
       onChange={handleInputChangeSalary} value={formData.salary || ''}/>
      </div>
       <button style={{borderStyle: 'none', width: '200px', letterSpacing: '1.5px', height: '40px'}} type="submit">Submit</button>
    </div>
    </form>

    </>
  );
}

export default App;
