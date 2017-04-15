import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fullwidth-tabs/tab-pane', 'Integration | Component | fullwidth tabs/tab pane', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fullwidth-tabs/tab-pane}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fullwidth-tabs/tab-pane}}
      template block text
    {{/fullwidth-tabs/tab-pane}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
