import { Outlet } from 'react-router-dom';

// Home agora é apenas o "layout" da seção principal do site.
// O <Outlet /> é o "buraco" onde a rota filha ativa é desenhada:
// ou a lista de produtos (rota index), ou os detalhes (produto/:id) -
// nunca as duas ao mesmo tempo, porque são rotas filhas irmãs entre si.
function Home() {
  return <Outlet />;
}

export default Home;
