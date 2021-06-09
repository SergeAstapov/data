import MutableArray from '@ember/array/mutable';
import EmberObject from '@ember/object';

type ComputedProperty<T> = import('@ember/object/computed').default<T>;

interface EmberArrayLike<T> {
  length: number | ComputedProperty<number>;
  objectAt(idx: number): T | undefined;
}

/**
 * An ArrayProxy wraps any other object that is a native or Ember `Array`
 * (checked with [`Ember.isArray`](https://api.emberjs.com/ember/release/functions/@ember%2Farray/isArray)),
 * forwarding all requests. This makes it very useful for a number of
 * binding use cases or other cases where being able to swap out the
 * underlying array is useful.
 *
 * NOTE: Attempting to mutate the underlying content of an object that
 * is not a `MutableArray` (e.g. a native Javascript Array) may not
 * behave as expected. [`Ember.A`](https://api.emberjs.com/ember/release/functions/@ember%2Farray/A)
 * may be used in this case.
 */
interface ArrayProxy<ContentType, MaterializedType = ContentType> extends EmberObject, MutableArray<MaterializedType> {}
declare class ArrayProxy<ContentType, MaterializedType = ContentType> extends EmberObject {
  content: NativeArray<ContentType> | EmberArrayLike<ContentType>;

  /**
   * Should actually retrieve the object at the specified index from the
   * content. You can override this method in subclasses to transform the
   * content item to something new.
   */
  objectAtContent(idx: number): MaterializedType | undefined;
}
export default ArrayProxy;