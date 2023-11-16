import React from "react";
import "./index.css"

const PratosSalgados = () => {
  const PratosSalgadosCardapio = [
    {
      nome: "Fricassê",
      valor: "R$ 20,00",
      descricao: "Prato salgado feito com um delicioso molho de frango",
    },
    {
      nome: "Lasanha",
      valor: "R$ 25,00",
      descricao: "Massa recheada com carne moída de primeira e nolho branco",
    },
    {
      nome: "alaminuta",
      valor: "R$30,00",
      descricao:
        "uma deliciosa alaminuta feita arroz,feijao,batata frita,salada de alface com tomate, bife a parmegiana e acompanhada com um mini refri de sua preferencia",
    },
    {
      nome: "ovos mexidos",
      valor: "R$10,00",
      descricao: "ovos levimente batidos e fritos",
    },
    {
      nome: "xis salada",
      valor: "R$20,00",
      descricao: "pão, alface, tomate, bife, queijo, ovo",
    },
    {
      nome: "hamburguer",
      valor: "R$35,00",
      descricao: "pão, dois bifes, molho de queijo,",
    },
    {
      nome: "porção de pasteis",
      valor: "R$20,00",
      descricao: "pastel de sabores diversos",
    },
    {
      nome: "porcao de fritas",
      valor: "R$20,00",
      descricao: "mini porcao de batatas fritas",
    },
    {
      nome: "torre de batatas",
      valor: "R$65,90",
      descricao: "porcao grande de batatas fritas com bacon e cheddar",
    },
    {
      nome: "Massa com molho branco e bacon",
      valor: " R$ 40,00",
      descricao:
        "massa fresca com molho branco feito com creme de leite fresco, bacon frito e um toque de salsinha",
    },
  ];

  return (
    <div>
      <img src="cafe.jpg"></img>
      <h2>Cardápio</h2>
      <ul>
        {PratosSalgadosCardapio.map((PratosSalgadosCardapio, index) => (
          <li key={index}>
            nome:{PratosSalgadosCardapio.nome}
            valor:{PratosSalgadosCardapio.valor}
            descricao:{PratosSalgadosCardapio.descricao}
            {/* <img src=""></img> */}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PratosSalgados;
