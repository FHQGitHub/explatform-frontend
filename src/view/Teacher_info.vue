<template>
    <md-content class="md-scrollbar page-container md-layout-column" style="min-height:100vh">
    <!-- header -->
    <Header v-bind:show-button="true"></Header>
    <!-- container -->
    <md-content style="height:95vh!important">
      <md-empty-state
        v-if="this.experiment==''"
        md-icon="book"
        md-label="未找到实验"
        md-description="可能是网络质量不佳，请耐心等待">
      </md-empty-state>

      <TeacherList v-else v-bind:info="this.experiment"></TeacherList>
    
    </md-content>
    <md-snackbar :md-position="'center'" :md-active.sync="showToast" md-persistent>
        <span>抱歉，服务器吃饭去了，请重试</span>
        <md-button class="md-primary" @click="showToast = false">重试</md-button>
      </md-snackbar>
    <!-- footer -->
    <Footer></Footer>
  </md-content>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import TeacherList from "../components/TeacherList.vue";

import exp_form from "../template/student_form";
export default {
  name: "Info",
  components: {
    Header,
    Footer,
    TeacherList
  },
  data: () => ({
    showToast:false,
    search: null,
    searched: [],
    experiment: []
  }),
  methods: {},
  mounted:async function() {
      if(typeof(this.$store.state.Exp)!="undefined"){
        this.experiment=this.$store.state.Exp
        console.log(this.$store.state.Exp)
      }else{
        let data
        let delay=setTimeout(()=>{
          this.showToast=true
          data=""
          data=(data!==""?data:exp_form)
          this.$store.commit("setExp",JSON.stringify(data))
          this.experiment=this.$store.state.Exp
        },2000)

        data=await this.$dataSource.tGetExp("17040318")
        console.log(data)
        // data=await this.$dataSource.sGetExp(this.$store.state.user_type,this.$route.query.info_id)
        // data.status==0
        if(data.status==0){
          clearInterval(delay)
          data=''
          this.showToast=true
          this.$store.commit("setExp",JSON.stringify(exp_form))
          this.experiment=this.$store.state.Exp
        }else{
          clearInterval(delay)
          data=data.info
          // data=exp_form
          console.log(data)
          this.experiment=data
          this.$store.commit("setExp",JSON.stringify(data))

        }
      }
  }
};
</script>

<style>
md-table-content {
  height: 80vh !important;
  max-height: 100vh !important;
}
</style>
