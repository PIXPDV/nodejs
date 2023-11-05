// INSTALE A BIBLIOTECA PIXPDV COM npm install pixpdv

import { PIXPDV } from "./src/index";

const pixpdv = new PIXPDV('sad', 'sada', 'sdas', true);

(async ()=> {
    console.log(await pixpdv.statusToken());
    console.log(await pixpdv.gerarQRDinamico(2.50, 5, "Teste"));

    const pagador = {
        "nome": "Jose Nilton Pace",
        "fantasia": "",
        "cpf_cnpj": "12345678901",
        "endereco": "Rua Emilio Bertoni, 1645",
        "bairro": "Vila Totoli",
        "cidade": "Franca",
        "estado": "SP",
        "cep": "14409108",
        "email": "demo@jnp.com.br",
        "telefone": "(16) 3727-5688"
    }

    const juros = {
        "tipo": 3,
        "valor": 10
    }
    
    const multa =  {
        "tipo": 2,
        "valor": 5
    }

    const desconto =  {
        "tipo": 2,
        "valor": 10,
        "data": "27/08/2023"
    }

    console.log(await pixpdv.gerarQRCobranca(2.50, "30/08/2023", 30, "Teste", pagador, juros, multa, desconto))
    console.log(await pixpdv.statusQRCode('F695820A-5476-4FA9-8FE5-7B2FD0200382'));
    console.log(await pixpdv.devolverPagamento('F695820A-5476-4FA9-8FE5-7B2FD0200382') );
    console.log(await pixpdv.resumo("01082023", "26082023", "emissao") );
    console.log(await pixpdv.saldo());
    console.log(await pixpdv.retirarSaldo(0.25));
    console.log(await pixpdv.extrato("01082023", "26082023"));
})();
