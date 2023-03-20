<template>
  <div ref="editorWang" style="text-align:left">
    wenb
  </div>
</template>

<script>
import { stringify } from 'querystring';
import wangEditor from 'wangeditor'
export default {
  data() {
    return {
      editor: null,// editor 对象
      editorData: '//承载编辑器数据'
    }
  },
  props: {
    currentEditorData: {
      type: stringify,
      default: ""
    },

  },
  watch:{
   currentEditorData(newVal,oldVal){
    this.editor.txt.html(newVal)
   }
  },
  mounted() {
    this.editor = new wangEditor(this.$refs.editorWang);
    //配置 onchange 回调函数，将数据同步到 vue中
    this.editor.config.onchange = (newHtml) => {
      this.editorData = newHtml
      this.$emit("onEditor", this.editorData)
    }

    //自定义菜单配置
    this.editor.config.menus = [
      "head",//标题
      "bold",//粗体
      "fontsize",//字号
      "fontName",//字体
      "italic",//斜体
      "underline",//下划线
      "strikeThrough", //删除线
      "foreColor",//文字颜色
      "backcolor", // 背景颜色
      "link",// 插入链接
      "1ist", // 万表
      "justify",//对齐方式
      "quote",// 引用
      "emoticon",// 表情
      "image",// 插入图片
      "table",// 表格
      "code",//插入代码
      "undo",// 撤销
      "redo"//重复


    ]

    this.editor.create();//创建编辑器
  },
  beforeDestroy() {
    //调用销毁API 对当前编辑器实例进行销毁
    this.editor.destroy()
    this.editor = null
  }
}
</script>

<style></style>