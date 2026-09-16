import { Link } from 'react-router-dom';

function Header({ quantidadeCarrinho = 0, usuario, onLogout }) {
  return (
    <header className="bg-slate-800 text-white p-5 flex flex-wrap justify-between items-center gap-3">
      <Link to="/" className="text-white no-underline">
        <h1 className="text-xl font-bold">🛒 Minha Loja</h1>
      </Link>
      <nav className="flex items-center gap-5">
        <Link to="/" className="text-white text-sm hover:underline">
          Home
        </Link>
        <Link to="/#produtos" className="text-white text-sm hover:underline">
          Produtos
        </Link>
        <Link to="/carrinho" className="text-white text-sm hover:underline">
          Carrinho ({quantidadeCarrinho})
        </Link>

        {usuario ? (
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-300">Olá, {usuario}</span>
            <button
              onClick={onLogout}
              className="text-sm bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded transition-colors"
            >
              Sair
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="text-sm bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded transition-colors"
          >
            Entrar
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
