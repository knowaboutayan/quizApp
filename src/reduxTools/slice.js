import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    quizId: localStorage.getItem('quizId') || '',
    quizType: localStorage.getItem('quizType') || "",
    quizTopic: localStorage.getItem('quizTopic') || "",
    topicId: localStorage.getItem('topicId') || '',//for generral knowledge topic only
    quizDifficulty: localStorage.getItem('quizDifficulty') || "",
    disclaimerAccept: false,
    quizResultShown: false,
    fetchedData: [],
    answersRespond: [],
}
export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        setQuizId: (state, action) => {
            state.quizId = action.payload
            localStorage.setItem('quizId', state.quizId)
        },
        setQuizType: (state, action) => {
            state.quizType = action.payload
            localStorage.setItem('quizType', state.quizType)
        },
        setQuizTopic: (state, action) => {
            state.quizTopic = action.payload
            localStorage.setItem('quizTopic', state.quizTopic)
        },
        setTopicId: (state, action) => {
            state.topicId = action.payload
            localStorage.setItem('topicId', state.topicId)
        },
        setQuizDifficulty: (state, action) => {
            state.quizDifficulty = action.payload
            localStorage.setItem('quizDifficulty', state.quizDifficulty)
        },
        setDisclaimerAccept: (state, action) => {
            state.disclaimerAccept = action.payload
        },
        setFetchData: (state, action) => {
            console.log(action.payload)
            state.fetchedData = action.payload;
            console.log(state.fetchedData)
        },
        setUserResponse: (state, action) => {
            state.answersRespond = action.payload
        },
        setQuizResultShown:(state,action)=>{
            state.quizResultShown=action.payload

        }
    }
})
export const { setQuizDifficulty, setQuizId, setQuizTopic, setTopicId, setQuizType, setFetchData, setUserResponse, setDisclaimerAccept, setQuizResultShown } = quizSlice.actions
export default quizSlice.reducer;