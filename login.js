let userData = {};
let LogIn = async () => {

    let login_data = {
        username: document.querySelector("#username").value,
        password: document.querySelector("#password").value,
    }

    userData["username"]=login_data.username;

    let flag = false;//for line no-36 and 42
    let MyData ; //for line no-46

    login_data = JSON.stringify(login_data);

    const url = 'https://masai-api-mocker.herokuapp.com/auth/login';

    try {

        let res = await fetch(url, {
            method: 'POST',
            body: login_data,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        let data = await res.json();
        token = data.token;
        if (token !== "d41d8cd98f00b204e9800998ecf8427e") { // this is a empty token.
            userData["token"]=token
            localStorage.setItem("userData", JSON.stringify(userData));
        }
        MyData = data;
        console.log(data)

    } catch (error) {

        flag = true
        alert('authentication failed, wrong credentials!');
    }



    if (!flag) {

        if (token === 'd41d8cd98f00b204e9800998ecf8427e') {
            alert('please fil up all the input fields');
        } else if (!MyData.error) {
            alert('Login successfull');
            window.location.href = "Naukari_Com(Project_Done)/messy-whip-9215/New folder/job.html"
        }
    }
}
