// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.getuint8
es6id: 24.2.4.10
description: >
  DataView.prototype.getUint8.name is "getUint8".
info: >
  DataView.prototype.getUint8 ( byteOffset )

  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, that is not
    identified as an anonymous function has a name property whose value
    is a String.

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

assert.sameValue(DataView.prototype.getUint8.name, "getUint8");

verifyNotEnumerable(DataView.prototype.getUint8, "name");
verifyNotWritable(DataView.prototype.getUint8, "name");
verifyConfigurable(DataView.prototype.getUint8, "name");
