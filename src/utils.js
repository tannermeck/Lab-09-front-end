const url = 'https://tanner-lab-06b.herokuapp.com';

export const getItem = async() => {
    const response = await fetch(`${url}/dirtbikes`)
    const data = response.json();
    return data;
}
export const getDirtbike = async(id) => {
    const response = await fetch(`${url}/dirtbikes/${id}`)
    const data = response.json();
    return data;
}
export const getTires = async() => {
    const response = await fetch(`${url}/tires`)
    const data = response.json()
    return data;
}