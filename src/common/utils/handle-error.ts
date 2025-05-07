import { isAxiosError } from 'axios'
import { Dispatch } from 'redux'
import { setAppError } from '../../app/app-reducer.ts'

export type ServerError = {
  errorMessages: Array<{ field: string; message: string }>
}

type errorHandlerPropsType = {
  error: unknown
  dispatch: Dispatch
}

export const handleError = ({ error, dispatch }: errorHandlerPropsType) => {
  let errorMessage: string
  if (isAxiosError<ServerError>(error)) {
    errorMessage = error.response ? error.response.data.errorMessages[0].message : error.message
  } else {
    errorMessage = (error as Error).message
  }
  dispatch(setAppError(errorMessage))
}
