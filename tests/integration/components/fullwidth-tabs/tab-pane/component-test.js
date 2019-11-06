import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | fullwidth tabs/tab pane', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    await render(hbs`{{fullwidth-tabs/tab-pane}}`);

    assert.equal(find('div').textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#fullwidth-tabs/tab-pane}}
        template block text
      {{/fullwidth-tabs/tab-pane}}
    `);

    assert.equal(find('div').textContent.trim(), 'template block text');
  });
});
