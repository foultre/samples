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
    instance = new OpenapiJsClient.NetCordaCoreNodeServicesVaultPage();
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

  describe('NetCordaCoreNodeServicesVaultPage', function() {
    it('should create an instance of NetCordaCoreNodeServicesVaultPage', function() {
      // uncomment below and update the code to test NetCordaCoreNodeServicesVaultPage
      //var instane = new OpenapiJsClient.NetCordaCoreNodeServicesVaultPage();
      //expect(instance).to.be.a(OpenapiJsClient.NetCordaCoreNodeServicesVaultPage);
    });

    it('should have the property states (base name: "states")', function() {
      // uncomment below and update the code to test the property states
      //var instane = new OpenapiJsClient.NetCordaCoreNodeServicesVaultPage();
      //expect(instance).to.be();
    });

    it('should have the property statesMetadata (base name: "statesMetadata")', function() {
      // uncomment below and update the code to test the property statesMetadata
      //var instane = new OpenapiJsClient.NetCordaCoreNodeServicesVaultPage();
      //expect(instance).to.be();
    });

    it('should have the property totalStatesAvailable (base name: "totalStatesAvailable")', function() {
      // uncomment below and update the code to test the property totalStatesAvailable
      //var instane = new OpenapiJsClient.NetCordaCoreNodeServicesVaultPage();
      //expect(instance).to.be();
    });

    it('should have the property stateTypes (base name: "stateTypes")', function() {
      // uncomment below and update the code to test the property stateTypes
      //var instane = new OpenapiJsClient.NetCordaCoreNodeServicesVaultPage();
      //expect(instance).to.be();
    });

    it('should have the property otherResults (base name: "otherResults")', function() {
      // uncomment below and update the code to test the property otherResults
      //var instane = new OpenapiJsClient.NetCordaCoreNodeServicesVaultPage();
      //expect(instance).to.be();
    });

  });

}));
