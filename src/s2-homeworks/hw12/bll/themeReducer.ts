const initState = {
    themeId: 1,
}
type InitState = typeof initState

export const themeReducer =
  (state = initState, action: ChangeThemeIdType): InitState => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {
                themeId: action.id
            }
        
        default:
            return state
    }
}

type ChangeThemeIdType = { type: 'SET_THEME_ID', id: number }
export const changeThemeId = (id: number): ChangeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any
