import { Link } from 'react-router-dom';

function Header({ quantidadeCarrinho = 0, usuario, onLogout }) {
  return (
    <header className="bg-unyleya-primary text-white p-5 flex flex-wrap justify-between items-center gap-3">
      <Link to="/" className="text-white no-underline">
        <h1 className="text-xl font-bold"> Marketplace João Fabris</h1>
      </Link>
      <nav className="flex items-center gap-5">
        <Link
          to="/"
          className="text-white text-sm hover:text-unyleya-coral transition-colors"
        >
          Home
        </Link>
        <Link
          to="/carrinho"
          className="text-white text-sm hover:text-unyleya-coral transition-colors"
        >
          Carrinho ({quantidadeCarrinho})
        </Link>

        {usuario ? (
          <div className="flex items-center gap-3">
            <span className="text-sm text-white/70">Olá, {usuario}</span>
            <button
              onClick={onLogout}
              className="text-sm bg-white/10 hover:bg-white/20 px-3 py-1 rounded transition-colors"
            >
              Sair
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="text-sm bg-unyleya-coral hover:bg-unyleya-coralDark px-3 py-1 rounded transition-colors"
          >
            Entrar
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
