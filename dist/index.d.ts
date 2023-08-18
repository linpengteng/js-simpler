type DeepType = boolean | number;
type CloneOmitType = string | number | Array<string | number>;
type ClonePickType = string | number | Array<string | number>;
type CloneOptionsType = {
    omit?: CloneOmitTypes;
    pick?: ClonePickTypes;
    deep?: DeepType;
    cache?: WeakMap<object, unknown>;
};
type CloneOmitTypes = Array<string | number>;
type ClonePickTypes = Array<string | number>;
declare const type: (val: any) => string;
declare const size: (val: any) => number;
declare const omit: <T = unknown>(val: T, arr: CloneOmitType, deep?: DeepType) => T;
declare const pick: <T = unknown>(val: T, arr: ClonePickType, deep?: DeepType) => T;
declare const clone: <T = unknown>(val: T, opts?: CloneOptionsType | DeepType) => T;
declare const equal: (one: unknown, two: unknown, deep?: boolean | number) => boolean;
declare const assign: <T = unknown>(val: T, ...rest: any[]) => T;
declare const deepClone: <T = unknown>(val: T) => T;
declare const deepEqual: (one: unknown, two: unknown) => boolean;
declare const deepAssign: <T = unknown>(val: T, ...rest: any[]) => T;

declare const isNonEmptySet: (set: unknown) => set is Set<unknown>;
declare const isEmptySet: (set: unknown) => set is Set<unknown>;
declare const isSet: (set: unknown) => set is Set<unknown>;
declare const toSet: (set: unknown) => Set<unknown>;
declare const newSet: (set: unknown) => Set<unknown>;

declare const isNonEmptyMap: (map: unknown) => map is Map<unknown, unknown>;
declare const isEmptyMap: (map: unknown) => map is Map<unknown, unknown>;
declare const isMap: (map: unknown) => map is Map<unknown, unknown>;
declare const toMap: (map: unknown) => Map<unknown, unknown>;
declare const newMap: (map: unknown) => Map<unknown, unknown>;

declare const isValidDate: (date: unknown) => date is Date;
declare const isDate: (date: unknown) => date is Date;
declare const toDate: (...rest: unknown[]) => Date;
declare const newDate: (...rest: unknown[]) => Date;
declare const formatDate: (date: unknown, format?: string) => string;
declare const yesterday: () => Date;
declare const tomorrow: () => Date;
declare const today: () => Date;

declare const isNonEmptyArray: (arr: unknown) => arr is any[];
declare const isEmptyArray: (arr: unknown) => arr is any[];
declare const isArray: (arr: unknown) => arr is any[];
declare const toArray: (arr: unknown) => any[];
declare const newArray: (arr: unknown) => any[];

declare const isNumber: (num: unknown) => num is number;
declare const isInteger: (num: unknown) => num is number;
declare const isDecimal: (num: unknown) => num is number;
declare const isFiniteNumber: (num: unknown) => num is number;
declare const toFiniteNumber: (num: unknown, lie?: number) => number;
declare const toNumber: (num: unknown, lie?: number) => number;
declare const toFixed: (num: unknown, lie?: number) => string;

declare const isNonEmptyObject: (obj: unknown) => obj is Record<string, unknown>;
declare const isEmptyObject: (obj: unknown) => obj is Record<string, unknown>;
declare const isObject: (obj: unknown) => obj is Record<string, unknown>;
declare const toObject: (obj: unknown) => Record<string, unknown>;
declare const newObject: (obj: unknown) => Record<string, unknown>;

declare const isRegExp: (reg: unknown) => reg is RegExp;
declare const toRegExp: (...rest: unknown[]) => RegExp;
declare const newRegExp: (...rest: unknown[]) => RegExp;

declare const isSymbol: (val: unknown) => val is symbol;
declare const toSymbol: (val: unknown) => symbol;
declare const newSymbol: (val: unknown) => symbol;
declare const toSymbolFor: (val: unknown) => symbol;
declare const newSymbolFor: (val: unknown) => symbol;

declare const isNonEmptyString: (str: unknown) => str is string;
declare const isEmptyString: (str: unknown) => str is string;
declare const isString: (str: unknown) => str is string;

declare const isTrue: (bool: unknown) => bool is true;
declare const isFalse: (bool: unknown) => bool is false;
declare const isBoolean: (bool: unknown) => bool is boolean;

declare const isPromise: (val: unknown) => val is Promise<unknown>;
declare const toPromise: <T = unknown>(wait?: Function | number | unknown) => Promise<T>;
declare const newPromise: <T = unknown>() => {
    promise: Promise<T>;
    resolve: (value: T | PromiseLike<T>) => void;
    reject: (reason?: any) => void;
};

declare const isWeakSet: (set: unknown) => set is WeakSet<object>;
declare const toWeakSet: (set: unknown) => WeakSet<object>;
declare const newWeakSet: (set: unknown) => WeakSet<object>;

