const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', handleSubmit)

function handleSubmit(event)
{
event.preventDefault();
//here we are defining the even 
const formentry = document.getElementById("url").value;
nameCheck(formentry);
//here the form data entered is being submitted and then what will happen is the results are posted under the article sentiment results
if (Client.checkUrl(formentry)) {
    console.log("Form has been Submitted"); 
    post('https://localhost:8080/test', {url: formentry})
    .then(res => res.json())    
    .then(function(res) {
            document.getElementById('results').innerHTML ='<b><p>Model: ${res.model}</p></b>';
        })
    }
}
//This is the section where the data is taken from what the user enters, is passed through meaningful api and then returned to the user. 
//Receivedata is console logged because we want to check if we are receiving connection from the API or not
const post = async (url = "", data = {}) => {
    const fetchData = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    const receiveData = await fetchData.json();
    console.log(receiveData);
     try {
        return receiveData;
    } catch (error) {
        return null;
    }
};

export { handleSubmit }
