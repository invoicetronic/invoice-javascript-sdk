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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.invoiceSdk);
  }
}(this, function(expect, invoiceSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new invoiceSdk.DatiTrasmissione();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DatiTrasmissione', function() {
    it('should create an instance of DatiTrasmissione', function() {
      // uncomment below and update the code to test DatiTrasmissione
      //var instance = new invoiceSdk.DatiTrasmissione();
      //expect(instance).to.be.a(invoiceSdk.DatiTrasmissione);
    });

    it('should have the property idTrasmittente (base name: "id_trasmittente")', function() {
      // uncomment below and update the code to test the property idTrasmittente
      //var instance = new invoiceSdk.DatiTrasmissione();
      //expect(instance).to.be();
    });

    it('should have the property progressivoInvio (base name: "progressivo_invio")', function() {
      // uncomment below and update the code to test the property progressivoInvio
      //var instance = new invoiceSdk.DatiTrasmissione();
      //expect(instance).to.be();
    });

    it('should have the property formatoTrasmissione (base name: "formato_trasmissione")', function() {
      // uncomment below and update the code to test the property formatoTrasmissione
      //var instance = new invoiceSdk.DatiTrasmissione();
      //expect(instance).to.be();
    });

    it('should have the property codiceDestinatario (base name: "codice_destinatario")', function() {
      // uncomment below and update the code to test the property codiceDestinatario
      //var instance = new invoiceSdk.DatiTrasmissione();
      //expect(instance).to.be();
    });

    it('should have the property contattiTrasmittente (base name: "contatti_trasmittente")', function() {
      // uncomment below and update the code to test the property contattiTrasmittente
      //var instance = new invoiceSdk.DatiTrasmissione();
      //expect(instance).to.be();
    });

    it('should have the property pecDestinatario (base name: "pec_destinatario")', function() {
      // uncomment below and update the code to test the property pecDestinatario
      //var instance = new invoiceSdk.DatiTrasmissione();
      //expect(instance).to.be();
    });

  });

}));
