
import * as cardService from '../service/cards';

export default {
    namespace : 'cards',

    state: {
        cardsList:[],
        statistic:{}
    },

    effects:{
        *queryList({_} , {call,put}){
            const resp = yield call(cardService.queryList);
            console.log('queryList');
            console.log(resp);
            yield put({
                type : 'saveList',
                payload: {cardsList:resp.result}
            });
        }
    },

    reducers:{
        saveList(state,{payload : {cardsList}}){
            return {...state , cardsList};
        },
    }


}