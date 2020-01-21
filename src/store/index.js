import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: null,
    selectors: null,
    searchItems: null
  },
  mutations: {
    SET_data: (state, payload) => {
      state.data = payload;
    },
    SET_selectors: (state, payload) => {
      state.selectors = payload;
    },
    SET_searchItems: (state, payload) => {
      state.searchItems = payload;
    }
  },
  actions: {
    UPDATE_data: ({ commit }) => {
      let data = [
        { id: 1, name: "iPhone X", category: "Phone", brand: "Apple" },
        { id: 2, name: "iPhone XR", category: "Phone", brand: "Apple" },
        { id: 3, name: "iPad", category: "Tablet", brand: "Apple" },
        { id: 4, name: "Galaxy Tab A", category: "Tablet", brand: "Samsung" },
        { id: 5, name: "iPad Pro 11", category: "Tablet", brand: "Apple" },
        { id: 6, name: "iPhone 11", category: "Phone", brand: "Apple" },
        { id: 7, name: "Galaxy Tab S4", category: "Tablet", brand: "Samsung" },
        { id: 8, name: "iPhone 11 Pro Max", category: "Phone", brand: "Apple" },
        { id: 9, name: "Galaxy A50", category: "Phone", brand: "Samsung" },
        { id: 10, name: "Redmi Note 7", category: "Phone", brand: "Xiaomi" },
        {
          id: 14,
          name: "Redmi Note 6 Pro",
          category: "Phone",
          brand: "Xiaomi"
        },
        { id: 15, name: "Reno 2", category: "Phone", brand: "Oppo" },
        {
          id: 16,
          name: "MediaPad M5 Lite",
          category: "Tablet",
          brand: "Xiaomi"
        },
        { id: 17, name: "Macbook Air", category: "Notebook", brand: "Apple" }
      ];
      commit("SET_data", data);
      commit("SET_selectors", sortOutData(data));
    }
  },
  getters: {
    getItemById: state => payload => {
      console.log(state.data.find(i => i.id === payload));
      return state.data.find(i => i.id === payload);
    }
  }
});




/*////////////////////////////////////////////*/
function unique(arr) {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}
function sortOutData(data) {
  let category = unique(
    data.map(item => {
      return item.category;
    })
  );

  let brand = unique(
    data.map(item => {
      return item.brand;
    })
  );
  return { brand: brand, categories: category };
}
