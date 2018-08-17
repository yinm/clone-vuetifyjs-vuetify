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

