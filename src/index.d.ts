declare module 'pixpdv' {
    interface Pagador {
      nome: string;
      fantasia: string;
      cpf_cnpj: string;
      endereco: string;
      bairro: string;
      cidade: string;
      estado: string;
      cep: string;
      email: string;
      telefone: string;
    }
  
    interface Juros {
      tipo: number;
      valor: number;
    }
  
    interface Multa {
      tipo: number;
      valor: number;
    }
  
    interface Desconto {
      tipo: number;
      valor: number;
      data: string;
    }
  
    export class PIXPDV {
      constructor(cnpj: string, token: string, secret: string, homologacao?: boolean);
  
      statusToken(): Promise<any>;
  
      gerarQRDinamico(valor: number, minutos: number, msg: string, imagem?: boolean): Promise<any>;
  
      gerarQRCobranca(
        valor: number,
        vencimento: string,
        expira: number,
        msg: string,
        pagador: Pagador,
        juros: Juros,
        multa: Multa,
        desconto: Desconto,
        img?: boolean,
        documento?: string,
      ): Promise<any>;
  
      statusQRCode(qrcodeid: string): Promise<any>;
  
      devolverPagamento(qrcodeid: string): Promise<any>;
  
      resumo(inicio: string, fim: string, tipo: string): Promise<any>;
  
      saldo(): Promise<any>;
  
      retirarSaldo(valor: number): Promise<any>;
  
      extrato(inicio: string, fim: string): Promise<any>;
    }
}
  