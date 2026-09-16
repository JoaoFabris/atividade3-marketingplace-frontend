import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RotaPrivada from './components/RotaPrivada';
import Home from './pages/Home';
import DetalhesProduto from './pages/DetalhesProduto';
import CarrinhoPage from './pages/CarrinhoPage';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

const CHAVE_CARRINHO = 'marketplace:carrinho';
const CHAVE_USUARIO = 'marketplace:usuario';

function App() {
  const [carrinho, setCarrinho] = useState(() => {
    try {
      const salvo = localStorage.getItem(CHAVE_CARRINHO);
      return salvo ? JSON.parse(salvo) : [];
    } catch (erro) {
      console.error('Erro ao ler carrinho do localStorage:', erro);
      return [];
    }
  });

  const [usuario, setUsuario] = useState(() => {
    try {
      return localStorage.getItem(CHAVE_USUARIO) || null;
    } catch (erro) {
      console.error('Erro ao ler usuário do localStorage:', erro);
      return null;
    }
  });

  useEffect(() => {
    localStorage.setItem(CHAVE_CARRINHO, JSON.stringify(carrinho));
  }, [carrinho]);

  useEffect(() => {
    if (usuario) {
      localStorage.setItem(CHAVE_USUARIO, usuario);
    } else {
      localStorage.removeItem(CHAVE_USUARIO);
    }
  }, [usuario]);

  function adicionarAoCarrinho(produto) {
    setCarrinho((itensAtuais) => [...itensAtuais, produto]);
  }

  function removerDoCarrinho(index) {
    setCarrinho((itensAtuais) => itensAtuais.filter((_, i) => i !== index));
  }

  function fazerLogin(nomeUsuario) {
    setUsuario(nomeUsuario);
  }

  function fazerLogout() {
    setUsuario(null);
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Header
          quantidadeCarrinho={carrinho.length}
          usuario={usuario}
          onLogout={fazerLogout}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                carrinho={carrinho}
                onAdicionarAoCarrinho={adicionarAoCarrinho}
              />
            }
          >
            <Route
              path="produto/:id"
              element={
                <DetalhesProduto onAdicionarAoCarrinho={adicionarAoCarrinho} />
              }
            />
          </Route>

          {/* Rota protegida: só acessa quem estiver logado */}
          <Route
            path="/carrinho"
            element={
              <RotaPrivada usuario={usuario}>
                <CarrinhoPage itens={carrinho} onRemover={removerDoCarrinho} />
              </RotaPrivada>
            }
          />

          <Route path="/login" element={<Login onLogin={fazerLogin} />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
