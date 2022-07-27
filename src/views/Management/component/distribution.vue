<template>
  <div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <el-tree
        :data="data"
        show-checkbox
        node-key="id"
        ref="tree"
        :default-checked-keys="userSelIds"
        :props="defaultProps"
        default-expand-all
      >
      </el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="save">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getAllPermissions } from '../../../api/role'
export default {
  name: 'DistriBution',
  props: {
    info: {
      type: Object
    }
  },
  data() {
    return {
      dialogVisible: false,
      data: [],
      defaultProps: {
        children: 'children',
        label: 'authName'
      },
      userSelIds: []
    }
  },
  created() {
    this.getAllPermissions()
  },
  watch: {
    info(val) {
      console.log(val, 'val')
      this.userSelIds = []
      this.showEdits(val.children, val)
    }
  },
  methods: {
    save() {
      console.log(this.$refs.tree.getCheckedKeys())
      // console.log(this.userSelIds)
    },
    async getAllPermissions() {
      const res = await getAllPermissions('tree')
      // console.log(res)
      this.data = res.data
    },
    showEdits(data, preList = []) {
      data.forEach((e) => {
        if (e.children) {
          this.showEdits(e.children, e)
        } else {
          console.log(preList, 'preList')
          preList.children.forEach((e) => {
            this.userSelIds.push(e.id)
          })
          this.userSelIds = [...new Set(this.userSelIds)]
        }
      })
    }
  }
}
</script>

<style></style>
