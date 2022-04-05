import axios from 'axios'
export default{
    state: {
        'phones':[]
    },
    getters: {
        allPhones(state){
            return state.phones
        }
    },
    mutations: {
        updatePhones(state, newPhones){
            state.phones = newPhones
        }
    },
    actions: {
        async fetchPhones(result){
        const res = await axios.get(`http://localhost:3001/catalog`);
        const newPhones = res.data;
        result.commit('updatePhones', newPhones);},
    
    }
}