import Ember from 'ember';
import layout from 'ember-responsive-tabs/templates/components/fullwidth-tabs';
import ComponentParent from 'ember-responsive-tabs/mixins/component-parent';
import TabPane from 'ember-responsive-tabs/components/fullwidth-tabs/tab-pane';

const {
    computed,
    A,
    getWithDefault
} = Ember;


export default Ember.Component.extend(ComponentParent, {
    isOpen: false,
    layout,
    classNames:['tabs'],
    classNameBindings: [
      'isOpen:tabs-open'
    ],

    childPanes: computed.filter('children', function(view) {
        return view instanceof TabPane;
    }),

    activeId: computed.oneWay('childPanes.firstObject.elementId'),

    isActiveId: computed('activeId', {
        get(){
            return getWithDefault(this, 'activeId', null);
        },
        set(key, value) {
            return value;
        }
    }),

    navItems: computed('childPanes.@each.{elementId,title,icon}', function() {
        let items = A();
        this.get('childPanes').forEach((pane) => {
            let item = pane.getProperties('elementId', 'title', 'icon');
            items.pushObject(item);
        });
        return items;
    }),

    actions: {
        select(id) {
          this.set('isOpen', this.get('isActiveId') === id && !this.get('isOpen'));
          this.set('isActiveId', id);
        }
    }
});
