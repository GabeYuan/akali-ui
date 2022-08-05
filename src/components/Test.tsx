import { defineComponent, ExtractPropTypes } from 'vue'

export const testProps = {
  msg: {
    type: String,
    default: 'hh'
  }
} as const
export type TestProps = ExtractPropTypes<typeof testProps>

export default defineComponent({
  props: testProps,
  setup(props: TestProps) {
    return () => {
      return <div>{props.msg}</div>
    }
  }
})
