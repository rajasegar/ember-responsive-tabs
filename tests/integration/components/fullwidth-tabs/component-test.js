import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fullwidth-tabs', 'Integration | Component | fullwidth tabs', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fullwidth-tabs}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fullwidth-tabs}}
      template block text
    {{/fullwidth-tabs}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
