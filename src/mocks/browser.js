import { setupWorker } from 'msw'
import { handlers } from './login'

export const worker = setupWorker(...handlers)