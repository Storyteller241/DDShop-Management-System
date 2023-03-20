import store from "@/store";

if (localStorage.getItem("amdd")) {
  store.commit("login/setUser", JSON.parse(localStorage.getItem("amdd")))
}