<template>
  <v-app id="app">
    <BottomNav />
    <v-content class="content">
      <router-view :key="$route.fullPath" />
    </v-content>
    <div id="messages"></div>
    <Notification v-if="showNotification" :auctionLink="this.$store.state.notification.notis.url" :text="text" :key="text" />
    <PopupMessage />
    <BottomFooter />
  </v-app>
</template>

<script>
import BottomNav from "./components/BottomNav";
import BottomFooter from "./components/BottomFooter";
import Notification from "./components/Notification";
import PopupMessage from "./components/PopupMessage";

export default {
  name: "App",
  components: {
    BottomNav,
    BottomFooter,
    Notification,
    PopupMessage
  },
  computed: {
    showNotification() {          

      if (this.$store.state.notification.notis){
        this.text ="You've been overbidden in the auction '"+ this.$store.state.notification.notis.title+"'. "
        +"The winning bid is now on "+this.$store.state.notification.notis.amount+" £"
       }
      return this.$store.state.notification.show;    
    },
   
  },
  data() {
    return {
      bottomNav: "recent",
      text: "", 
    };
  },
  async created() {
    this.$store.dispatch("init");
  },
  
};
</script>

<style>
#app {
  display: flex;
  height: 100%;
  flex-direction: column;
}

.content {
  margin-top: 100px;
}

#nav {
  width: 100vw;
  justify-content: left;
  top: 0;
  position: fixed;
}
</style>
