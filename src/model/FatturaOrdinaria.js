/**
 * Italian eInvoice API
 * The Italian eInvoice API is a RESTful API that allows you to send and receive invoices through the Italian [Servizio di Interscambio (SDI)][1], or Interchange Service. The API is designed by Invoicetronic to be simple and easy to use, abstracting away SDI complexity while still providing complete control over the invoice send/receive process. The API also provides advanced features and a rich toolchain, such as invoice validation, multiple upload methods, webhooks, event logs, CORS support, client SDKs for commonly used languages, and CLI tools.  For more information, see  [Invoicetronic website][2]  [1]: https://www.fatturapa.gov.it/it/sistemainterscambio/cose-il-sdi/ [2]: https://invoicetronic.com/
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
import FatturaElettronicaBody from './FatturaElettronicaBody';
import FatturaElettronicaHeader from './FatturaElettronicaHeader';

/**
 * The FatturaOrdinaria model module.
 * @module model/FatturaOrdinaria
 * @version 1.0.0
 */
class FatturaOrdinaria {
    /**
     * Constructs a new <code>FatturaOrdinaria</code>.
     * @alias module:model/FatturaOrdinaria
     */
    constructor() { 
        
        FatturaOrdinaria.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FatturaOrdinaria</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FatturaOrdinaria} obj Optional instance to populate.
     * @return {module:model/FatturaOrdinaria} The populated <code>FatturaOrdinaria</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FatturaOrdinaria();

            if (data.hasOwnProperty('sistema_emittente')) {
                obj['sistema_emittente'] = ApiClient.convertToType(data['sistema_emittente'], 'String');
            }
            if (data.hasOwnProperty('fattura_elettronica_header')) {
                obj['fattura_elettronica_header'] = FatturaElettronicaHeader.constructFromObject(data['fattura_elettronica_header']);
            }
            if (data.hasOwnProperty('fattura_elettronica_body')) {
                obj['fattura_elettronica_body'] = ApiClient.convertToType(data['fattura_elettronica_body'], [FatturaElettronicaBody]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FatturaOrdinaria</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FatturaOrdinaria</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['sistema_emittente'] && !(typeof data['sistema_emittente'] === 'string' || data['sistema_emittente'] instanceof String)) {
            throw new Error("Expected the field `sistema_emittente` to be a primitive type in the JSON string but got " + data['sistema_emittente']);
        }
        // validate the optional field `fattura_elettronica_header`
        if (data['fattura_elettronica_header']) { // data not null
          FatturaElettronicaHeader.validateJSON(data['fattura_elettronica_header']);
        }
        if (data['fattura_elettronica_body']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['fattura_elettronica_body'])) {
                throw new Error("Expected the field `fattura_elettronica_body` to be an array in the JSON data but got " + data['fattura_elettronica_body']);
            }
            // validate the optional field `fattura_elettronica_body` (array)
            for (const item of data['fattura_elettronica_body']) {
                FatturaElettronicaBody.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} sistema_emittente
 */
FatturaOrdinaria.prototype['sistema_emittente'] = undefined;

/**
 * @member {module:model/FatturaElettronicaHeader} fattura_elettronica_header
 */
FatturaOrdinaria.prototype['fattura_elettronica_header'] = undefined;

/**
 * @member {Array.<module:model/FatturaElettronicaBody>} fattura_elettronica_body
 */
FatturaOrdinaria.prototype['fattura_elettronica_body'] = undefined;






export default FatturaOrdinaria;

