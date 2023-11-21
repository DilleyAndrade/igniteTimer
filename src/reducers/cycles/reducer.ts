import { ActionTypes } from "./actions";
import { produce } from 'immer'


export interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
    startDate: Date;
    interruptedDate?: Date;
    finishedDate?: Date;
}

interface CyclesState {
    cycles: Cycle[]
    activeCycleId: string | null
}



export function CyclesReducer(state: CyclesState, action: any) {

    switch(action.type) {
        case ActionTypes.Add_New_Cycle:
        return produce(state, draft=> {
            draft.cycles.push(action.payload.newCycle);
            draft.activeCycleId = action.payload.newCycle.id
        })

        case ActionTypes.Interrupt_Current_Cycle:{
        
            const currentCycleIndex = state.cycles.findIndex((cycle) => {
                return cycle.id === state.activeCycleId
            })

            if(currentCycleIndex < 0) {
                return state
            }

            return produce(state, draft=>{
                draft.activeCycleId = null
                draft.cycles[currentCycleIndex].interruptedDate =  new Date()
            })
        }
        case ActionTypes.Mark_Current_Cycle_As_Finished:{
        
            const currentCycleIndex = state.cycles.findIndex((cycle) => {
                return cycle.id === state.activeCycleId
            })

            if(currentCycleIndex < 0) {
                return state
            }

            return produce(state, draft=>{
                draft.activeCycleId = null
                draft.cycles[currentCycleIndex].finishedDate =  new Date()
            })
        }
        default:
            return state
}}