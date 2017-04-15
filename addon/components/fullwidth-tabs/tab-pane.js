import Ember from 'ember';
import layout from 'ember-responsive-tabs/templates/components/fullwidth-tabs/tab-pane';
import ComponentChild from 'ember-responsive-tabs/mixins/component-child';

const {
    computed,
    observer,
    run: { scheduleOnce }
} = Ember;


export default Ember.Component.extend(ComponentChild, {
    layout,
    classNameBindings: ['contentCurrent'],

    tagName: 'section',

    activeId: null,

    isActive: computed('activeId', 'elementId', function() {
        return this.get('activeId') === this.get('elementId');
    }).readOnly(),


    contentCurrent: true,

    show() {
        this.set('contentCurrent', true);
    },

    hide() {
        this.set('contentCurrent', false);
    },

    _showHide: observer('isActive', function() {
        if(this.get('isActive')) {
            this.show();
        } else {
            this.hide();
        }
    }),

    init() {
        this._super(...arguments);

        scheduleOnce('afterRender', this, function() {
            this.set('contentCurrent', this.get('isActive'));
        });
    }

});
