import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LoginWithGoogle from "../../buttons/LoginWithGoogleButton"

function RegisterCard() {
    return(
        <div className='pt-16 flex flex-row justify-center items-center'>
            <div className="border w-2xl h-2x1 bg-stone-950/60 p-6 text-amber-50 rounded-4xl ">

                <Form className='block text-sm/6 font-medium text-white'>
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        Email<Form.Control type="email" placeholder="example@email.com" className='block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/70 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 placeholder-white transition-colors duration-500'  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        Senha<Form.Control type="password" placeholder="********" className='block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/70 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 placeholder-white transition-colors duration-500 out' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                       Confirme sua senha<Form.Control type="password" placeholder="********" className='block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/70 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 placeholder-white transition-colors duration-500 out' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label=" Li e Aceito os Termos de uso." className='col-start-1 row-start-1 appearance-none border border-none checked:border-indigo-500 checked:bg-indigo-500 indeterminate:border-indigo-500 indeterminate:bg-indigo-500 focus-visible:outline-indigo-500 disabled:bg-white/10  forced-colors:appearance-auto' />
                    </Form.Group>
                    <div className='flex'>
                        <Button type="submit" className='mr-2 bg-slate-700/30 p-2 rounded-2xl hover:bg-indigo-500 focus:outline-indigo-500 sm:text-sm/6 transition-colors duration-500'>
                            Registrar
                        </Button>
                        <LoginWithGoogle className='bg-slate-700/30 p-2 rounded-2xl hover:bg-indigo-500 focus:outline-indigo-500 sm:text-sm/6 transition-colors duration-500' />
                    </div>
                </Form>
                    <br></br>
                Já possuí uma conta? <a href="#register" className='hover:text-blue-400 underline'>Clique Aqui!</a>
            </div>
        </div>
    )
}

export default RegisterCard;