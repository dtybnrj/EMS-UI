import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';
import { Employee } from './Employee';

export const Employeelist = () => {
    const navigate = useNavigate();
    const[loading, setLoading]=useState(true);
    const[employees, setEmployees]=useState(null);

    useEffect(() => {
        const fetchDate = async ()=>{
            setLoading(true);
            try {
                const res = await EmployeeService.getEmployeesList();
                setEmployees(res.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchDate();
    }, []);
    
    const deleteEmployee = (e,id)=>{
        e.preventDefault();
        EmployeeService.deleteEmplyee(id).then((res)=>{
            if(employees){
                setEmployees((prevElement) => {
                    return prevElement.filter((employee)=>employee.id!==id);
                })
            }
        })
    }

  return (
    <div className='container mx-auto my-8'>
        <div className='h-12 float-left'>
            <button onClick={()=>navigate("/addEmployee")} className='rounded bg-slate-600 text-white px-3 py-3'>
                Add Employee
            </button>
        </div>
        <div className='flex shadow border-b'>
            <table className='min-w-full'>
                <thead className='bg-gray-50'>
                    <tr>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>First Name</th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Last Name</th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Email ID</th>
                        <th className='text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Actions</th>
                    </tr>
                </thead>
                {!loading&&(
                <tbody className='bg-white'>
                    {employees.map((employee)=>(
                        <Employee employee={employee} key={employee.id} deleteEmployee={deleteEmployee}></Employee>
                    ))}
                </tbody>
                )}
            </table>
        </div>
    </div>
  )
}
