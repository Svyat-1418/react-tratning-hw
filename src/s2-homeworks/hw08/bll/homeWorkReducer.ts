import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            
            const stateCopy = [...state]
            if (action.payload === "up") {
                stateCopy.sort((a, b) => a.name.localeCompare(b.name))
            }
            if (action.payload === "down") {
                stateCopy.sort((a, b) => b.name.localeCompare(a.name))
            }
            return stateCopy
        }
        case 'check': {

            return state.filter(user => user.age > 18)
        }
        default:
            return state
    }
}
