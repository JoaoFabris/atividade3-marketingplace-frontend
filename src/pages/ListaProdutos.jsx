import { Link, useSearchParams } from 'react-router-dom';
import ProdutoCard from '../components/ProdutoCard';
import IconeCarrinho from '../components/IconeCarrinho';
import FormularioProduto from '../components/FormularioProduto';

function ListaProdutos({ produtos, onCadastrar, onAdicionarAoCarrinho }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoriaFiltro = searchParams.get('categoria') || 'Todas';

  const categorias = ['Todas', ...new Set(produtos.map((p) => p.categoria))];

  const produtosFiltrados =
    categoriaFiltro === 'Todas'
      ? produtos
      : produtos.filter((p) => p.categoria === categoriaFiltro);

  function handleFiltroChange(categoria) {
    if (categoria === 'Todas') {
      setSearchParams({});
    } else {
      setSearchParams({ categoria });
    }
  }

  // Evita que o clique no botão de carrinho também acione a navegação
  // do <Link> que envolve o card (eles ficam sobrepostos visualmente).
  function handleAdicionarClick(e, produto) {
    e.preventDefault();
    e.stopPropagation();
    onAdicionarAoCarrinho(produto);
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-5 items-start">
      <section id="produtos" className="flex-[3]">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <h2 className="text-xl font-bold">Produtos</h2>

          <div className="flex flex-wrap gap-2">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFiltroChange(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  categoriaFiltro === cat
                    ? 'bg-unyleya-primary text-white border-unyleya-primary'
                    : 'bg-white text-slate-700 border-gray-200 hover:border-unyleya-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {produtosFiltrados.length === 0 ? (
          <p className="text-gray-500">
            Nenhum produto encontrado nessa categoria.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {produtosFiltrados.map((produto) => (
              <div key={produto.id} className="relative">
                <Link
                  to={`/produto/${produto.id}`}
                  className="no-underline text-inherit block"
                >
                  <ProdutoCard produto={produto} />
                </Link>
                <button
                  onClick={(e) => handleAdicionarClick(e, produto)}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-unyleya-coral text-white flex items-center justify-center hover:bg-unyleya-coralDark transition-colors"
                  aria-label={`Adicionar ${produto.nome} ao carrinho`}
                  title="Adicionar ao carrinho"
                >
                  <IconeCarrinho className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      <aside className="flex-1 min-w-[260px] flex flex-col gap-5">
        <FormularioProduto
          onCadastrar={onCadastrar}
          categorias={categorias.filter((cat) => cat !== 'Todas')}
        />
      </aside>
    </div>
  );
}

export default ListaProdutos;
