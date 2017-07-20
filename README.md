# ember-responsive-tabs

[![Build Status](https://travis-ci.org/rajasegar/ember-responsive-tabs.svg?branch=master)](https://travis-ci.org/rajasegar/ember-responsive-tabs) 
[![npm](https://img.shields.io/npm/dm/ember-responsive-tabs.svg)](https://www.npmjs.com/package/ember-responsive-tabs)
[![npm version](http://img.shields.io/npm/v/ember-responsive-tabs.svg?style=flat)](https://npmjs.org/package/ember-responsive-tabs "View this project on npm")
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![EmberObserver](http://emberobserver.com/badges/ember-responsive-tabs.svg?branch=master)](http://emberobserver.com/addons/ember-responsive-tabs)


Responsive full-width tab component with customizable theme options.
Icons are provisioned by *Font-awesome* you need to add font-awesome to your project.

Kindly refer to the dummy app in tests.

Heavily inspired by this [Codrops article](https://tympanus.net/codrops/2014/03/21/responsive-full-width-tabs/)

## Demo

[Demo](http://present-quiet.surge.sh/)


## Installation

* `ember install ember-responsive-tabs`


## Usage

Example markup:

```hbs
{{#fullwidth-tabs as |tab|}}

  {{#tab.pane title="Home" icon="fa fa-home"}}
    <h1>Home</h1>
    <p>Content for home tab goes here</p>
  {{/tab.pane}}

  {{#tab.pane title="Profile" icon="fa fa-profile"}}
    <h1>Profile</h1>
    <p>Content for profile tab goes here</p>
  {{/tab.pane}}

  {{#tab.pane title="Settings" icon="fa fa-settings"}}
    <h1>Home</h1>
    <p>Content for settings tab goes here</p>
  {{/tab.pane}}

  {{#tab.pane title="Message" icon="fa fa-message"}}
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
