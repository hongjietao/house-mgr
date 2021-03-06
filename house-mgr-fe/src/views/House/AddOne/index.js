import { defineComponent, reactive, onUpdated } from 'vue'
import { house } from '@/service'
import { result, clone } from '@/helpers/utils'
import { message } from 'ant-design-vue'
import store from '@/store'

const defaultForm = {
  city: '西京',
  neighborhood: '春秋小区',
  floor: 12,
  floor_plan_room: '3室',
  area: 129,
  facing: '西北',
  type: null, // 类型： 0: 出租，1: 销售
  price: 120, // 价格： 0: price 元/月,1:price 万元
  verify: 0, // 审核结果 0: 待审核， 1: 审核通过， 2： 审核不通过
  creater: '', // 创建人
}

export default defineComponent({
  props: {
    show: Boolean
  },
  setup(props, context){
    const addForm = reactive(clone(defaultForm))
    const { userInfo } = store.state
    onUpdated(() => {
      addForm.creater = userInfo.account
    })

    const close = () => {
      context.emit("update:show", false)
    }

    const submit = async () => {
      const form = clone(addForm)
      // form.publishDate = addForm.publishDate.valueOf()
      const res = await house.add(form)

      result(res)
        .success((d, { data }) => {
          Object.assign(addForm, defaultForm)
          message.success(data.msg)
          close()
        })
    }



    return {
      addForm,
      submit,
      props,
      close,
    }
  }

})
