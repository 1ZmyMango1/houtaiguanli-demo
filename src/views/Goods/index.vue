<template>
  <div class="user">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="title-user">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>

    <div style="margin: 0 16px">
      <div class="user-content">
        <div style="margin-top: 15px">
          <el-input
            placeholder="请输入内容"
            v-model="input3"
            class="input-with-select"
          >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <el-button type="primary" class="btn-user" @click="add('add')"
          >添加商品</el-button
        >
      </div>
      <el-table
        border
        :data="tableData"
        style="margin-top: 20px"
        class="table-user"
      >
        <el-table-column label="#" width="180" type="index"> </el-table-column>
        <el-table-column label="商品名称" width="180" prop="goods_name">
        </el-table-column>
        <el-table-column label="商品价格（元）" prop="goods_price">
        </el-table-column>
        <el-table-column label="商品重量" prop="goods_number">
        </el-table-column>
        <el-table-column label="创建时间" prop="add_time"> </el-table-column>

        <el-table-column label="操作" width="220">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-edit"
              @click="add('edit', scope.row)"
              >编辑</el-button
            >
            <el-button
              type="danger"
              size="mini"
              icon="el-icon-delete"
              @click="handleDelete(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getGoodsList } from '../../api/goods'
// import AddGoods from './add.vue'
export default {
  components: {
    // AddGoods
  },
  data() {
    return {
      tableData: [],
      input3: '',
      info: {
        type: '',
        data: null
      }
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    async getGoodsList() {
      const data = {
        query: '',
        pagenum: 1,
        pagesize: 10
      }
      const res = await getGoodsList(data)
      // console.log(res, 'getGoods')
      this.tableData = res.data.goods
    },
    // 添加 编辑
    add(type, data) {
      this.info = {
        type: '',
        data: null
      }
      this.info.type = type
      if (data) {
        this.info.data = data
      }
      console.log(type, data)
      this.$router.push({
        path: '/goods/addGoods'
      })
    }
  }
}
</script>

<style scoped lang="less">
.user {
  // width: 100vw;
}
.title-user {
  width: 100%;
  height: 40px;
  background-color: #eaedf1;
  line-height: 40px;
}

.user-content {
  // padding-left: 1%;
  display: flex;
}

.input-search {
}

.search-user {
  background-color: #f5f7fa;
}

.btn-user {
  height: 40px;
  margin-top: 15px;
  margin-left: 10px;
}

// .table-user {
//   margin-left: 18px;
//   width: 500px;
// }
</style>
