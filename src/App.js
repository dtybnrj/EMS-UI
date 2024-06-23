import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Addemployee } from './components/Addemployee';
import Navbar from './components/Navbar';
import { Employeelist } from './components/Employeelist';
import { Updateemployee } from './components/Updateemployee';
import Attendancelist from './components/Attendancelist';
import Loginpage from './components/auth/Loginpage';
import EMSUserService from './services/EMSUserService';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Loginpage />} />
          <Route exact path="/login" element={<Loginpage />} />
          <Route path="/profile" element={<ProfilePage />} />
          {EMSUserService.adminOnly() && (
            <>
              <Route path='/employeeList' element={<Employeelist></Employeelist>}></Route>
              <Route path='/addEmployee' element={<Addemployee></Addemployee>}></Route>
              <Route path='/getEmployeeAttendance' element={<Attendancelist></Attendancelist>}></Route>
              <Route path='/updateEmployee/:id' element={<Updateemployee></Updateemployee>}></Route>
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
