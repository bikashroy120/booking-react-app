import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import placeService from "./placeServices"



const initialState = {
    place: [],
    ownerPlace:[],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
  };


  export const creactPlace = createAsyncThunk(
    "place/creactPlaces",
    async (userData, thunkAPI) => {
      try {
        return await placeService.creactPlace(userData);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );


  export const getOwnerPlace = createAsyncThunk(
    "place/getownerplace",
    async(userData,thunkAPI)=>{
      try { 
          return await placeService.getOwnerPlace()
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  )

  export const getPlace = createAsyncThunk(
    "place/getplace",
    async(userData,thunkAPI)=>{
      try { 
          return await placeService.getPlace()
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  )
  

  export const placeSlice = createSlice({
    name:"place",
    initialState,
    reducers:{},
    extraReducers:(buildeer)=>{
        buildeer
        .addCase(creactPlace.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(creactPlace.fulfilled, (state, action) => {
          state.isError = false;
          state.isLoading = false;
          state.isSuccess = true;
          state.message = "success";
          state.creactplace = action.payload;
        })
        .addCase(creactPlace.rejected, (state, action) => {
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
          state.isLoading = false;
        })
        .addCase(getOwnerPlace.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getOwnerPlace.fulfilled, (state, action) => {
          state.isError = false;
          state.isLoading = false;
          state.isSuccess = true;
          state.message = "success";
          state.ownerPlace = action.payload;
        })
        .addCase(getOwnerPlace.rejected, (state, action) => {
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
          state.isLoading = false;
        })
        .addCase(getPlace.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getPlace.fulfilled, (state, action) => {
          state.isError = false;
          state.isLoading = false;
          state.isSuccess = true;
          state.message = "success";
          state.place = action.payload;
        })
        .addCase(getPlace.rejected, (state, action) => {
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
          state.isLoading = false;
        })
    }
})

export default placeSlice.reducer;