declare const isWeakMap: (map: unknown) => map is WeakMap<object, unknown>;
declare const toWeakMap: (map: unknown) => WeakMap<object, unknown>;
declare const newWeakMap: (map: unknown) => WeakMap<any, unknown>;

declare const isGeneratorFunction: (func: unknown) => func is Function;
declare const isGeneralFunction: (func: unknown) => func is Function;
declare const isAsyncFunction: (func: unknown) => func is Function;
declare const isFunction: (func: unknown) => func is Function;
declare const toFunction: (func: unknown) => Function;

declare const isNull: (val: unknown) => val is null;
declare const isUndef: (val: unknown) => val is undefined;
declare const isNullable: (val: unknown) => val is null | undefined;

declare const lowerCase: (string: string) => string;
declare const upperCase: (string: string) => string;
declare const camelCase: (string: string, first?: boolean) => string;
declare const hyphenate: (string: string, first?: boolean) => string;
declare const underline: (string: string, first?: boolean) => string;

declare const Tween: {
    linear(t: number): number;
    scroll(t: number): number;
    quadIn(t: number): number;
    quadOut(t: number): number;
    quadInOut(t: number): number;
    cubicIn(t: number): number;
    cubicOut(t: number): number;
    cubicInOut(t: number): number;
    quartIn(t: number): number;
    quartOut(t: number): number;
    quartInOut(t: number): number;
    quintIn(t: number): number;
    quintOut(t: number): number;
    quintInOut(t: number): number;
    sineIn(t: number): number;
    sineOut(t: number): number;
    sineInOut(t: number): number;
    circIn(t: number): number;
    circOut(t: number): number;
    circInOut(t: number): number;
    backIn(t: number): number;
    backOut(t: number): number;
    backInOut(t: number): number;
    expoIn(t: number): number;
    expoOut(t: number): number;
    expoInOut(t: number): number | undefined;
    elasticIn(t: number): number;
    elasticOut(t: number): number;
    elasticInOut(t: number): number;
    bounceIn(t: number): number;
    bounceOut(t: number): number;
    bounceInOut(t: number): number;
};

