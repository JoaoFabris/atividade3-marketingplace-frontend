import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RotaPrivada from './components/RotaPrivada';
import Home from './pages/Home';
import ListaProdutos from './pages/ListaProdutos';
import DetalhesProduto from './pages/DetalhesProduto';
import CarrinhoPage from './pages/CarrinhoPage';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import produtosIniciais from './data/produtos';

const CHAVE_CARRINHO = 'marketplace:carrinho';
const CHAVE_USUARIO = 'marketplace:usuario';

function App() {
  const [produtos, setProdutos] = useState(produtosIniciais);

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

  function cadastrarProduto(novoProduto) {
    setProdutos((atuais) => [...atuais, novoProduto]);
  }

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
      <div className="app min-h-screen flex flex-col">
        <Header
          quantidadeCarrinho={carrinho.length}
          usuario={usuario}
          onLogout={fazerLogout}
        />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />}>
              <Route
                index
                element={
                  <ListaProdutos
                    produtos={produtos}
                    onCadastrar={cadastrarProduto}
                    onAdicionarAoCarrinho={adicionarAoCarrinho}
                  />
                }
              />
              <Route
                path="produto/:id"
                element={
                  <DetalhesProduto
                    produtos={produtos}
                    onAdicionarAoCarrinho={adicionarAoCarrinho}
                  />
                }
              />
            </Route>

            <Route
              path="/carrinho"
              element={
                <RotaPrivada usuario={usuario}>
                  <CarrinhoPage
                    itens={carrinho}
                    onRemover={removerDoCarrinho}
                  />
                </RotaPrivada>
              }
            />

            <Route path="/login" element={<Login onLogin={fazerLogin} />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
