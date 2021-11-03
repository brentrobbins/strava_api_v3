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
    define(['ApiClient', 'model/PolylineMap', 'model/SummaryAthlete', 'model/SummarySegment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PolylineMap'), require('./SummaryAthlete'), require('./SummarySegment'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.Route = factory(root.StravaApiV3.ApiClient, root.StravaApiV3.PolylineMap, root.StravaApiV3.SummaryAthlete, root.StravaApiV3.SummarySegment);
  }
}(this, function(ApiClient, PolylineMap, SummaryAthlete, SummarySegment) {
  'use strict';

  /**
   * The Route model module.
   * @module model/Route
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Route</code>.
   * @alias module:model/Route
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Route</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Route} obj Optional instance to populate.
   * @return {module:model/Route} The populated <code>Route</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('athlete'))
        obj.athlete = SummaryAthlete.constructFromObject(data['athlete']);
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('distance'))
        obj.distance = ApiClient.convertToType(data['distance'], 'Number');
      if (data.hasOwnProperty('elevation_gain'))
        obj.elevationGain = ApiClient.convertToType(data['elevation_gain'], 'Number');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('id_str'))
        obj.idStr = ApiClient.convertToType(data['id_str'], 'String');
      if (data.hasOwnProperty('map'))
        obj.map = PolylineMap.constructFromObject(data['map']);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('private'))
        obj._private = ApiClient.convertToType(data['private'], 'Boolean');
      if (data.hasOwnProperty('starred'))
        obj.starred = ApiClient.convertToType(data['starred'], 'Boolean');
      if (data.hasOwnProperty('timestamp'))
        obj.timestamp = ApiClient.convertToType(data['timestamp'], 'Number');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'Number');
      if (data.hasOwnProperty('sub_type'))
        obj.subType = ApiClient.convertToType(data['sub_type'], 'Number');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'Date');
      if (data.hasOwnProperty('estimated_moving_time'))
        obj.estimatedMovingTime = ApiClient.convertToType(data['estimated_moving_time'], 'Number');
      if (data.hasOwnProperty('segments'))
        obj.segments = ApiClient.convertToType(data['segments'], [SummarySegment]);
    }
    return obj;
  }

  /**
   * @member {module:model/SummaryAthlete} athlete
   */
  exports.prototype.athlete = undefined;

  /**
   * The description of the route
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * The route's distance, in meters
   * @member {Number} distance
   */
  exports.prototype.distance = undefined;

  /**
   * The route's elevation gain.
   * @member {Number} elevationGain
   */
  exports.prototype.elevationGain = undefined;

  /**
   * The unique identifier of this route
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * The unique identifier of the route in string format
   * @member {String} idStr
   */
  exports.prototype.idStr = undefined;

  /**
   * @member {module:model/PolylineMap} map
   */
  exports.prototype.map = undefined;

  /**
   * The name of this route
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Whether this route is private
   * @member {Boolean} _private
   */
  exports.prototype._private = undefined;

  /**
   * Whether this route is starred by the logged-in athlete
   * @member {Boolean} starred
   */
  exports.prototype.starred = undefined;

  /**
   * An epoch timestamp of when the route was created
   * @member {Number} timestamp
   */
  exports.prototype.timestamp = undefined;

  /**
   * This route's type (1 for ride, 2 for runs)
   * @member {Number} type
   */
  exports.prototype.type = undefined;

  /**
   * This route's sub-type (1 for road, 2 for mountain bike, 3 for cross, 4 for trail, 5 for mixed)
   * @member {Number} subType
   */
  exports.prototype.subType = undefined;

  /**
   * The time at which the route was created
   * @member {Date} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * The time at which the route was last updated
   * @member {Date} updatedAt
   */
  exports.prototype.updatedAt = undefined;

  /**
   * Estimated time in seconds for the authenticated athlete to complete route
   * @member {Number} estimatedMovingTime
   */
  exports.prototype.estimatedMovingTime = undefined;

  /**
   * The segments traversed by this route
   * @member {Array.<module:model/SummarySegment>} segments
   */
  exports.prototype.segments = undefined;


  return exports;

}));
