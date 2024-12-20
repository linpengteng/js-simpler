interface Curry {
    <T1, R>(func: (this: any, t1: T1) => R, length?: number): CurryFn1<T1, R>;
    <T1, T2, R>(func: (this: any, t1: T1, t2: T2) => R, length?: number): CurryFn2<T1, T2, R>;
    <T1, T2, T3, R>(func: (this: any, t1: T1, t2: T2, t3: T3) => R, length?: number): CurryFn3<T1, T2, T3, R>;
    <T1, T2, T3, T4, R>(func: (this: any, t1: T1, t2: T2, t3: T3, t4: T4) => R, length?: number): CurryFn4<T1, T2, T3, T4, R>;
    <T1, T2, T3, T4, T5, R>(func: (this: any, t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R, length?: number): CurryFn5<T1, T2, T3, T4, T5, R>;
    (func: (this: any, ...args: any[]) => any, length?: number): (this: any, ...args: any[]) => any;
}
interface CurryFn1<T1, R> {
    (this: any): CurryFn1<T1, R>;
    (this: any, t1: T1): R;
}
interface CurryFn2<T1, T2, R> {
    (this: any): CurryFn2<T1, T2, R>;
    (this: any, t1: T1): CurryFn1<T2, R>;
    (this: any, t1: Curry, t2: T2): CurryFn1<T1, R>;
    (this: any, t1: T1, t2: T2): R;
}
interface CurryFn3<T1, T2, T3, R> {
    (this: any): CurryFn3<T1, T2, T3, R>;
    (this: any, t1: T1): CurryFn2<T2, T3, R>;
    (this: any, t1: Curry, t2: T2): CurryFn2<T1, T3, R>;
    (this: any, t1: T1, t2: T2): CurryFn1<T3, R>;
    (this: any, t1: Curry, t2: Curry, t3: T3): CurryFn2<T1, T2, R>;
    (this: any, t1: T1, t2: Curry, t3: T3): CurryFn1<T2, R>;
    (this: any, t1: Curry, t2: T2, t3: T3): CurryFn1<T1, R>;
    (this: any, t1: T1, t2: T2, t3: T3): R;
}
interface CurryFn4<T1, T2, T3, T4, R> {
    (this: any): CurryFn4<T1, T2, T3, T4, R>;
    (this: any, t1: T1): CurryFn3<T2, T3, T4, R>;
    (this: any, t1: Curry, t2: T2): CurryFn3<T1, T3, T4, R>;
    (this: any, t1: T1, t2: T2): CurryFn2<T3, T4, R>;
    (this: any, t1: Curry, t2: Curry, t3: T3): CurryFn3<T1, T2, T4, R>;
    (this: any, t1: Curry, t2: Curry, t3: T3): CurryFn2<T2, T4, R>;
    (this: any, t1: Curry, t2: T2, t3: T3): CurryFn2<T1, T4, R>;
    (this: any, t1: T1, t2: T2, t3: T3): CurryFn1<T4, R>;
    (this: any, t1: Curry, t2: Curry, t3: Curry, t4: T4): CurryFn3<T1, T2, T3, R>;
    (this: any, t1: T1, t2: Curry, t3: Curry, t4: T4): CurryFn2<T2, T3, R>;
    (this: any, t1: Curry, t2: T2, t3: Curry, t4: T4): CurryFn2<T1, T3, R>;
    (this: any, t1: Curry, t2: Curry, t3: T3, t4: T4): CurryFn2<T1, T2, R>;
    (this: any, t1: T1, t2: T2, t3: Curry, t4: T4): CurryFn1<T3, R>;
    (this: any, t1: T1, t2: Curry, t3: T3, t4: T4): CurryFn1<T2, R>;
    (this: any, t1: Curry, t2: T2, t3: T3, t4: T4): CurryFn1<T1, R>;
    (this: any, t1: T1, t2: T2, t3: T3, t4: T4): R;
}
interface CurryFn5<T1, T2, T3, T4, T5, R> {
    (this: any): CurryFn5<T1, T2, T3, T4, T5, R>;
    (this: any, t1: T1): CurryFn4<T2, T3, T4, T5, R>;
    (this: any, t1: Curry, t2: T2): CurryFn4<T1, T3, T4, T5, R>;
    (this: any, t1: T1, t2: T2): CurryFn3<T3, T4, T5, R>;
    (this: any, t1: Curry, t2: Curry, t3: T3): CurryFn4<T1, T2, T4, T5, R>;
    (this: any, t1: T1, t2: Curry, t3: T3): CurryFn3<T2, T4, T5, R>;
    (this: any, t1: Curry, t2: T2, t3: T3): CurryFn3<T1, T4, T5, R>;
    (this: any, t1: T1, t2: T2, t3: T3): CurryFn2<T4, T5, R>;
    (this: any, t1: Curry, t2: Curry, t3: Curry, t4: T4): CurryFn4<T1, T2, T3, T5, R>;
    (this: any, t1: T1, t2: Curry, t3: Curry, t4: T4): CurryFn3<T2, T3, T5, R>;
    (this: any, t1: Curry, t2: T2, t3: Curry, t4: T4): CurryFn3<T1, T3, T5, R>;
    (this: any, t1: Curry, t2: Curry, t3: T3, t4: T4): CurryFn3<T1, T2, T5, R>;
    (this: any, t1: T1, t2: T2, t3: Curry, t4: T4): CurryFn2<T3, T5, R>;
    (this: any, t1: T1, t2: Curry, t3: T3, t4: T4): CurryFn2<T2, T5, R>;
    (this: any, t1: Curry, t2: T2, t3: T3, t4: T4): CurryFn2<T1, T5, R>;
    (this: any, t1: T1, t2: T2, t3: T3, t4: T4): CurryFn1<T5, R>;
    (this: any, t1: Curry, t2: Curry, t3: Curry, t4: Curry, t5: T5): CurryFn4<T1, T2, T3, T4, R>;
    (this: any, t1: T1, t2: Curry, t3: Curry, t4: Curry, t5: T5): CurryFn3<T2, T3, T4, R>;
    (this: any, t1: Curry, t2: T2, t3: Curry, t4: Curry, t5: T5): CurryFn3<T1, T3, T4, R>;
    (this: any, t1: Curry, t2: Curry, t3: T3, t4: Curry, t5: T5): CurryFn3<T1, T2, T4, R>;
    (this: any, t1: Curry, t2: Curry, t3: Curry, t4: T4, t5: T5): CurryFn3<T1, T2, T3, R>;
    (this: any, t1: T1, t2: T2, t3: Curry, t4: Curry, t5: T5): CurryFn2<T3, T4, R>;
    (this: any, t1: T1, t2: Curry, t3: T3, t4: Curry, t5: T5): CurryFn2<T2, T4, R>;
    (this: any, t1: T1, t2: Curry, t3: Curry, t4: T4, t5: T5): CurryFn2<T2, T3, R>;
    (this: any, t1: Curry, t2: T2, t3: T3, t4: Curry, t5: T5): CurryFn2<T1, T4, R>;
    (this: any, t1: Curry, t2: T2, t3: Curry, t4: T4, t5: T5): CurryFn2<T1, T3, R>;
    (this: any, t1: Curry, t2: Curry, t3: T3, t4: T4, t5: T5): CurryFn2<T1, T2, R>;
    (this: any, t1: T1, t2: T2, t3: T3, t4: Curry, t5: T5): CurryFn1<T4, R>;
    (this: any, t1: T1, t2: T2, t3: Curry, t4: T4, t5: T5): CurryFn1<T3, R>;
    (this: any, t1: T1, t2: Curry, t3: T3, t4: T4, t5: T5): CurryFn1<T2, R>;
    (this: any, t1: Curry, t2: T2, t3: T3, t4: T4, t5: T5): CurryFn1<T1, R>;
    (this: any, t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R;
}
declare const curry: Curry;

type DeepType = boolean | number;
type FilterType = string | number | RegExp;
type FilterTypes = Array<string | number | RegExp>;
type CloneOptionsType = {
    omits?: FilterTypes;
    picks?: FilterTypes;
    cache?: WeakMap<object, unknown>;
    deep?: DeepType;
};
type EqualOptionsType = {
    strict?: FilterTypes;
    include?: FilterTypes;
    exclude?: FilterTypes;
    deep?: DeepType;
};
declare const omit: <T = unknown>(val: T, arr?: FilterTypes | FilterType, deep?: DeepType) => T;
declare const pick: <T = unknown>(val: T, arr?: FilterTypes | FilterType, deep?: DeepType) => T;
declare const equal: (one: unknown, two: unknown, opts?: EqualOptionsType | DeepType) => boolean;
declare const clone: <T = unknown>(val: T, opts?: CloneOptionsType | DeepType) => T;
declare const assign: <T = unknown>(val: T, ...rest: any[]) => T;
declare const deepAssign: <T = unknown>(val: T, ...rest: any[]) => T;
declare const deepClone: <T = unknown>(val: T, opts?: CloneOptionsType) => T;
declare const deepEqual: (one: unknown, two: unknown, opts?: EqualOptionsType) => boolean;

type UniquerOptions = {
    radix?: 2 | 8 | 10 | 16 | 26 | 36;
    format?: string | null;
    random?: '?' | '*' | '#';
    usedUniques?: Array<string> | Set<string> | null;
    listenCacherHandler?: ListenCacherHandler | null;
    reduplicateHandler?: ReduplicateHandler | null;
    reduplicateExit?: boolean | null;
    onlyUpdate?: boolean | null;
};
type RandomizeOptions = {
    bytes: string[];
    max: number;
    min: number;
};
type CacherOptions = Set<string>;
type ListenCacherHandler = (options: CacherOptions) => void;
type ReduplicateHandler = (options: UniquerOptions) => UniquerOptions;
type Randomize = (options: RandomizeOptions) => string;
type Uniquer = (options?: UniquerOptions) => string;
/**
 * Uniquer
 */
declare const uniquer: Uniquer;

declare const isNonEmptySet: (set: unknown) => set is Set<unknown>;
declare const isEmptySet: (set: unknown) => set is Set<unknown>;
declare const isSet: (set: unknown) => set is Set<unknown>;
declare const toSet: (set?: unknown) => Set<unknown>;
declare const newSet: (set?: unknown) => Set<unknown>;

declare const isNonEmptyMap: (map: unknown) => map is Map<unknown, unknown>;
declare const isEmptyMap: (map: unknown) => map is Map<unknown, unknown>;
declare const isMap: (map: unknown) => map is Map<unknown, unknown>;
declare const toMap: (map?: unknown) => Map<unknown, unknown>;
declare const newMap: (map?: unknown) => Map<unknown, unknown>;

declare const isValidDate: (date: unknown) => date is Date;
declare const isDate: (date: unknown) => date is Date;
declare const toDate: (...rest: unknown[]) => Date;
declare const newDate: (...rest: unknown[]) => Date;
declare const showDate: (time: unknown, format?: string) => string;
declare const yesterday: () => Date;
declare const tomorrow: () => Date;
declare const today: () => Date;

type DefineMessager = {
    type?: symbol;
    name?: string;
    stack?: string;
    message?: string;
    [key: string]: any;
};
declare class DefineCustomError<T extends DefineMessager> extends Error {
    type: symbol;
    name: string;
    stack: string;
    message: string;
    options: {
        [key: string]: any;
    } & T;
    constructor(messager?: string | DefineMessager);
}
declare const isError: (err: unknown) => err is Error;
declare const isURIError: (err: unknown) => err is URIError;
declare const isTypeError: (err: unknown) => err is TypeError;
declare const isEvalError: (err: unknown) => err is EvalError;
declare const isRangeError: (err: unknown) => err is RangeError;
declare const isSyntaxError: (err: unknown) => err is SyntaxError;
declare const isReferenceError: (err: unknown) => err is ReferenceError;
declare const newError: (message?: string) => Error;
declare const newURIError: (message?: string) => URIError;
declare const newTypeError: (message?: string) => TypeError;
declare const newEvalError: (message?: string) => EvalError;
declare const newRangeError: (message?: string) => RangeError;
declare const newSyntaxError: (message?: string) => SyntaxError;
declare const newReferenceError: (message?: string) => ReferenceError;
declare const isCustomizeError: <T extends Record<string, any> = any>(err: unknown, type?: symbol) => err is DefineCustomError<T>;
declare const newCustomizeError: <T extends Record<string, any> = any>(messager?: string | DefineMessager) => DefineCustomError<T>;

declare const isNonEmptyArray: (arr: unknown) => arr is any[];
declare const isEmptyArray: (arr: unknown) => arr is any[];
declare const isArray: (arr: unknown) => arr is any[];
declare const toArray: (...rest: unknown[]) => any[];
declare const newArray: (...rest: unknown[]) => any[];

declare const isNaN: (num: unknown) => num is number;
declare const isNumber: (num: unknown) => num is number;
declare const isInteger: (num: unknown) => num is number;
declare const isDecimal: (num: unknown) => num is number;
declare const isInfinity: (num: unknown) => num is number;
declare const isFiniteNumber: (num: unknown) => num is number;
declare const toFiniteNumber: (num?: unknown, lie?: number) => number;
declare const toDecimal: (num?: unknown, lie?: number) => number;
declare const toInteger: (num?: unknown, _?: never) => number;
declare const toNumber: (num?: unknown, lie?: number) => number;
declare const toFixed: (num?: unknown, lie?: number) => string;

declare const isNonEmptyObject: (obj: unknown) => obj is Record<string, unknown>;
declare const isEmptyObject: (obj: unknown) => obj is Record<string, unknown>;
declare const isObject: (obj: unknown) => obj is Record<string, unknown>;
declare const toObject: (obj?: unknown) => Record<string, unknown>;
declare const newObject: (obj?: unknown) => Record<string, unknown>;

declare const isRegExp: (reg: unknown) => reg is RegExp;
declare const toRegExp: (...rest: unknown[]) => RegExp;
declare const newRegExp: (...rest: unknown[]) => RegExp;

declare const isSymbol: (val: unknown) => val is symbol;
declare const toSymbol: (val?: unknown) => symbol;
declare const newSymbol: (val?: unknown) => symbol;
declare const toSymbolFor: (val?: unknown) => symbol;
declare const newSymbolFor: (val?: unknown) => symbol;

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

declare const isWeakSet: (set?: unknown) => set is WeakSet<object>;
declare const toWeakSet: (set?: unknown) => WeakSet<object>;
declare const newWeakSet: (set?: unknown) => WeakSet<object>;

declare const isWeakMap: (map: unknown) => map is WeakMap<object, unknown>;
declare const toWeakMap: (map?: unknown) => WeakMap<object, unknown>;
declare const newWeakMap: (map?: unknown) => WeakMap<any, unknown>;

declare const isGeneratorFunction: (func: unknown) => func is Function;
declare const isGeneralFunction: (func: unknown) => func is Function;
declare const isAsyncFunction: (func: unknown) => func is Function;
declare const isFunction: (func: unknown) => func is Function;
declare const toFunction: (...rest: unknown[]) => Function;

declare const isNull: (val: unknown) => val is null;
declare const isUndef: (val: unknown) => val is undefined;
declare const isNullable: (val: unknown) => val is null | undefined;

declare const debounce: (func: Function, wait: number, options?: {
    leading?: boolean;
    trailing?: boolean;
    maxWait?: number;
}) => {
    (this: any, ...rest: any[]): any;
    cancel: () => void;
    flush: () => any;
};
declare const throttle: (func: Function, wait: number, options?: {
    leading?: boolean;
    trailing?: boolean;
}) => {
    (this: any, ...rest: any[]): any;
    cancel: () => void;
    flush: () => any;
};

declare const lowerCase: <T = any>(string: T) => T;
declare const upperCase: <T = any>(string: T) => T;
declare const camelCase: <T = any>(string: T, first?: boolean) => T;
declare const underCase: <T = any>(string: T, first?: boolean) => T;
declare const hyphenCase: <T = any>(string: T, first?: boolean) => T;

declare const Tween: {
    linear(t: number): number;
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
    uniquer: Uniquer;
    lowerCase: <T = any>(string: T) => T;
    upperCase: <T = any>(string: T) => T;
    camelCase: <T = any>(string: T, first?: boolean) => T;
    underCase: <T = any>(string: T, first?: boolean) => T;
    hyphenCase: <T = any>(string: T, first?: boolean) => T;
    debounce: (func: Function, wait: number, options?: {
        leading?: boolean;
        trailing?: boolean;
        maxWait?: number;
    }) => {
        (this: any, ...rest: any[]): any;
        cancel: () => void;
        flush: () => any;
    };
    throttle: (func: Function, wait: number, options?: {
        leading?: boolean;
        trailing?: boolean;
    }) => {
        (this: any, ...rest: any[]): any;
        cancel: () => void;
        flush: () => any;
    };
    omit: <T = unknown>(val: T, arr?: FilterTypes | FilterType, deep?: DeepType) => T;
    pick: <T = unknown>(val: T, arr?: FilterTypes | FilterType, deep?: DeepType) => T;
    equal: (one: unknown, two: unknown, opts?: EqualOptionsType | DeepType) => boolean;
    clone: <T = unknown>(val: T, opts?: CloneOptionsType | DeepType) => T;
    assign: <T = unknown>(val: T, ...rest: any[]) => T;
    deepAssign: <T = unknown>(val: T, ...rest: any[]) => T;
    deepClone: <T = unknown>(val: T, opts?: CloneOptionsType) => T;
    deepEqual: (one: unknown, two: unknown, opts?: EqualOptionsType) => boolean;
    curry: Curry;
    isNull: (val: unknown) => val is null;
    isUndef: (val: unknown) => val is undefined;
    isNullable: (val: unknown) => val is null | undefined;
    isGeneratorFunction: (func: unknown) => func is Function;
    isGeneralFunction: (func: unknown) => func is Function;
    isAsyncFunction: (func: unknown) => func is Function;
    isFunction: (func: unknown) => func is Function;
    toFunction: (...rest: unknown[]) => Function;
    isWeakMap: (map: unknown) => map is WeakMap<object, unknown>;
    toWeakMap: (map?: unknown) => WeakMap<object, unknown>;
    newWeakMap: (map?: unknown) => WeakMap<any, unknown>;
    isWeakSet: (set?: unknown) => set is WeakSet<object>;
    toWeakSet: (set?: unknown) => WeakSet<object>;
    newWeakSet: (set?: unknown) => WeakSet<object>;
    isPromise: (val: unknown) => val is Promise<unknown>;
    toPromise: <T = unknown>(wait?: Function | number | unknown) => Promise<T>;
    newPromise: <T = unknown>() => {
        promise: Promise<T>;
        resolve: (value: T | PromiseLike<T>) => void;
        reject: (reason?: any) => void;
    };
    isTrue: (bool: unknown) => bool is true;
    isFalse: (bool: unknown) => bool is false;
    isBoolean: (bool: unknown) => bool is boolean;
    isNonEmptyString: (str: unknown) => str is string;
    isEmptyString: (str: unknown) => str is string;
    isString: (str: unknown) => str is string;
    isSymbol: (val: unknown) => val is symbol;
    toSymbol: (val?: unknown) => symbol;
    newSymbol: (val?: unknown) => symbol;
    toSymbolFor: (val?: unknown) => symbol;
    newSymbolFor: (val?: unknown) => symbol;
    isRegExp: (reg: unknown) => reg is RegExp;
    toRegExp: (...rest: unknown[]) => RegExp;
    newRegExp: (...rest: unknown[]) => RegExp;
    isNonEmptyObject: (obj: unknown) => obj is Record<string, unknown>;
    isEmptyObject: (obj: unknown) => obj is Record<string, unknown>;
    isObject: (obj: unknown) => obj is Record<string, unknown>;
    toObject: (obj?: unknown) => Record<string, unknown>;
    newObject: (obj?: unknown) => Record<string, unknown>;
    isNaN: (num: unknown) => num is number;
    isNumber: (num: unknown) => num is number;
    isInteger: (num: unknown) => num is number;
    isDecimal: (num: unknown) => num is number;
    isInfinity: (num: unknown) => num is number;
    isFiniteNumber: (num: unknown) => num is number;
    toFiniteNumber: (num?: unknown, lie?: number) => number;
    toDecimal: (num?: unknown, lie?: number) => number;
    toInteger: (num?: unknown, _?: never) => number;
    toNumber: (num?: unknown, lie?: number) => number;
    toFixed: (num?: unknown, lie?: number) => string;
    isNonEmptyArray: (arr: unknown) => arr is any[];
    isEmptyArray: (arr: unknown) => arr is any[];
    isArray: (arr: unknown) => arr is any[];
    toArray: (...rest: unknown[]) => any[];
    newArray: (...rest: unknown[]) => any[];
    isError: (err: unknown) => err is Error;
    isURIError: (err: unknown) => err is URIError;
    isTypeError: (err: unknown) => err is TypeError;
    isEvalError: (err: unknown) => err is EvalError;
    isRangeError: (err: unknown) => err is RangeError;
    isSyntaxError: (err: unknown) => err is SyntaxError;
    isReferenceError: (err: unknown) => err is ReferenceError;
    newError: (message?: string) => Error;
    newURIError: (message?: string) => URIError;
    newTypeError: (message?: string) => TypeError;
    newEvalError: (message?: string) => EvalError;
    newRangeError: (message?: string) => RangeError;
    newSyntaxError: (message?: string) => SyntaxError;
    newReferenceError: (message?: string) => ReferenceError;
    isCustomizeError: <T extends Record<string, any> = any>(err: unknown, type?: symbol) => err is {
        type: symbol;
        name: string;
        stack: string;
        message: string;
        options: {
            [key: string]: any;
        } & T;
        cause?: unknown;
    };
    newCustomizeError: <T extends Record<string, any> = any>(messager?: string | {
        [key: string]: any;
        type?: symbol;
        name?: string;
        stack?: string;
        message?: string;
    }) => {
        type: symbol;
        name: string;
        stack: string;
        message: string;
        options: {
            [key: string]: any;
        } & T;
        cause?: unknown;
    };
    isValidDate: (date: unknown) => date is Date;
    isDate: (date: unknown) => date is Date;
    toDate: (...rest: unknown[]) => Date;
    newDate: (...rest: unknown[]) => Date;
    showDate: (time: unknown, format?: string) => string;
    yesterday: () => Date;
    tomorrow: () => Date;
    today: () => Date;
    isNonEmptyMap: (map: unknown) => map is Map<unknown, unknown>;
    isEmptyMap: (map: unknown) => map is Map<unknown, unknown>;
    isMap: (map: unknown) => map is Map<unknown, unknown>;
    toMap: (map?: unknown) => Map<unknown, unknown>;
    newMap: (map?: unknown) => Map<unknown, unknown>;
    isNonEmptySet: (set: unknown) => set is Set<unknown>;
    isEmptySet: (set: unknown) => set is Set<unknown>;
    isSet: (set: unknown) => set is Set<unknown>;
    toSet: (set?: unknown) => Set<unknown>;
    newSet: (set?: unknown) => Set<unknown>;
    Tween: {
        linear(t: number): number;
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

export { type CacherOptions, type CloneOptionsType, type Curry, type CurryFn1, type CurryFn2, type CurryFn3, type CurryFn4, type CurryFn5, type DeepType, type EqualOptionsType, type FilterType, type FilterTypes, type ListenCacherHandler, type Randomize, type RandomizeOptions, type ReduplicateHandler, Tween, type Uniquer, type UniquerOptions, assign, camelCase, clone, curry, debounce, deepAssign, deepClone, deepEqual, _default as default, equal, hyphenCase, isArray, isAsyncFunction, isBoolean, isCustomizeError, isDate, isDecimal, isEmptyArray, isEmptyMap, isEmptyObject, isEmptySet, isEmptyString, isError, isEvalError, isFalse, isFiniteNumber, isFunction, isGeneralFunction, isGeneratorFunction, isInfinity, isInteger, isMap, isNaN, isNonEmptyArray, isNonEmptyMap, isNonEmptyObject, isNonEmptySet, isNonEmptyString, isNull, isNullable, isNumber, isObject, isPromise, isRangeError, isReferenceError, isRegExp, isSet, isString, isSymbol, isSyntaxError, isTrue, isTypeError, isURIError, isUndef, isValidDate, isWeakMap, isWeakSet, lowerCase, newArray, newCustomizeError, newDate, newError, newEvalError, newMap, newObject, newPromise, newRangeError, newReferenceError, newRegExp, newSet, newSymbol, newSymbolFor, newSyntaxError, newTypeError, newURIError, newWeakMap, newWeakSet, omit, pick, showDate, throttle, toArray, toDate, toDecimal, toFiniteNumber, toFixed, toFunction, toInteger, toMap, toNumber, toObject, toPromise, toRegExp, toSet, toSymbol, toSymbolFor, toWeakMap, toWeakSet, today, tomorrow, underCase, uniquer, upperCase, yesterday };
