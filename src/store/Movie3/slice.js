import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    booking: [],
    booked: [],
}

const Movie3Slice = createSlice({
    name: 'Movie 3',
    initialState,
    reducers: {
        bookChair: (state, { payload }) => {
            const index = state.booking.findIndex(a => a.soGhe === payload.soGhe)
            console.log('index', index)
            if (state.booking.length < 8) {
                if (index !== -1) {
                    state.booking.splice(index, 1)
                } else {
                    state.booking.push(payload)
                }
            } else {
                if (index === -1 ) {
                    alert('Khách hàng chỉ đặt tối đa 8 ghế')
                } else (
                    state.booking.splice(index, 1)
                )

            }
        },
        bookedChair: (state, { payload }) => {
            state.booked = [...state.booked, ...state.booking]
            state.booking = []
        }
    }
})
export const { reducer: Movie3Reducer, actions: Movie3Actions } = Movie3Slice