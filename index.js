/* eslint-env node */
'use strict';

module.exports = {
    name: 'ember-responsive-tabs',
    included: function(app) {
        // Import our css  file
        app.import('app/styles/app.css');

        this._super.included.call(this, app);
    }
};
