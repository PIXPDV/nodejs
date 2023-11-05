"use strict";
// INSTALE A BIBLIOTECA PIXPDV COM npm install pixpdv
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./src/index");
var pixpdv = new index_1.PIXPDV('sad', 'sada', 'sdas', true);
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c, _d, pagador, juros, multa, desconto, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    return __generator(this, function (_u) {
        switch (_u.label) {
            case 0:
                _b = (_a = console).log;
                return [4 /*yield*/, pixpdv.statusToken()];
            case 1:
                _b.apply(_a, [_u.sent()]);
                _d = (_c = console).log;
                return [4 /*yield*/, pixpdv.gerarQRDinamico(2.50, 5, "Teste")];
            case 2:
                _d.apply(_c, [_u.sent()]);
                pagador = {
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
                };
                juros = {
                    "tipo": 3,
                    "valor": 10
                };
                multa = {
                    "tipo": 2,
                    "valor": 5
                };
                desconto = {
                    "tipo": 2,
                    "valor": 10,
                    "data": "27/08/2023"
                };
                _f = (_e = console).log;
                return [4 /*yield*/, pixpdv.gerarQRCobranca(2.50, "30/08/2023", 30, "Teste", pagador, juros, multa, desconto)];
            case 3:
                _f.apply(_e, [_u.sent()]);
                _h = (_g = console).log;
                return [4 /*yield*/, pixpdv.statusQRCode('F695820A-5476-4FA9-8FE5-7B2FD0200382')];
            case 4:
                _h.apply(_g, [_u.sent()]);
                _k = (_j = console).log;
                return [4 /*yield*/, pixpdv.devolverPagamento('F695820A-5476-4FA9-8FE5-7B2FD0200382')];
            case 5:
                _k.apply(_j, [_u.sent()]);
                _m = (_l = console).log;
                return [4 /*yield*/, pixpdv.resumo("01082023", "26082023", "emissao")];
            case 6:
                _m.apply(_l, [_u.sent()]);
                _p = (_o = console).log;
                return [4 /*yield*/, pixpdv.saldo()];
            case 7:
                _p.apply(_o, [_u.sent()]);
                _r = (_q = console).log;
                return [4 /*yield*/, pixpdv.retirarSaldo(0.25)];
            case 8:
                _r.apply(_q, [_u.sent()]);
                _t = (_s = console).log;
                return [4 /*yield*/, pixpdv.extrato("01082023", "26082023")];
            case 9:
                _t.apply(_s, [_u.sent()]);
                return [2 /*return*/];
        }
    });
}); })();
