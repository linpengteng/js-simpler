# js-simpler

一个轻量级且模块化的JavaScript实用工具库 (支持 Typescript 类型校验/提示)

<br />

## 如何使用

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

## API 列表
|Api Scope|Api Name|Api Describe|Dev Step|Jest Test|
|:--------|:-------|:-----------|:------:|:-------:|
|Array|isNonEmptyArray|是否是 一个非空数组|`Finish`|`Pass`|
|Array|isEmptyArray|是否是 一个空数组|`Finish`|`Pass`|
|Array|isArray|是否是 一个数组|`Finish`|`Pass`|
|Array|toArray|转换成 数组|`Finish`|`Pass`|
|Array|newArray|转换成 新数组|`Finish`|`Pass`|
|-|-|-|-|-|
|Boolean|isTrue|是否是 true|`Finish`|`Pass`|
|Boolean|isFalse|是否是 false|`Finish`|`Pass`|
|Boolean|isBoolean|是否是 Boolean 类型|`Finish`|`Pass`|
|-|-|-|-|-|
|Date|isValidDate|是否是 一个合法日期|`Finish`|`Pass`|
|Date|isDate|是否是 一个日期 (new Date(NaN))|`Finish`|`Pass`|
|Date|toDate|转换成 日期 Date|`Finish`|`Pass`|
|Date|newDate|转换成 新日期 Date|`Finish`|`Pass`|
|Date|showDate|输出 指定格式的日期文本|`Finish`|`Pass`|
|Date|yesterday|获取 昨天日期 Date|`Finish`|`Pass`|
|Date|tomorrow|获取 今天日期 Date|`Finish`|`Pass`|
|Date|today|获取 明天日期 Date|`Finish`|`Pass`|
|-|-|-|-|-|
|Error|isError|是否是 一个Error|`Finish`|`Pass`|
|Error|isURIError|是否是 一个URIError|`Finish`|`Pass`|
|Error|isTypeError|是否是 一个TypeError|`Finish`|`Pass`|
|Error|isEvalError|是否是 一个EvalError|`Finish`|`Pass`|
|Error|isRangeError|是否是 一个RangeError|`Finish`|`Pass`|
|Error|isSyntaxError|是否是 一个SyntaxError|`Finish`|`Pass`|
|Error|isReferenceError|是否是 一个ReferenceError|`Finish`|`Pass`|
|Error|isCustomizeError|是否是 一个自定义的Error|`Finish`|`Pass`|
|Error|newError|实例化 一个Error|`Finish`|`Pass`|
|Error|newURIError|实例化 一个URIError|`Finish`|`Pass`|
|Error|newTypeError|实例化 一个TypeError|`Finish`|`Pass`|
|Error|newEvalError|实例化 一个EvalError|`Finish`|`Pass`|
|Error|newRangeError|实例化 一个RangeError|`Finish`|`Pass`|
|Error|newSyntaxError|实例化 一个SyntaxError|`Finish`|`Pass`|
|Error|newReferenceError|实例化 一个ReferenceError|`Finish`|`Pass`|
|Error|newCustomizeError|实例化 一个自定义的Error|`Finish`|`Pass`|
|-|-|-|-|-|
|Function|isGeneratorFunction|是否是 一个生成器函数|`Finish`|`Pass`|
|Function|isGeneralFunction|是否是 一个普通函数|`Finish`|`Pass`|
|Function|isAsyncFunction|是否是 一个异步函数|`Finish`|`Pass`|
|Function|isFunction|是否是 一个函数|`Finish`|`Pass`|
|Function|toFunction|转换成 函数|`Finish`|`Pass`|
|-|-|-|-|-|
|Map|isNonEmptyMap|是否是 一个非空的Map对象|`Finish`|`Pass`|
|Map|isEmptyMap|是否是 一个空的Map对象|`Finish`|`Pass`|
|Map|isMap|是否是 一个Map对象|`Finish`|`Pass`|
|Map|toMap|转换成 Map对象|`Finish`|`Pass`|
|Map|newMap|转换成 新的Map对象|`Finish`|`Pass`|
|-|-|-|-|-|
|Number|isNaN|是否是 NaN|`Finish`|`Pass`|
|Number|isNumber|是否是 一个数值|`Finish`|`Pass`|
|Number|isInteger|是否是 一个安全的整数值|`Finish`|`Pass`|
|Number|isDecimal|是否是 一个有效的数值, 等同于 isFiniteNumber|`Finish`|`Pass`|
|Number|isInfinity|是否是 一个无穷的数值, 包括 -Infinity|`Finish`|`Pass`|
|Number|isFiniteNumber|是否是 一个有效的数值, 等同于 isDecimal|`Finish`|`Pass`|
|Number|toFiniteNumber|转换成 有效的数值, 等同于 toDecimal|`Finish`|`Pass`|
|Number|toDecimal|转换成 有效的数值, 等同于 toFiniteNumber|`Finish`|`Pass`|
|Number|toInteger|转换成 安全的整数值|`Finish`|`Pass`|
|Number|toNumber|转换成 整数值, 设置第二个参数可进行四舍五入|`Finish`|`Pass`|
|Number|toFixed|转换成 String类型的数值, 通常用于四舍五入处理|`Finish`|`Pass`|
|-|-|-|-|-|
|Object|isNonEmptyObject|是否是 一个非空的纯对象|`Finish`|`Pass`|
|Object|isEmptyObject|是否是 一个空的纯对象|`Finish`|`Pass`|
|Object|isObject|是否是 一个纯对象|`Finish`|`Pass`|
|Object|toObject|转换成 纯对象|`Finish`|`Pass`|
|Object|newObject|转换成 新的纯对象|`Finish`|`Pass`|
|-|-|-|-|-|
|Promise|isPromise|是否是 一个Promise对象|`Finish`|`Pass`|
|Promise|toPromise|转换成 Promise对象, 当接受数值参数时, 则是一个延时执行的promise|`Finish`|`Pass`|
|Promise|newPromise|返回 新的promise和resolve、reject控制函数|`Finish`|`Pass`|
|-|-|-|-|-|
|RegExp|isRegExp|是否是 一个正则表达式|`Finish`|`Pass`|
|RegExp|toRegExp|转换成 正则表达式|`Finish`|`Pass`|
|RegExp|newRegExp|转换成 新的正则表达式|`Finish`|`Pass`|
|-|-|-|-|-|
|Set|isNonEmptySet|是否是 一个非空的Set对象|`Finish`|`Pass`|
|Set|isEmptySet|是否是 一个空的Set对象|`Finish`|`Pass`|
|Set|isSet|是否是 一个Set对象|`Finish`|`Pass`|
|Set|toSet|转换成 Set对象|`Finish`|`Pass`|
|Set|newSet|转换成 新的Set对象|`Finish`|`Pass`|
|-|-|-|-|-|
|String|isNonEmptyString|是否是 一个非空的字符串类型, 对于字符串，它会先trim(), 再判断是否非空|`Finish`|`Pass`|
|String|isEmptyString|是否是 一个空的字符串类型, 对于字符串，它会先trim(), 再判断是否空值|`Finish`|`Pass`|
|String|isString|是否是 一个字符串类型|`Finish`|`Pass`|
|-|-|-|-|-|
|Symbol|isSymbol|是否是 一个Symbol对象|`Finish`|`Pass`|
|Symbol|toSymbol|转换成 Symbol对象|`Finish`|`Pass`|
|Symbol|newSymbol|转换成 新的Symbol对象|`Finish`|`Pass`|
|Symbol|toSymbolFor|转换成 Symbol.for对象, 由于Symbol.for特性, 等同于 newSymbolFor|`Finish`|`Pass`|
|Symbol|newSymbolFor|转换成 Symbol.for对象, 由于Symbol.for特性, 等同于 toSymbolFor|`Finish`|`Pass`|
|-|-|-|-|-|
|WeakMap|isWeakMap|是否是 一个WeakMap对象|`Finish`|`Pass`|
|WeakMap|toWeakMap|转换成 WeakMap对象|`Finish`|`Pass`|
|WeakMap|newWeakMap|转换成 新的WeakMap对象|`Finish`|`Pass`|
|-|-|-|-|-|
|WeakSet|isWeakSet|是否是 一个WeakSet对象|`Finish`|`Pass`|
|WeakSet|toWeakSet|转换成 WeakSet对象|`Finish`|`Pass`|
|WeakSet|newWeakSet|转换成 新的WeakSet对象|`Finish`|`Pass`|
|-|-|-|-|-|
|Animater|debounce|防抖动函数|`Finish`|`Not Tested`|
|Animater|throttle|节流函数, debounce函数的变种|`Finish`|`Not Tested`|
|-|-|-|-|-|
|Currylize|curry|柯里化 新的函数, 函数参数数量 <=5 个时, 支持 typescript 类型提示|`Finish`|`Pass`|
|-|-|-|-|-|
|Formater|lowerCase|转换成 小写字符串|`Finish`|`Pass`|
|Formater|upperCase|转换成 大写字符串|`Finish`|`Pass`|
|Formater|camelCase|转换成 驼峰式字符串|`Finish`|`Pass`|
|Formater|underCase|转换成 下划线字符串|`Finish`|`Pass`|
|Formater|hyphenCase|转换成 连字符字符串|`Finish`|`Pass`|
|-|-|-|-|-|
|Generalize|omit|克隆某个对象, 并剔除 omits 选项中的字段, 属于clone函数变种|`Finish`|`Pass`|
|Generalize|pick|克隆某个对象, 仅保留在 picks 选项中的字段, 与omit函数相反|`Finish`|`Pass`|
|Generalize|equal|用于比两个值是否相等, 如果两个对象想深度比对, 可设置第三个参数为true|`Finish`|`Pass`|
|Generalize|clone|克隆某个对象, 默认是浅拷贝, 深度克隆可设置第二个参数为true|`Finish`|`Pass`|
|Generalize|assign|合并多个对象到某一对象, 类似Object.assgin, 设置最后一个参数为true, 即可深度assign|`Finish`|`Pass`|
|Generalize|deepAssign|assign 函数的deep版本|`Finish`|`Pass`|
|Generalize|deepClone|clone 函数的deep版本|`Finish`|`Pass`|
|Generalize|deepEqual|equal 函数的deep版本|`Finish`|`Pass`|
|-|-|-|-|-|
|Nullable|isNull|是否是 null|`Finish`|`Pass`|
|Nullable|isUndef|是否是 undefined|`Finish`|`Pass`|
|Nullable|isNullable|是否是 null或undefined|`Finish`|`Pass`|
|-|-|-|-|-|
|Uniquer|uniquer|生成 uuid或指定格式的UniqueId|`Finish`|`Pass`|
|-|-|-|-|-|
|Tween|*|Tween动画算法, [`查看`](https://github.com/linpengteng/js-simpler/blob/main/src/~Tween.ts)|`Finish`|`Not Tested`|

<br />

## API Jest测试

<p align="center">
  <img 
    style="width: 99%; margin: 0 auto;" 
    src="https://linpengteng.github.io/resource/js-simpler/test.jpg" 
    alt="Vue Sticker Table"
  >
</p>

<br />

# 许可证
> MIT
