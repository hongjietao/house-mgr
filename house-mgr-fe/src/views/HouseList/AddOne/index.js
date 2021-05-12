import { defineComponent, reactive } from 'vue'
import { book } from '@/service'
import { result, clone } from '@/helpers/utils'
import { message } from 'ant-design-vue'

const defaultForm = {
  // _id: 'asdasd',
  city: '西京',
  neighborhood: '春秋小区',
  floor: 12,
  floor_plan_room: '3室',
  area: 129,
  facing: '西北',
}

export default defineComponent({
  props: {
    show: Boolean
  },
  setup(props, context){
    const addForm = reactive(clone(defaultForm))

    const submit = async () => {
      // const form = clone(addForm)
      // form.publishDate = addForm.publishDate.valueOf()
      // console.log(form)
      // const res = await book.add(form)

      // result(res)
      //   .success((d, { data }) => {
      //     Object.assign(addForm, defaultForm)
      //     message.success(data.msg)
      //   })
    }

    const close = () => {
      context.emit("update:show", false)
    }

    return {
      addForm,
      submit,
      props,
      close,
    }
  }

})
