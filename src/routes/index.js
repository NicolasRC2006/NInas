import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PratosSalgados from "../pages/PratosSalgados";
import Sobremesas from "../pages/Sobremesas";
import MovimentoSociais from "../pages/MovimentoSocial";
import Contatos from "../pages/Contatos";



const Rotas = () => {
return(
<>
<BrowserRouter>
<Routes>
    <Route path="/" element={<Home /> } exact/>
    <Route path="/pratos" element={<PratosSalgados/>} />
    <Route path="/sobremesas" element={<Sobremesas/>} />
    <Route path="/movimentossociais" element={<MovimentoSociais/>} />
    <Route path="/contatos" element={<Contatos/>} />
</Routes>
</BrowserRouter>

</>
);




}
export default Rotas