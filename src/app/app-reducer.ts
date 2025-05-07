export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'APP/SET-STATUS': {
      return {
        ...state,
        status: action.payload.status,
      }
    }
    case 'APP/SET-ERROR': {
      return {
        ...state,
        error: action.payload.error,
      }
    }
    default:
      return state
  }
}

type ActionsType = changeLoaderStatusActionType | setAppErrorActionType

export const setAppStatus = (status: RequestStatusType) => ({
  type: 'APP/SET-STATUS' as const,
  payload: {
    status,
  },
})
type changeLoaderStatusActionType = ReturnType<typeof setAppStatus>

export const setAppError = (error: string | null) => ({
  type: 'APP/SET-ERROR' as const,
  payload: {
    error,
  },
})
type setAppErrorActionType = ReturnType<typeof setAppError>
