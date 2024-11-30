# js-simpler

A lightweight and modular JavaScript utility library (supports Typescript type checking)

<br />

## API Jest 测试

<p align="center">
  <img 
    style="width: 99%; margin: 0 auto;" 
    src="https://linpengteng.github.io/resource/js-simpler/test.jpg" 
    alt="Vue Sticker Table"
  >
</p>

<br />

## How to use the API

### - install

  ```bash
  pnpm add js-simpler
  yarn add js-simpler
  ```

### - example

  ```ts
  import js from 'js-simpler'

  js.isNonEmptyArray([]) // false
  js.isEmptyArray([]) // true
  js.isArray([]) // true
  ```

  ```ts
  import { isNonEmptyArray, isEmptyArray, isArray } from 'js-simpler'

  isNonEmptyArray([]) // false
  isEmptyArray([]) // true
  isArray([]) // true
  ```

<br />

## API List
|Api Scope|Api Name|Api Describe|Dev Step|Jest Test|
|:--------|:-------|:-----------|:------:|:-------:|
|Array|isNonEmptyArray|Is it a non-empty array?|`Finish`|`Pass`|
|Array|isEmptyArray|Is it an empty array?|`Finish`|`Pass`|
|Array|isArray|Is it an array?|`Finish`|`Pass`|
|Array|toArray|Convert to an array|`Finish`|`Pass`|
|Array|newArray|Convert to a new array|`Finish`|`Pass`|
|-|-|-|-|-|
|Boolean|isTrue|Is it true?|`Finish`|`Pass`|
|Boolean|isFalse|Is it false?|`Finish`|`Pass`|
|Boolean|isBoolean|Is it a Boolean type?|`Finish`|`Pass`|
|-|-|-|-|-|
|Date|isValidDate|Is it a valid date?|`Finish`|`Pass`|
|Date|isDate|Is it a date (new Date(NaN))?|`Finish`|`Pass`|
|Date|toDate|Convert to a Date object|`Finish`|`Pass`|
|Date|newDate|Convert to a new Date object|`Finish`|`Pass`|
|Date|showDate|Output a date text in a specified format|`Finish`|`Pass`|
|Date|yesterday|Get yesterday's date as Date|`Finish`|`Pass`|
|Date|tomorrow|Get tomorrow's date as Date|`Finish`|`Pass`|
|Date|today|Get today's date as Date|`Finish`|`Pass`|
|-|-|-|-|-|
|Error|isError|Is it an Error?|`Finish`|`Pass`|
|Error|isURIError|Is it a URIError?|`Finish`|`Pass`|
|Error|isTypeError|Is it a TypeError?|`Finish`|`Pass`|
|Error|isEvalError|Is it an EvalError?|`Finish`|`Pass`|
|Error|isRangeError|Is it a RangeError?|`Finish`|`Pass`|
|Error|isSyntaxError|Is it a SyntaxError?|`Finish`|`Pass`|
|Error|isReferenceError|Is it a ReferenceError?|`Finish`|`Pass`|
|Error|isCustomizeError|Is it a custom Error?|`Finish`|`Pass`|
|Error|newError|Instantiate an Error|`Finish`|`Pass`|
|Error|newURIError|Instantiate a URIError|`Finish`|`Pass`|
|Error|newTypeError|Instantiate a TypeError|`Finish`|`Pass`|
|Error|newEvalError|Instantiate an EvalError|`Finish`|`Pass`|
|Error|newRangeError|Instantiate a RangeError|`Finish`|`Pass`|
|Error|newSyntaxError|Instantiate a SyntaxError|`Finish`|`Pass`|
|Error|newReferenceError|Instantiate a ReferenceError|`Finish`|`Pass`|
|Error|newCustomizeError|Instantiate a custom Error|`Finish`|`Pass`|
|-|-|-|-|-|
|Function|isGeneratorFunction|Is it a generator function?|`Finish`|`Pass`|
|Function|isGeneralFunction|Is it a general function?|`Finish`|`Pass`|
|Function|isAsyncFunction|Is it an async function?|`Finish`|`Pass`|
|Function|isFunction|Is it a function?|`Finish`|`Pass`|
|Function|toFunction|Convert to a function|`Finish`|`Pass`|
|-|-|-|-|-|
|Map|isNonEmptyMap|Is it a non-empty Map object?|`Finish`|`Pass`|
|Map|isEmptyMap|Is it an empty Map object?|`Finish`|`Pass`|
|Map|isMap|Is it a Map object?|`Finish`|`Pass`|
|Map|toMap|Convert to a Map object|`Finish`|`Pass`|
|Map|newMap|Convert to a new Map object|`Finish`|`Pass`|
|-|-|-|-|-|
|Number|isNaN|Is it NaN?|`Finish`|`Pass`|
|Number|isNumber|Is it a number?|`Finish`|`Pass`|
|Number|isInteger|Is it a safe integer?|`Finish`|`Pass`|
|Number|isDecimal|Is it a valid number, equivalent to isFiniteNumber|`Finish`|`Pass`|
|Number|isInfinity|Is it an infinite number, including -Infinity|`Finish`|`Pass`|
|Number|isFiniteNumber|Is it a valid number, equivalent to isDecimal|`Finish`|`Pass`|
|Number|toFiniteNumber|Convert to a valid number, equivalent to toDecimal|`Finish`|`Pass`|
|Number|toDecimal|Convert to a valid number, equivalent to toFiniteNumber|`Finish`|`Pass`|
|Number|toInteger|Convert to a safe integer|`Finish`|`Pass`|
|Number|toNumber|Convert to an integer, with optional rounding|`Finish`|`Pass`|
|Number|toFixed|Convert to a string value, typically for rounding|`Finish`|`Pass`|
|-|-|-|-|-|
|Object|isNonEmptyObject|Is it a non-empty plain object?|`Finish`|`Pass`|
|Object|isEmptyObject|Is it an empty plain object?|`Finish`|`Pass`|
|Object|isObject|Is it a plain object?|`Finish`|`Pass`|
|Object|toObject|Convert to a plain object|`Finish`|`Pass`|
|Object|newObject|Convert to a new plain object|`Finish`|`Pass`|
|-|-|-|-|-|
|Promise|isPromise|Is it a Promise object?|`Finish`|`Pass`|
|Promise|toPromise|Convert to a Promise object, executes as a delayed promise when given a value argument|`Finish`|`Pass`|
|Promise|newPromise|Return a new promise with resolve/reject control functions|`Finish`|`Pass`|
|-|-|-|-|-|
|RegExp|isRegExp|Is it a regular expression?|`Finish`|`Pass`|
|RegExp|toRegExp|Convert to a regular expression|`Finish`|`Pass`|
|RegExp|newRegExp|Convert to a new regular expression|`Finish`|`Pass`|
|-|-|-|-|-|
|Set|isNonEmptySet|Is it a non-empty Set object?|`Finish`|`Pass`|
|Set|isEmptySet|Is it an empty Set object?|`Finish`|`Pass`|
|Set|isSet|Is it a Set object?|`Finish`|`Pass`|
|Set|toSet|Convert to a Set object|`Finish`|`Pass`|
|Set|newSet|Convert to a new Set object|`Finish`|`Pass`|
|-|-|-|-|-|
|String|isNonEmptyString|Is it a non-empty string? (trims before checking)|`Finish`|`Pass`|
|String|isEmptyString|Is it an empty string? (trims before checking)|`Finish`|`Pass`|
|String|isString|Is it a string?|`Finish`|`Pass`|
|-|-|-|-|-|
|Symbol|isSymbol|Is it a Symbol object?|`Finish`|`Pass`|
|Symbol|toSymbol|Convert to a Symbol object|`Finish`|`Pass`|
|Symbol|newSymbol|Convert to a new Symbol object|`Finish`|`Pass`|
|Symbol|toSymbolFor|Convert to a Symbol.for object (equivalent to newSymbolFor)|`Finish`|`Pass`|
|Symbol|newSymbolFor|Convert to a Symbol.for object (equivalent to toSymbolFor)|`Finish`|`Pass`|
|-|-|-|-|-|
|WeakMap|isWeakMap|Is it a WeakMap object?|`Finish`|`Pass`|
|WeakMap|toWeakMap|Convert to a WeakMap object|`Finish`|`Pass`|
|WeakMap|newWeakMap|Convert to a new WeakMap object|`Finish`|`Pass`|
|-|-|-|-|-|
|WeakSet|isWeakSet|Is it a WeakSet object?|`Finish`|`Pass`|
|WeakSet|toWeakSet|Convert to a WeakSet object|`Finish`|`Pass`|
|WeakSet|newWeakSet|Convert to a new WeakSet object|`Finish`|`Pass`|
|-|-|-|-|-|
|Animater|debounce|Debounce function|`Finish`|`Not Tested`|
|Animater|throttle|Throttle function, a variant of debounce function|`Finish`|`Not Tested`|
|-|-|-|-|-|
|Currylize|curry|Currying function, supports TypeScript type hints when function parameters <= 5|`Finish`|`Pass`|
|-|-|-|-|-|
|Formater|lowerCase|Convert to lowercase string|`Finish`|`Pass`|
|Formater|upperCase|Convert to uppercase string|`Finish`|`Pass`|
|Formater|camelCase|Convert to camelCase string|`Finish`|`Pass`|
|Formater|underCase|Convert to snake_case string|`Finish`|`Pass`|
|Formater|hyphenCase|Convert to hyphen-case string|`Finish`|`Pass`|
|-|-|-|-|-|
|Generalize|omit|Clone an object and omit fields in the omits option, a variant of the clone function|`Finish`|`Pass`|
|Generalize|pick|Clone an object and keep only fields in the picks option, opposite of omit|`Finish`|`Pass`|
|Generalize|equal|Check if two values are equal, set third argument to true for deep comparison|`Finish`|`Pass`|
|Generalize|clone|Clone an object, default is shallow copy, set second argument to true for deep cloning|`Finish`|`Pass`|
|Generalize|assign|Merge multiple objects into one, like `Object.assign`, set last argument to true for deep assign|`Finish`|`Pass`|
|Generalize|deepAssign|Deep version of the assign function|`Finish`|`Pass`|
|Generalize|deepClone|Deep version of the clone function|`Finish`|`Pass`|
|Generalize|deepEqual|Deep version of the equal function|`Finish`|`Pass`|
|-|-|-|-|-|
|Nullable|isNull|Check if it is null|`Finish`|`Pass`|
|Nullable|isUndef|Check if it is undefined|`Finish`|`Pass`|
|Nullable|isNullable|Check if it is null or undefined|`Finish`|`Pass`|
|-|-|-|-|-|
|Uniquer|uniquer|Generate a UUID or a unique ID in a specified format|`Finish`|`Pass`|
|-|-|-|-|-|
|Tween|*|Animation algorithm, [`link`](https://github.com/linpengteng/js-simpler/blob/main/src/~Tween.ts)|`Finish`|`Not Tested`|

<br />

# 许可证
> MIT
