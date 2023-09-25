import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Addemployee } from './components/Addemployee';
import Navbar from './components/Navbar';
import { Employeelist } from './components/Employeelist';
import { Updateemployee } from './components/Updateemployee';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route index element={<Employeelist></Employeelist>}></Route>
          <Route path='/' element={<Employeelist></Employeelist>}></Route>
          <Route path='/employeeList' element={<Employeelist></Employeelist>}></Route>
          <Route path='/addEmployee' element={<Addemployee></Addemployee>}></Route>
          <Route path='/updateEmployee/:id' element={<Updateemployee></Updateemployee>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
