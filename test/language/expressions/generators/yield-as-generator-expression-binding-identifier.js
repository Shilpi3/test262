// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    `yield` is not a valid BindingIdentifier for GeneratorExpressions.
es6id: 12.1.1
flags: [noStrict]
negative:
  phase: early
  type: SyntaxError
features: [generators]
---*/

throw "Test262: This statement should not be evaluated.";

var g = function* yield() {};
