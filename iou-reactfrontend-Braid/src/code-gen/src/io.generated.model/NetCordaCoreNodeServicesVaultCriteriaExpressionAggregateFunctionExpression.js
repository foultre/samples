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
import NetCordaCoreNodeServicesVaultColumnObjectObject from './NetCordaCoreNodeServicesVaultColumnObjectObject';
import NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpressionAllOf from './NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpressionAllOf';
import NetCordaCoreNodeServicesVaultCriteriaExpressionNetCordaCoreSchemasStatePersistableBoolean from './NetCordaCoreNodeServicesVaultCriteriaExpressionNetCordaCoreSchemasStatePersistableBoolean';

/**
 * The NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpression model module.
 * @module io.generated.model/NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpression
 * @version 1.0.0
 */
class NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpression {
    /**
     * Constructs a new <code>NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpression</code>.
     * @alias module:io.generated.model/NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpression
     * @extends 
     * @implements module:io.generated.model/NetCordaCoreNodeServicesVaultCriteriaExpressionNetCordaCoreSchemasStatePersistableBoolean
     * @implements module:io.generated.model/NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpressionAllOf
     * @implements module:io.generated.model/NetCordaCoreNodeServicesVaultCriteriaExpressionNetCordaCoreSchemasStatePersistableBoolean
     * @implements module:io.generated.model/NetCordaCoreNodeServicesVaultCriteriaExpressionNetCordaCoreSchemasStatePersistableBoolean
     */
    constructor() { 
        NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpressionAllOf.initialize(this);
        NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpression.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
        obj['column'] = column;
        obj['predicate'] = predicate;
    }

    /**
     * Constructs a <code>NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpression</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:io.generated.model/NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpression} obj Optional instance to populate.
     * @return {module:io.generated.model/NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpression} The populated <code>NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpression</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpression();

            ApiClient.constructFromObject(data, obj, '');
            
            NetCordaCoreNodeServicesVaultCriteriaExpressionNetCordaCoreSchemasStatePersistableBoolean.constructFromObject(data, obj);
            NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpressionAllOf.constructFromObject(data, obj);
            NetCordaCoreNodeServicesVaultCriteriaExpressionNetCordaCoreSchemasStatePersistableBoolean.constructFromObject(data, obj);
            NetCordaCoreNodeServicesVaultCriteriaExpressionNetCordaCoreSchemasStatePersistableBoolean.constructFromObject(data, obj);

            if (data.hasOwnProperty('column')) {
                obj['column'] = NetCordaCoreNodeServicesVaultColumnObjectObject.constructFromObject(data['column']);
            }
            if (data.hasOwnProperty('predicate')) {
                obj['predicate'] = ApiClient.convertToType(data['predicate'], Object);
            }
            if (data.hasOwnProperty('groupByColumns')) {
                obj['groupByColumns'] = ApiClient.convertToType(data['groupByColumns'], [NetCordaCoreNodeServicesVaultColumnObjectObject]);
            }
            if (data.hasOwnProperty('orderBy')) {
                obj['orderBy'] = ApiClient.convertToType(data['orderBy'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:io.generated.model/NetCordaCoreNodeServicesVaultColumnObjectObject} column
 */
NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpression.prototype['column'] = undefined;

/**
 * @member {Object} predicate
 */
NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpression.prototype['predicate'] = undefined;

/**
 * @member {Array.<module:io.generated.model/NetCordaCoreNodeServicesVaultColumnObjectObject>} groupByColumns
 */
NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpression.prototype['groupByColumns'] = undefined;

/**
 * @member {module:io.generated.model/NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpression.OrderByEnum} orderBy
 */
NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpression.prototype['orderBy'] = undefined;


// Implement NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpressionAllOf interface:
/**
 * @member {module:io.generated.model/NetCordaCoreNodeServicesVaultColumnObjectObject} column
 */
NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpressionAllOf.prototype['column'] = undefined;
/**
 * @member {Object} predicate
 */
NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpressionAllOf.prototype['predicate'] = undefined;
/**
 * @member {Array.<module:io.generated.model/NetCordaCoreNodeServicesVaultColumnObjectObject>} groupByColumns
 */
NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpressionAllOf.prototype['groupByColumns'] = undefined;
/**
 * @member {module:io.generated.model/NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpressionAllOf.OrderByEnum} orderBy
 */
NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpressionAllOf.prototype['orderBy'] = undefined;



/**
 * Allowed values for the <code>orderBy</code> property.
 * @enum {String}
 * @readonly
 */
NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpression['OrderByEnum'] = {

    /**
     * value: "ASC"
     * @const
     */
    "ASC": "ASC",

    /**
     * value: "DESC"
     * @const
     */
    "DESC": "DESC"
};



export default NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpression;

