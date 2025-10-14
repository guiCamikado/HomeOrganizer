import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import LoginWithGoogle from "../atoms/LoginWithGoogleButton";
import Request from "../scripts/Request";
import { useState } from "react";

function RegisterCard() {
  const labelClass = "block text-sm font-medium mb-1";
  const inputClass =
    "text-amber-100/50 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white outline-1 -outline-offset-1 outline-white/70 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm placeholder-white transition-colors duration-500 placeholder:text-gray-400";
  const buttonClass =
    "bg-slate-700/30 p-2 rounded-2xl hover:bg-indigo-500 focus:outline-indigo-500 sm:text-sm transition-colors duration-500";

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [termos, setTermos] = useState(false);
  const [passNotEqual, setPassNotEqual] = useState("senhas não coincidem!!");

  const checkIfPasswordsMatch = (e) => {
    if (senha === confirmaSenha) {
      setPassNotEqual(true);
    } else {
      setPassNotEqual(false);
    }
  };

  const data = {
    user: user,
    email: email,
    password: senha,
  };

  async function sendRegistrationRequest() {
    if (passNotEqual || termos) {
      const request = new Request();
      try {
        const response = await request.post(
          "http://127.0.0.1:5000/DBAction/newRegisterRequest",
          data
        );
      } catch (error) {
        console.error("Erro ao registrar usuário:", error);
      }
    } else {
      alert(
        "Por favor, verifique se as senhas coincidem e se você aceitou os termos de uso."
      );
      return;
    }
  }

  return (
    <>
      <div className="pt-16 flex flex-row justify-center items-center">
        <div className="border w-2xl h-2x1 bg-stone-950/60 p-6 text-amber-50 rounded-4xl">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicUser">
              <label className={labelClass}>Usuário</label>
              <Form.Control
                type="text"
                placeholder="Usuário"
                className={inputClass}
                onChange={(e) => setUser(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <label className={labelClass}>E-mail</label>
              <Form.Control
                type="e-mail"
                placeholder="exemple@email.com"
                className={inputClass}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <label className={labelClass}>Senha</label>
              <Form.Control
                type="password"
                placeholder="Digite uma senha"
                className={inputClass}
                onChange={(e) => {
                  setSenha(e.target.value);
                  checkIfPasswordsMatch(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <label className={labelClass}>Confirme sua senha</label>
              <Form.Control
                type="password"
                placeholder="Repita sua senha"
                className={inputClass}
                onChange={(e) => {
                  setConfirmaSenha(e.target.value);
                  checkIfPasswordsMatch(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label=" Li e Aceito os Termos de uso."
                className=" appearance-none checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline-indigo-500 disabled:bg-white/10"
                onChange={(e) => setTermos(e.target.checked)}
              />
            </Form.Group>
            <div className="flex">
              <Button
                type="submit"
                className={`${buttonClass} mr-2`}
                onClick={sendRegistrationRequest}
              >
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
    </>
  );
}

export default RegisterCard;
