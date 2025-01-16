/**
 * Italian eInvoice API
 * The Italian eInvoice API is a RESTful API that allows you to send and receive invoices through the Italian [Servizio di Interscambio (SDI)][1], or Interchange Service. The API is designed by Invoicetronic to be simple and easy to use, abstracting away SDI complexity while providing complete control over the invoice send/receive process. The API also provides advanced features as encryption at rest, invoice validation, multiple upload formats, webhooks, event logging, client SDKs for commonly used languages, and CLI tools.  For more information, see  [Invoicetronic website][2]  [1]: https://www.fatturapa.gov.it/it/sistemainterscambio/cose-il-sdi/ [2]: https://invoicetronic.com/
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@invoicetronic.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Allegati from './model/Allegati';
import AltriDatiGestionali from './model/AltriDatiGestionali';
import Anagrafica from './model/Anagrafica';
import CedentePrestatore from './model/CedentePrestatore';
import CessionarioCommittente from './model/CessionarioCommittente';
import CodiceArticolo from './model/CodiceArticolo';
import Company from './model/Company';
import Contatti from './model/Contatti';
import ContattiTrasmittente from './model/ContattiTrasmittente';
import DatiAnagrafici from './model/DatiAnagrafici';
import DatiAnagraficiCedentePrestatore from './model/DatiAnagraficiCedentePrestatore';
import DatiAnagraficiCessionarioCommittente from './model/DatiAnagraficiCessionarioCommittente';
import DatiAnagraficiVettore from './model/DatiAnagraficiVettore';
import DatiBeniServizi from './model/DatiBeniServizi';
import DatiBollo from './model/DatiBollo';
import DatiCassaPrevidenziale from './model/DatiCassaPrevidenziale';
import DatiContratto from './model/DatiContratto';
import DatiConvenzione from './model/DatiConvenzione';
import DatiDDT from './model/DatiDDT';
import DatiFattureCollegate from './model/DatiFattureCollegate';
import DatiGenerali from './model/DatiGenerali';
import DatiGeneraliDocumento from './model/DatiGeneraliDocumento';
import DatiOrdineAcquisto from './model/DatiOrdineAcquisto';
import DatiPagamento from './model/DatiPagamento';
import DatiRicezione from './model/DatiRicezione';
import DatiRiepilogo from './model/DatiRiepilogo';
import DatiRitenuta from './model/DatiRitenuta';
import DatiSAL from './model/DatiSAL';
import DatiTrasmissione from './model/DatiTrasmissione';
import DatiTrasporto from './model/DatiTrasporto';
import DatiVeicoli from './model/DatiVeicoli';
import DettaglioLinee from './model/DettaglioLinee';
import DettaglioPagamento from './model/DettaglioPagamento';
import DocumentData from './model/DocumentData';
import Error from './model/Error';
import Event from './model/Event';
import FatturaElettronicaBody from './model/FatturaElettronicaBody';
import FatturaElettronicaHeader from './model/FatturaElettronicaHeader';
import FatturaOrdinaria from './model/FatturaOrdinaria';
import FatturaPrincipale from './model/FatturaPrincipale';
import IdFiscaleIVA from './model/IdFiscaleIVA';
import IdTrasmittente from './model/IdTrasmittente';
import IndirizzoResa from './model/IndirizzoResa';
import IscrizioneREA from './model/IscrizioneREA';
import ProblemDetails from './model/ProblemDetails';
import ProblemHttpResult from './model/ProblemHttpResult';
import RappresentanteFiscale from './model/RappresentanteFiscale';
import RappresentanteFiscaleCessionarioCommittente from './model/RappresentanteFiscaleCessionarioCommittente';
import Receive from './model/Receive';
import ScontoMaggiorazione from './model/ScontoMaggiorazione';
import SedeCedentePrestatore from './model/SedeCedentePrestatore';
import SedeCessionarioCommittente from './model/SedeCessionarioCommittente';
import Send from './model/Send';
import StabileOrganizzazione from './model/StabileOrganizzazione';
import TerzoIntermediarioOSoggettoEmittente from './model/TerzoIntermediarioOSoggettoEmittente';
import Update from './model/Update';
import WebHook from './model/WebHook';
import WebHookHistory from './model/WebHookHistory';
import CompanyApi from './api/CompanyApi';
import LogApi from './api/LogApi';
import ReceiveApi from './api/ReceiveApi';
import SendApi from './api/SendApi';
import UpdateApi from './api/UpdateApi';
import WebhookApi from './api/WebhookApi';


/**
* JavaScript SDK for the Italian eInvoice API.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var invoiceSdk = require('index'); // See note below*.
* var xxxSvc = new invoiceSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new invoiceSdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new invoiceSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new invoiceSdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Allegati model constructor.
     * @property {module:model/Allegati}
     */
    Allegati,

    /**
     * The AltriDatiGestionali model constructor.
     * @property {module:model/AltriDatiGestionali}
     */
    AltriDatiGestionali,

    /**
     * The Anagrafica model constructor.
     * @property {module:model/Anagrafica}
     */
    Anagrafica,

    /**
     * The CedentePrestatore model constructor.
     * @property {module:model/CedentePrestatore}
     */
    CedentePrestatore,

    /**
     * The CessionarioCommittente model constructor.
     * @property {module:model/CessionarioCommittente}
     */
    CessionarioCommittente,

    /**
     * The CodiceArticolo model constructor.
     * @property {module:model/CodiceArticolo}
     */
    CodiceArticolo,

    /**
     * The Company model constructor.
     * @property {module:model/Company}
     */
    Company,

    /**
     * The Contatti model constructor.
     * @property {module:model/Contatti}
     */
    Contatti,

    /**
     * The ContattiTrasmittente model constructor.
     * @property {module:model/ContattiTrasmittente}
     */
    ContattiTrasmittente,

    /**
     * The DatiAnagrafici model constructor.
     * @property {module:model/DatiAnagrafici}
     */
    DatiAnagrafici,

    /**
     * The DatiAnagraficiCedentePrestatore model constructor.
     * @property {module:model/DatiAnagraficiCedentePrestatore}
     */
    DatiAnagraficiCedentePrestatore,

    /**
     * The DatiAnagraficiCessionarioCommittente model constructor.
     * @property {module:model/DatiAnagraficiCessionarioCommittente}
     */
    DatiAnagraficiCessionarioCommittente,

    /**
     * The DatiAnagraficiVettore model constructor.
     * @property {module:model/DatiAnagraficiVettore}
     */
    DatiAnagraficiVettore,

    /**
     * The DatiBeniServizi model constructor.
     * @property {module:model/DatiBeniServizi}
     */
    DatiBeniServizi,

    /**
     * The DatiBollo model constructor.
     * @property {module:model/DatiBollo}
     */
    DatiBollo,

    /**
     * The DatiCassaPrevidenziale model constructor.
     * @property {module:model/DatiCassaPrevidenziale}
     */
    DatiCassaPrevidenziale,

    /**
     * The DatiContratto model constructor.
     * @property {module:model/DatiContratto}
     */
    DatiContratto,

    /**
     * The DatiConvenzione model constructor.
     * @property {module:model/DatiConvenzione}
     */
    DatiConvenzione,

    /**
     * The DatiDDT model constructor.
     * @property {module:model/DatiDDT}
     */
    DatiDDT,

    /**
     * The DatiFattureCollegate model constructor.
     * @property {module:model/DatiFattureCollegate}
     */
    DatiFattureCollegate,

    /**
     * The DatiGenerali model constructor.
     * @property {module:model/DatiGenerali}
     */
    DatiGenerali,

    /**
     * The DatiGeneraliDocumento model constructor.
     * @property {module:model/DatiGeneraliDocumento}
     */
    DatiGeneraliDocumento,

    /**
     * The DatiOrdineAcquisto model constructor.
     * @property {module:model/DatiOrdineAcquisto}
     */
    DatiOrdineAcquisto,

    /**
     * The DatiPagamento model constructor.
     * @property {module:model/DatiPagamento}
     */
    DatiPagamento,

    /**
     * The DatiRicezione model constructor.
     * @property {module:model/DatiRicezione}
     */
    DatiRicezione,

    /**
     * The DatiRiepilogo model constructor.
     * @property {module:model/DatiRiepilogo}
     */
    DatiRiepilogo,

    /**
     * The DatiRitenuta model constructor.
     * @property {module:model/DatiRitenuta}
     */
    DatiRitenuta,

    /**
     * The DatiSAL model constructor.
     * @property {module:model/DatiSAL}
     */
    DatiSAL,

    /**
     * The DatiTrasmissione model constructor.
     * @property {module:model/DatiTrasmissione}
     */
    DatiTrasmissione,

    /**
     * The DatiTrasporto model constructor.
     * @property {module:model/DatiTrasporto}
     */
    DatiTrasporto,

    /**
     * The DatiVeicoli model constructor.
     * @property {module:model/DatiVeicoli}
     */
    DatiVeicoli,

    /**
     * The DettaglioLinee model constructor.
     * @property {module:model/DettaglioLinee}
     */
    DettaglioLinee,

    /**
     * The DettaglioPagamento model constructor.
     * @property {module:model/DettaglioPagamento}
     */
    DettaglioPagamento,

    /**
     * The DocumentData model constructor.
     * @property {module:model/DocumentData}
     */
    DocumentData,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event,

    /**
     * The FatturaElettronicaBody model constructor.
     * @property {module:model/FatturaElettronicaBody}
     */
    FatturaElettronicaBody,

    /**
     * The FatturaElettronicaHeader model constructor.
     * @property {module:model/FatturaElettronicaHeader}
     */
    FatturaElettronicaHeader,

    /**
     * The FatturaOrdinaria model constructor.
     * @property {module:model/FatturaOrdinaria}
     */
    FatturaOrdinaria,

    /**
     * The FatturaPrincipale model constructor.
     * @property {module:model/FatturaPrincipale}
     */
    FatturaPrincipale,

    /**
     * The IdFiscaleIVA model constructor.
     * @property {module:model/IdFiscaleIVA}
     */
    IdFiscaleIVA,

    /**
     * The IdTrasmittente model constructor.
     * @property {module:model/IdTrasmittente}
     */
    IdTrasmittente,

    /**
     * The IndirizzoResa model constructor.
     * @property {module:model/IndirizzoResa}
     */
    IndirizzoResa,

    /**
     * The IscrizioneREA model constructor.
     * @property {module:model/IscrizioneREA}
     */
    IscrizioneREA,

    /**
     * The ProblemDetails model constructor.
     * @property {module:model/ProblemDetails}
     */
    ProblemDetails,

    /**
     * The ProblemHttpResult model constructor.
     * @property {module:model/ProblemHttpResult}
     */
    ProblemHttpResult,

    /**
     * The RappresentanteFiscale model constructor.
     * @property {module:model/RappresentanteFiscale}
     */
    RappresentanteFiscale,

    /**
     * The RappresentanteFiscaleCessionarioCommittente model constructor.
     * @property {module:model/RappresentanteFiscaleCessionarioCommittente}
     */
    RappresentanteFiscaleCessionarioCommittente,

    /**
     * The Receive model constructor.
     * @property {module:model/Receive}
     */
    Receive,

    /**
     * The ScontoMaggiorazione model constructor.
     * @property {module:model/ScontoMaggiorazione}
     */
    ScontoMaggiorazione,

    /**
     * The SedeCedentePrestatore model constructor.
     * @property {module:model/SedeCedentePrestatore}
     */
    SedeCedentePrestatore,

    /**
     * The SedeCessionarioCommittente model constructor.
     * @property {module:model/SedeCessionarioCommittente}
     */
    SedeCessionarioCommittente,

    /**
     * The Send model constructor.
     * @property {module:model/Send}
     */
    Send,

    /**
     * The StabileOrganizzazione model constructor.
     * @property {module:model/StabileOrganizzazione}
     */
    StabileOrganizzazione,

    /**
     * The TerzoIntermediarioOSoggettoEmittente model constructor.
     * @property {module:model/TerzoIntermediarioOSoggettoEmittente}
     */
    TerzoIntermediarioOSoggettoEmittente,

    /**
     * The Update model constructor.
     * @property {module:model/Update}
     */
    Update,

    /**
     * The WebHook model constructor.
     * @property {module:model/WebHook}
     */
    WebHook,

    /**
     * The WebHookHistory model constructor.
     * @property {module:model/WebHookHistory}
     */
    WebHookHistory,

    /**
    * The CompanyApi service constructor.
    * @property {module:api/CompanyApi}
    */
    CompanyApi,

    /**
    * The LogApi service constructor.
    * @property {module:api/LogApi}
    */
    LogApi,

    /**
    * The ReceiveApi service constructor.
    * @property {module:api/ReceiveApi}
    */
    ReceiveApi,

    /**
    * The SendApi service constructor.
    * @property {module:api/SendApi}
    */
    SendApi,

    /**
    * The UpdateApi service constructor.
    * @property {module:api/UpdateApi}
    */
    UpdateApi,

    /**
    * The WebhookApi service constructor.
    * @property {module:api/WebhookApi}
    */
    WebhookApi
};
