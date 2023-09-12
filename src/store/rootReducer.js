import { combineReducers } from "@reduxjs/toolkit";
import { Movie3Reducer } from "./Movie3/slice";

export const rootReducer = combineReducers({
    Movie3: Movie3Reducer
})