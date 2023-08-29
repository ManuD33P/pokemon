


function capitalizeFirstLetter(string){
    try {
        const firstLetter = string.charAt(0).toUpperCase();
        return `${firstLetter}${string.slice(1)}`;
    } catch (error) {
        alert(error.message)
    }
}


export default capitalizeFirstLetter