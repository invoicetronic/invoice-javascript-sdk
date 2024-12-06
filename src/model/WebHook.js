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

/**
 * The WebHook model module.
 * @module model/WebHook
 * @version 1.0.0
 */
class WebHook {
    /**
     * Constructs a new <code>WebHook</code>.
     * @alias module:model/WebHook
     */
    constructor() { 
        
        WebHook.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebHook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebHook} obj Optional instance to populate.
     * @return {module:model/WebHook} The populated <code>WebHook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebHook();

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
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebHook</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebHook</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['secret'] && !(typeof data['secret'] === 'string' || data['secret'] instanceof String)) {
            throw new Error("Expected the field `secret` to be a primitive type in the JSON string but got " + data['secret']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['events'])) {
            throw new Error("Expected the field `events` to be an array in the JSON data but got " + data['events']);
        }

        return true;
    }


}



/**
 * Unique identifier. Leave it at 0 for new records as it will be set automatically.
 * @member {Number} id
 */
WebHook.prototype['id'] = undefined;

/**
 * Creation date. It is set automatically.
 * @member {Date} created
 */
WebHook.prototype['created'] = undefined;

/**
 * Row version, for optimistic concurrency. It is set automatically.
 * @member {Number} version
 */
WebHook.prototype['version'] = undefined;

/**
 * User id.
 * @member {Number} user_id
 */
WebHook.prototype['user_id'] = undefined;

/**
 * Company id.
 * @member {Number} company_id
 */
WebHook.prototype['company_id'] = undefined;

/**
 * The url of your application's endpoint that will receive a POST request when the webhook is fired.
 * @member {String} url
 */
WebHook.prototype['url'] = undefined;

/**
 * Wetehr the webhooks is enabled or not. On creation, this is set to `true`.
 * @member {Boolean} enabled
 */
WebHook.prototype['enabled'] = undefined;

/**
 * The secret used to generate webhook signatures, only returned on creation. You should store this value securely and validate it on every call, to ensure that the caller is InvoiceApi.
 * @member {String} secret
 */
WebHook.prototype['secret'] = undefined;

/**
 * An optional description.
 * @member {String} description
 */
WebHook.prototype['description'] = undefined;

/**
 * List of events to that trigger the webhook.  See InvoiceApi.SupportedEvents.Available for a list of valid event names.
 * @member {Array.<String>} events
 */
WebHook.prototype['events'] = undefined;






export default WebHook;

