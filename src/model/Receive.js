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
import DocumentData from './DocumentData';

/**
 * The Receive model module.
 * @module model/Receive
 * @version 1.0.0
 */
class Receive {
    /**
     * Constructs a new <code>Receive</code>.
     * @alias module:model/Receive
     */
    constructor() { 
        
        Receive.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Receive</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Receive} obj Optional instance to populate.
     * @return {module:model/Receive} The populated <code>Receive</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Receive();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
            }
            if (data.hasOwnProperty('company_id')) {
                obj['company_id'] = ApiClient.convertToType(data['company_id'], 'Number');
            }
            if (data.hasOwnProperty('committente')) {
                obj['committente'] = ApiClient.convertToType(data['committente'], 'String');
            }
            if (data.hasOwnProperty('prestatore')) {
                obj['prestatore'] = ApiClient.convertToType(data['prestatore'], 'String');
            }
            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('file_name')) {
                obj['file_name'] = ApiClient.convertToType(data['file_name'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ApiClient.convertToType(data['payload'], 'String');
            }
            if (data.hasOwnProperty('last_update')) {
                obj['last_update'] = ApiClient.convertToType(data['last_update'], 'Date');
            }
            if (data.hasOwnProperty('date_sent')) {
                obj['date_sent'] = ApiClient.convertToType(data['date_sent'], 'Date');
            }
            if (data.hasOwnProperty('documents')) {
                obj['documents'] = ApiClient.convertToType(data['documents'], [DocumentData]);
            }
            if (data.hasOwnProperty('encoding')) {
                obj['encoding'] = ApiClient.convertToType(data['encoding'], 'String');
            }
            if (data.hasOwnProperty('is_read')) {
                obj['is_read'] = ApiClient.convertToType(data['is_read'], 'Boolean');
            }
            if (data.hasOwnProperty('message_id')) {
                obj['message_id'] = ApiClient.convertToType(data['message_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Receive</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Receive</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['committente'] && !(typeof data['committente'] === 'string' || data['committente'] instanceof String)) {
            throw new Error("Expected the field `committente` to be a primitive type in the JSON string but got " + data['committente']);
        }
        // ensure the json data is a string
        if (data['prestatore'] && !(typeof data['prestatore'] === 'string' || data['prestatore'] instanceof String)) {
            throw new Error("Expected the field `prestatore` to be a primitive type in the JSON string but got " + data['prestatore']);
        }
        // ensure the json data is a string
        if (data['identifier'] && !(typeof data['identifier'] === 'string' || data['identifier'] instanceof String)) {
            throw new Error("Expected the field `identifier` to be a primitive type in the JSON string but got " + data['identifier']);
        }
        // ensure the json data is a string
        if (data['file_name'] && !(typeof data['file_name'] === 'string' || data['file_name'] instanceof String)) {
            throw new Error("Expected the field `file_name` to be a primitive type in the JSON string but got " + data['file_name']);
        }
        // ensure the json data is a string
        if (data['format'] && !(typeof data['format'] === 'string' || data['format'] instanceof String)) {
            throw new Error("Expected the field `format` to be a primitive type in the JSON string but got " + data['format']);
        }
        // ensure the json data is a string
        if (data['payload'] && !(typeof data['payload'] === 'string' || data['payload'] instanceof String)) {
            throw new Error("Expected the field `payload` to be a primitive type in the JSON string but got " + data['payload']);
        }
        if (data['documents']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['documents'])) {
                throw new Error("Expected the field `documents` to be an array in the JSON data but got " + data['documents']);
            }
            // validate the optional field `documents` (array)
            for (const item of data['documents']) {
                DocumentData.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['encoding'] && !(typeof data['encoding'] === 'string' || data['encoding'] instanceof String)) {
            throw new Error("Expected the field `encoding` to be a primitive type in the JSON string but got " + data['encoding']);
        }
        // ensure the json data is a string
        if (data['message_id'] && !(typeof data['message_id'] === 'string' || data['message_id'] instanceof String)) {
            throw new Error("Expected the field `message_id` to be a primitive type in the JSON string but got " + data['message_id']);
        }

        return true;
    }


}



/**
 * Unique identifier. Leave it at 0 for new records as it will be set automatically.
 * @member {Number} id
 */
Receive.prototype['id'] = undefined;

/**
 * Creation date. It is set automatically.
 * @member {Date} created
 */
Receive.prototype['created'] = undefined;

/**
 * Row version, for optimistic concurrency. It is set automatically.
 * @member {Number} version
 */
Receive.prototype['version'] = undefined;

/**
 * User id.
 * @member {Number} user_id
 */
Receive.prototype['user_id'] = undefined;

/**
 * Company id. On send, this is the sender and must be set in advance. On receive, it will be  automatically set based on the recipient's VAT number. If a matching company is not found, the invoice will be rejected until the company is created.
 * @member {Number} company_id
 */
Receive.prototype['company_id'] = undefined;

/**
 * VAT number of the Cessionario/Committente (customer). This is automatically set based on the recipient's VAT number.
 * @member {String} committente
 */
Receive.prototype['committente'] = undefined;

/**
 * VAT number of the Cedente/Prestatore (vendor). This is automatically set based on the sender's VAT number.
 * @member {String} prestatore
 */
Receive.prototype['prestatore'] = undefined;

/**
 * SDI identifier. This is set by the SDI and is guaranted to be unique within the SDI system.
 * @member {String} identifier
 */
Receive.prototype['identifier'] = undefined;

/**
 * Xml file name.
 * @member {String} file_name
 */
Receive.prototype['file_name'] = undefined;

/**
 * SDI format (FPA12, FPR12, FSM10, ...)
 * @member {String} format
 */
Receive.prototype['format'] = undefined;

/**
 * Xml payloaad. This is the actual xml content, as string. On send, it can be base64 encoded. If it's not, it will be encoded before sending. It is guaranteed to be cyphered at rest.
 * @member {String} payload
 */
Receive.prototype['payload'] = undefined;

/**
 * Last update from SDI.
 * @member {Date} last_update
 */
Receive.prototype['last_update'] = undefined;

/**
 * When the invoice was sent to SDI.
 * @member {Date} date_sent
 */
Receive.prototype['date_sent'] = undefined;

/**
 * The invoices included in the payload. This is set by the system, based on the xml content.
 * @member {Array.<module:model/DocumentData>} documents
 */
Receive.prototype['documents'] = undefined;

/**
 * Whether the payload is Base64 encoded or a plain XML (text).
 * @member {module:model/Receive.EncodingEnum} encoding
 */
Receive.prototype['encoding'] = undefined;

/**
 * Wether the invoice has been read at least once.
 * @member {Boolean} is_read
 */
Receive.prototype['is_read'] = undefined;

/**
 * SDI message id.
 * @member {String} message_id
 */
Receive.prototype['message_id'] = undefined;





/**
 * Allowed values for the <code>encoding</code> property.
 * @enum {String}
 * @readonly
 */
Receive['EncodingEnum'] = {

    /**
     * value: "Xml"
     * @const
     */
    "Xml": "Xml",

    /**
     * value: "Base64"
     * @const
     */
    "Base64": "Base64"
};



export default Receive;

