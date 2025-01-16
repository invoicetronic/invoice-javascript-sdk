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
    instance = new invoiceSdk.DatiRicezione();
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

  describe('DatiRicezione', function() {
    it('should create an instance of DatiRicezione', function() {
      // uncomment below and update the code to test DatiRicezione
      //var instance = new invoiceSdk.DatiRicezione();
      //expect(instance).to.be.a(invoiceSdk.DatiRicezione);
    });

    it('should have the property riferimentoNumeroLinea (base name: "riferimento_numero_linea")', function() {
      // uncomment below and update the code to test the property riferimentoNumeroLinea
      //var instance = new invoiceSdk.DatiRicezione();
      //expect(instance).to.be();
    });

    it('should have the property idDocumento (base name: "id_documento")', function() {
      // uncomment below and update the code to test the property idDocumento
      //var instance = new invoiceSdk.DatiRicezione();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new invoiceSdk.DatiRicezione();
      //expect(instance).to.be();
    });

    it('should have the property numItem (base name: "num_item")', function() {
      // uncomment below and update the code to test the property numItem
      //var instance = new invoiceSdk.DatiRicezione();
      //expect(instance).to.be();
    });

    it('should have the property codiceCommessaConvenzione (base name: "codice_commessa_convenzione")', function() {
      // uncomment below and update the code to test the property codiceCommessaConvenzione
      //var instance = new invoiceSdk.DatiRicezione();
      //expect(instance).to.be();
    });

    it('should have the property codiceCup (base name: "codice_cup")', function() {
      // uncomment below and update the code to test the property codiceCup
      //var instance = new invoiceSdk.DatiRicezione();
      //expect(instance).to.be();
    });

    it('should have the property codiceCig (base name: "codice_cig")', function() {
      // uncomment below and update the code to test the property codiceCig
      //var instance = new invoiceSdk.DatiRicezione();
      //expect(instance).to.be();
    });

  });

}));
