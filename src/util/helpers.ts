import { Vue } from 'vue/types/vue'
import { VNode, VNodeDirective, FunctionalComponentOptions } from 'vue/types'

export function createSimpleFunctional (
  c: string,
  el = 'div',
  name?: string
): FunctionalComponentOptions {
  return {
    name: name || c.replace(/__/g, '-'),

    functional: true,

    render (h, { data, children }): VNode {
      data.staticClass = (`${c} ${data.staticClass || ''}`).trim()

      return h(el, data, children)
    }
  }
}

export function filterObjectOnKeys<T, K extends keyof T> (obj: T, keys: K[]): { [N in K]: T[N] } {
  const filtered = {} as { [N in K]: T[N] }

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    if (typeof obj[key] !== 'undefined') {
      filtered[key] = obj[key]
    }
  }

  return filtered
}
