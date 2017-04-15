# ember-responsive-tabs

Responsive full-width tab component with customizable theme options.

Heavily inspired by this Codrops article:
https://tympanus.net/codrops/2014/03/21/responsive-full-width-tabs/

## Installation

* `ember install ember-responsive-tabs`


## Usage

Example markup:

```hbs
{{#fullwidth-tabs as |tab|}}

  {{#tab.pane title="Home" icon="home"}}
    <h1>Home</h1>
    <p>Content for home tab goes here</p>
  {{/tab.pane}}

  {{#tab.pane title="Profile" icon="profile"}}
    <h1>Profile</h1>
    <p>Content for profile tab goes here</p>
  {{/tab.pane}}

  {{#tab.pane title="Settings" icon="settings"}}
    <h1>Home</h1>
    <p>Content for settings tab goes here</p>
  {{/tab.pane}}

  {{#tab.pane title="Message" icon="message"}}
    <h1>Home</h1>
    <p>Content for message tab goes here</p>
  {{/tab.pane}}

{{/fullwidth-tabs}}
```

## Customization - Theming

This tab component can be themed using CSS variables to suit the color of your choice.
Kindly override these variable values in your css file.

For example:

```css
:root {
    --tab-primary: #47a3da;  /* Active Color */
    --tab-secondary: #becbd2; /* Normal Color and Border */
    --tab-hover: #768e9d; /* Hover Color */
}
```

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
Full width responsive tab component as an ember addon
