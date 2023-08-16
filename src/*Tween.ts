const Core = {
  getPowIn(n: number) {
    return (t: number) => {
      return Math.pow(t, n)
    }
  },
  getPowOut(n: number) {
    return (t: number) => {
      return 1 - Math.pow(1 - t, n)
    }
  },
  getPowInOut(n: number) {
    return (t: number) => {
      if ((t *= 2) < 1) {
        return 0.5 * Math.pow(t, n)
      }
      return 1 - 0.5 * Math.abs(Math.pow(2 - t, n))
    }
  },
  getBackIn(n: number) {
    return (t: number) => {
      return t * t * ((n + 1) * t - n)
    }
  },
  getBackOut(n: number) {
    return (t: number) => {
      return (t -= 1) * t * ((n + 1) * t + n) + 1
    }
  },
  getBackInOut(n: number) {
    return (t: number) => {
      if ((t *= 2) < 1) {
        return 0.5 * (t * t * (((n *= 1.525) + 1) * t - n))
      }
      return 0.5 * ((t -= 2) * t * (((n *= 1.525) + 1) * t + n) + 2)
    }
  },
  getElasticIn(n: number, p: number) {
    return (t: number) => {
      if (t === 0 || t === 1) {
        return t
      }
      const s = (p / (Math.PI * 2)) * Math.asin(1 / n)
      return -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - s) * (Math.PI * 2)) / p))
    }
  },
  getElasticOut(n: number, p: number) {
    return (t: number) => {
      if (t === 0 || t === 1) {
        return t
      }
      const s = (p / (Math.PI * 2)) * Math.asin(1 / n)
      return n * Math.pow(2, -10 * t) * Math.sin(((t - s) * (Math.PI * 2)) / p) + 1
    }
  },
  getElasticInOut(n: number, p: number) {
    return (t: number) => {
      if ((t *= 2) < 1) {
        const s = (p / (Math.PI * 2)) * Math.asin(1 / n)
        return -0.5 * (n * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - s) * (Math.PI * 2)) / p))
      }
      const s = (p / (Math.PI * 2)) * Math.asin(1 / n)
      return n * Math.pow(2, -10 * (t -= 1)) * Math.sin(((t - s) * (Math.PI * 2)) / p) * 0.5 + 1
    }
  }
}

export const Tween = {
  linear(t: number) {
    return t
  },
  scroll(t: number) {
    return 2 * t - t * t
  },
  quadIn(t: number) {
    return Core.getPowIn(2)(t)
  },
  quadOut(t: number) {
    return Core.getPowOut(2)(t)
  },
  quadInOut(t: number) {
    return Core.getPowInOut(2)(t)
  },
  cubicIn(t: number) {
    return Core.getPowIn(3)(t)
  },
  cubicOut(t: number) {
    return Core.getPowOut(3)(t)
  },
  cubicInOut(t: number) {
    return Core.getPowInOut(3)(t)
  },
  quartIn(t: number) {
    return Core.getPowIn(4)(t)
  },
  quartOut(t: number) {
    return Core.getPowOut(4)(t)
  },
  quartInOut(t: number) {
    return Core.getPowInOut(4)(t)
  },
  quintIn(t: number) {
    return Core.getPowIn(5)(t)
  },
  quintOut(t: number) {
    return Core.getPowOut(5)(t)
  },
  quintInOut(t: number) {
    return Core.getPowInOut(5)(t)
  },
  sineIn(t: number) {
    return 1 - Math.cos((t * Math.PI) / 2)
  },
  sineOut(t: number) {
    return Math.sin((t * Math.PI) / 2)
  },
  sineInOut(t: number) {
    return -0.5 * (Math.cos(Math.PI * t) - 1)
  },
  circIn(t: number) {
    return -(Math.sqrt(1 - t * t) - 1)
  },
  circOut(t: number) {
    return Math.sqrt(1 - (t -= 1) * t)
  },
  circInOut(t: number) {
    if ((t *= 2) < 1) {
      return -0.5 * (Math.sqrt(1 - t * t) - 1)
    }
    return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
  },
  backIn(t: number) {
    return Core.getBackIn(1.7)(t)
  },
  backOut(t: number) {
    return Core.getBackOut(1.7)(t)
  },
  backInOut(t: number) {
    return Core.getBackInOut(1.7)(t)
  },
  expoIn(t: number) {
    if (t === 0) {
      return 0
    }
    return Math.pow(2, 10 * (t - 1))
  },
  expoOut(t: number) {
    if (t === 1) {
      return 1
    }
    return -Math.pow(2, -10 * t) + 1
  },
  expoInOut(t: number) {
    if (t === 0) {
      return 0
    }
    if (t === 1) {
      return 1
    }
    if ((t *= 2) < 1) {
      return Math.pow(2, 10 * (t - 1)) / 2
    }
    if ((t *= 2) >= 1) {
      return (-Math.pow(2, -10 * --t) + 2) / 2
    }
  },
  elasticIn(t: number) {
    return Core.getElasticIn(1, 0.3)(t)
  },
  elasticOut(t: number) {
    return Core.getElasticOut(1, 0.3)(t)
  },
  elasticInOut(t: number) {
    return Core.getElasticInOut(1, 0.3 * 1.5)(t)
  },
  bounceIn(t: number) {
    if (t > 1 - 1 / 2.75) {
      return 1 - 7.5625 * (1 - t) * (1 - t)
    }
    if (t > 1 - 2 / 2.75) {
      return 1 - (7.5625 * (1 - (t += 1.5 / 2.75)) * (1 - t) + 0.75)
    }
    if (t > 1 - 2.5 / 2.75) {
      return 1 - (7.5625 * (1 - (t += 2.25 / 2.75)) * (1 - t) + 0.9375)
    }
    return 1 - (7.5625 * (1 - (t += 2.625 / 2.75)) * (1 - t) + 0.984375)
  },
  bounceOut(t: number) {
    if (t < 1 / 2.75) {
      return 7.5625 * t * t
    }
    if (t < 2 / 2.75) {
      return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
    }
    if (t < 2.5 / 2.75) {
      return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
    }
    return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375
  },
  bounceInOut(t: number) {
    if (t < 0.5) {
      return Tween.bounceIn(t * 2) * 0.5
    }
    return Tween.bounceOut(t * 2 - 1) * 0.5 + 0.5
  }
}

export default { ...Tween }
