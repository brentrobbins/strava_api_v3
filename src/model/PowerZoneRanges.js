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
    define(['ApiClient', 'model/ZoneRanges'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ZoneRanges'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.PowerZoneRanges = factory(root.StravaApiV3.ApiClient, root.StravaApiV3.ZoneRanges);
  }
}(this, function(ApiClient, ZoneRanges) {
  'use strict';

  /**
   * The PowerZoneRanges model module.
   * @module model/PowerZoneRanges
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>PowerZoneRanges</code>.
   * @alias module:model/PowerZoneRanges
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PowerZoneRanges</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PowerZoneRanges} obj Optional instance to populate.
   * @return {module:model/PowerZoneRanges} The populated <code>PowerZoneRanges</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('zones'))
        obj.zones = ZoneRanges.constructFromObject(data['zones']);
    }
    return obj;
  }

  /**
   * @member {module:model/ZoneRanges} zones
   */
  exports.prototype.zones = undefined;


  return exports;

}));
