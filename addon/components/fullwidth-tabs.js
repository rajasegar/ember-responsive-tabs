import Ember from 'ember';
import layout from 'ember-responsive-tabs/templates/components/fullwidth-tabs';
import ComponentParent from 'ember-responsive-tabs/mixins/component-parent';
import TabPane from 'ember-responsive-tabs/components/fullwidth-tabs/tab-pane';
import listenTo from 'ember-responsive-tabs/utils/listen-to-cp';

const {
    computed,
    A
} = Ember;


export default Ember.Component.extend(ComponentParent, {
    layout,
    classNames:['tabs'],

    childPanes: computed.filter('children', function(view) {
        return view instanceof TabPane;
    }),

    activeId: computed.oneWay('childPanes.firstObject.elementId'),

    isActiveId: listenTo('activeId'),

    navItems: computed('childPanes.@each.{elementId,title,icon}', function() {
        let items = A();
        this.get('childPanes').forEach((pane) => {
            let item = pane.getProperties('elementId', 'title', 'icon');
            items.push(item);
        });
        return items;
    }),

    actions: {
        select(id) {
            this.set('isActiveId', id);
        }
    }
});
