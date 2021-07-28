
function handleSubmit(event) {
    event.preventDefault()
    let url = document.getElementById('name').value;
    const data = {
        url
    }
    if (Client.urlChecker(url)) {
        fetch('/url', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(function (res) {
                document.getElementById('score').innerHTML = 'Score: ' + res.score_tag;
                document.getElementById('agree').innerHTML = 'Agreement: ' + res.agreement;
                document.getElementById('irony').innerHTML = 'Irony: ' + res.irony;
            })
    } else {
        alert('You have not entered a valid URL.');
    };
}

export { handleSubmit }