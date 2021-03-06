import { shallowMount, mount } from '@vue/test-utils'
import Coffee from './resources/Coffee.vue'
import CoffeeScript from './resources/CoffeeScript.vue'
import CoffeeES6 from './resources/CoffeeES6.vue'
import CoffeeScriptES6 from './resources/CoffeeScriptES6.vue'

describe('Test CoffeeScript - coffee.spec.js', () => {
  test('processes .vue file with lang set to coffee', () => {
    shallowMount(Coffee)
  })

  test('processes .vue file with lang set to coffeescript', () => {
    shallowMount(CoffeeScript)
  })

  test('processes .vue file with lang set to coffee (ES6)', () => {
    shallowMount(CoffeeES6)
  })

  test('processes .vue file with lang set to coffeescript (ES6)', () => {
    shallowMount(CoffeeScriptES6)
  })

  test('processes .vue file with lang set to coffeescript (ES6)', () => {
    const wrapper = mount(CoffeeScriptES6)
    expect(typeof wrapper).toBe('object')
  })
})
