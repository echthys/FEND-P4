
// BOILER PLATE CODE PROVIDED BY UDACITY WARNING COULD BE SIMILAR TO OTHER STUDENTS.
function handleSubmit(event) {
    event.preventDefault()
    let url = document.getElementById('name').value;
    const data = {
        url
    }
    if (Client.urlChecker(url)) {
        // BOILER PLATE FETCH AS RECOMMENDED BY UDACITY WARNING COULD BE SIMILAR TO OTHER STUDENTS.
        document.getElementById('name').style.border = "1px solid green";
        // Fetch calls the post url on the express server.
        fetch('http://localhost:8080/url', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(function (res) {
                const requiredResponseValues = ["confidence", "agreement", "score_tag", "subjectivity", "irony"]
                const list = document.getElementById("list")
                for (const val of requiredResponseValues) {
                    const li = document.createElement("li")
                    li.innerText = `${val}: ${res[val]}`
                    list.appendChild(li)
                }
            })
    } else {
        document.getElementById('name').style.border = "1px solid red";
        const p = document.createElement("p")
        p.innerText = "Enter a valid url"
        const form = document.getElementsByTagName("form")[0]
        form.appendChild(p)
    };
}

export { handleSubmit }