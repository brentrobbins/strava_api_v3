/*
 * Strava API v3
 * The [Swagger Playground](https://developers.strava.com/playground) is the easiest way to familiarize yourself with the Strava API by submitting HTTP requests and observing the responses before you write any client code. It will show what a response will look like with different endpoints depending on the authorization scope you receive from your athletes. To use the Playground, go to https://www.strava.com/settings/api and change your “Authorization Callback Domain” to developers.strava.com. Please note, we only support Swagger 2.0. There is a known issue where you can only select one scope at a time. For more information, please check the section “client code” at https://developers.strava.com/docs.
 *
 * OpenAPI spec version: 3.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.23
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.SummaryGear = factory(root.StravaApiV3.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SummaryGear model module.
   * @module model/SummaryGear
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SummaryGear</code>.
   * @alias module:model/SummaryGear
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SummaryGear</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SummaryGear} obj Optional instance to populate.
   * @return {module:model/SummaryGear} The populated <code>SummaryGear</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('resource_state'))
        obj.resourceState = ApiClient.convertToType(data['resource_state'], 'Number');
      if (data.hasOwnProperty('primary'))
        obj.primary = ApiClient.convertToType(data['primary'], 'Boolean');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('distance'))
        obj.distance = ApiClient.convertToType(data['distance'], 'Number');
    }
    return obj;
  }

  /**
   * The gear's unique identifier.
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * Resource state, indicates level of detail. Possible values: 2 -> \"summary\", 3 -> \"detail\"
   * @member {Number} resourceState
   */
  exports.prototype.resourceState = undefined;

  /**
   * Whether this gear's is the owner's default one.
   * @member {Boolean} primary
   */
  exports.prototype.primary = undefined;

  /**
   * The gear's name.
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * The distance logged with this gear.
   * @member {Number} distance
   */
  exports.prototype.distance = undefined;


  return exports;

}));
