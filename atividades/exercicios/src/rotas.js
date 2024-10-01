import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contato from './pages/Login';
import Principal from './pages/Principal';
import Sobre from './pages/Sobre';
import NotFound from './pages/NotFound';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Contato />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/principal" component={<Principal />} /> {/* Rota para a página principal */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;
