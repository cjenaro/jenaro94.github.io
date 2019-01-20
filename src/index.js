let postItem = {
  props: {
    text: String,
    title: String,
    subtitle: String,
    date: String,
  },
  template: `<div class="box">
              <div class="title-dates-container">
                <div class="titles-container">
                  <h1 class="title">{{ title }}</h1>
                  <h2 class="subtitle">{{ subtitle }}</h2>
                </div>
                <div class="dates">
                  <h2>{{ date }}</h2>
                </div>
              </div>
              <p>{{ text }}</p>
            </div>`,
}

let postContainer = {
  props: {
    bigTitle: String,
    text: String,
    title: String,
    subtitle: String,
  },
  template: `<div class="box">
              <h1 class="title">{{bigTitle}}</h1>
              <post-item :title="title" :subtitle="subtitle" :text="text"></post-item>
            </div>`,
  components: {
    'post-item': postItem,
  },
}

//Root Instance
let app = new Vue({
  el: '#app',
  data: {},
  components: {
    'post-item': postItem,
    'post-container': postContainer,
  },
})
