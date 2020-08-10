/**
 * The state of a BoundingSphere computation being performed by a {@link Visualizer}.
 * @enum {Number}
 * @private
 */
var BoundingSphereState = {
  /**
   * The BoundingSphere has been computed.
   * @type BoundingSphereState
   * @constant
   */
  DONE: 0,
  /**
   * The BoundingSphere is still being computed.
   * @type BoundingSphereState
   * @constant
   */
  PENDING: 1,
  /**
   * The BoundingSphere does not exist.
   * @type BoundingSphereState
   * @constant
   */
  FAILED: 2,
  /**
   * BoundingSphere exists, but distance display condition failed
   * @type BoundingSphereState
   * @constant
   */
  DISTANCE_DISPLAY_CONDITION_FAILED: 3,
};
export default Object.freeze(BoundingSphereState);
