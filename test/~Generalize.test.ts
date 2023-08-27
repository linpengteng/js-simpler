import js from '../src/~Generalize'


describe('Test Generalize', () => {
  /**
   * Test omit
   */
  test('Test omit when accept { a: "a", b: "b" }', () => {
    const obj = { a: 'a', b: 'b' }
    expect(js.omit(obj)).not.toBe(obj)
    expect(js.omit(obj)).toEqual(obj)
  })

  test('Test omit when accept { a: "a", b: "b" }, "a"', () => {
    const obj = { a: 'a', b: 'b' }
    expect(js.omit(obj, 'a')).toEqual({ b: 'b' })
  })

  test('Test omit when accept { a: "a", b: "b" }, [], 0', () => {
    const obj = { a: 'a', b: 'b' }
    expect(js.omit(obj, [], 0)).toBe(obj)
  })

  test('Test omit when accept ["a", "b", "c", ["d", "e", "f"]], [0, /1/]', () => {
    const ref = ['d', 'e', 'f']
    const val = ['a', 'b', 'c', ref]
    const arr = [0, /1/]
    expect(js.omit(val, arr)).toEqual(['c', ref])
  })

  test('Test omit when accept { a: "a", b: "b", c: { a: "a", b: "b" }, [/a/]', () => {
    const obj = {
      a: 'a',
      b: 'b',
      c: { a: 'a', b: 'b' }
    }
    const arr = [/a/]
    expect(js.omit(obj, arr).c).toBe(obj.c)
    expect(js.omit(obj, arr)).toEqual({ b: 'b', c: { a: 'a', b: 'b' } })
  })

  test('Test omit when accept { a: "a", b: "b", c: { a: "a", b: "b" }, ["a"], true', () => {
    const obj = {
      a: 'a',
      b: 'b',
      c: { a: 'a', b: 'b' }
    }
    const arr = ['a']
    expect(js.omit(obj, arr, true).c).toEqual({ b: 'b' })
    expect(js.omit(obj, arr, true)).toEqual({ b: 'b', c: { b: 'b' } })
  })

  test('Test omit when accept { a: "a", b: "b", c: { a: "a", b: "b" }, ["a"], false', () => {
    const obj = {
      a: 'a',
      b: 'b',
      c: { a: 'a', b: 'b' }
    }
    const arr = ['a']
    expect(js.omit(obj, arr, false).c).toBe(obj.c)
    expect(js.omit(obj, arr, false)).toEqual({ b: 'b', c: { a: 'a', b: 'b' } })
  })

  test('Test omit when accept { a: "a", b: "b", c: { a: "a", b: "b" }, ["a"], 2', () => {
    const obj = {
      a: 'a',
      b: 'b',
      c: { a: 'a', b: 'b' },
      d: { a: 'a', b: 'b', c: { a: 'a', b: 'b' } }
    }
    const arr = ['a']
    expect(js.omit(obj, arr, 2).c).toEqual({ b: 'b' })
    expect(js.omit(obj, arr, 2).d.c).toBe(obj.d.c)
  })

  test('Test omit when accept { a: "a", b: "b", c: { a: "a", b: "b" }, ["a"], 1', () => {
    const obj = {
      a: 'a',
      b: 'b',
      c: { a: 'a', b: 'b' }
    }
    const arr = ['a']
    expect(js.omit(obj, arr, 1).c).toBe(obj.c)
    expect(js.omit(obj, arr, 1)).toEqual({ b: 'b', c: { a: 'a', b: 'b' } })
  })

  test('Test omit when accept { a: "a", b: "b", c: { a: "a", b: "b" }, ["a"], 0', () => {
    const obj = {
      a: 'a',
      b: 'b',
      c: { a: 'a', b: 'b' }
    }
    const arr = ['a']
    expect(js.omit(obj, arr, 0)).toBe(obj)
  })


  /**
   * Test pick
   */
  test('Test pick when accept { a: "a", b: "b" }', () => {
    const obj = { a: 'a', b: 'b' }
    expect(js.pick(obj)).not.toBe(obj)
    expect(js.pick(obj)).toEqual(obj)
  })

  test('Test pick when accept { a: "a", b: "b" }, "a"', () => {
    const obj = { a: 'a', b: 'b' }
    expect(js.pick(obj, 'a')).toEqual({ a: 'a' })
  })

  test('Test pick when accept { a: "a", b: "b" }, [], 0', () => {
    const obj = { a: 'a', b: 'b' }
    expect(js.pick(obj, [], 0)).toBe(obj)
  })

  test('Test pick when accept ["a", "b", "c"], [0, "2"]', () => {
    const val = ['a', 'b', 'c']
    const arr = [0, '2']
    expect(js.pick(val, arr)).toEqual(['a', 'c'])
  })

  test('Test pick when accept ["a", "b", "c", ["d", "e", "f"]], [0, "2", /3/]', () => {
    const ref = ['d', 'e', 'f']
    const val = ['a', 'b', 'c', ref]
    const arr = [0, '2', /3/]
    expect(js.pick(val, arr)).toEqual(['a', 'c', ref])
  })

  test('Test pick when accept { a: "a", b: "b", c: { a: "a", b: "b" }, ["a", /c/]', () => {
    const obj = {
      a: 'a',
      b: 'b',
      c: { a: 'a', b: 'b' }
    }
    const arr = ['a', /c/]
    expect(js.pick(obj, arr).c).toBe(obj.c)
    expect(js.pick(obj, arr)).toEqual({ a: 'a', c: { a: 'a', b: 'b' } })
  })

  test('Test pick when accept { a: "a", b: "b", c: { a: "a", b: "b" }, ["a", "c"], true', () => {
    const obj = {
      a: 'a',
      b: 'b',
      c: { a: 'a', b: 'b' }
    }
    const arr = ['a', 'c']
    expect(js.pick(obj, arr, true).c).toEqual({ a: 'a' })
    expect(js.pick(obj, arr, true)).toEqual({ a: 'a', c: { a: 'a' } })
  })

  test('Test pick when accept { a: "a", b: "b", c: { a: "a", b: "b" }, ["a", "c"], false', () => {
    const obj = {
      a: 'a',
      b: 'b',
      c: { a: 'a', b: 'b' }
    }
    const arr = ['a', 'c']
    expect(js.pick(obj, arr, false).c).toBe(obj.c)
    expect(js.pick(obj, arr, false)).toEqual({ a: 'a', c: { a: 'a', b: 'b' } })
  })

  test('Test pick when accept { a: "a", b: "b", c: { a: "a", b: "b" }, ["a", "c", "d"], 2', () => {
    const obj = {
      a: 'a',
      b: 'b',
      c: { a: 'a', b: 'b' },
      d: { a: 'a', b: 'b', c: { a: 'a', b: 'b' } }
    }
    const arr = ['a', 'c', 'd']
    expect(js.pick(obj, arr, 2)).toEqual({ a: 'a', c: { a: 'a' }, d: { a: 'a', c: { a: 'a', b: 'b' } } })
    expect(js.pick(obj, arr, 2).c).toEqual({ a: 'a' })
    expect(js.pick(obj, arr, 2).d.c).toBe(obj.d.c)
  })

  test('Test pick when accept { a: "a", b: "b", c: { a: "a", b: "b" }, ["a", "c"], 1', () => {
    const obj = {
      a: 'a',
      b: 'b',
      c: { a: 'a', b: 'b' }
    }
    const arr = ['a', 'c']
    expect(js.pick(obj, arr, 1).c).toBe(obj.c)
    expect(js.pick(obj, arr, 1)).toEqual({ a: 'a', c: { a: 'a', b: 'b' } })
  })

  test('Test pick when accept { a: "a", b: "b", c: { a: "a", b: "b" }, ["a", "c"], 0', () => {
    const obj = {
      a: 'a',
      b: 'b',
      c: { a: 'a', b: 'b' }
    }
    const arr = ['a', 'c']
    expect(js.pick(obj, arr, 0)).toBe(obj)
  })

  test('Test pick when accept { a: "a", b: "b", c: { a: "a", b: "b" }, ["a"], 1', () => {
    const obj = {
      a: 'a',
      b: 'b',
      c: { a: 'a', b: 'b' }
    }
    const arr = ['a']
    expect(js.pick(obj, arr, 1).c).toBe(undefined)
    expect(js.pick(obj, arr, 1)).toEqual({ a: 'a' })
  })


  /**
   * Test clone
   */
  test('Test clone when accept "text"', () => {
    const text = 'text'
    expect(js.clone(text)).toBe(text)
  })

  test('Test clone when accept /\\w/', () => {
    const val = /\w/
    expect(js.clone(val)).not.toBe(val)
    expect(js.clone(val)).toEqual(val)
  })

  test('Test clone when accept { a: "a" }', () => {
    const obj = { a: 'a' }
    expect(js.clone(obj)).not.toBe(obj)
    expect(js.clone(obj)).toEqual(obj)
  })

  test('Test clone when accept { a: "a", ref: ref }', () => {
    const ref = { key: 'value' }
    const obj = { a: 'a', ref: ref }
    const result = js.clone(obj)
    expect(result.ref).toBe(ref)
    expect(result).not.toBe(obj)
    expect(result).toEqual(result)
  })

  test('Test clone when accept { a: "a", ref: ref, other: { ref: ref } }, true', () => {
    const ref = { ref: 'ref' }
    const obj = { a: 'a', ref: ref, other: { ref: ref } }
    const clone = js.clone(obj, true)

    expect(clone.ref).toBe(clone.other.ref)
    expect(clone.ref).not.toBe(ref)
    expect(clone).not.toBe(obj)
    expect(clone).toEqual(obj)
  })

  test('Test clone when accept ["a", "b"]', () => {
    const arr = ['a', 'b']
    expect(js.clone(arr)).not.toBe(arr)
    expect(js.clone(arr)).toEqual(arr)
  })

  test('Test clone when accept new Date(1692979200000)', () => {
    const val = new Date(1692979200000)
    expect(js.clone(val)).not.toBe(val)
    expect(js.clone(val)).toEqual(val)
  })

  test('Test clone when accept new Map([["a", { a: "a" }]])', () => {
    const map = new Map([['a', { a: 'a' }]])
    expect(js.clone(map)).not.toBe(map)
    expect(js.clone(map)).toEqual(map)
  })

  test('Test clone when accept new Set([{ a: "a" }])', () => {
    const set = new Set([{ a: 'a' }])
    expect(js.clone(set)).not.toBe(set)
    expect(js.clone(set)).toEqual(set)
  })


  /**
   * Test equal
   */
  test('Test equal when accept {}, []', () => {
    expect(js.equal({}, [])).toBeFalsy()
  })

  test('Test equal when accept NaN, NaN', () => {
    expect(js.equal(NaN, NaN)).toBeTruthy()
  })

  test('Test equal when accept "text", "text"', () => {
    expect(js.equal('text', 'text')).toBeTruthy()
  })

  test('Test equal when accept 0.1 + 0.2, 0.3', () => {
    expect(js.equal(0.1 + 0.2, 0.3)).toBeTruthy()
  })

  test('Test equal when accept /Test/, /Test/', () => {
    expect(js.equal(/Test/, /Test/)).toBeTruthy()
  })

  test('Test equal when accept ["a", "b"], ["a", "b", "c"]', () => {
    expect(js.equal(['a', 'b'], ['a', 'b', 'c'])).toBeFalsy()
  })

  test('Test equal when accept { a: "a" }, { a: "a", b: "b" }', () => {
    expect(js.equal({ a: 'a' }, { a: 'a', b: 'b' })).toBeFalsy()
  })

  test('Test equal when accept new Date(2023), new Date(2023)', () => {
    expect(js.equal(new Date(2023), new Date(2023))).toBeTruthy()
  })

  test('Test equal when accept Symbol.for("Test"), Symbol.for("Test")', () => {
    expect(js.equal(Symbol.for('Test'), Symbol.for('Test'))).toBeTruthy()
  })

  test('Test equal when accept new Set([{ b: "b" }]), new Set([{ b: "b" }])', () => {
    expect(js.equal(new Set([{ b: 'b' }]), new Set([{ b: 'b' }]), true)).toBeTruthy()
  })

  test('Test equal when accept new Map([["a", { b: "b" }]]), new Map([["a", { b: "b" }]])', () => {
    expect(js.equal(new Map([['a', { b: 'b' }]]), new Map([['a', { b: 'b' }]]), true)).toBeTruthy()
  })

  test('Test equal when accept { a: "a", b: "b", c: { d: "d" } }, { a: "a", b: "b", c: { d: "d" } }, true', () => {
    expect(js.equal({ a: 'a', b: 'b', c: { d: 'd' } }, { a: 'a', b: 'b', c: { d: 'd' } }, true)).toBeTruthy()
  })

  test('Test equal when accept { a: "a", b: "b", c: { d: "d" } }, { a: "a", b: "b", c: { d: "d" } }, false', () => {
    expect(js.equal({ a: 'a', b: 'b', c: { d: 'd' } }, { a: 'a', b: 'b', c: { d: 'd' } }, false)).toBeFalsy()
  })

  test('Test equal when accept { a: "a", b: "b", c: { d: "d" } }, { a: "a", b: "b", c: { d: "d", e: "e" } }, true', () => {
    expect(js.equal({ a: 'a', b: 'b', c: { d: 'd' } }, { a: 'a', b: 'b', c: { d: 'd', e: 'e' } }, true)).toBeFalsy()
  })

  test('Test equal when accept { a: "a", b: "b", c: { d: "d" } }, { a: "a", b: "b", c: { d: "d", e: "e" } }, { include: ["a", /b/] }', () => {
    expect(js.equal({ a: 'a', b: 'b', c: { d: 'd' } }, { a: 'a', b: 'b', c: { d: 'd', e: 'e' } }, { include: ['a', /b/] })).toBeTruthy()
  })

  test('Test equal when accept { a: "a", b: "b", c: { d: "d" } }, { a: "a", b: "b", c: { d: "d", e: "e" } }, { exclude: [/b/, "c"] }', () => {
    expect(js.equal({ a: 'a', b: 'b1', c: { d: 'd' } }, { a: 'a', b: 'b2', c: { d: 'd', e: 'e' } }, { exclude: [/b/, 'c'] })).toBeTruthy()
  })

  test('Test equal when accept { a: "a", b: "b", c: { d: "d" } }, { a: "a", b: "b", c: { d: "d" } }, { strict: [/a/, "c"], deep: true }', () => {
    expect(js.equal({ a: 'a', b: 'b', c: { d: 'd' } }, { a: 'a', b: 'b', c: { d: 'd' } }, { strict: [/a/, 'c'], deep: true })).toBeFalsy()
  })

  test('Test equal when accept [{ a: "a" }, { b: "b" }, { c: { d: "d" } }], [{ a: "a" }, { b: "b" }, { c: { d: "d" } }], true', () => {
    expect(js.equal([{ a: 'a' }, { b: 'b' }, { c: { d: 'd' } }], [{ a: 'a' }, { b: 'b' }, { c: { d: 'd' } }], true)).toBeTruthy()
  })

  test('Test equal when accept [{ a: "a" }, { b: "b" }, { c: { d: "d" } }], [{ a: "a" }, { b: "b" }, { c: { d: "d" } }], false', () => {
    expect(js.equal([{ a: 'a' }, { b: 'b' }, { c: { d: 'd' } }], [{ a: 'a' }, { b: 'b' }, { c: { d: 'd' } }], false)).toBeFalsy()
  })

  test('Test equal when accept [{ a: "a" }, { b: "b" }, { c: { d: "d" } }], [{ a: "a" }, { b: "b" }, { c: { d: "d", e: "e"  } }], true', () => {
    expect(js.equal([{ a: 'a' }, { b: 'b' }, { c: { d: 'd' } }], [{ a: 'a' }, { b: 'b' }, { c: { d: 'd', e: 'e' } }], true)).toBeFalsy()
  })

  test('Test equal when accept ["a", "b", { c: { d: "d" } }], ["a", "b", { c: { d: "d", e: "e"  } }], { include: ["0", /1/] }', () => {
    expect(js.equal(['a', 'b', { c: { d: 'd' } }], ['a', 'b', { c: { d: 'd', e: 'e' } }], { include: ['0', /1/] })).toBeTruthy()
  })

  test('Test equal when accept ["a", "b", { c: { d: "d" } }], ["a", "b", { c: { d: "d", e: "e"  } }], { exclude: ["1", /2/] }', () => {
    expect(js.equal(['a', 'b', { c: { d: 'd' } }], ['a', 'b', { c: { d: 'd', e: 'e' } }], { exclude: ['1', /2/] })).toBeTruthy()
  })

  test('Test equal when accept ["a", { b: "b" }, { c: { d: "d" } }], ["a", { b: "b" }, { c: { d: "d" } }], { strict: [/0/, "1"], deep: true }', () => {
    expect(js.equal(['a', { b: 'b' }, { c: { d: 'd' } }], ['a', { b: 'b' }, { c: { d: 'd' } }], { strict: [/0/, '1'], deep: true })).toBeFalsy()
  })


  /**
   * Test assign
   */
  test('Test assign when accept "target", "source"', () => {
    expect(js.assign('target', 'source')).toBe('target')
  })

  test('Test assign when accept ["a1", "b1", "c1"], ["a2", "b2"], { key: "test" }', () => {
    const target = ['a1', 'b1', 'c1']
    const result = js.assign(target, ['a2', 'b2'], { key: 'test' })
    expect(result).toEqual(['a2', 'b2', 'c1'])
    expect(result).toBe(target)
  })

  test('Test assign when accept { a: "a1", b: "b1" }, { a: "a2", c: "c1" }, ["test"]', () => {
    const target = { a: 'a1', b: 'b1' }
    const result = js.assign(target, { a: 'a2', c: 'c1' }, ['test'])
    expect(result).toEqual({ a: 'a2', b: 'b1', c: 'c1' })
    expect(result).toBe(target)
  })

  test('Test assign when accept new Map([["key", { a: "a1", b: "b1" }]]), new Map([["key", { a: "a2", c: "c1" }]])', () => {
    const target = new Map([['key', { a: 'a1', b: 'b1' }]])
    const result = js.assign(target, new Map([['key', { a: 'a2', c: 'c1' }]]))
    expect(result).toEqual(new Map([['key', { a: 'a2', c: 'c1' }]]))
    expect(result).toBe(target)
  })

  test('Test assign when accept new Map([["key", { a: "a1", b: "b1" }]]), new Map([["key", { a: "a2", c: "c1" }]]), true', () => {
    const target = new Map([['key', { a: 'a1', b: 'b1' }]])
    const result = js.assign(target, new Map([['key', { a: 'a2', c: 'c1' }]]), true)
    expect(result).toEqual(new Map([['key', { a: 'a2', b: 'b1', c: 'c1' }]]))
    expect(result).toBe(result)
  })

  test('Test assign when accept new Set([["key1", { a: "a1", b: "b1" }]]), new Set([["key2", { a: "a2", c: "c1" }]])', () => {
    const target = new Set([['key1', { a: 'a1', b: 'b1' }]])
    const result = js.assign(target, new Set([['key2', { a: 'a2', c: 'c1' }]]))
    expect(result).toEqual(new Set([['key2', { a: 'a2', c: 'c1' }]]))
    expect(result).toBe(target)
  })

  test('Test assign when accept new Set([["key1", { a: "a1", b: "b1" }]]), new Set([["key2", { a: "a2", c: "c1" }]]), true', () => {
    const target = new Set([['key1', { a: 'a1', b: 'b1' }]])
    const result = js.assign(target, new Set([['key2', { a: 'a2', c: 'c1' }]]), true)
    expect(result).toEqual(new Set([['key2', { a: 'a2', b: 'b1', c: 'c1' }]]))
    expect(result).toBe(target)
  })

  test('Test assign when accept { a: "a1", b: { b1: "b1" } }, { a: "a2", b: { b2: "b2" }, c: "c2", ref: ref, other: { ref: ref } }', () => {
    const ref = { key: 'value' }
    const target = { a: 'a1', b: { b1: 'b1' } } as any
    const result = js.assign(target, { a: 'a2', b: { b2: 'b2' }, c: 'c2', ref: ref, other: { ref: ref } })
    expect(result).toEqual({ a: 'a2', b: { b2: 'b2' }, c: 'c2', ref: { key: 'value' }, other: { ref: { key: 'value' } } })
    expect(result.ref).toBe(result.other.ref)
    expect(result.ref).toBe(ref)
    expect(result).toBe(target)
  })

  test('Test assign when accept { a: "a1", b: { b1: "b1" } }, { a: "a2", b: { b2: "b2" }, c: "c2", ref: ref, other: { ref: ref } }, true', () => {
    const ref = { key: 'value' }
    const target = { a: 'a1', b: { b1: 'b1' } } as any
    const result = js.assign(target, { a: 'a2', b: { b2: 'b2' }, c: 'c2', ref: ref, other: { ref: ref } }, true)
    expect(result).toEqual({ a: 'a2', b: { b1: 'b1', b2: 'b2' }, c: 'c2', ref: { key: 'value' }, other: { ref: { key: 'value' } } })
    expect(result.ref).toBe(result.other.ref)
    expect(result.ref).not.toBe(ref)
    expect(result).toBe(target)
  })

  test('Test assign when accept { a: "a1", b: { b1: "b1" } }, { a: "a2", b: { b2: "b2" }, c: "c2", ref1: ref, ref2: ref, other: { ref: ref } }, 2', () => {
    const ref = { key: 'value' }
    const target = { a: 'a1', b: { b1: 'b1' } } as any
    const result = js.assign(target, { a: 'a2', b: { b2: 'b2' }, c: 'c2', ref1: ref, ref2: ref, other: { ref: ref } }, 2)
    expect(result).toEqual({ a: 'a2', b: { b1: 'b1', b2: 'b2' }, c: 'c2', ref1: { key: 'value' }, ref2: { key: 'value' }, other: { ref: { key: 'value' } } })
    expect(result.ref1 === result.ref2).toBeTruthy()
    expect(result.other.ref).toEqual(result.ref1)
    expect(result.other.ref).not.toBe(result.ref1)
    expect(result.other.ref).toBe(ref)
    expect(result).toBe(target)
  })


  /**
   * Test deepAssign
   */
  test('Test deepAssign when accept { a: "a1", b: { b1: "b1" } }, { a: "a2", b: { b2: "b2" }, c: "c2", ref: ref, other: { ref: ref } }', () => {
    const ref = { key: 'value' }
    const target = { a: 'a1', b: { b1: 'b1' } } as any
    const result = js.deepAssign(target, { a: 'a2', b: { b2: 'b2' }, c: 'c2', ref: ref, other: { ref: ref } })
    expect(result).toEqual({ a: 'a2', b: { b1: 'b1', b2: 'b2' }, c: 'c2', ref: { key: 'value' }, other: { ref: { key: 'value' } } })
    expect(result.ref).toBe(result.other.ref)
    expect(result.ref).not.toBe(ref)
    expect(result).toBe(target)
  })


  /**
   * Test deepClone
   */
  test('Test deepClone when accept { a: "a", ref: ref, other: { ref: ref } }', () => {
    const ref = { ref: 'ref' }
    const obj = { a: 'a', ref: ref, other: { ref: ref } }
    const clone = js.deepClone(obj)

    expect(clone.ref).toBe(clone.other.ref)
    expect(clone.ref).not.toBe(ref)
    expect(clone).not.toBe(obj)
    expect(clone).toEqual(obj)
  })


  /**
   * Test deepEqual
   */
  test('Test deepEqual when accept [{ a: "a" }, { b: "b" }, { c: { d: "d" } }], [{ a: "a" }, { b: "b" }, { c: { d: "d" } }]', () => {
    expect(js.deepEqual([{ a: 'a' }, { b: 'b' }, { c: { d: 'd' } }], [{ a: 'a' }, { b: 'b' }, { c: { d: 'd' } }])).toBeTruthy()
  })
})
