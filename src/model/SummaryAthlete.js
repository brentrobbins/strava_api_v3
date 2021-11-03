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
    define(['ApiClient', 'model/MetaAthlete'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MetaAthlete'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.SummaryAthlete = factory(root.StravaApiV3.ApiClient, root.StravaApiV3.MetaAthlete);
  }
}(this, function(ApiClient, MetaAthlete) {
  'use strict';

  /**
   * The SummaryAthlete model module.
   * @module model/SummaryAthlete
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SummaryAthlete</code>.
   * @alias module:model/SummaryAthlete
   * @class
   * @extends module:model/MetaAthlete
   */
  var exports = function() {
    MetaAthlete.call(this);
  };

  /**
   * Constructs a <code>SummaryAthlete</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SummaryAthlete} obj Optional instance to populate.
   * @return {module:model/SummaryAthlete} The populated <code>SummaryAthlete</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      MetaAthlete.constructFromObject(data, obj);
      if (data.hasOwnProperty('resource_state'))
        obj.resourceState = ApiClient.convertToType(data['resource_state'], 'Number');
      if (data.hasOwnProperty('firstname'))
        obj.firstname = ApiClient.convertToType(data['firstname'], 'String');
      if (data.hasOwnProperty('lastname'))
        obj.lastname = ApiClient.convertToType(data['lastname'], 'String');
      if (data.hasOwnProperty('profile_medium'))
        obj.profileMedium = ApiClient.convertToType(data['profile_medium'], 'String');
      if (data.hasOwnProperty('profile'))
        obj.profile = ApiClient.convertToType(data['profile'], 'String');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('country'))
        obj.country = ApiClient.convertToType(data['country'], 'String');
      if (data.hasOwnProperty('sex'))
        obj.sex = ApiClient.convertToType(data['sex'], 'String');
      if (data.hasOwnProperty('premium'))
        obj.premium = ApiClient.convertToType(data['premium'], 'Boolean');
      if (data.hasOwnProperty('summit'))
        obj.summit = ApiClient.convertToType(data['summit'], 'Boolean');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'Date');
    }
    return obj;
  }

  exports.prototype = Object.create(MetaAthlete.prototype);
  exports.prototype.constructor = exports;
  /**
   * Resource state, indicates level of detail. Possible values: 1 -> \"meta\", 2 -> \"summary\", 3 -> \"detail\"
   * @member {Number} resourceState
   */
  exports.prototype.resourceState = undefined;

  /**
   * The athlete's first name.
   * @member {String} firstname
   */
  exports.prototype.firstname = undefined;

  /**
   * The athlete's last name.
   * @member {String} lastname
   */
  exports.prototype.lastname = undefined;

  /**
   * URL to a 62x62 pixel profile picture.
   * @member {String} profileMedium
   */
  exports.prototype.profileMedium = undefined;

  /**
   * URL to a 124x124 pixel profile picture.
   * @member {String} profile
   */
  exports.prototype.profile = undefined;

  /**
   * The athlete's city.
   * @member {String} city
   */
  exports.prototype.city = undefined;

  /**
   * The athlete's state or geographical region.
   * @member {String} state
   */
  exports.prototype.state = undefined;

  /**
   * The athlete's country.
   * @member {String} country
   */
  exports.prototype.country = undefined;

  /**
   * The athlete's sex.
   * @member {module:model/SummaryAthlete.SexEnum} sex
   */
  exports.prototype.sex = undefined;

  /**
   * Deprecated.  Use summit field instead. Whether the athlete has any Summit subscription.
   * @member {Boolean} premium
   */
  exports.prototype.premium = undefined;

  /**
   * Whether the athlete has any Summit subscription.
   * @member {Boolean} summit
   */
  exports.prototype.summit = undefined;

  /**
   * The time at which the athlete was created.
   * @member {Date} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * The time at which the athlete was last updated.
   * @member {Date} updatedAt
   */
  exports.prototype.updatedAt = undefined;



  /**
   * Allowed values for the <code>sex</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SexEnum = {
    /**
     * value: "M"
     * @const
     */
    M: "M",

    /**
     * value: "F"
     * @const
     */
    F: "F"
  };

  return exports;

}));