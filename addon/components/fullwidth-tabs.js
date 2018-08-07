import { filter, oneWay } from '@ember/object/computed';
import Component from '@ember/component';
import { A } from '@ember/array';
import { getWithDefault, computed } from '@ember/object';
import layout from 'ember-responsive-tabs/templates/components/fullwidth-tabs';
import ComponentParent from 'ember-responsive-tabs/mixins/component-parent';
import TabPane from 'ember-responsive-tabs/components/fullwidth-tabs/tab-pane';


export default Component.extend(ComponentParent, {

    layout,
    isOpen: false,
    classNames:['tabs'],
    classNameBindings: [
      'isOpen:tabs-open'
    ],

    childPanes: filter('children', function(view) {
        return view instanceof TabPane;
    }),

    activeId: oneWay('childPanes.firstObject.elementId'),

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
