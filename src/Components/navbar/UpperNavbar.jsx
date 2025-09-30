import { useState } from 'react';
import LoginCard from '../loginCard/LoginCard';

function UpperNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [tabItens, setTabItens] = useState(["Login", "Sobre"]);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div>
        <nav className="bg-stone-950 w-full top-0 z-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center h-16">

              {/* Logo */}
              <div className="flex-shrink-0 text-white font-bold text-2xl ">
                <a href="#">Homepage</a>
              </div>

              <div className='grow'></div> {/*Divisor*/}

              {/* Menu desktop */}
              <div className="hidden md:flex space-x-4">

                {tabItens.map((item) => (
                  <a
                    key={item}
                    href={'#' + item}
                    className="text-white no-underline p-2 rounded-4xl hover:bg-indigo-500 focus:outline-indigo-500 sm:text-sm/6 transition-colors duration-500 font-bold"
                    onClick={() => {
                      if (item === "Login") {
                        setShowLogin(!showLogin);
                      }
                    }}
                  >
                    {item === "Login" ? (showLogin ? "Login" : "Login") : item}
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
