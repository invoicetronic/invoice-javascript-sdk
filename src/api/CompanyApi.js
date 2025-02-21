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


import ApiClient from "../ApiClient";
import Company from '../model/Company';
import ProblemHttpResult from '../model/ProblemHttpResult';

/**
* Company service.
* @module api/CompanyApi
* @version 1
*/
export default class CompanyApi {

    /**
    * Constructs a new CompanyApi. 
    * @alias module:api/CompanyApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * List companies
     * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
     * @param {Object} opts Optional parameters
     * @param {Number} [page = 1)] Page number. Defaults to 1.
     * @param {Number} [pageSize = 100)] Items per page. Defaults to 50. Cannot be greater than 200.
     * @param {String} [sort] Sort by field. Prefix with '-' for descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Company>} and HTTP response
     */
    companyGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'page_size': opts['pageSize'],
        'sort': opts['sort']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Company];
      return this.apiClient.callApi(
        '/company', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List companies
     * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number. Defaults to 1. (default to 1)
     * @param {Number} opts.pageSize Items per page. Defaults to 50. Cannot be greater than 200. (default to 100)
     * @param {String} opts.sort Sort by field. Prefix with '-' for descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Company>}
     */
    companyGet(opts) {
      return this.companyGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a company
     * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
     * @param {Number} id Item id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Company} and HTTP response
     */
    companyIdDeleteWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling companyIdDelete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Company;
      return this.apiClient.callApi(
        '/company/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a company
     * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
     * @param {Number} id Item id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Company}
     */
    companyIdDelete(id) {
      return this.companyIdDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a company by id
     * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
     * @param {Number} id Item id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Company} and HTTP response
     */
    companyIdGetWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling companyIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Company;
      return this.apiClient.callApi(
        '/company/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a company by id
     * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
     * @param {Number} id Item id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Company}
     */
    companyIdGet(id) {
      return this.companyIdGetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Add a company
     * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
     * @param {module:model/Company} company 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Company} and HTTP response
     */
    companyPostWithHttpInfo(company) {
      let postBody = company;
      // verify the required parameter 'company' is set
      if (company === undefined || company === null) {
        throw new Error("Missing the required parameter 'company' when calling companyPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Company;
      return this.apiClient.callApi(
        '/company', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add a company
     * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
     * @param {module:model/Company} company 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Company}
     */
    companyPost(company) {
      return this.companyPostWithHttpInfo(company)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a company
     * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
     * @param {module:model/Company} company 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Company} and HTTP response
     */
    companyPutWithHttpInfo(company) {
      let postBody = company;
      // verify the required parameter 'company' is set
      if (company === undefined || company === null) {
        throw new Error("Missing the required parameter 'company' when calling companyPut");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Company;
      return this.apiClient.callApi(
        '/company', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a company
     * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
     * @param {module:model/Company} company 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Company}
     */
    companyPut(company) {
      return this.companyPutWithHttpInfo(company)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
