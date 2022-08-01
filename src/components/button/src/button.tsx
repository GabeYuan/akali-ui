import { defineComponent, toRefs } from 'vue'
import { ButtonProps, buttonProps } from './button-type'

export default defineComponent({
  name: 'JuButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, disabled, block } = toRefs(props)

    return () => {
      const defaulSlot = slots.default ? slots.default() : '按钮'
      // block
      const blockCls = block.value ? 's-btn--block' : ''
      return (
        <button
          disabled={disabled.value}
          class={`s-btn s-btn--${type.value} s-btn--${size.value} ${blockCls}`}
        >
          {defaulSlot}
        </button>
      )
    }
  }
})
