# JavaScript SDK for the Italian eInvoice API

The Italian eInvoice API is a RESTful API that allows you to send and receive invoices through the
Italian [Servizio di Interscambio (SDI)][1], or Interchange Service. The API is designed by Invoicetronic to be simple
and easy to use, abstracting away SDI complexity while providing complete control over the
invoice send/receive process. The API also provides advanced features as encryption at rest, invoice validation,
multiple upload formats, webhooks, event logging, client SDKs for commonly used languages, and CLI tools.

For more information, see  [Invoicetronic website][2]

[1]: https://www.fatturapa.gov.it/it/sistemainterscambio/cose-il-sdi/
[2]: https://invoicetronic.com/

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Generator version: 7.11.0
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
var invoiceSdk = require('@invoicetronic/invoice-sdk');

var defaultClient = invoiceSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME'
Basic.password = 'YOUR PASSWORD'

var api = new invoiceSdk.CompanyApi()
var opts = {
  'page': 1, // {Number} Page number. Defaults to 1.
  'pageSize': 100 // {Number} Items per page. Defaults to 50. Cannot be greater than 200.
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
*invoiceSdk.CompanyApi* | [**invoiceV1CompanyGet**](docs/CompanyApi.md#invoiceV1CompanyGet) | **GET** /invoice/v1/company | List companies
*invoiceSdk.CompanyApi* | [**invoiceV1CompanyIdDelete**](docs/CompanyApi.md#invoiceV1CompanyIdDelete) | **DELETE** /invoice/v1/company/{id} | Delete a company
*invoiceSdk.CompanyApi* | [**invoiceV1CompanyIdGet**](docs/CompanyApi.md#invoiceV1CompanyIdGet) | **GET** /invoice/v1/company/{id} | Get a company by id
*invoiceSdk.CompanyApi* | [**invoiceV1CompanyPost**](docs/CompanyApi.md#invoiceV1CompanyPost) | **POST** /invoice/v1/company | Add a company
*invoiceSdk.CompanyApi* | [**invoiceV1CompanyPut**](docs/CompanyApi.md#invoiceV1CompanyPut) | **PUT** /invoice/v1/company | Update a company
*invoiceSdk.LogApi* | [**invoiceV1LogGet**](docs/LogApi.md#invoiceV1LogGet) | **GET** /invoice/v1/log | List events
*invoiceSdk.LogApi* | [**invoiceV1LogIdGet**](docs/LogApi.md#invoiceV1LogIdGet) | **GET** /invoice/v1/log/{id} | Get an event by id
*invoiceSdk.ReceiveApi* | [**invoiceV1ReceiveGet**](docs/ReceiveApi.md#invoiceV1ReceiveGet) | **GET** /invoice/v1/receive | List incoming invoices
*invoiceSdk.ReceiveApi* | [**invoiceV1ReceiveIdDelete**](docs/ReceiveApi.md#invoiceV1ReceiveIdDelete) | **DELETE** /invoice/v1/receive/{id} | Delete an incoming invoice by id
*invoiceSdk.ReceiveApi* | [**invoiceV1ReceiveIdGet**](docs/ReceiveApi.md#invoiceV1ReceiveIdGet) | **GET** /invoice/v1/receive/{id} | Get an incoming invoice by id
*invoiceSdk.SendApi* | [**invoiceV1SendFilesPost**](docs/SendApi.md#invoiceV1SendFilesPost) | **POST** /invoice/v1/send/files | Add an invoice by file
*invoiceSdk.SendApi* | [**invoiceV1SendGet**](docs/SendApi.md#invoiceV1SendGet) | **GET** /invoice/v1/send | List invoices
*invoiceSdk.SendApi* | [**invoiceV1SendIdGet**](docs/SendApi.md#invoiceV1SendIdGet) | **GET** /invoice/v1/send/{id} | Get a invoice by id
*invoiceSdk.SendApi* | [**invoiceV1SendJsonPost**](docs/SendApi.md#invoiceV1SendJsonPost) | **POST** /invoice/v1/send/json | Add an invoice by json
*invoiceSdk.SendApi* | [**invoiceV1SendPost**](docs/SendApi.md#invoiceV1SendPost) | **POST** /invoice/v1/send | Add an invoice
*invoiceSdk.SendApi* | [**invoiceV1SendValidateFilesPost**](docs/SendApi.md#invoiceV1SendValidateFilesPost) | **POST** /invoice/v1/send/validate/files | Validate an invoice by file
*invoiceSdk.SendApi* | [**invoiceV1SendValidateJsonPost**](docs/SendApi.md#invoiceV1SendValidateJsonPost) | **POST** /invoice/v1/send/validate/json | Validate an invoice by json
*invoiceSdk.SendApi* | [**invoiceV1SendValidatePost**](docs/SendApi.md#invoiceV1SendValidatePost) | **POST** /invoice/v1/send/validate | Validate an invoice
*invoiceSdk.SendApi* | [**invoiceV1SendValidateXmlPost**](docs/SendApi.md#invoiceV1SendValidateXmlPost) | **POST** /invoice/v1/send/validate/xml | Validate an invoice by xml
*invoiceSdk.SendApi* | [**invoiceV1SendXmlPost**](docs/SendApi.md#invoiceV1SendXmlPost) | **POST** /invoice/v1/send/xml | Add an invoice by xml
*invoiceSdk.UpdateApi* | [**invoiceV1UpdateGet**](docs/UpdateApi.md#invoiceV1UpdateGet) | **GET** /invoice/v1/update | List updates
*invoiceSdk.UpdateApi* | [**invoiceV1UpdateIdGet**](docs/UpdateApi.md#invoiceV1UpdateIdGet) | **GET** /invoice/v1/update/{id} | Get an update by id
*invoiceSdk.WebhookApi* | [**invoiceV1WebhookGet**](docs/WebhookApi.md#invoiceV1WebhookGet) | **GET** /invoice/v1/webhook | List webhooks
*invoiceSdk.WebhookApi* | [**invoiceV1WebhookIdDelete**](docs/WebhookApi.md#invoiceV1WebhookIdDelete) | **DELETE** /invoice/v1/webhook/{id} | Delete a webhook by id
*invoiceSdk.WebhookApi* | [**invoiceV1WebhookIdGet**](docs/WebhookApi.md#invoiceV1WebhookIdGet) | **GET** /invoice/v1/webhook/{id} | Get a webhook by id
*invoiceSdk.WebhookApi* | [**invoiceV1WebhookPost**](docs/WebhookApi.md#invoiceV1WebhookPost) | **POST** /invoice/v1/webhook | Add a webhook
*invoiceSdk.WebhookApi* | [**invoiceV1WebhookPut**](docs/WebhookApi.md#invoiceV1WebhookPut) | **PUT** /invoice/v1/webhook | Update a webhook
*invoiceSdk.WebhookApi* | [**invoiceV1WebhookhistoryGet**](docs/WebhookApi.md#invoiceV1WebhookhistoryGet) | **GET** /invoice/v1/webhookhistory | List webhook history items
*invoiceSdk.WebhookApi* | [**invoiceV1WebhookhistoryIdGet**](docs/WebhookApi.md#invoiceV1WebhookhistoryIdGet) | **GET** /invoice/v1/webhookhistory/{id} | Get a webhook history item by id


## Documentation for Models

 - [invoiceSdk.Allegati](docs/Allegati.md)
 - [invoiceSdk.AltriDatiGestionali](docs/AltriDatiGestionali.md)
 - [invoiceSdk.Anagrafica](docs/Anagrafica.md)
 - [invoiceSdk.CedentePrestatore](docs/CedentePrestatore.md)
 - [invoiceSdk.CessionarioCommittente](docs/CessionarioCommittente.md)
 - [invoiceSdk.CodiceArticolo](docs/CodiceArticolo.md)
 - [invoiceSdk.Company](docs/Company.md)
 - [invoiceSdk.Contatti](docs/Contatti.md)
 - [invoiceSdk.ContattiTrasmittente](docs/ContattiTrasmittente.md)
 - [invoiceSdk.DatiAnagrafici](docs/DatiAnagrafici.md)
 - [invoiceSdk.DatiAnagraficiCedentePrestatore](docs/DatiAnagraficiCedentePrestatore.md)
 - [invoiceSdk.DatiAnagraficiCessionarioCommittente](docs/DatiAnagraficiCessionarioCommittente.md)
 - [invoiceSdk.DatiAnagraficiVettore](docs/DatiAnagraficiVettore.md)
 - [invoiceSdk.DatiBeniServizi](docs/DatiBeniServizi.md)
 - [invoiceSdk.DatiBollo](docs/DatiBollo.md)
 - [invoiceSdk.DatiCassaPrevidenziale](docs/DatiCassaPrevidenziale.md)
 - [invoiceSdk.DatiContratto](docs/DatiContratto.md)
 - [invoiceSdk.DatiConvenzione](docs/DatiConvenzione.md)
 - [invoiceSdk.DatiDDT](docs/DatiDDT.md)
 - [invoiceSdk.DatiFattureCollegate](docs/DatiFattureCollegate.md)
 - [invoiceSdk.DatiGenerali](docs/DatiGenerali.md)
 - [invoiceSdk.DatiGeneraliDocumento](docs/DatiGeneraliDocumento.md)
 - [invoiceSdk.DatiOrdineAcquisto](docs/DatiOrdineAcquisto.md)
 - [invoiceSdk.DatiPagamento](docs/DatiPagamento.md)
 - [invoiceSdk.DatiRicezione](docs/DatiRicezione.md)
 - [invoiceSdk.DatiRiepilogo](docs/DatiRiepilogo.md)
 - [invoiceSdk.DatiRitenuta](docs/DatiRitenuta.md)
 - [invoiceSdk.DatiSAL](docs/DatiSAL.md)
 - [invoiceSdk.DatiTrasmissione](docs/DatiTrasmissione.md)
 - [invoiceSdk.DatiTrasporto](docs/DatiTrasporto.md)
 - [invoiceSdk.DatiVeicoli](docs/DatiVeicoli.md)
 - [invoiceSdk.DettaglioLinee](docs/DettaglioLinee.md)
 - [invoiceSdk.DettaglioPagamento](docs/DettaglioPagamento.md)
 - [invoiceSdk.DocumentData](docs/DocumentData.md)
 - [invoiceSdk.Error](docs/Error.md)
 - [invoiceSdk.Event](docs/Event.md)
 - [invoiceSdk.FatturaElettronicaBody](docs/FatturaElettronicaBody.md)
 - [invoiceSdk.FatturaElettronicaHeader](docs/FatturaElettronicaHeader.md)
 - [invoiceSdk.FatturaOrdinaria](docs/FatturaOrdinaria.md)
 - [invoiceSdk.FatturaPrincipale](docs/FatturaPrincipale.md)
 - [invoiceSdk.IdFiscaleIVA](docs/IdFiscaleIVA.md)
 - [invoiceSdk.IdTrasmittente](docs/IdTrasmittente.md)
 - [invoiceSdk.IndirizzoResa](docs/IndirizzoResa.md)
 - [invoiceSdk.IscrizioneREA](docs/IscrizioneREA.md)
 - [invoiceSdk.ProblemDetails](docs/ProblemDetails.md)
 - [invoiceSdk.ProblemHttpResult](docs/ProblemHttpResult.md)
 - [invoiceSdk.RappresentanteFiscale](docs/RappresentanteFiscale.md)
 - [invoiceSdk.RappresentanteFiscaleCessionarioCommittente](docs/RappresentanteFiscaleCessionarioCommittente.md)
 - [invoiceSdk.Receive](docs/Receive.md)
 - [invoiceSdk.ScontoMaggiorazione](docs/ScontoMaggiorazione.md)
 - [invoiceSdk.SedeCedentePrestatore](docs/SedeCedentePrestatore.md)
 - [invoiceSdk.SedeCessionarioCommittente](docs/SedeCessionarioCommittente.md)
 - [invoiceSdk.Send](docs/Send.md)
 - [invoiceSdk.StabileOrganizzazione](docs/StabileOrganizzazione.md)
 - [invoiceSdk.TerzoIntermediarioOSoggettoEmittente](docs/TerzoIntermediarioOSoggettoEmittente.md)
 - [invoiceSdk.Update](docs/Update.md)
 - [invoiceSdk.WebHook](docs/WebHook.md)
 - [invoiceSdk.WebHookHistory](docs/WebHookHistory.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### Basic

- **Type**: HTTP basic authentication

