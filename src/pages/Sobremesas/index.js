import Titulos from "../../components/Button"

const Sobremesas = () => {
      const     Doces=[ 
       
         { nome: 'mosaico',valor:'R$ 18,90', descricao:'doce feito com gelatinas coloridas colocadas dentro de um delicioso manjar de coco'},
         { nome: 'banoffe',valor:'R$ 19,50', descricao:'massa de bolacha com banana e doce de leite, finalizada com cobertura de nata batida e canela sapicada'},
         { nome: 'mousse de maracuja',valor:'R$ 15,90', descricao:'mousse de maracuja finalizado com uma deliciosa camada de ganache de chocolate meio amargo'},
         { nome: 'torta de frutas vermelhas', valor:'R$18,00 ', descricao:'torta com uma camada de biscoito com cream cheese, finalizada com uma geleia de frutas vermelhas'},
         { nome: 'suflair',valor:'R$ 10,00', descricao:'creme de chocolate nobre aerado'},
         { nome: 'bolo de nata com morango',valor:'R$ 16,90', descricao:'pao de lo recheado com nata e morango,finalizado com morangos frescos de gramado'},
         { nome: 'pudim',valor:'R$ 12,00', descricao:'base de ninho com leite condensado'},
         { nome: 'torta de manteiga escoscesa',valor:'R$25,00 ',  descricao:' base de biscoito com uma camada de caramelo salgado,finalizada com uma generosa camada de ganache de chocolate meio amargo'},
         { nome: 'brownie com sorvete',valor:'R$ 20,00', descricao:'delicioso brownie feito com uma casquinha crocante acompanhado de um delicioso gelato e ganache de chocolate'},
         { nome: 'gelato',valor:'R$ 15,00', descricao:'sorvete italiano'},
          
        { nome: 'coca-cola',valor:'R$ 6,00'},
        { nome: 'Pepsi',valor:'R$ 5,00'},
        { nome: 'Suco de laranja',valor:'R$ 8,00'},
        { nome: 'Monster',valor:'R$ 11,90'},
        { nome: 'suco Del Vale',valor:'R$ 8,00'},
        { nome: 'Guarana',valor:'R$ 4,50'},
        { nome: 'capuccino',valor:'R$ 7,00'},
        { nome: 'mocchiato',valor:'R$ 6,50'},
        { nome: 'cafe preto',valor:'R$ 4,00'},
        { nome: 'agua',valor:'R$ 5,50'},
         ]
         return(
            <div>
                <h2>Sobremesas e Bebidas</h2>
                <ul>
                    {Doces.map (( Doces, index) => ( 
                        <li key={index}>
                            nome: {Doces.nome}
                            valor: {Doces.valor}
                            descricao: {Doces.descricao}

                        </li>
                    )) }
                </ul>
            </div>
         )
    
};
export default Sobremesas ;