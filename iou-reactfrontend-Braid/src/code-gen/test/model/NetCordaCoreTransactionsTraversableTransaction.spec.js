/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
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
    factory(root.expect, root.OpenapiJsClient);
  }
}(this, function(expect, OpenapiJsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OpenapiJsClient.NetCordaCoreTransactionsTraversableTransaction();
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

  describe('NetCordaCoreTransactionsTraversableTransaction', function() {
    it('should create an instance of NetCordaCoreTransactionsTraversableTransaction', function() {
      // uncomment below and update the code to test NetCordaCoreTransactionsTraversableTransaction
      //var instane = new OpenapiJsClient.NetCordaCoreTransactionsTraversableTransaction();
      //expect(instance).to.be.a(OpenapiJsClient.NetCordaCoreTransactionsTraversableTransaction);
    });

    it('should have the property componentGroups (base name: "componentGroups")', function() {
      // uncomment below and update the code to test the property componentGroups
      //var instane = new OpenapiJsClient.NetCordaCoreTransactionsTraversableTransaction();
      //expect(instance).to.be();
    });

    it('should have the property attachments (base name: "attachments")', function() {
      // uncomment below and update the code to test the property attachments
      //var instane = new OpenapiJsClient.NetCordaCoreTransactionsTraversableTransaction();
      //expect(instance).to.be();
    });

    it('should have the property inputs (base name: "inputs")', function() {
      // uncomment below and update the code to test the property inputs
      //var instane = new OpenapiJsClient.NetCordaCoreTransactionsTraversableTransaction();
      //expect(instance).to.be();
    });

    it('should have the property references (base name: "references")', function() {
      // uncomment below and update the code to test the property references
      //var instane = new OpenapiJsClient.NetCordaCoreTransactionsTraversableTransaction();
      //expect(instance).to.be();
    });

    it('should have the property outputs (base name: "outputs")', function() {
      // uncomment below and update the code to test the property outputs
      //var instane = new OpenapiJsClient.NetCordaCoreTransactionsTraversableTransaction();
      //expect(instance).to.be();
    });

    it('should have the property commands (base name: "commands")', function() {
      // uncomment below and update the code to test the property commands
      //var instane = new OpenapiJsClient.NetCordaCoreTransactionsTraversableTransaction();
      //expect(instance).to.be();
    });

    it('should have the property notary (base name: "notary")', function() {
      // uncomment below and update the code to test the property notary
      //var instane = new OpenapiJsClient.NetCordaCoreTransactionsTraversableTransaction();
      //expect(instance).to.be();
    });

    it('should have the property timeWindow (base name: "timeWindow")', function() {
      // uncomment below and update the code to test the property timeWindow
      //var instane = new OpenapiJsClient.NetCordaCoreTransactionsTraversableTransaction();
      //expect(instance).to.be();
    });

    it('should have the property networkParametersHash (base name: "networkParametersHash")', function() {
      // uncomment below and update the code to test the property networkParametersHash
      //var instane = new OpenapiJsClient.NetCordaCoreTransactionsTraversableTransaction();
      //expect(instance).to.be();
    });

    it('should have the property outputStates (base name: "outputStates")', function() {
      // uncomment below and update the code to test the property outputStates
      //var instane = new OpenapiJsClient.NetCordaCoreTransactionsTraversableTransaction();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new OpenapiJsClient.NetCordaCoreTransactionsTraversableTransaction();
      //expect(instance).to.be();
    });

  });

}));
