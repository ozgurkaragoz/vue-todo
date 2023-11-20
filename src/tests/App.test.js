import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import App from '@/App.vue'

test('add item', async () => {
  const wrapper = mount(App)
  const input = wrapper.find('input')
  await input.setValue('New Todo')
  await input.trigger('keyup.enter')
  expect(wrapper.vm.items).toContain('New Todo')
})