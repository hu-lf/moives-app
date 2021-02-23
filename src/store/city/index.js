const state = {
    id : localStorage.getItem("nowCityId") || "1",
    name: localStorage.getItem("nowCityName") || "北京"
}

const mutations = {
    CITY_INFO(state, payload) {
        state.id = payload.id
        state.name = payload.nm
    }
}

const actions = {

}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}