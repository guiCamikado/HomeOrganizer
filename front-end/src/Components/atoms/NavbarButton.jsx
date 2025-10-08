//WIP - é necessário corrigir o componente antes de substituir para a navbar

function NavbarButton({ text, href, style, showLogin }) {
  // Fallbacks
  const displayText = text || "setText With text prop";
  const linkHref = href || "#";
  const linkStyle =
    style ||
    "text-white no-underline p-2 rounded-4xl hover:bg-indigo-500 focus:outline-indigo-500 sm:text-sm/6 transition-colors duration-500 font-bold";

  // Handler do click
  const handleClick = () => {
    if (displayText === "Login") {
      setShowLogin && setShowLogin(!showLogin);
    }
  };

  return (
    <a href={linkHref} className={linkStyle} onClick={handleClick}>
      {displayText === "Login" ? (showLogin ? <u>Login</u> : "Login") : displayText}
    </a>
  );
}

export default NavbarButton;
