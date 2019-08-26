import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    items: [
      {
        id: 15001,
        title: "Brunch this weekend?",
        type: "News",
        icon: "local_post_office",
        author: "Ali Connors",
        createdOn: "2019-08-21T13:28:06.419Z",
        status: "draft"
      },
      {
        id: 14854,
        title: "Summer BBQ",
        type: "Event",
        icon: "local_activity",
        author: "Me",
        createdOn: "2019-08-17T13:28:06.419Z",
        status: "published"
      },
      {
        id: 14850,
        title: "Oui oui",
        type: "Books",
        icon: "book",
        author: "Me",
        createdOn: "2019-07-30T13:28:06.419Z",
        status: "published"
      },
      {
        id: 14793,
        title: "Birthday gift",
        type: "News",
        icon: "local_post_office",
        author: "Trevor Hansen",
        createdOn: "2019-07-28T13:28:06.419Z",
        status: "published"
      },
      {
        id: 14792,
        title: "Item title",
        type: "Trevor Hansen",
        icon: "book",
        author: "Ali Connors",
        createdOn: "2019-07-28T12:30:06.419Z",
        status: "draft"
      }
    ],
    selected: [],
  },
  getters: {
    getSelectedCount: (state) => {
      return state.selected.length;
    },
    getSelectedById: state => id => {
      return state.selected.find(selectedId => selectedId === id);
    }
  },
  mutations: {
    updateSelected(state, payload) {
      state.selected = payload;
    }
  },
  actions: {}
});
