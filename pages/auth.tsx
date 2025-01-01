import axios from 'axios';
import { useCallback, useState } from "react";
import Input from "@/Components/Input";
import {signIn} from 'next-auth/react';
import { error } from 'console';


import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Auth = () => {

    const [email, setEmail]= useState ('');
    const [name, setName]= useState ('');
    const [password, setPassword]= useState ('');
    const [variant, setVariant]= useState ('login');
    const toggleVariant =useCallback (()=>{
        setVariant((currentVariant)=> currentVariant === 'login' ? 'register' : 'login');
    },[])
     const login = useCallback(async() =>{
        try{
            await signIn('credentials',{
                email,
                password,
                callbackUrl: '/profiles'
            });

            
        }
        catch (error) {
            console.log(error);
        }
    },[email, password]);

    const register = useCallback(async ()=> {
        try {
            await axios.post('/api/register',{
                email,
                name,
                password

            });
            login();
        }catch (error) {
            console.log(error);
        }
    },[email, name, password, login]);

   
  return (
    <div className="relative h-full w-full bg-[url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs')] bg-no-repeat bg-fixed bg-cover ">
        <div className="bg-black h-full w-full lg:bg-opacity-50">
            <nav className="px-12 py-5">
                <img src="/images/logo.png" alt="Logo" className="h-12" />
            </nav>
            <div className="flex justify-center">
                <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                <h2 className="text-white text-4xl mb-8 font-semibold">{variant === 'login' ? 'Sign in' :'Register'}</h2>
                <div className="flex flex-col gap-4">
                    {variant === 'register' && (
                    <Input  
                    label="Username "
                    onChange={(ev: any)=>setName(ev.target.value)}
                    id="name"
                    value={name}
                    />)}
                    <Input  
                    label="Email "
                    onChange={(ev: any)=>setEmail(ev.target.value)}
                    id="email"
                    type="email"
                    value={email}
                    />
                    <Input  
                    label="Password "
                    onChange={(ev: any)=>setPassword(ev.target.value)}
                    id="password"
                    type="password"
                    value={password}
                    />
                </div>
                <button onClick={variant === 'login' ? login :register} className="bg-red-600 py-3 text-white rounded-md mt-10 w-full hover:bg-red-700 transation">
                    {variant === 'login' ? 'login': 'Sign up'}
                </button>
                <div className='flex flex-row items-center gap-4 mt-8 justify-center'>
                    <div onClick={()=> signIn('google',{callbackUrl: '/profiles' })}
                    className='w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition'>
                        <FcGoogle size={30} />
                    </div>
                    
                    <div onClick={()=> signIn('github',{ callbackUrl: '/profiles' })} className='w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition'>
                        <FaGithub size={30} />
                    </div>
                </div>
                <p className="text-neutral-500 mt-12  ">New to Netflix?
                <span onClick={toggleVariant} className="text-white ml-1 hover:underline crusor-pointer">{variant === 'login' ? 'Sign up now':'login'}</span>
                </p>
                
                </div>
            </div>
        </div>
    </div>
    
 
);
};
export default Auth;