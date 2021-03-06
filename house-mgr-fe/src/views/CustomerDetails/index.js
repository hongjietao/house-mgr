import { defineComponent, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { result, formatTimestamp } from '@/helpers/utils'
import { customer } from '@/service'
import { message } from 'ant-design-vue'
import Update from '@/views/Customer/Update/index.vue';

export default defineComponent({
  components: {
    Update,
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const id = route.params.id
    const showUpdateModal = ref(false);
    const detailInfo = ref({
      meta:{}
    })

    const getDetail = async () => {
      const res = await customer.detail(id)
      result(res)
        .success(({ data }) => {
          detailInfo.value = data
        })
    }

    const remove = async () => {
      const res = await customer.remove(id)

      result(res)
        .success(({ msg }) => {
          message.success(msg)
          router.replace("/customer-list")
        })
    }

    const update = (good) => {
      Object.assign(detailInfo.value, good);
    };

    onMounted(() => {
      getDetail()
    })

    return {
      d: detailInfo,
      remove,
      showUpdateModal,
      update,
      formatTimestamp,
    }
  }
})
