import Ember from 'ember';

const {
    computed,
    getWithDefault
} = Ember;

export default function listenToCp(dependentKey, defaultValue = null) {
    return computed(dependentKey, {
        get() {
            return getWithDefault(this, dependentKey, defaultValue);
        },
        set(key, value) {
            return value;
        }
    });
}
