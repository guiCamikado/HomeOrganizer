// import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LoginWithGoogle from '../atoms/LoginWithGoogleButton';

function LoginCard() {
    // Use useEffect para reagir à mudança de toggleVisibility
    return (
        <>
            <div
                className="w-2xl h-2x1 bg-stone-950/60 p-6 text-amber-50 rounded-bl-4xl absolute right-0 ">

                <Form className='block text-sm/6 font-medium text-white'>
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Usuário..." className='block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/70 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 placeholder-white transition-colors duration-500'  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Senha..." className='block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/70 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 placeholder-white transition-colors duration-500 out' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label=" Lembre de mim!" className='col-start-1 row-start-1 appearance-none border border-none checked:border-indigo-500 checked:bg-indigo-500 indeterminate:border-indigo-500 indeterminate:bg-indigo-500 focus-visible:outline-indigo-500 disabled:bg-white/10  forced-colors:appearance-auto' />
                    </Form.Group>
                    <div className='flex'>
                        <Button type="submit" className='mr-2 bg-slate-700/30 p-2 rounded-2xl hover:bg-indigo-500 focus:outline-indigo-500 sm:text-sm/6 transition-colors duration-500'>
                            Login
                        </Button>
                        <LoginWithGoogle className='bg-slate-700/30 p-2 rounded-2xl hover:bg-indigo-500 focus:outline-indigo-500 sm:text-sm/6 transition-colors duration-500' />
                    </div>
                </Form>

                Não possuí conta? <a href="/register" className='hover:text-blue-400 underline'>Clique Aqui!</a>
            </div>
        </>
    );
}

export default LoginCard;