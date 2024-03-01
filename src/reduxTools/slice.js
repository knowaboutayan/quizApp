import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    quizId: localStorage.getItem('quizId') || '',
    quizType: localStorage.getItem('quizType') || "",
    quizTopic: localStorage.getItem('quizTopic') || "",
    topicId: localStorage.getItem('topicId') || '',//for generral knowledge topic only
    quizDifficulty: localStorage.getItem('quizDifficulty') || "",
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
        setQuizResultShown: (state, action) => {
            state.quizResultShown = action.payload
        }
    }
})
export const { setQuizDifficulty, setQuizId, setQuizTopic, setTopicId, setQuizType, setFetchData, setUserResponse, setQuizResultShown } = quizSlice.actions
export default quizSlice.reducer;