declare const _default: {
    lowerCase: (string: string) => string;
    upperCase: (string: string) => string;
    camelCase: (string: string, first?: boolean) => string;
    hyphenate: (string: string, first?: boolean) => string;
    underline: (string: string, first?: boolean) => string;
    type: (val: any) => string;
    size: (val: any) => number;
    omit: <T = unknown>(val: T, arr: CloneOmitType, deep?: DeepType) => T;
    pick: <T_1 = unknown>(val: T_1, arr: ClonePickType, deep?: DeepType) => T_1;
    equal: (one: unknown, two: unknown, deep?: number | boolean) => boolean;
    clone: <T_2 = unknown>(val: T_2, opts?: DeepType | CloneOptionsType) => T_2;
    assign: <T_3 = unknown>(val: T_3, ...rest: any[]) => T_3;
    deepClone: <T_4 = unknown>(val: T_4) => T_4;
    deepEqual: (one: unknown, two: unknown) => boolean;
    deepAssign: <T_5 = unknown>(val: T_5, ...rest: any[]) => T_5;
    debounce: (func: Function, wait: number, options?: {
        leading?: boolean | undefined;
        trailing?: boolean | undefined;
        maxWait?: number | undefined;
    }) => {
        (this: any, ...rest: any[]): any;
        cancel: () => void;
        flush: () => any;
    };
    throttle: (func: Function, wait: number, options?: {
        leading?: boolean | undefined;
        trailing?: boolean | undefined;
    }) => {
        (this: any, ...rest: any[]): any;
        cancel: () => void;
        flush: () => any;
    };
    isNull: (val: unknown) => val is null;
    isUndef: (val: unknown) => val is undefined;
    isNullable: (val: unknown) => val is null | undefined;
    isGeneratorFunction: (func: unknown) => func is Function;
    isGeneralFunction: (func: unknown) => func is Function;
    isAsyncFunction: (func: unknown) => func is Function;
    isFunction: (func: unknown) => func is Function;
    toFunction: (func: unknown) => Function;
    isWeakMap: (map: unknown) => map is WeakMap<object, unknown>;
    toWeakMap: (map: unknown) => WeakMap<object, unknown>;
    newWeakMap: (map: unknown) => WeakMap<any, unknown>;
    isWeakSet: (set: unknown) => set is WeakSet<object>;
    toWeakSet: (set: unknown) => WeakSet<object>;
    newWeakSet: (set: unknown) => WeakSet<object>;
    isPromise: (val: unknown) => val is Promise<unknown>;
    toPromise: <T_6 = unknown>(wait?: unknown) => Promise<T_6>;
    newPromise: <T_7 = unknown>() => {
        promise: Promise<T_7>;
        resolve: (value: T_7 | PromiseLike<T_7>) => void;
        reject: (reason?: any) => void;
    };
    isTrue: (bool: unknown) => bool is true;
    isFalse: (bool: unknown) => bool is false;
    isBoolean: (bool: unknown) => bool is boolean;
    isNonEmptyString: (str: unknown) => str is string;
    isEmptyString: (str: unknown) => str is string;
    isString: (str: unknown) => str is string;
    isSymbol: (val: unknown) => val is symbol;
    toSymbol: (val: unknown) => symbol;
    newSymbol: (val: unknown) => symbol;
    toSymbolFor: (val: unknown) => symbol;
    newSymbolFor: (val: unknown) => symbol;
    isRegExp: (reg: unknown) => reg is RegExp;
    toRegExp: (...rest: unknown[]) => RegExp;
    newRegExp: (...rest: unknown[]) => RegExp;
    isNonEmptyObject: (obj: unknown) => obj is Record<string, unknown>;
    isEmptyObject: (obj: unknown) => obj is Record<string, unknown>;
    isObject: (obj: unknown) => obj is Record<string, unknown>;
    toObject: (obj: unknown) => Record<string, unknown>;
    newObject: (obj: unknown) => Record<string, unknown>;
    isNumber: (num: unknown) => num is number;
    isInteger: (num: unknown) => num is number;
    isDecimal: (num: unknown) => num is number;
    isFiniteNumber: (num: unknown) => num is number;
    toFiniteNumber: (num: unknown, lie?: number) => number;
    toNumber: (num: unknown, lie?: number) => number;
    toFixed: (num: unknown, lie?: number) => string;
    isNonEmptyArray: (arr: unknown) => arr is any[];
    isEmptyArray: (arr: unknown) => arr is any[];
    isArray: (arr: unknown) => arr is any[];
    toArray: (arr: unknown) => any[];
    newArray: (arr: unknown) => any[];
    isValidDate: (date: unknown) => date is Date;
    isDate: (date: unknown) => date is Date;
    toDate: (...rest: unknown[]) => Date;
    newDate: (...rest: unknown[]) => Date;
    formatDate: (date: unknown, format?: string | undefined) => string;
    yesterday: () => Date;
    tomorrow: () => Date;
    today: () => Date;
    isNonEmptyMap: (map: unknown) => map is Map<unknown, unknown>;
    isEmptyMap: (map: unknown) => map is Map<unknown, unknown>;
    isMap: (map: unknown) => map is Map<unknown, unknown>;
    toMap: (map: unknown) => Map<unknown, unknown>;
    newMap: (map: unknown) => Map<unknown, unknown>;
    isNonEmptySet: (set: unknown) => set is Set<unknown>;
    isEmptySet: (set: unknown) => set is Set<unknown>;
    isSet: (set: unknown) => set is Set<unknown>;
    toSet: (set: unknown) => Set<unknown>;
    Tween: {
        linear(t: number): number;
        scroll(t: number): number;
        quadIn(t: number): number;
        quadOut(t: number): number;
        quadInOut(t: number): number;
        cubicIn(t: number): number;
        cubicOut(t: number): number;
        cubicInOut(t: number): number;
        quartIn(t: number): number;
        quartOut(t: number): number;
        quartInOut(t: number): number;
        quintIn(t: number): number;
        quintOut(t: number): number;
        quintInOut(t: number): number;
        sineIn(t: number): number;
        sineOut(t: number): number;
        sineInOut(t: number): number;
        circIn(t: number): number;
        circOut(t: number): number;
        circInOut(t: number): number;
        backIn(t: number): number;
        backOut(t: number): number;
        backInOut(t: number): number;
        expoIn(t: number): number;
        expoOut(t: number): number;
        expoInOut(t: number): number | undefined;
        elasticIn(t: number): number;
        elasticOut(t: number): number;
        elasticInOut(t: number): number;
        bounceIn(t: number): number;
        bounceOut(t: number): number;
        bounceInOut(t: number): number;
    };
};

export { type CloneOmitType, type CloneOmitTypes, type CloneOptionsType, type ClonePickType, type ClonePickTypes, type DeepType, Tween, assign, camelCase, clone, deepAssign, deepClone, deepEqual, _default as default, equal, formatDate, hyphenate, isArray, isAsyncFunction, isBoolean, isDate, isDecimal, isEmptyArray, isEmptyMap, isEmptyObject, isEmptySet, isEmptyString, isFalse, isFiniteNumber, isFunction, isGeneralFunction, isGeneratorFunction, isInteger, isMap, isNonEmptyArray, isNonEmptyMap, isNonEmptyObject, isNonEmptySet, isNonEmptyString, isNull, isNullable, isNumber, isObject, isPromise, isRegExp, isSet, isString, isSymbol, isTrue, isUndef, isValidDate, isWeakMap, isWeakSet, lowerCase, newArray, newDate, newMap, newObject, newPromise, newRegExp, newSet, newSymbol, newSymbolFor, newWeakMap, newWeakSet, omit, pick, size, toArray, toDate, toFiniteNumber, toFixed, toFunction, toMap, toNumber, toObject, toPromise, toRegExp, toSet, toSymbol, toSymbolFor, toWeakMap, toWeakSet, today, tomorrow, type, underline, upperCase, yesterday };
