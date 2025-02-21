/**
 * Italian eInvoice API v1
 * The [Italian eInvoice API][2] is a RESTful API that allows you to send and receive invoices through the Italian [Servizio di Interscambio (SDI)][1], or Interchange Service. The API is designed by Invoicetronic to be simple and easy to use, abstracting away SDI complexity while providing complete control over the invoice send/receive process. The API also provides advanced features as encryption at rest, invoice validation, multiple upload formats, webhooks, event logging, client SDKs for commonly used languages, and CLI tools.  For more information, see  [Invoicetronic website][2]  [1]: https://www.fatturapa.gov.it/it/sistemainterscambio/cose-il-sdi/ [2]: https://invoicetronic.com/
 *
 * The version of the OpenAPI document: 1
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
    instance = new invoiceSdk.CessionarioCommittente();
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

  describe('CessionarioCommittente', function() {
    it('should create an instance of CessionarioCommittente', function() {
      // uncomment below and update the code to test CessionarioCommittente
      //var instance = new invoiceSdk.CessionarioCommittente();
      //expect(instance).to.be.a(invoiceSdk.CessionarioCommittente);
    });

    it('should have the property datiAnagrafici (base name: "dati_anagrafici")', function() {
      // uncomment below and update the code to test the property datiAnagrafici
      //var instance = new invoiceSdk.CessionarioCommittente();
      //expect(instance).to.be();
    });

    it('should have the property sede (base name: "sede")', function() {
      // uncomment below and update the code to test the property sede
      //var instance = new invoiceSdk.CessionarioCommittente();
      //expect(instance).to.be();
    });

    it('should have the property stabileOrganizzazione (base name: "stabile_organizzazione")', function() {
      // uncomment below and update the code to test the property stabileOrganizzazione
      //var instance = new invoiceSdk.CessionarioCommittente();
      //expect(instance).to.be();
    });

    it('should have the property rappresentanteFiscale (base name: "rappresentante_fiscale")', function() {
      // uncomment below and update the code to test the property rappresentanteFiscale
      //var instance = new invoiceSdk.CessionarioCommittente();
      //expect(instance).to.be();
    });

  });

}));
