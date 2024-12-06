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
import Allegati from './Allegati';
import DatiBeniServizi from './DatiBeniServizi';
import DatiGenerali from './DatiGenerali';
import DatiPagamento from './DatiPagamento';
import DatiVeicoli from './DatiVeicoli';

/**
 * The FatturaElettronicaBody model module.
 * @module model/FatturaElettronicaBody
 * @version 1.0.0
 */
class FatturaElettronicaBody {
    /**
     * Constructs a new <code>FatturaElettronicaBody</code>.
     * @alias module:model/FatturaElettronicaBody
     */
    constructor() { 
        
        FatturaElettronicaBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FatturaElettronicaBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FatturaElettronicaBody} obj Optional instance to populate.
     * @return {module:model/FatturaElettronicaBody} The populated <code>FatturaElettronicaBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FatturaElettronicaBody();

            if (data.hasOwnProperty('dati_generali')) {
                obj['dati_generali'] = DatiGenerali.constructFromObject(data['dati_generali']);
            }
            if (data.hasOwnProperty('dati_beni_servizi')) {
                obj['dati_beni_servizi'] = DatiBeniServizi.constructFromObject(data['dati_beni_servizi']);
            }
            if (data.hasOwnProperty('dati_veicoli')) {
                obj['dati_veicoli'] = DatiVeicoli.constructFromObject(data['dati_veicoli']);
            }
            if (data.hasOwnProperty('dati_pagamento')) {
                obj['dati_pagamento'] = ApiClient.convertToType(data['dati_pagamento'], [DatiPagamento]);
            }
            if (data.hasOwnProperty('allegati')) {
                obj['allegati'] = ApiClient.convertToType(data['allegati'], [Allegati]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FatturaElettronicaBody</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FatturaElettronicaBody</code>.
     */
    static validateJSON(data) {
        // validate the optional field `dati_generali`
        if (data['dati_generali']) { // data not null
          DatiGenerali.validateJSON(data['dati_generali']);
        }
        // validate the optional field `dati_beni_servizi`
        if (data['dati_beni_servizi']) { // data not null
          DatiBeniServizi.validateJSON(data['dati_beni_servizi']);
        }
        // validate the optional field `dati_veicoli`
        if (data['dati_veicoli']) { // data not null
          DatiVeicoli.validateJSON(data['dati_veicoli']);
        }
        if (data['dati_pagamento']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['dati_pagamento'])) {
                throw new Error("Expected the field `dati_pagamento` to be an array in the JSON data but got " + data['dati_pagamento']);
            }
            // validate the optional field `dati_pagamento` (array)
            for (const item of data['dati_pagamento']) {
                DatiPagamento.validateJSON(item);
            };
        }
        if (data['allegati']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['allegati'])) {
                throw new Error("Expected the field `allegati` to be an array in the JSON data but got " + data['allegati']);
            }
            // validate the optional field `allegati` (array)
            for (const item of data['allegati']) {
                Allegati.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {module:model/DatiGenerali} dati_generali
 */
FatturaElettronicaBody.prototype['dati_generali'] = undefined;

/**
 * @member {module:model/DatiBeniServizi} dati_beni_servizi
 */
FatturaElettronicaBody.prototype['dati_beni_servizi'] = undefined;

/**
 * @member {module:model/DatiVeicoli} dati_veicoli
 */
FatturaElettronicaBody.prototype['dati_veicoli'] = undefined;

/**
 * @member {Array.<module:model/DatiPagamento>} dati_pagamento
 */
FatturaElettronicaBody.prototype['dati_pagamento'] = undefined;

/**
 * @member {Array.<module:model/Allegati>} allegati
 */
FatturaElettronicaBody.prototype['allegati'] = undefined;






export default FatturaElettronicaBody;

