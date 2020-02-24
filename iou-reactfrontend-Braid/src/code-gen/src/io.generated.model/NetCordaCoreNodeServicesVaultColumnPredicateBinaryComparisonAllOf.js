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

import ApiClient from '../ApiClient';

/**
 * The NetCordaCoreNodeServicesVaultColumnPredicateBinaryComparisonAllOf model module.
 * @module io.generated.model/NetCordaCoreNodeServicesVaultColumnPredicateBinaryComparisonAllOf
 * @version 1.0.0
 */
class NetCordaCoreNodeServicesVaultColumnPredicateBinaryComparisonAllOf {
    /**
     * Constructs a new <code>NetCordaCoreNodeServicesVaultColumnPredicateBinaryComparisonAllOf</code>.
     * @alias module:io.generated.model/NetCordaCoreNodeServicesVaultColumnPredicateBinaryComparisonAllOf
     */
    constructor() { 
        
        NetCordaCoreNodeServicesVaultColumnPredicateBinaryComparisonAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NetCordaCoreNodeServicesVaultColumnPredicateBinaryComparisonAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:io.generated.model/NetCordaCoreNodeServicesVaultColumnPredicateBinaryComparisonAllOf} obj Optional instance to populate.
     * @return {module:io.generated.model/NetCordaCoreNodeServicesVaultColumnPredicateBinaryComparisonAllOf} The populated <code>NetCordaCoreNodeServicesVaultColumnPredicateBinaryComparisonAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetCordaCoreNodeServicesVaultColumnPredicateBinaryComparisonAllOf();

            if (data.hasOwnProperty('operator')) {
                obj['operator'] = ApiClient.convertToType(data['operator'], 'String');
            }
            if (data.hasOwnProperty('rightLiteral')) {
                obj['rightLiteral'] = ApiClient.convertToType(data['rightLiteral'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {module:io.generated.model/NetCordaCoreNodeServicesVaultColumnPredicateBinaryComparisonAllOf.OperatorEnum} operator
 */
NetCordaCoreNodeServicesVaultColumnPredicateBinaryComparisonAllOf.prototype['operator'] = undefined;

/**
 * @member {Object} rightLiteral
 */
NetCordaCoreNodeServicesVaultColumnPredicateBinaryComparisonAllOf.prototype['rightLiteral'] = undefined;





/**
 * Allowed values for the <code>operator</code> property.
 * @enum {String}
 * @readonly
 */
NetCordaCoreNodeServicesVaultColumnPredicateBinaryComparisonAllOf['OperatorEnum'] = {

    /**
     * value: "LESS_THAN"
     * @const
     */
    "LESS_THAN": "LESS_THAN",

    /**
     * value: "LESS_THAN_OR_EQUAL"
     * @const
     */
    "LESS_THAN_OR_EQUAL": "LESS_THAN_OR_EQUAL",

    /**
     * value: "GREATER_THAN"
     * @const
     */
    "GREATER_THAN": "GREATER_THAN",

    /**
     * value: "GREATER_THAN_OR_EQUAL"
     * @const
     */
    "GREATER_THAN_OR_EQUAL": "GREATER_THAN_OR_EQUAL"
};



export default NetCordaCoreNodeServicesVaultColumnPredicateBinaryComparisonAllOf;

