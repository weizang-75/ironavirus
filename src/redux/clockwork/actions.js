import { createAction } from '@reduxjs/toolkit'

export const reset = createAction(`CLOCKWORK/RESET`)
export const tick = createAction(`CLOCKWORK/TICK`)
