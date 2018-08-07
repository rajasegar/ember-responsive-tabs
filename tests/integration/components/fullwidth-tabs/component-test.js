import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fullwidth-tabs', 'Integration | Component | fullwidth tabs', {
  integration: true
});

function assertActiveTab(assert, tabIndex, active = true) {
  if (this.$('nav > ul >  li').length > 0) {
    assert.equal(this.$(`nav > ul >  li:nth-child(${tabIndex + 1})`)[0].classList.contains('tab-current'), active, active ? 'tab is active' : 'tab is inactive');
  }
  assert.equal(this.$(`.content section:nth-child(${tabIndex + 1})`)[0].classList.contains('content-current'), active, active ? 'tab pane is active' : 'tab pane is inactive');
}

test('it renders', async function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  await this.render(hbs`{{#fullwidth-tabs as |tab|}}
  {{#tab.pane elementId="tabHome" title="Home"}}
    <h1>Home</h1>
  {{/tab.pane}}

  {{#tab.pane elementId="tabProfile" title="Profile"}}
    <h1>Profile</h1>
  {{/tab.pane}}
  <div id="activeId">{{tab.activeId}}</div>
  <div id="switch" onclick={{action tab.select "tabProfile"}}></div>
{{/fullwidth-tabs}}
`);

  assert.equal(this.$('section').length, 2, 'yields tab pane component');

  this.$('#switch').click();

  assertActiveTab.call(this, assert, 0, false);
  assertActiveTab.call(this, assert, 1, true);
  assert.equal(this.$('#activeId').text().trim(), 'tabProfile', 'yields activeId');

});

test('it generates tab navigation', async function(assert) {
  await this.render(hbs`{{#fullwidth-tabs as |tab|}}
  {{#tab.pane title="Home"}}
    <h1>Home</h1>
  {{/tab.pane}}

  {{#tab.pane title="Profile"}}
    <h1>Profile</h1>
  {{/tab.pane}}
{{/fullwidth-tabs}}
`);

  assert.equal(this.$('nav').length, 1, 'has tabs navigation');
  assert.equal(this.$('nav > ul >  li').length, 2, 'has tabs navigation items');
  assert.equal(this.$('nav > ul >  li:nth-child(1) > a > span').text().trim(), 'Home', 'navigation item shows pane title');
  assert.equal(this.$('nav > ul >  li:nth-child(2) > a > span').text().trim(), 'Profile', 'navigation item shows pane title');

});

test('first tab is active by default', function(assert) {
  this.render(hbs`{{#fullwidth-tabs as |tab|}}
  {{#tab.pane title="Home"}}
    <h1>Home</h1>
  {{/tab.pane}}

  {{#tab.pane title="Profile"}}
    <h1>Profile</h1>
  {{/tab.pane}}
{{/fullwidth-tabs}}
`);

  assertActiveTab.call(this, assert, 0, true);
  assertActiveTab.call(this, assert, 1, false);
});

