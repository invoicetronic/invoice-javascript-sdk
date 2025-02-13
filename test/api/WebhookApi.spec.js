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
    instance = new invoiceSdk.WebhookApi();
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

  describe('WebhookApi', function() {
    describe('invoiceV1WebhookGet', function() {
      it('should call invoiceV1WebhookGet successfully', function(done) {
        //uncomment below and update the code to test invoiceV1WebhookGet
        //instance.invoiceV1WebhookGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('invoiceV1WebhookIdDelete', function() {
      it('should call invoiceV1WebhookIdDelete successfully', function(done) {
        //uncomment below and update the code to test invoiceV1WebhookIdDelete
        //instance.invoiceV1WebhookIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('invoiceV1WebhookIdGet', function() {
      it('should call invoiceV1WebhookIdGet successfully', function(done) {
        //uncomment below and update the code to test invoiceV1WebhookIdGet
        //instance.invoiceV1WebhookIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('invoiceV1WebhookPost', function() {
      it('should call invoiceV1WebhookPost successfully', function(done) {
        //uncomment below and update the code to test invoiceV1WebhookPost
        //instance.invoiceV1WebhookPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('invoiceV1WebhookPut', function() {
      it('should call invoiceV1WebhookPut successfully', function(done) {
        //uncomment below and update the code to test invoiceV1WebhookPut
        //instance.invoiceV1WebhookPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('invoiceV1WebhookhistoryGet', function() {
      it('should call invoiceV1WebhookhistoryGet successfully', function(done) {
        //uncomment below and update the code to test invoiceV1WebhookhistoryGet
        //instance.invoiceV1WebhookhistoryGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('invoiceV1WebhookhistoryIdGet', function() {
      it('should call invoiceV1WebhookhistoryIdGet successfully', function(done) {
        //uncomment below and update the code to test invoiceV1WebhookhistoryIdGet
        //instance.invoiceV1WebhookhistoryIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
