import { useState } from 'react';
import LoginCard from './LoginCard';
import NavbarButton from '../atoms/NavbarButton';

function UpperNavbar() {

  const tabItensStuff = {
    login: {
      text: "Login",
      href: "/login"
    },
    sobre: {
      text: "Sobre",
      href: "/sobre"
    },
  }

  const [isOpen, setIsOpen] = useState(false);
  const [tabItens, setTabItens] = useState(["Login", "Sobre", "TestAlterar"]);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div>
        <nav className="bg-stone-900 w-full top-0 z-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center h-16">

              {/* Logo */}
              <div className="flex-shrink-0 text-white font-bold text-2xl ">
                <a href="#">Homepage</a>
              </div>

              <div className='grow'></div> {/*Divisor*/}

              {/* Menu desktop */}
              <div className="hidden md:flex space-x-4">

                {/* {Object.values(tabItens).map((item, index) => (
                  <NavbarButton
                    key={index}
                    text={item.text}
                    href={item.href}
                    showLogin={showLogin}
                    setShowLogin={setShowLogin}
                    setTabItens={setTabItens}
                  />
                ))} */}

                {tabItens.map((item) => (
                  <a
                    key={item}
                    href={'#' + item}
                    className={
                      item === "Logoff"
                        ? "no-underline p-2 rounded-4xl hover:bg-red-800 focus:outline-indigo-500 sm:text-sm/6 transition-colors duration-500 font-bold text-amber-600"
                        : "text-white no-underline p-2 rounded-4xl hover:bg-indigo-500 focus:outline-indigo-500 sm:text-sm/6 transition-colors duration-500 font-bold"
                    }

                    onClick={() => {

                      if (item === "Login") {
                        setShowLogin(!showLogin);
                      }
                      
                      if(item === "TestAlterar"){ // WIP aqui se faz uma requisição ao front e procura-se  JWT
                        setTabItens(["Tarefas","Metas","Perfil","Logoff"])
                      }
                    }}
                  >
                    {item === "Login" ? (showLogin ? <u>Login</u> : "Login") : item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* WIP -> Existe um problema de responsividade quando o menu já está aberto e é encolhido. Quando isso acontecer o Menu de login deverá sumir*/}
      {/* WIP -> Criar responsividade para dispositivos moveis*/}
      {showLogin && <LoginCard />}
    </>
  );
}

export default UpperNavbar;
