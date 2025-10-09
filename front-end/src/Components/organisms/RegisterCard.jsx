import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LoginWithGoogle from "../atoms/LoginWithGoogleButton"
import Request from "../scripts/Request.js"

function RegisterCard() {
    const labelClass = "block text-sm font-medium mb-1";
    const inputClass = "text-amber-100/50 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white outline-1 -outline-offset-1 outline-white/70 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm placeholder-white transition-colors duration-500 placeholder:text-gray-400";
    const buttonClass ="bg-slate-700/30 p-2 rounded-2xl hover:bg-indigo-500 focus:outline-indigo-500 sm:text-sm transition-colors duration-500";

    return (
        <div className="pt-16 flex flex-row justify-center items-center">
            <div className="border w-2xl h-2x1 bg-stone-950/60 p-6 text-amber-50 rounded-4xl">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicUser">
                        <label className={labelClass}>Usuário</label>
                        <Form.Control type="text" placeholder="Usuário" className={inputClass} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <label className={labelClass}>E-mail</label>
                        <Form.Control type="e-mail" placeholder="exemple@email.com" className={inputClass} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <label className={labelClass}>Senha</label>
                        <Form.Control type="password" placeholder="Digite uma senha" className={inputClass} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <label className={labelClass}>Confirme sua senha</label>
                        <Form.Control type="password" placeholder="Repita sua senha" className={inputClass} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            type="checkbox"
                            label=" Li e Aceito os Termos de uso."
                            className=" appearance-none checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline-indigo-500 disabled:bg-white/10"
                        />
                    </Form.Group>

                    <div className="flex">
                        <Button type="submit" className={`${buttonClass} mr-2`}>
                            Registrar
                        </Button>
                        <LoginWithGoogle className={buttonClass} />
                    </div>
                </Form>

                <br />
                Já possui uma conta?{" "}
                <a href="/" className="hover:text-blue-400 underline">
                    Clique Aqui!
                </a>
            </div>
        </div>
    );

}

export default RegisterCard;