import { useState } from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import ProdutoCard from '../components/ProdutoCard';
import FormularioProduto from '../components/FormularioProduto';
import produtosIniciais from '../data/produtos';

function Home({ onAdicionarAoCarrinho }) {
  const [produtos, setProdutos] = useState(produtosIniciais);
  const [searchParams, setSearchParams] = useSearchParams();
  const categoriaFiltro = searchParams.get('categoria') || 'Todas';

  function cadastrarProduto(novoProduto) {
    setProdutos((atuais) => [...atuais, novoProduto]);
  }

  const categorias = ['Todas', ...new Set(produtos.map((p) => p.categoria))];

  const produtosFiltrados =
    categoriaFiltro === 'Todas'
      ? produtos
      : produtos.filter((p) => p.categoria === categoriaFiltro);

  function handleFiltroChange(e) {
    const categoria = e.target.value;
    if (categoria === 'Todas') {
      setSearchParams({});
    } else {
      setSearchParams({ categoria });
    }
  }

  return (
    <main className="flex flex-col lg:flex-row gap-8 p-5">
      <section id="produtos" className="flex-[3]">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <h2 className="text-xl font-bold">Produtos</h2>

          <select
            value={categoriaFiltro}
            onChange={handleFiltroChange}
            className="border border-gray-300 rounded p-2 text-sm bg-white"
          >
            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {produtosFiltrados.length === 0 ? (
          <p className="text-gray-500">
            Nenhum produto encontrado nessa categoria.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {produtosFiltrados.map((produto) => (
              <div key={produto.id}>
                <Link
                  to={`/produto/${produto.id}`}
                  className="no-underline text-inherit block"
                >
                  <ProdutoCard produto={produto} />
                </Link>
                <button
                  className="mt-2 w-full bg-slate-800 hover:bg-slate-900 text-white text-sm rounded p-2 transition-colors"
                  onClick={() => onAdicionarAoCarrinho(produto)}
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Aqui é onde a rota filha (/produto/:id) vai aparecer, */}
        {/* renderizada por dentro da Home quando a URL corresponder. */}
        <div className="mt-8">
          <Outlet />
        </div>
      </section>

      <aside className="flex-1 min-w-[260px] flex flex-col gap-5">
        <FormularioProduto onCadastrar={cadastrarProduto} />
      </aside>
    </main>
  );
}

export default Home;
