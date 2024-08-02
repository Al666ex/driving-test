import {createSlice} from '@reduxjs/toolkit'
import { toAddZero } from '../utils/toAddZero';
import {list} from '../list/list'


const initList = JSON.parse(JSON.stringify(localStorage.getItem('list'))) 
let accPunctele = [];

if(initList){
  accPunctele = initList  
}else{
  accPunctele = list;
  localStorage.setItem('list',JSON.stringify(list))
}

const initStatistics = JSON.parse(localStorage.getItem('statistics'))

export const dlSlice = createSlice({
    name : 'queryParams',
    initialState : {        
        list : accPunctele,
        carnumber : null,
        punctele : 0,
        isRunning : false,
        //mocksSolicitants : ['TOFAN ZINAIDA', 'ROTARU CONSTANTIN', 'GRIGORII TATIANA'],
        mocksSolicitants : [
          {name : 'TOFAN ZINAIDA', category : 'B',typeCV : 'AUTOMATĂ'},
          {name : 'ROTARU CONSTANTIN', category : 'C',typeCV : 'MECANICĂ'},
          {name : 'POPOV OLGA', category : 'B',typeCV : 'AUTOMATĂ'},
          {name : 'GRIGORII TATIANA', category : 'D',typeCV : 'MECANICĂ'}
        ],        
        mocksCars : [],
        mocksArrCars : [ 
          {category :'B', carsNumb : ['CAB138','CAB139','CAB140','CAB141']},
          {category :'C', carsNumb : ['CAB320','CAB321','CAB322']},
          {category :'D', carsNumb : ['CAB699','CAB700','CAB701','CAB702','CAB703']},
        ],
        candidat : null,
        stopExamen : false,
        fieldsDisabled : false,
        // statistics : [],
        statistics : initStatistics,
        headerHeight : null,
        page : 1,   
        candidatFields : null     
    },
    reducers : {
        setCandidatFields : (state,action) => {
          state.candidatFields = action.payload
          return;
        },

        setCarnumber : (state,action) => {

          if(action.payload){
            state.carnumber = action.payload;
            localStorage.setItem('carnumber',action.payload)
            return;
          }
          
          let carnumber = localStorage.getItem('carnumber')
          if(carnumber === '') {            
            state.carnumber = '';
            return;
          }

        },
        setList : (state,action) => {          
          let list = JSON.parse(localStorage.getItem('list'))
          let result = list.map(item => {
            const penalizare = item.penalizare.map(penalty => {
              if (penalty.id === action.payload) {
                return {
                  ...penalty,
                  count: penalty.count + 1
                };
              }
              return penalty;
            });
        
            return {
              ...item,
              penalizare
            };
          });   
          
          state.list = result;
          let temp = JSON.parse(JSON.stringify(result))
          localStorage.setItem('list',JSON.stringify(temp))   
          return;
        },

        setPunctele : (state) => {
          let listPunctele = JSON.parse(JSON.stringify(state.list));
          
          function calculateTotalPenalty(list) {
            return list.reduce((total, item) => {
              const itemTotal = item.penalizare.reduce((subTotal, penalizare) => {
                return subTotal + (penalizare.result * penalizare.count);
              }, 0);
              return total + itemTotal;
            }, 0);
          }

          state.punctele = calculateTotalPenalty(listPunctele)
          return; 
        },

        setIsRunning : (state,action) => {
          state.isRunning = action.payload;
          return;
        },

        setCandidat : (state,action) => {

          if(action.payload){
            state.candidat = action.payload;
            localStorage.setItem('candidat',action.payload)
            return;
          }
          
          let candidat = localStorage.getItem('candidat')
          if(candidat === '') {            
            state.candidat = '';
            return;
          }
        },

        setStopExamen : (state,action) => {
          state.stopExamen = action.payload;
          return;
        },
        setFieldsDisabled : (state,action) => {
          state.fieldsDisabled = action.payload
          return;
        },
        setStatistics : (state,action) => {
          let list = JSON.parse(JSON.stringify(state.list))
          let result = list.map(item => {
            const penalizare = item.penalizare.find(penalty => penalty.id === action.payload)
            if(penalizare){

              let statistics = JSON.parse(localStorage.getItem('statistics'));
              const now = new Date();
              const hours = toAddZero(now.getHours());
              const minutes = toAddZero(now.getMinutes());
              const seconds = toAddZero(now.getSeconds());
              const timeToShow = `${hours}:${minutes}:${seconds}`
    
              let statisticRow = {time : timeToShow, text : penalizare.text, result : penalizare.result};
              statistics.push(statisticRow);
              state.statistics = JSON.parse( JSON.stringify(statistics));
              localStorage.setItem('statistics',JSON.stringify(statistics))
              return;
            }
          })
          return;          
        },
        setHeaderHeight : (state, action) => {
          state.headerHeight = action.payload
          return;
        },
        setPage : (state, action) => {
          localStorage.setItem("page", JSON.stringify(action.payload));          
          const lsIsPage = localStorage.getItem('page')
          if(lsIsPage){
              state.page = Number(lsIsPage);
              return;
          }
          state.page = action.payload
          return;
        },
        setMocksCars : (state, action) => {
          state.mocksCars = action.payload;
          return;
        }
       
    }    
})

export const {    
    setCarnumber,
    setList,
    setPunctele,
    setIsRunning,
    setCandidat,
    setStopExamen,
    setFieldsDisabled,
    setStatistics,
    setHeaderHeight,
    setPage,
    setMocksCars,
    setCandidatFields
} = dlSlice.actions

export default dlSlice.reducer