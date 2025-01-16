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

import ApiClient from '../ApiClient';

/**
 * The IdTrasmittente model module.
 * @module model/IdTrasmittente
 * @version 1.0.0
 */
class IdTrasmittente {
    /**
     * Constructs a new <code>IdTrasmittente</code>.
     * @alias module:model/IdTrasmittente
     */
    constructor() { 
        
        IdTrasmittente.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IdTrasmittente</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdTrasmittente} obj Optional instance to populate.
     * @return {module:model/IdTrasmittente} The populated <code>IdTrasmittente</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IdTrasmittente();

            if (data.hasOwnProperty('id_paese')) {
                obj['id_paese'] = ApiClient.convertToType(data['id_paese'], 'String');
            }
            if (data.hasOwnProperty('id_codice')) {
                obj['id_codice'] = ApiClient.convertToType(data['id_codice'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IdTrasmittente</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IdTrasmittente</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id_paese'] && !(typeof data['id_paese'] === 'string' || data['id_paese'] instanceof String)) {
            throw new Error("Expected the field `id_paese` to be a primitive type in the JSON string but got " + data['id_paese']);
        }
        // ensure the json data is a string
        if (data['id_codice'] && !(typeof data['id_codice'] === 'string' || data['id_codice'] instanceof String)) {
            throw new Error("Expected the field `id_codice` to be a primitive type in the JSON string but got " + data['id_codice']);
        }

        return true;
    }


}



/**
 * @member {String} id_paese
 */
IdTrasmittente.prototype['id_paese'] = undefined;

/**
 * @member {String} id_codice
 */
IdTrasmittente.prototype['id_codice'] = undefined;






export default IdTrasmittente;

