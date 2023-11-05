import axios, { Axios } from "axios";
import { createHmac } from 'crypto';

const BASE_URL = "https://pixpdv.com.br/api/v1";
const BASE_URL_HOMOLOGACAO = "https://pixpdv.com.br/api-h/v1";

interface pagador {
    nome: string
    fantasia: string
    cpf_cnpj: string
    endereco: string
    bairro: string
    cidade: string
    estado: string
    cep: string
    email: string
    telefone: string
}

interface juros {
    tipo:number
    valor:number
}

interface multa {
    tipo:number,
    valor:number
}

interface desconto {
    tipo:number
    valor:number
    data:string
}

export class PIXPDV {

    private _homologacao: boolean;
    private _cnpj: string;
    private _token: string;
    private _secret: string;
    private _instacia: Axios;

    constructor(cnpj:string, token:string, secret:string, homologacao:boolean = false){
        this._homologacao = homologacao;
        this._cnpj = this._homologacao === false ? cnpj : '00641418000188';
        this._token = this._homologacao === false ? token : 'tk-ezI0OTgwMzRDLUE1MzctNDM3QS1CQTk0LUZFODlFMEE0MzIyNn0';
        this._secret = this._homologacao == false ? secret : 'sk-e0JBNTFGRTY0LTczMkYtNDYxNC1CQ0Q1LUI0OTVDODgxOTUwRX0';
        
        this._instacia = axios.create({
            baseURL: this._homologacao === false ? BASE_URL : BASE_URL_HOMOLOGACAO
        })

    }

    public async statusToken() {

        const body: object = { cnpj: this._cnpj }

        try {
            const resp = await this._instacia.post('/statustoken', body, {
                headers: {
                    'Content-Type': 'application/json',
                    'Json-Hash': this.gerarHmac(body),
                    'Authorization': 'Basic ' + Buffer.from(`${this._cnpj}:${this._token}`).toString('base64'),
                },
            });

            const data = await resp.data;
            return data;

        } catch (err) {
            return err.response.data;
        }
    }

    public async gerarQRDinamico(valor:number, minutos:number, msg:string, imagem: boolean = false){
        const body: object = { valor: valor, minutos: minutos, mensagem: msg, imagem: imagem }

        try {
            const resp = await this._instacia.post('/qrdinamico', body, {
                headers: {
                    'Content-Type': 'application/json',
                    'Json-Hash': this.gerarHmac(body),
                    'Authorization': 'Basic ' + Buffer.from(`${this._cnpj}:${this._token}`).toString('base64'),
                },
            });

            const data = await resp.data;
            return data;

        } catch (err) {
            return err.response.data;
        }
    }

    public async gerarQRCobranca(valor:number, vencimento:string, expira:number, msg:string, pagador:pagador, juros:juros, multa:multa, desconto:desconto, img:boolean = false, documento:string = "" ){
        const body: object = {
            valor: valor,
            vencimento: vencimento,
            expira: expira,
            mensagem: msg,
            imagem: img,
            documento: documento,
            pagador: pagador,
            juros: juros,
            multa: multa,
            desconto: desconto
        }

        try {
            const resp = await this._instacia.post('/qrcobranca', body, {
                headers: {
                    'Content-Type': 'application/json',
                    'Json-Hash': this.gerarHmac(body),
                    'Authorization': 'Basic ' + Buffer.from(`${this._cnpj}:${this._token}`).toString('base64'),
                },
            });

            const data = await resp.data;
            return data;

        } catch (err) {
            return err.response.data;
        }
    }

    public async statusQRCode(qrcodeid: string){

        try {
            const resp = await this._instacia.get('/qrstatus?qrcodeid=' + qrcodeid, {
                headers: {
                    'Content-Type': 'application/json',
                    // 'Json-Hash': this.gerarHmac(body),
                    'Authorization': 'Basic ' + Buffer.from(`${this._cnpj}:${this._token}`).toString('base64'),
                },
            });

            const data = await resp.data;
            return data;

        } catch (err) {
            return err.response.data;
        }
    }

    public async devolverPagamento(qrcodeid:string){
        const body: object = { qrcodeid: qrcodeid };

        try {
            const resp = await this._instacia.post('/qrrefund', body, {
                headers: {
                    'Content-Type': 'application/json',
                    'Json-Hash': this.gerarHmac(body),
                    'Authorization': 'Basic ' + Buffer.from(`${this._cnpj}:${this._token}`).toString('base64'),
                },
            });

            const data = await resp.data;
            return data;

        } catch (err) {
            return err.response.data;
        }
    }

    public async resumo(inicio:string, fim:string, tipo:string){

        try {
            const resp = await this._instacia.get(`/qrresumo?inicio=${inicio}&fim=${fim}&tipo=${tipo}`, {
                headers: {
                    // 'Content-Type': 'application/json',
                    // 'Json-Hash': this.gerarHmac(body),
                    'Authorization': 'Basic ' + Buffer.from(`${this._cnpj}:${this._token}`).toString('base64'),
                },
            });

            const data = await resp.data;
            return data;

        } catch (err) {
            return err.response.data;
        }
    }

    public async saldo(){

        try {
            const resp = await this._instacia.get(`/saldo`, {
                headers: {
                    // 'Content-Type': 'application/json',
                    // 'Json-Hash': this.gerarHmac(body),
                    'Authorization': 'Basic ' + Buffer.from(`${this._cnpj}:${this._token}`).toString('base64'),
                },
            });

            const data = await resp.data;
            return data;

        } catch (err) {
            return err.response.data;
        }
    }

    public async retirarSaldo(valor: number){
        const body: object = { valor: valor };

        try {
            const resp = await this._instacia.post(`/retirada`, body, {
                headers: {
                    'Content-Type': 'application/json',
                    'Json-Hash': this.gerarHmac(body),
                    'Authorization': 'Basic ' + Buffer.from(`${this._cnpj}:${this._token}`).toString('base64'),
                },
            });

            const data = await resp.data;
            return data;

        } catch (err) {
            return err.response.data;
        }
    }

    public async extrato(inicio: string, fim:string){

        try {
            const resp = await this._instacia.get(`/extrato?inicio=${inicio}&fim=${fim}`, {
                headers: {
                    // 'Content-Type': 'application/json',
                    // 'Json-Hash': this.gerarHmac(body),
                    'Authorization': 'Basic ' + Buffer.from(`${this._cnpj}:${this._token}`).toString('base64'),
                },
            });

            const data = await resp.data;
            return data;

        } catch (err) {
            return err.response.data;
        }
    }

    private gerarHmac(body:object) {
        // if (body === null) {
        //   return '';
        // }
    
        const hmac = createHmac('sha256', this._secret);
        hmac.update(JSON.stringify(body));
        return hmac.digest('hex');
    }

}
