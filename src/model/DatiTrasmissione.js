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

import ApiClient from '../ApiClient';
import ContattiTrasmittente from './ContattiTrasmittente';
import IdTrasmittente from './IdTrasmittente';

/**
 * The DatiTrasmissione model module.
 * @module model/DatiTrasmissione
 * @version 1
 */
class DatiTrasmissione {
    /**
     * Constructs a new <code>DatiTrasmissione</code>.
     * @alias module:model/DatiTrasmissione
     */
    constructor() { 
        
        DatiTrasmissione.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DatiTrasmissione</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DatiTrasmissione} obj Optional instance to populate.
     * @return {module:model/DatiTrasmissione} The populated <code>DatiTrasmissione</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DatiTrasmissione();

            if (data.hasOwnProperty('id_trasmittente')) {
                obj['id_trasmittente'] = IdTrasmittente.constructFromObject(data['id_trasmittente']);
            }
            if (data.hasOwnProperty('progressivo_invio')) {
                obj['progressivo_invio'] = ApiClient.convertToType(data['progressivo_invio'], 'String');
            }
            if (data.hasOwnProperty('formato_trasmissione')) {
                obj['formato_trasmissione'] = ApiClient.convertToType(data['formato_trasmissione'], 'String');
            }
            if (data.hasOwnProperty('codice_destinatario')) {
                obj['codice_destinatario'] = ApiClient.convertToType(data['codice_destinatario'], 'String');
            }
            if (data.hasOwnProperty('contatti_trasmittente')) {
                obj['contatti_trasmittente'] = ContattiTrasmittente.constructFromObject(data['contatti_trasmittente']);
            }
            if (data.hasOwnProperty('pec_destinatario')) {
                obj['pec_destinatario'] = ApiClient.convertToType(data['pec_destinatario'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DatiTrasmissione</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DatiTrasmissione</code>.
     */
    static validateJSON(data) {
        // validate the optional field `id_trasmittente`
        if (data['id_trasmittente']) { // data not null
          IdTrasmittente.validateJSON(data['id_trasmittente']);
        }
        // ensure the json data is a string
        if (data['progressivo_invio'] && !(typeof data['progressivo_invio'] === 'string' || data['progressivo_invio'] instanceof String)) {
            throw new Error("Expected the field `progressivo_invio` to be a primitive type in the JSON string but got " + data['progressivo_invio']);
        }
        // ensure the json data is a string
        if (data['formato_trasmissione'] && !(typeof data['formato_trasmissione'] === 'string' || data['formato_trasmissione'] instanceof String)) {
            throw new Error("Expected the field `formato_trasmissione` to be a primitive type in the JSON string but got " + data['formato_trasmissione']);
        }
        // ensure the json data is a string
        if (data['codice_destinatario'] && !(typeof data['codice_destinatario'] === 'string' || data['codice_destinatario'] instanceof String)) {
            throw new Error("Expected the field `codice_destinatario` to be a primitive type in the JSON string but got " + data['codice_destinatario']);
        }
        // validate the optional field `contatti_trasmittente`
        if (data['contatti_trasmittente']) { // data not null
          ContattiTrasmittente.validateJSON(data['contatti_trasmittente']);
        }
        // ensure the json data is a string
        if (data['pec_destinatario'] && !(typeof data['pec_destinatario'] === 'string' || data['pec_destinatario'] instanceof String)) {
            throw new Error("Expected the field `pec_destinatario` to be a primitive type in the JSON string but got " + data['pec_destinatario']);
        }

        return true;
    }


}



/**
 * @member {module:model/IdTrasmittente} id_trasmittente
 */
DatiTrasmissione.prototype['id_trasmittente'] = undefined;

/**
 * @member {String} progressivo_invio
 */
DatiTrasmissione.prototype['progressivo_invio'] = undefined;

/**
 * @member {String} formato_trasmissione
 */
DatiTrasmissione.prototype['formato_trasmissione'] = undefined;

/**
 * @member {String} codice_destinatario
 */
DatiTrasmissione.prototype['codice_destinatario'] = undefined;

/**
 * @member {module:model/ContattiTrasmittente} contatti_trasmittente
 */
DatiTrasmissione.prototype['contatti_trasmittente'] = undefined;

/**
 * @member {String} pec_destinatario
 */
DatiTrasmissione.prototype['pec_destinatario'] = undefined;






export default DatiTrasmissione;

