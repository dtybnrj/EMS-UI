import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom';

export const Updateemployee = () => {

    const navigate = useNavigate();

    const[loading, setLoading]=useState(true);
    const[employeefname, setEmployeefname]=useState(null);
    const[employeelname, setEmployeelname]=useState(null);
    const[employeeemail, setEmployeeemail]=useState(null);
    const params = useParams();
    const empid = params.id;

    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true);
            try {
                const res  = await EmployeeService.getEmployeeById(empid);
                console.log(res);
                setEmployeefname(res.data.firstName);
                setEmployeelname(res.data.lastName);
                setEmployeeemail(res.data.emailId);
                
            } catch (error) {
                console.log(error)
            }
            setLoading(false);
        }
        fetchData();
    },[])
    function handleChange(e){
        const targetName = e.target.name;
        const targetValue = e.target.value;
        if(targetName==='firstName'){
            setEmployeefname(targetValue);
        } else if (targetName==='lastName'){
            setEmployeelname(targetValue);
        } else if (targetName === 'emailId'){
            setEmployeeemail(targetValue);
        }
    }

    function updateEmployee(){
        var emp = {};
        emp['id'] = empid
        emp['firstName'] = employeefname;
        emp['lastName'] = employeelname;
        emp['emailId'] = employeeemail;
        EmployeeService.updateEmployeeById(empid,emp).then((res)=>{
            console.log(res);
            navigate("/employeeList");
        }).catch((error)=>{
            console.log(error);
        })
    }

    function reset(){

    }
  return !loading ? (
    <div className='flex max-w-2xl mx-auto shabdow border-b'>
  <div className='px-8 py-8'>
      <div className='font-thin text-2xl tracking-wider'>
          <h1>Update Employee</h1>
      </div>
      <div className='items-center justify-center h-14 w-full my-4'>
          <label className='block text-gray-600 text-sm font-normal'>
              First Name
          </label>
          <input type='text' name='firstName' value={employeefname} onChange={(e)=> handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2'></input>
      </div>
      <div className='items-center justify-center h-14 w-full my-4'>
          <label className='block text-gray-600 text-sm font-normal'>
              Last Name
          </label>
          <input type='text' name='lastName' value={employeelname} onChange={(e)=> handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2'></input>
      </div>
      <div className='items-center justify-center h-14 w-full my-4'>
          <label className='block text-gray-600 text-sm font-normal'>
              Email
          </label>
          <input type='email' name='emailId' value={employeeemail} onChange={(e)=> handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2'></input>
      </div>
      <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
          <button className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-6 px-6' data-id={params.id} onClick={updateEmployee}>Update</button>
          <button className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-6 px-6' onClick={reset}>Cancel</button>
      </div>
  </div>
  
</div>
  ):(
    <div>Loading....</div>
  )
}
