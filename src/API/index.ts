import axios from "axios";

const url = 'https://logiclike.com/docs/courses.json';

export async function getCourses() {
    const data = await axios.get(url);

    return data;
}