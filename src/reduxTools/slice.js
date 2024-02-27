import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    quizType: localStorage.getItem('quizType') || "",
    quizTopic: localStorage.getItem('quizTopic') || "",
    quizDifficulty: localStorage.getItem('quizDifficulty') || "",
    quizResultShown:false,
    fetchedData: [],
    answersRespond: [],
}
export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        setQuizType: (state, action) => {
            state.quizType = action.payload
            localStorage.setItem('quizType', state.quizType)
        },
        setQuizTopic: (state, action) => {
            state.quizTopic = action.payload
            localStorage.setItem('quizTopic', state.quizTopic)
        },
        setQuizDifficulty: (state, action) => {
            state.quizDifficulty = action.payload
            localStorage.setItem('quizDifficulty', state.quizDifficulty)
        },
        setFetchData: (state, action) => {
            state.fetchedData = action.payload;
        },
        setUserResponse: (state, action) => {

            let [questionID, response, marks] = action.payload;
            console.log(response)
            console.log(state.answersRespond)
            if (state.answersRespond.includes(questionID)) {
                const index = state.answersRespond.indexOf(questionID)
                console.log(index)
                state.answersRespond.splice(index, 2)
            }
            state.answersRespond = [...state.answersRespond, questionID, (questionID, { 'questionID': questionID, 'response': response, 'marks': marks })];

            console.log(state.answersRespond)
        },
        setQuizResultShown:(state,action)=>{
            state.quizResultShown=action.payload
        }
    }
})
export const { setQuizDifficulty, setQuizTopic, setQuizType, setFetchData, setUserResponse ,setQuizResultShown} = quizSlice.actions
export default quizSlice.reducer;