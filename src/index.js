"use strict";
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
exports.PIXPDV = void 0;
var axios_1 = require("axios");
var crypto_1 = require("crypto");
var BASE_URL = "https://pixpdv.com.br/api/v1";
var BASE_URL_HOMOLOGACAO = "https://pixpdv.com.br/api-h/v1";
var PIXPDV = /** @class */ (function () {
    function PIXPDV(cnpj, token, secret, homologacao) {
        if (homologacao === void 0) { homologacao = false; }
        this._homologacao = homologacao;
        this._cnpj = this._homologacao === false ? cnpj : '00641418000188';
        this._token = this._homologacao === false ? token : 'tk-ezI0OTgwMzRDLUE1MzctNDM3QS1CQTk0LUZFODlFMEE0MzIyNn0';
        this._secret = this._homologacao == false ? secret : 'sk-e0JBNTFGRTY0LTczMkYtNDYxNC1CQ0Q1LUI0OTVDODgxOTUwRX0';
        this._instacia = axios_1.default.create({
            baseURL: this._homologacao === false ? BASE_URL : BASE_URL_HOMOLOGACAO
        });
    }
    PIXPDV.prototype.statusToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var body, resp, data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = { cnpj: this._cnpj };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this._instacia.post('/statustoken', body, {
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Json-Hash': this.gerarHmac(body),
                                    'Authorization': 'Basic ' + Buffer.from("".concat(this._cnpj, ":").concat(this._token)).toString('base64'),
                                },
                            })];
                    case 2:
                        resp = _a.sent();
                        return [4 /*yield*/, resp.data];
                    case 3:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 4:
                        err_1 = _a.sent();
                        return [2 /*return*/, err_1.response.data];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PIXPDV.prototype.gerarQRDinamico = function (valor, minutos, msg, imagem) {
        if (imagem === void 0) { imagem = false; }
        return __awaiter(this, void 0, void 0, function () {
            var body, resp, data, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = { valor: valor, minutos: minutos, mensagem: msg, imagem: imagem };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this._instacia.post('/qrdinamico', body, {
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Json-Hash': this.gerarHmac(body),
                                    'Authorization': 'Basic ' + Buffer.from("".concat(this._cnpj, ":").concat(this._token)).toString('base64'),
                                },
                            })];
                    case 2:
                        resp = _a.sent();
                        return [4 /*yield*/, resp.data];
                    case 3:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 4:
                        err_2 = _a.sent();
                        return [2 /*return*/, err_2.response.data];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PIXPDV.prototype.gerarQRCobranca = function (valor, vencimento, expira, msg, pagador, juros, multa, desconto, img, documento) {
        if (img === void 0) { img = false; }
        if (documento === void 0) { documento = ""; }
        return __awaiter(this, void 0, void 0, function () {
            var body, resp, data, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = {
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
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this._instacia.post('/qrcobranca', body, {
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Json-Hash': this.gerarHmac(body),
                                    'Authorization': 'Basic ' + Buffer.from("".concat(this._cnpj, ":").concat(this._token)).toString('base64'),
                                },
                            })];
                    case 2:
                        resp = _a.sent();
                        return [4 /*yield*/, resp.data];
                    case 3:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 4:
                        err_3 = _a.sent();
                        return [2 /*return*/, err_3.response.data];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PIXPDV.prototype.statusQRCode = function (qrcodeid) {
        return __awaiter(this, void 0, void 0, function () {
            var resp, data, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this._instacia.get('/qrstatus?qrcodeid=' + qrcodeid, {
                                headers: {
                                    'Content-Type': 'application/json',
                                    // 'Json-Hash': this.gerarHmac(body),
                                    'Authorization': 'Basic ' + Buffer.from("".concat(this._cnpj, ":").concat(this._token)).toString('base64'),
                                },
                            })];
                    case 1:
                        resp = _a.sent();
                        return [4 /*yield*/, resp.data];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 3:
                        err_4 = _a.sent();
                        return [2 /*return*/, err_4.response.data];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PIXPDV.prototype.devolverPagamento = function (qrcodeid) {
        return __awaiter(this, void 0, void 0, function () {
            var body, resp, data, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = { qrcodeid: qrcodeid };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this._instacia.post('/qrrefund', body, {
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Json-Hash': this.gerarHmac(body),
                                    'Authorization': 'Basic ' + Buffer.from("".concat(this._cnpj, ":").concat(this._token)).toString('base64'),
                                },
                            })];
                    case 2:
                        resp = _a.sent();
                        return [4 /*yield*/, resp.data];
                    case 3:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 4:
                        err_5 = _a.sent();
                        return [2 /*return*/, err_5.response.data];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PIXPDV.prototype.resumo = function (inicio, fim, tipo) {
        return __awaiter(this, void 0, void 0, function () {
            var resp, data, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this._instacia.get("/qrresumo?inicio=".concat(inicio, "&fim=").concat(fim, "&tipo=").concat(tipo), {
                                headers: {
                                    // 'Content-Type': 'application/json',
                                    // 'Json-Hash': this.gerarHmac(body),
                                    'Authorization': 'Basic ' + Buffer.from("".concat(this._cnpj, ":").concat(this._token)).toString('base64'),
                                },
                            })];
                    case 1:
                        resp = _a.sent();
                        return [4 /*yield*/, resp.data];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 3:
                        err_6 = _a.sent();
                        return [2 /*return*/, err_6.response.data];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PIXPDV.prototype.saldo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var resp, data, err_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this._instacia.get("/saldo", {
                                headers: {
                                    // 'Content-Type': 'application/json',
                                    // 'Json-Hash': this.gerarHmac(body),
                                    'Authorization': 'Basic ' + Buffer.from("".concat(this._cnpj, ":").concat(this._token)).toString('base64'),
                                },
                            })];
                    case 1:
                        resp = _a.sent();
                        return [4 /*yield*/, resp.data];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 3:
                        err_7 = _a.sent();
                        return [2 /*return*/, err_7.response.data];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PIXPDV.prototype.retirarSaldo = function (valor) {
        return __awaiter(this, void 0, void 0, function () {
            var body, resp, data, err_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = { valor: valor };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this._instacia.post("/retirada", body, {
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Json-Hash': this.gerarHmac(body),
                                    'Authorization': 'Basic ' + Buffer.from("".concat(this._cnpj, ":").concat(this._token)).toString('base64'),
                                },
                            })];
                    case 2:
                        resp = _a.sent();
                        return [4 /*yield*/, resp.data];
                    case 3:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 4:
                        err_8 = _a.sent();
                        return [2 /*return*/, err_8.response.data];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PIXPDV.prototype.extrato = function (inicio, fim) {
        return __awaiter(this, void 0, void 0, function () {
            var resp, data, err_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this._instacia.get("/extrato?inicio=".concat(inicio, "&fim=").concat(fim), {
                                headers: {
                                    // 'Content-Type': 'application/json',
                                    // 'Json-Hash': this.gerarHmac(body),
                                    'Authorization': 'Basic ' + Buffer.from("".concat(this._cnpj, ":").concat(this._token)).toString('base64'),
                                },
                            })];
                    case 1:
                        resp = _a.sent();
                        return [4 /*yield*/, resp.data];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 3:
                        err_9 = _a.sent();
                        return [2 /*return*/, err_9.response.data];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PIXPDV.prototype.gerarHmac = function (body) {
        // if (body === null) {
        //   return '';
        // }
        var hmac = (0, crypto_1.createHmac)('sha256', this._secret);
        hmac.update(JSON.stringify(body));
        return hmac.digest('hex');
    };
    return PIXPDV;
}());
exports.PIXPDV = PIXPDV;
