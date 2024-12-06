=begin
#Italian eInvoice API

#The Italian eInvoice API is a RESTful API that allows you to send and receive invoices through the Italian [Servizio di Interscambio (SDI)][1], or Interchange Service. The API is designed by Invoicetronic to be simple and easy to use, abstracting away SDI complexity while still providing complete control over the invoice send/receive process. The API also provides advanced features and a rich toolchain, such as invoice validation, multiple upload methods, webhooks, event logs, CORS support, client SDKs for commonly used languages, and CLI tools.  For more information, see  [Invoicetronic website][2]  [1]: https://www.fatturapa.gov.it/it/sistemainterscambio/cose-il-sdi/ [2]: https://invoicetronic.com/

The version of the OpenAPI document: 1.0.0
Contact: support@invoicetronic.com
Generated by: https://openapi-generator.tech
Generator version: 7.10.0

=end

require 'cgi'

module Invoice_Sdk
  class CompanyApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end
    # List companies
    # Companies are the entities that send and receive invoices. At least one company is required in order to send and receive invoices.
    # @param [Hash] opts the optional parameters
    # @option opts [Integer] :page Page number. (default to 1)
    # @option opts [Integer] :page_size Items per page. (default to 100)
    # @return [Array<Company>]
    def invoice_v1_company_get(opts = {})
      data, _status_code, _headers = invoice_v1_company_get_with_http_info(opts)
      data
    end

    # List companies
    # Companies are the entities that send and receive invoices. At least one company is required in order to send and receive invoices.
    # @param [Hash] opts the optional parameters
    # @option opts [Integer] :page Page number. (default to 1)
    # @option opts [Integer] :page_size Items per page. (default to 100)
    # @return [Array<(Array<Company>, Integer, Hash)>] Array<Company> data, response status code and response headers
    def invoice_v1_company_get_with_http_info(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: CompanyApi.invoice_v1_company_get ...'
      end
      # resource path
      local_var_path = '/invoice/v1/company'

      # query parameters
      query_params = opts[:query_params] || {}
      query_params[:'page'] = opts[:'page'] if !opts[:'page'].nil?
      query_params[:'pageSize'] = opts[:'page_size'] if !opts[:'page_size'].nil?

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json']) unless header_params['Accept']

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'Array<Company>'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['Basic']

      new_options = opts.merge(
        :operation => :"CompanyApi.invoice_v1_company_get",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: CompanyApi#invoice_v1_company_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Delete a company
    # Companies are the entities that send and receive invoices. At least one company is required in order to send and receive invoices.
    # @param id [Integer] Item id.
    # @param [Hash] opts the optional parameters
    # @return [Company]
    def invoice_v1_company_id_delete(id, opts = {})
      data, _status_code, _headers = invoice_v1_company_id_delete_with_http_info(id, opts)
      data
    end

    # Delete a company
    # Companies are the entities that send and receive invoices. At least one company is required in order to send and receive invoices.
    # @param id [Integer] Item id.
    # @param [Hash] opts the optional parameters
    # @return [Array<(Company, Integer, Hash)>] Company data, response status code and response headers
    def invoice_v1_company_id_delete_with_http_info(id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: CompanyApi.invoice_v1_company_id_delete ...'
      end
      # verify the required parameter 'id' is set
      if @api_client.config.client_side_validation && id.nil?
        fail ArgumentError, "Missing the required parameter 'id' when calling CompanyApi.invoice_v1_company_id_delete"
      end
      # resource path
      local_var_path = '/invoice/v1/company/{id}'.sub('{' + 'id' + '}', CGI.escape(id.to_s))

      # query parameters
      query_params = opts[:query_params] || {}

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json']) unless header_params['Accept']

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'Company'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['Basic']

      new_options = opts.merge(
        :operation => :"CompanyApi.invoice_v1_company_id_delete",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:DELETE, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: CompanyApi#invoice_v1_company_id_delete\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Get a company by id
    # Companies are the entities that send and receive invoices. At least one company is required in order to send and receive invoices.
    # @param id [Integer] Item id.
    # @param [Hash] opts the optional parameters
    # @return [Company]
    def invoice_v1_company_id_get(id, opts = {})
      data, _status_code, _headers = invoice_v1_company_id_get_with_http_info(id, opts)
      data
    end

    # Get a company by id
    # Companies are the entities that send and receive invoices. At least one company is required in order to send and receive invoices.
    # @param id [Integer] Item id.
    # @param [Hash] opts the optional parameters
    # @return [Array<(Company, Integer, Hash)>] Company data, response status code and response headers
    def invoice_v1_company_id_get_with_http_info(id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: CompanyApi.invoice_v1_company_id_get ...'
      end
      # verify the required parameter 'id' is set
      if @api_client.config.client_side_validation && id.nil?
        fail ArgumentError, "Missing the required parameter 'id' when calling CompanyApi.invoice_v1_company_id_get"
      end
      # resource path
      local_var_path = '/invoice/v1/company/{id}'.sub('{' + 'id' + '}', CGI.escape(id.to_s))

      # query parameters
      query_params = opts[:query_params] || {}

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json']) unless header_params['Accept']

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'Company'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['Basic']

      new_options = opts.merge(
        :operation => :"CompanyApi.invoice_v1_company_id_get",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: CompanyApi#invoice_v1_company_id_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Add a company
    # Companies are the entities that send and receive invoices. At least one company is required in order to send and receive invoices.
    # @param company [Company] 
    # @param [Hash] opts the optional parameters
    # @return [Company]
    def invoice_v1_company_post(company, opts = {})
      data, _status_code, _headers = invoice_v1_company_post_with_http_info(company, opts)
      data
    end

    # Add a company
    # Companies are the entities that send and receive invoices. At least one company is required in order to send and receive invoices.
    # @param company [Company] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(Company, Integer, Hash)>] Company data, response status code and response headers
    def invoice_v1_company_post_with_http_info(company, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: CompanyApi.invoice_v1_company_post ...'
      end
      # verify the required parameter 'company' is set
      if @api_client.config.client_side_validation && company.nil?
        fail ArgumentError, "Missing the required parameter 'company' when calling CompanyApi.invoice_v1_company_post"
      end
      # resource path
      local_var_path = '/invoice/v1/company'

      # query parameters
      query_params = opts[:query_params] || {}

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json']) unless header_params['Accept']
      # HTTP header 'Content-Type'
      content_type = @api_client.select_header_content_type(['application/json'])
      if !content_type.nil?
          header_params['Content-Type'] = content_type
      end

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body] || @api_client.object_to_http_body(company)

      # return_type
      return_type = opts[:debug_return_type] || 'Company'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['Basic']

      new_options = opts.merge(
        :operation => :"CompanyApi.invoice_v1_company_post",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: CompanyApi#invoice_v1_company_post\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Update a company
    # Companies are the entities that send and receive invoices. At least one company is required in order to send and receive invoices.
    # @param company [Company] 
    # @param [Hash] opts the optional parameters
    # @return [Company]
    def invoice_v1_company_put(company, opts = {})
      data, _status_code, _headers = invoice_v1_company_put_with_http_info(company, opts)
      data
    end

    # Update a company
    # Companies are the entities that send and receive invoices. At least one company is required in order to send and receive invoices.
    # @param company [Company] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(Company, Integer, Hash)>] Company data, response status code and response headers
    def invoice_v1_company_put_with_http_info(company, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: CompanyApi.invoice_v1_company_put ...'
      end
      # verify the required parameter 'company' is set
      if @api_client.config.client_side_validation && company.nil?
        fail ArgumentError, "Missing the required parameter 'company' when calling CompanyApi.invoice_v1_company_put"
      end
      # resource path
      local_var_path = '/invoice/v1/company'

      # query parameters
      query_params = opts[:query_params] || {}

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json']) unless header_params['Accept']
      # HTTP header 'Content-Type'
      content_type = @api_client.select_header_content_type(['application/json'])
      if !content_type.nil?
          header_params['Content-Type'] = content_type
      end

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body] || @api_client.object_to_http_body(company)

      # return_type
      return_type = opts[:debug_return_type] || 'Company'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['Basic']

      new_options = opts.merge(
        :operation => :"CompanyApi.invoice_v1_company_put",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:PUT, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: CompanyApi#invoice_v1_company_put\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
  end
end
