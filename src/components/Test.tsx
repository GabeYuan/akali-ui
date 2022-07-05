import { defineComponent, ref, withModifiers } from 'vue'

// 1.函数式组件
// export default () => <div>Test123</div>

// 2.defineComponent
// export default defineComponent({
//     render() {
//         return <div>Test123</div>
//     }
// })

// 3.defineComponent({setup() {}})
// 摒弃this， 对于ts支持最好
// 借助 babel-plugin-jsx
// vue 独特概念： 修饰符，slot, directive, emit
export default defineComponent({
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    }
  },
  emit: ['iclick'],
  setup(props, { slots, emit }) {
    const count = ref(0)
    const inc = () => {
      count.value++
      emit('iclick', count)
    }

    const list = ref<string[]>(['a', 'b', 'c'])

    return () => {
      // v-if
      const span = true ? <span>A</span> : <span>B</span>
      return (
        <div onClick={withModifiers(inc, ['self'])}>
          test: {count.value}
          <input type="text" v-focus v-model={count.value}></input>
          <div>{span}</div>
          <ul>
            {list.value.map(str => {
              return <li key={str}>{str}</li>
            })}
          </ul>
          {/* 默认插槽内容 */}
          <div>{slots.default ? slots.default() : 'default content'}</div>
          <div>{slots.title ? slots.title() : 'default title'}</div>
          {/* <Test v-slot={{
                    title: () => <h3>title</h3>
                }}>abc</Test> */}
        </div>
      )
    }
  }
})
