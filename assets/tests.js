'use strict';

define('dummy/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint.\n');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    _ember.default.run(application, 'destroy');
  }
});
define('dummy/tests/helpers/destroy-app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - helpers/destroy-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint.\n');
  });
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = _ember.default.RSVP.resolve;
});
define('dummy/tests/helpers/module-for-acceptance.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - helpers/module-for-acceptance.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint.\n');
  });
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('dummy/tests/helpers/resolver.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - helpers/resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint.\n');
  });
});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, _ember, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = _ember.default.merge({}, _environment.default.APP);
    attributes = _ember.default.merge(attributes, attrs); // use defaults, but you can override;

    return _ember.default.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('dummy/tests/helpers/start-app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - helpers/start-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint.\n');
  });
});
define('dummy/tests/integration/components/fullwidth-tabs/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('fullwidth-tabs', 'Integration | Component | fullwidth tabs', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "rgrTTeW+",
      "block": "{\"statements\":[[1,[26,[\"fullwidth-tabs\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "WLK/GxFl",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"fullwidth-tabs\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/fullwidth-tabs/component-test.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - integration/components/fullwidth-tabs/component-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/fullwidth-tabs/component-test.js should pass ESLint.\n');
  });
});
define('dummy/tests/integration/components/fullwidth-tabs/tab-pane/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('fullwidth-tabs/tab-pane', 'Integration | Component | fullwidth tabs/tab pane', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "nuZPK3aO",
      "block": "{\"statements\":[[1,[26,[\"fullwidth-tabs/tab-pane\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "p/4VIyg5",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"fullwidth-tabs/tab-pane\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/fullwidth-tabs/tab-pane/component-test.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - integration/components/fullwidth-tabs/tab-pane/component-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/fullwidth-tabs/tab-pane/component-test.js should pass ESLint.\n');
  });
});
define('dummy/tests/integration/helpers/eq-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('eq', 'helper:eq', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "1SYOrDlN",
      "block": "{\"statements\":[[1,[33,[\"eq\"],[[28,[\"inputValue\"]]],null],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});
define('dummy/tests/integration/helpers/eq-test.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - integration/helpers/eq-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/eq-test.js should pass ESLint.\n');
  });
});
define('dummy/tests/resolver.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint.\n');
  });
});
define('dummy/tests/router.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - router.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint.\n');
  });
});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('dummy/tests/test-helper.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - test-helper.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint.\n');
  });
});
define('dummy/tests/unit/mixins/component-child-test', ['ember', 'ember-responsive-tabs/mixins/component-child', 'qunit'], function (_ember, _componentChild, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Mixin | component child');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var ComponentChildObject = _ember.default.Object.extend(_componentChild.default);
    var subject = ComponentChildObject.create();
    assert.ok(subject);
  });
});
define('dummy/tests/unit/mixins/component-child-test.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - unit/mixins/component-child-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/component-child-test.js should pass ESLint.\n');
  });
});
define('dummy/tests/unit/mixins/component-parent-test', ['ember', 'ember-responsive-tabs/mixins/component-parent', 'qunit'], function (_ember, _componentParent, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Mixin | component parent');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var ComponentParentObject = _ember.default.Object.extend(_componentParent.default);
    var subject = ComponentParentObject.create();
    assert.ok(subject);
  });
});
define('dummy/tests/unit/mixins/component-parent-test.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - unit/mixins/component-parent-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/component-parent-test.js should pass ESLint.\n');
  });
});
define('dummy/tests/unit/utils/listen-to-cp-test', ['dummy/utils/listen-to-cp', 'qunit'], function (_listenToCp, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Utility | listen to cp');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _listenToCp.default)();
    assert.ok(result);
  });
});
define('dummy/tests/unit/utils/listen-to-cp-test.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint - unit/utils/listen-to-cp-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/listen-to-cp-test.js should pass ESLint.\n');
  });
});
require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
