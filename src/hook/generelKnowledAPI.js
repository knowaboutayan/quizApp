import { useEffect, useState } from "react";

const generalKnowledgeAPI = (category = "", difficulty = "") => {
    let [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty.toLowerCase()}&type=multiple`);
if(response.ok){
                let fetchedData = await response.json();
                
                class Data {
                    constructor(id, question = '', correct_answers = '', incorrect_ops = []) {
                        this.id = id;
                        this.question = question;
                        this.answers = {
                            answer_a: incorrect_ops[0],
                            answer_b: incorrect_ops[1],
                            answer_c: incorrect_ops[2],
                            answer_d: incorrect_ops[3],
                            answer_e: incorrect_ops[4] || null,
                            answer_f: incorrect_ops[5] || null
                        };

                        this.correct_answers = {
                            answer_a_correct: correct_answers === this.answers.answer_a,
                            answer_b_correct: correct_answers === this.answers.answer_b,
                            answer_c_correct: correct_answers === this.answers.answer_c,
                            answer_d_correct: correct_answers === this.answers.answer_d,
                            answer_e_correct: correct_answers === (incorrect_ops[4] || null),
                            answer_f_correct: correct_answers === (incorrect_ops[5] || null)
                        };
                    }
                }

                const formattedData = fetchedData.results.map((result, index) => {
                    return new Data(
                        index,
                        result.question,
                        result.correct_answer,
                        [...result.incorrect_answers,result.correct_answer]
                    );
                });

                setData(formattedData);}
            } catch (err) {
                console.error('Error fetching data:', err);
                setData('error');
            }
        };

        fetchData();
    }, [category, difficulty]);

    return data;
};

export default generalKnowledgeAPI;
