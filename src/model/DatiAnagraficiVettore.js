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
import Anagrafica from './Anagrafica';
import IdFiscaleIVA from './IdFiscaleIVA';

/**
 * The DatiAnagraficiVettore model module.
 * @module model/DatiAnagraficiVettore
 * @version 1.0.0
 */
class DatiAnagraficiVettore {
    /**
     * Constructs a new <code>DatiAnagraficiVettore</code>.
     * @alias module:model/DatiAnagraficiVettore
     */
    constructor() { 
        
        DatiAnagraficiVettore.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DatiAnagraficiVettore</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DatiAnagraficiVettore} obj Optional instance to populate.
     * @return {module:model/DatiAnagraficiVettore} The populated <code>DatiAnagraficiVettore</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DatiAnagraficiVettore();

            if (data.hasOwnProperty('id_fiscale_iva')) {
                obj['id_fiscale_iva'] = IdFiscaleIVA.constructFromObject(data['id_fiscale_iva']);
            }
            if (data.hasOwnProperty('codice_fiscale')) {
                obj['codice_fiscale'] = ApiClient.convertToType(data['codice_fiscale'], 'String');
            }
            if (data.hasOwnProperty('anagrafica')) {
                obj['anagrafica'] = Anagrafica.constructFromObject(data['anagrafica']);
            }
            if (data.hasOwnProperty('numero_licenza_guida')) {
                obj['numero_licenza_guida'] = ApiClient.convertToType(data['numero_licenza_guida'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DatiAnagraficiVettore</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DatiAnagraficiVettore</code>.
     */
    static validateJSON(data) {
        // validate the optional field `id_fiscale_iva`
        if (data['id_fiscale_iva']) { // data not null
          IdFiscaleIVA.validateJSON(data['id_fiscale_iva']);
        }
        // ensure the json data is a string
        if (data['codice_fiscale'] && !(typeof data['codice_fiscale'] === 'string' || data['codice_fiscale'] instanceof String)) {
            throw new Error("Expected the field `codice_fiscale` to be a primitive type in the JSON string but got " + data['codice_fiscale']);
        }
        // validate the optional field `anagrafica`
        if (data['anagrafica']) { // data not null
          Anagrafica.validateJSON(data['anagrafica']);
        }
        // ensure the json data is a string
        if (data['numero_licenza_guida'] && !(typeof data['numero_licenza_guida'] === 'string' || data['numero_licenza_guida'] instanceof String)) {
            throw new Error("Expected the field `numero_licenza_guida` to be a primitive type in the JSON string but got " + data['numero_licenza_guida']);
        }

        return true;
    }


}



/**
 * @member {module:model/IdFiscaleIVA} id_fiscale_iva
 */
DatiAnagraficiVettore.prototype['id_fiscale_iva'] = undefined;

/**
 * @member {String} codice_fiscale
 */
DatiAnagraficiVettore.prototype['codice_fiscale'] = undefined;

/**
 * @member {module:model/Anagrafica} anagrafica
 */
DatiAnagraficiVettore.prototype['anagrafica'] = undefined;

/**
 * @member {String} numero_licenza_guida
 */
DatiAnagraficiVettore.prototype['numero_licenza_guida'] = undefined;






export default DatiAnagraficiVettore;

