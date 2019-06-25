import { module, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | fullwidth tabs/tab pane', function(hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{fullwidth-tabs/tab-pane}}`);

    assert.equal(this.element.querySelector('div').textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#fullwidth-tabs/tab-pane}}
        template block text
      {{/fullwidth-tabs/tab-pane}}
    `);

    assert.equal(this.element.querySelector('div').textContent.text().trim(), 'template block text');
  });
});
