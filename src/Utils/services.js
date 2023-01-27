
// console.log(jsonFile);

export async function getEmployee() {









    return await fetch("./employees.json", {
        headers: {
            'Accept': 'json',
            'Content-Type': 'json',
        }
    })
        .then((response) => {
            return JSON.parse(response);
        })
        .then((data) => {
            return data;
        });
}
