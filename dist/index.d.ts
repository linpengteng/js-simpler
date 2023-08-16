declare function isNonEmptySet(set: unknown): set is Set<unknown>;
declare function isEmptySet(set: unknown): set is Set<unknown>;
declare function isSet(set: unknown): set is Set<unknown>;
declare function toSet(set: unknown): Set<unknown>;

declare function isNonEmptyMap(map: unknown): map is Map<unknown, unknown>;
declare function isEmptyMap(map: unknown): map is Map<unknown, unknown>;
declare function isMap(map: unknown): map is Map<unknown, unknown>;
declare function toMap(map: unknown): Map<unknown, unknown>;

declare function isGeneratorFunction(func: unknown): func is Function;
declare function isGeneralFunction(func: unknown): func is Function;
declare function isAsyncFunction(func: unknown): func is Function;
declare function isFunction(func: unknown): func is Function;
declare function toFunction(func: unknown): Function;

declare const isValidDate: (date: unknown) => date is Date;
declare const isDate: (date: unknown) => date is Date;
declare const toDate: (...rest: unknown[]) => Date;
declare const formatDate: (date: unknown, format?: string) => string;
declare const yesterday: () => Date;
declare const tomorrow: () => Date;
declare const today: () => Date;

declare const isNonEmptyArray: (arr: unknown) => arr is any[];
declare const isEmptyArray: (arr: unknown) => arr is any[];
declare const isArray: (arr: unknown) => arr is any[];
declare const toArray: (arr: unknown) => any[];

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

declare const isRegExp: (reg: unknown) => reg is RegExp;
declare const toRegExp: (...rest: unknown[]) => RegExp;

declare const isSymbol: (val: unknown) => val is Symbol;

declare const isNonEmptyString: (str: unknown) => str is string;
declare const isEmptyString: (str: unknown) => str is string;
declare const isString: (str: unknown) => str is string;
declare const toString: (str: unknown) => string;

declare const isTrue: (bool: unknown) => bool is true;
declare const isFalse: (bool: unknown) => bool is false;
declare const isBoolean: (bool: unknown) => bool is boolean;
declare const toBoolean: (bool: unknown) => boolean;

declare const isPromise: (val: unknown) => val is Promise<unknown>;
declare const toPromise: (val: unknown) => Promise<unknown>;
declare const newPromise: <T = unknown>() => {
    promise: Promise<T>;
    resolve: (value: T | PromiseLike<T>) => void;
    reject: (reason?: any) => void;
};

declare const isWeakSet: (set: unknown) => set is WeakSet<any>;

declare const isWeakMap: (map: unknown) => map is WeakMap<any, unknown>;

declare const isNull: (val: unknown) => val is null;
declare const isUndef: (val: unknown) => val is undefined;
declare const isNullable: (val: unknown) => val is null | undefined;

declare const itType: (val: any) => string;
declare const itSize: (val: any) => number;
declare const isEqual: (val1: unknown, val2: unknown, deep?: boolean) => boolean;
declare const deepAssign: <T = unknown>(val: T, ...rest: unknown[]) => T;
declare const deepClone: <T = unknown>(val: T, ...rest: unknown[]) => T;

declare const toCamelCase: (string: string, first?: boolean) => string;
declare const toHyphenate: (string: string, first?: boolean) => string;
declare const toUnderline: (string: string, first?: boolean) => string;

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
    toCamelCase: (string: string, first?: boolean) => string;
    toHyphenate: (string: string, first?: boolean) => string;
    toUnderline: (string: string, first?: boolean) => string;
    itType: (val: any) => string;
    itSize: (val: any) => number;
    isEqual: (val1: unknown, val2: unknown, deep?: boolean) => boolean;
    deepAssign: <T = unknown>(val: T, ...rest: unknown[]) => T;
    deepClone: <T_1 = unknown>(val: T_1, ...rest: unknown[]) => T_1;
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
    isGeneratorFunction: typeof isGeneratorFunction;
    isGeneralFunction: typeof isGeneralFunction;
    isAsyncFunction: typeof isAsyncFunction;
    isFunction: typeof isFunction;
    toFunction: typeof toFunction;
    isWeakMap: (map: unknown) => map is WeakMap<any, unknown>;
    isWeakSet: (set: unknown) => set is WeakSet<any>;
    isPromise: (val: unknown) => val is Promise<unknown>;
    toPromise: (val: unknown) => Promise<unknown>;
    newPromise: <T = unknown>() => {
        promise: Promise<T>;
        resolve: (value: T | PromiseLike<T>) => void;
        reject: (reason?: any) => void;
    };
    isTrue: (bool: unknown) => bool is true;
    isFalse: (bool: unknown) => bool is false;
    isBoolean: (bool: unknown) => bool is boolean;
    toBoolean: (bool: unknown) => boolean;
    isNonEmptyString: (str: unknown) => str is string;
    isEmptyString: (str: unknown) => str is string;
    isString: (str: unknown) => str is string;
    toString: (str: unknown) => string;
    isSymbol: (val: unknown) => val is Symbol;
    isRegExp: (reg: unknown) => reg is RegExp;
    toRegExp: (...rest: unknown[]) => RegExp;
    isNonEmptyObject: (obj: unknown) => obj is Record<string, unknown>;
    isEmptyObject: (obj: unknown) => obj is Record<string, unknown>;
    isObject: (obj: unknown) => obj is Record<string, unknown>;
    toObject: (obj: unknown) => Record<string, unknown>;
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
    isValidDate: (date: unknown) => date is Date;
    isDate: (date: unknown) => date is Date;
    toDate: (...rest: unknown[]) => Date;
    formatDate: (date: unknown, format?: string | undefined) => string;
    yesterday: () => Date;
    tomorrow: () => Date;
    today: () => Date;
    isNonEmptyMap: typeof isNonEmptyMap;
    isEmptyMap: typeof isEmptyMap;
    isMap: typeof isMap;
    toMap: typeof toMap;
    isNonEmptySet: typeof isNonEmptySet;
    isEmptySet: typeof isEmptySet;
    isSet: typeof isSet;
    toSet: typeof toSet;
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

export { Tween, deepAssign, deepClone, _default as default, formatDate, isArray, isAsyncFunction, isBoolean, isDate, isDecimal, isEmptyArray, isEmptyMap, isEmptyObject, isEmptySet, isEmptyString, isEqual, isFalse, isFiniteNumber, isFunction, isGeneralFunction, isGeneratorFunction, isInteger, isMap, isNonEmptyArray, isNonEmptyMap, isNonEmptyObject, isNonEmptySet, isNonEmptyString, isNull, isNullable, isNumber, isObject, isPromise, isRegExp, isSet, isString, isSymbol, isTrue, isUndef, isValidDate, isWeakMap, isWeakSet, itSize, itType, newPromise, toArray, toBoolean, toCamelCase, toDate, toFiniteNumber, toFixed, toFunction, toHyphenate, toMap, toNumber, toObject, toPromise, toRegExp, toSet, toString, toUnderline, today, tomorrow, yesterday };
