const url = 'https://tanner-lab-06b.herokuapp.com';

export const getItem = async() => {
    const response = await fetch(`${url}/dirtbikes`)
    const data = response.json();
    return data;
}