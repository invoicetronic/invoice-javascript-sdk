# JavaScript SDK for the Italian eInvoice API

The Italian eInvoice API is a RESTful API that allows you to send and receive invoices through the
Italian [Servizio di Interscambio (SDI)][1], or Interchange Service. The API is designed by Invoicetronic to be simple
and easy to use, abstracting away SDI complexity while still providing complete control over the
invoice send/receive process. The API also provides advanced features and a rich toolchain, such as invoice validation,
multiple upload methods, webhooks, event logs, CORS support, client SDKs for commonly used languages, and CLI tools.

For more information, see  [Invoicetronic website][2]

[1]: https://www.fatturapa.gov.it/it/sistemainterscambio/cose-il-sdi/
[2]: https://invoicetronic.com/

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Generator version: 7.10.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://invoicetronic.com](https://invoicetronic.com)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install @invoicetronic/invoice-sdk --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your @invoicetronic/invoice-sdk from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/invoicetronic/invoice-javascript-sdk
then install it via:

```shell
    npm install invoicetronic/invoice-javascript-sdk --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var invoicetronic-invoice-sdk = require('@invoicetronic/invoice-sdk');

var defaultClient = invoicetronic-invoice-sdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME'
Basic.password = 'YOUR PASSWORD'

var api = new invoicetronic-invoice-sdk.CompanyApi()
var opts = {
  'page': 1, // {Number} Page number.
  'pageSize': 100 // {Number} Items per page.
};
api.invoiceV1CompanyGet(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*invoicetronic-invoice-sdk.CompanyApi* | [**invoiceV1CompanyGet**](docs/CompanyApi.md#invoiceV1CompanyGet) | **GET** /invoice/v1/company | List companies
*invoicetronic-invoice-sdk.CompanyApi* | [**invoiceV1CompanyIdDelete**](docs/CompanyApi.md#invoiceV1CompanyIdDelete) | **DELETE** /invoice/v1/company/{id} | Delete a company
*invoicetronic-invoice-sdk.CompanyApi* | [**invoiceV1CompanyIdGet**](docs/CompanyApi.md#invoiceV1CompanyIdGet) | **GET** /invoice/v1/company/{id} | Get a company by id
*invoicetronic-invoice-sdk.CompanyApi* | [**invoiceV1CompanyPost**](docs/CompanyApi.md#invoiceV1CompanyPost) | **POST** /invoice/v1/company | Add a company
*invoicetronic-invoice-sdk.CompanyApi* | [**invoiceV1CompanyPut**](docs/CompanyApi.md#invoiceV1CompanyPut) | **PUT** /invoice/v1/company | Update a company
*invoicetronic-invoice-sdk.LogApi* | [**invoiceV1LogGet**](docs/LogApi.md#invoiceV1LogGet) | **GET** /invoice/v1/log | List events
*invoicetronic-invoice-sdk.LogApi* | [**invoiceV1LogIdGet**](docs/LogApi.md#invoiceV1LogIdGet) | **GET** /invoice/v1/log/{id} | Get an event by id
*invoicetronic-invoice-sdk.ReceiveApi* | [**invoiceV1ReceiveGet**](docs/ReceiveApi.md#invoiceV1ReceiveGet) | **GET** /invoice/v1/receive | List incoming invoices
*invoicetronic-invoice-sdk.ReceiveApi* | [**invoiceV1ReceiveIdDelete**](docs/ReceiveApi.md#invoiceV1ReceiveIdDelete) | **DELETE** /invoice/v1/receive/{id} | Delete an incoming invoice by id
*invoicetronic-invoice-sdk.ReceiveApi* | [**invoiceV1ReceiveIdGet**](docs/ReceiveApi.md#invoiceV1ReceiveIdGet) | **GET** /invoice/v1/receive/{id} | Get an incoming invoice by id
*invoicetronic-invoice-sdk.SendApi* | [**invoiceV1SendFilesPost**](docs/SendApi.md#invoiceV1SendFilesPost) | **POST** /invoice/v1/send/files | Add a send invoice by file
*invoicetronic-invoice-sdk.SendApi* | [**invoiceV1SendGet**](docs/SendApi.md#invoiceV1SendGet) | **GET** /invoice/v1/send | List send invoices
*invoicetronic-invoice-sdk.SendApi* | [**invoiceV1SendIdGet**](docs/SendApi.md#invoiceV1SendIdGet) | **GET** /invoice/v1/send/{id} | Get a send invoice by id
*invoicetronic-invoice-sdk.SendApi* | [**invoiceV1SendJsonPost**](docs/SendApi.md#invoiceV1SendJsonPost) | **POST** /invoice/v1/send/json | Add a send invoice by json
*invoicetronic-invoice-sdk.SendApi* | [**invoiceV1SendPost**](docs/SendApi.md#invoiceV1SendPost) | **POST** /invoice/v1/send | Add a send invoice
*invoicetronic-invoice-sdk.SendApi* | [**invoiceV1SendXmlPost**](docs/SendApi.md#invoiceV1SendXmlPost) | **POST** /invoice/v1/send/xml | Add a send invoice by xml
*invoicetronic-invoice-sdk.UpdateApi* | [**invoiceV1UpdateGet**](docs/UpdateApi.md#invoiceV1UpdateGet) | **GET** /invoice/v1/update | List updates
*invoicetronic-invoice-sdk.UpdateApi* | [**invoiceV1UpdateIdGet**](docs/UpdateApi.md#invoiceV1UpdateIdGet) | **GET** /invoice/v1/update/{id} | Get an update by id
*invoicetronic-invoice-sdk.WebhookApi* | [**invoiceV1WebhookGet**](docs/WebhookApi.md#invoiceV1WebhookGet) | **GET** /invoice/v1/webhook | List webhooks
*invoicetronic-invoice-sdk.WebhookApi* | [**invoiceV1WebhookIdDelete**](docs/WebhookApi.md#invoiceV1WebhookIdDelete) | **DELETE** /invoice/v1/webhook/{id} | Delete a webhook by id
*invoicetronic-invoice-sdk.WebhookApi* | [**invoiceV1WebhookIdGet**](docs/WebhookApi.md#invoiceV1WebhookIdGet) | **GET** /invoice/v1/webhook/{id} | Get a webhook by id
*invoicetronic-invoice-sdk.WebhookApi* | [**invoiceV1WebhookPost**](docs/WebhookApi.md#invoiceV1WebhookPost) | **POST** /invoice/v1/webhook | Add a webhook
*invoicetronic-invoice-sdk.WebhookApi* | [**invoiceV1WebhookPut**](docs/WebhookApi.md#invoiceV1WebhookPut) | **PUT** /invoice/v1/webhook | Update a webhook
*invoicetronic-invoice-sdk.WebhookApi* | [**invoiceV1WebhookhistoryGet**](docs/WebhookApi.md#invoiceV1WebhookhistoryGet) | **GET** /invoice/v1/webhookhistory | List webhook history items
*invoicetronic-invoice-sdk.WebhookApi* | [**invoiceV1WebhookhistoryIdGet**](docs/WebhookApi.md#invoiceV1WebhookhistoryIdGet) | **GET** /invoice/v1/webhookhistory/{id} | Get a webhook history item by id


## Documentation for Models

 - [invoicetronic-invoice-sdk.Allegati](docs/Allegati.md)
 - [invoicetronic-invoice-sdk.AltriDatiGestionali](docs/AltriDatiGestionali.md)
 - [invoicetronic-invoice-sdk.Anagrafica](docs/Anagrafica.md)
 - [invoicetronic-invoice-sdk.CedentePrestatore](docs/CedentePrestatore.md)
 - [invoicetronic-invoice-sdk.CessionarioCommittente](docs/CessionarioCommittente.md)
 - [invoicetronic-invoice-sdk.CodiceArticolo](docs/CodiceArticolo.md)
 - [invoicetronic-invoice-sdk.Company](docs/Company.md)
 - [invoicetronic-invoice-sdk.Contatti](docs/Contatti.md)
 - [invoicetronic-invoice-sdk.ContattiTrasmittente](docs/ContattiTrasmittente.md)
 - [invoicetronic-invoice-sdk.DatiAnagrafici](docs/DatiAnagrafici.md)
 - [invoicetronic-invoice-sdk.DatiAnagraficiCedentePrestatore](docs/DatiAnagraficiCedentePrestatore.md)
 - [invoicetronic-invoice-sdk.DatiAnagraficiCessionarioCommittente](docs/DatiAnagraficiCessionarioCommittente.md)
 - [invoicetronic-invoice-sdk.DatiAnagraficiVettore](docs/DatiAnagraficiVettore.md)
 - [invoicetronic-invoice-sdk.DatiBeniServizi](docs/DatiBeniServizi.md)
 - [invoicetronic-invoice-sdk.DatiBollo](docs/DatiBollo.md)
 - [invoicetronic-invoice-sdk.DatiCassaPrevidenziale](docs/DatiCassaPrevidenziale.md)
 - [invoicetronic-invoice-sdk.DatiContratto](docs/DatiContratto.md)
 - [invoicetronic-invoice-sdk.DatiConvenzione](docs/DatiConvenzione.md)
 - [invoicetronic-invoice-sdk.DatiDDT](docs/DatiDDT.md)
 - [invoicetronic-invoice-sdk.DatiFattureCollegate](docs/DatiFattureCollegate.md)
 - [invoicetronic-invoice-sdk.DatiGenerali](docs/DatiGenerali.md)
 - [invoicetronic-invoice-sdk.DatiGeneraliDocumento](docs/DatiGeneraliDocumento.md)
 - [invoicetronic-invoice-sdk.DatiOrdineAcquisto](docs/DatiOrdineAcquisto.md)
 - [invoicetronic-invoice-sdk.DatiPagamento](docs/DatiPagamento.md)
 - [invoicetronic-invoice-sdk.DatiRicezione](docs/DatiRicezione.md)
 - [invoicetronic-invoice-sdk.DatiRiepilogo](docs/DatiRiepilogo.md)
 - [invoicetronic-invoice-sdk.DatiRitenuta](docs/DatiRitenuta.md)
 - [invoicetronic-invoice-sdk.DatiSAL](docs/DatiSAL.md)
 - [invoicetronic-invoice-sdk.DatiTrasmissione](docs/DatiTrasmissione.md)
 - [invoicetronic-invoice-sdk.DatiTrasporto](docs/DatiTrasporto.md)
 - [invoicetronic-invoice-sdk.DatiVeicoli](docs/DatiVeicoli.md)
 - [invoicetronic-invoice-sdk.DettaglioLinee](docs/DettaglioLinee.md)
 - [invoicetronic-invoice-sdk.DettaglioPagamento](docs/DettaglioPagamento.md)
 - [invoicetronic-invoice-sdk.DocumentData](docs/DocumentData.md)
 - [invoicetronic-invoice-sdk.Error](docs/Error.md)
 - [invoicetronic-invoice-sdk.Event](docs/Event.md)
 - [invoicetronic-invoice-sdk.FatturaElettronicaBody](docs/FatturaElettronicaBody.md)
 - [invoicetronic-invoice-sdk.FatturaElettronicaHeader](docs/FatturaElettronicaHeader.md)
 - [invoicetronic-invoice-sdk.FatturaOrdinaria](docs/FatturaOrdinaria.md)
 - [invoicetronic-invoice-sdk.FatturaPrincipale](docs/FatturaPrincipale.md)
 - [invoicetronic-invoice-sdk.IdFiscaleIVA](docs/IdFiscaleIVA.md)
 - [invoicetronic-invoice-sdk.IdTrasmittente](docs/IdTrasmittente.md)
 - [invoicetronic-invoice-sdk.IndirizzoResa](docs/IndirizzoResa.md)
 - [invoicetronic-invoice-sdk.IscrizioneREA](docs/IscrizioneREA.md)
 - [invoicetronic-invoice-sdk.ProblemDetails](docs/ProblemDetails.md)
 - [invoicetronic-invoice-sdk.RappresentanteFiscale](docs/RappresentanteFiscale.md)
 - [invoicetronic-invoice-sdk.RappresentanteFiscaleCessionarioCommittente](docs/RappresentanteFiscaleCessionarioCommittente.md)
 - [invoicetronic-invoice-sdk.Receive](docs/Receive.md)
 - [invoicetronic-invoice-sdk.ScontoMaggiorazione](docs/ScontoMaggiorazione.md)
 - [invoicetronic-invoice-sdk.SedeCedentePrestatore](docs/SedeCedentePrestatore.md)
 - [invoicetronic-invoice-sdk.SedeCessionarioCommittente](docs/SedeCessionarioCommittente.md)
 - [invoicetronic-invoice-sdk.Send](docs/Send.md)
 - [invoicetronic-invoice-sdk.StabileOrganizzazione](docs/StabileOrganizzazione.md)
 - [invoicetronic-invoice-sdk.TerzoIntermediarioOSoggettoEmittente](docs/TerzoIntermediarioOSoggettoEmittente.md)
 - [invoicetronic-invoice-sdk.Update](docs/Update.md)
 - [invoicetronic-invoice-sdk.WebHook](docs/WebHook.md)
 - [invoicetronic-invoice-sdk.WebHookHistory](docs/WebHookHistory.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### Basic

- **Type**: HTTP basic authentication

