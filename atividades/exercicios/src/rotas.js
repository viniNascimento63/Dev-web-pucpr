import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/Home';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Route exact={true} path="/" component={Home} />
        </BrowserRouter>
    );
}

export default Rotas;