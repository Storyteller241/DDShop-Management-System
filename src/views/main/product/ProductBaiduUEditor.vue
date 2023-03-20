<template>
  <vue-ueditor v-model="msg" ueditorPath="/public/UEditor/" @ready="editorReady"></vue-ueditor>
</template>

<script>
import VueUEditor from 'vue-ueditor';
export default {
  data() {
    return {
      msg: 'hello amdd',

    }
  },
  components: {
    VueUEditor,
  },
  methods:{
    editorReady(editorInstance){
      editorInstance.setContent('你好')
      editorInstance.addListener('contentChange',()=>{
        console.log('编辑器内容发生了变化:',editorInstance.getContent());
      })
    }
  }
}
</script>

<style></style>