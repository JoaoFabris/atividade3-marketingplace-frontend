import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Login({ onLogin }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const destinoAposLogin = location.state?.from || '/';

  function handleSubmit(e) {
    e.preventDefault();

    if (!usuario || !senha) {
      setErro('Preencha usuário e senha.');
      return;
    }

    onLogin(usuario);
    navigate(destinoAposLogin, { replace: true });
  }

  return (
    <main className="max-w-sm mx-auto px-5 py-12">
      <h2 className="text-xl font-bold mb-4">Entrar</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col gap-3"
      >
        {erro && (
          <p className="bg-red-100 text-red-700 text-sm rounded p-2">{erro}</p>
        )}

        <input
          type="text"
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className="border border-gray-300 rounded p-2 text-sm"
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="border border-gray-300 rounded p-2 text-sm"
        />

        <button
          type="submit"
          className="bg-slate-800 hover:bg-slate-900 text-white rounded p-2 transition-colors"
        >
          Entrar
        </button>

        <p className="text-xs text-gray-500 text-center">
          Login fictício — qualquer usuário e senha preenchidos funcionam.
        </p>
      </form>
    </main>
  );
}

export default Login;
