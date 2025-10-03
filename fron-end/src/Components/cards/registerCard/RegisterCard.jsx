import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LoginWithGoogle from "../../buttons/LoginWithGoogleButton"
import { useState } from 'react';

function RegisterCard() {
    const labelClass = "block text-sm font-medium mb-1";
    const inputClass = "text-amber-100/50 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white outline-1 -outline-offset-1 outline-white/70 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm placeholder-white transition-colors duration-500 placeholder:text-gray-400";

    const inputClassError = "text-amber-100/50 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white outline-1 -outline-offset-1 outline-red-500 focus:outline-2 focus:-outline-offset-2 focus:outline-red-500 sm:text-sm placeholder-white transition-colors duration-500 placeholder:text-gray-400";


    const buttonClass = "bg-slate-700/30 p-2 rounded-2xl hover:bg-indigo-500 focus:outline-indigo-500 sm:text-sm transition-colors duration-500";
    const redAlert = "rounded-md bg-red-500/10 border border-red-600 text-red-600 text-sm font-medium flex min-w-full min-h-full border-2 justify-center items-center"

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [textError, setTextErro] = useState("")
    const [passwordIncompatible, setPasswordIncompatible] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault(); // evita o comportamento padrão do form (recarregar a página)
        console.log(password);
        console.log(confirmPassword);



        if (password !== confirmPassword) {
            console.log("form Invalido");
            setPasswordIncompatible(true)
            setTextErro("*As senhas devem ser iguais!")
            return; // para a execução aqui, não continua
        }
        if (password.length < 8 || password.length >= 64) {
            console.log("form Invalido");
            setPasswordIncompatible(true)
            setTextErro("*A senha deve entre ter 8 a 64 caracteres!")
            return; // para a execução aqui, não continua
        }

        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (!hasUppercase || !hasLowercase || !hasSpecialChar) {
            console.log("form Inválido");
            setPasswordIncompatible(true);
            setTextErro("*A senha deve conter ao menos uma letra maiúscula, uma minúscula e um caractere especial!");
            return;
        }
        setPasswordIncompatible(false)
        setTextErro(""); // se chegou até aqui, limpa qualquer erro anterior

        // Enviar para API
        console.log("Form válido:", { password });
    };

    return (
        <div className="pt-16 flex flex-row justify-center items-center">
            <div className="border w-2xl h-2x1 bg-stone-950/60 p-6 text-amber-50 rounded-4xl">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicUser">
                        <label className={labelClass}>Usuário</label>
                        <Form.Control type="text" placeholder="Usuário" className={inputClass} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <label className={labelClass}>E-mail</label>
                        <Form.Control type="e-mail" placeholder="exemplo@email.com" className={inputClass} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <label className={labelClass}>Senha</label>
                        <Form.Control type="password" placeholder="Digite uma senha" className={passwordIncompatible ? inputClassError : inputClass} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <label className={labelClass}>Confirme sua senha</label>
                        <Form.Control type="password" placeholder="Digite uma senha" className={passwordIncompatible ? inputClassError : inputClass} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </Form.Group>

                    <div className='flex'>
                        <div className='flex-1'>
                            <Form.Group className="mb-3 p-1" controlId="formBasicCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    label={
                                        <span className="ml-2">
                                            Li e aceito os{" "}
                                            <a
                                                href="#termos"
                                                className="text-blue-400 no-underline hover:text-indigo-500 focus:outline-indigo-500 sm:text-sm transition-colors duration-500"
                                            >
                                                termos de uso
                                            </a>
                                            .
                                        </span>
                                    }
                                    className="appearance-none checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline-indigo-500 disabled:bg-white/10"
                                />
                            </Form.Group>
                            <div className="flex">
                                <Button type="submit" className={`${buttonClass} mr-4 ml-1`}>
                                    Criar Perfil
                                </Button>
                                <LoginWithGoogle className={buttonClass} />
                            </div>
                            <div>
                                <br />
                                Já possui uma conta?{" "}
                                <a href="#register" className="hover:text-blue-400 underline">
                                    Clique Aqui!
                                </a>
                            </div>
                        </div>

                        <div className='flex-1 justify-center items-center'>
                            {passwordIncompatible && <div className={redAlert}>{textError}</div>}
                            {/* {redAlert} */}
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );

}

export default RegisterCard;