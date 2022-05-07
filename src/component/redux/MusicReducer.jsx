import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    limit: 2018,
    music:[],
    error: false,
    artist: 'avengers'
}

export const musicSlice = createSlice({
    name: 'music',
    initialState,
    reducers:{
        setMusics(state, action){
            state.music = action.payload
        }
    }
})

export const getMusic = createAsyncThunk(
    'music/getMusic',
    async (_, {getState}) => {
        const {artist, limit} = getState().music
        const response = await axios.get(`http://www.omdbapi.com/?t=${artist}&y=${limit}&plot=full`)
        console.log(response.data)
        return setMusics(response.data)
    }
)


export const {setMusics} = musicSlice.actions