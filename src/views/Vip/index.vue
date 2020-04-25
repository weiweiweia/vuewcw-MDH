<template>
  <div class="page-vip">
    <normal-header title="VIP专区"></normal-header>

    <div class="vip-main">
      <cartoon-list :list="cartoonList"></cartoon-list>
    </div>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import CartoonList from '@/components/CartoonList'
import { unformat } from '@/utils/apiHeader.js'
import { getVIPList } from '@/api/cartoon.js'
export default {
  name: 'Vip',
  data () {
    return {
      VIPList: []
    }
  },

  components: {
    NormalHeader,
    CartoonList
  },
  computed: {
    cartoonList () {
      return this.VIPList.map(item => {
        return {
          id: item.bigbook_id,
          coverurl: item.coverurl,
          name: item.bigbook_name,
          author: item.bigbook_author,
          view: item.bigbookview
        }
      })
    }
  },
  methods: {
    getVIPList () {
      getVIPList()
        .then(res => {
          if (res.code === 200) {
            // 解码与解析
            const info = JSON.parse(unformat(res.info))
            this.VIPList = info.comicsList
            console.log(this.VIPList)
          }
        })
    }
  },
  created () {
    this.getVIPList()
  }
}
</script>

<style lang="scss" scoped>
.page-vip {
  display: flex;
  flex-direction: column;
  height: 100%;

  .vip-main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
