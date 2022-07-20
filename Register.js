

 let register = async () => {

   let signup_data = {
       name: document.querySelector("#name").value,
       email: document.querySelector("#email").value,
       mobile: document.querySelector("#mobile").value,
       username: document.querySelector("#username").value,
       password: document.querySelector("#password").value,
       description: document.querySelector("#description").value,
   }


   let signupData = signup_data;//for line no-35

   signup_data = JSON.stringify(signup_data);
       
       const signup_url = 'https://masai-api-mocker.herokuapp.com/auth/register'

   let res = await fetch(signup_url, {
       method: 'POST',
       body: signup_data,
       headers: {
           'Content-Type': 'application/json'
       }
   });

   let data = await res.json();
   console.log(data);

   
   let form = document.querySelector("#form");
   form.reset();

   if (signupData.name == "" || signupData.email == "" || signup_data.mobile == "" || signupData.username == "" || signupData.password == "" || signupData.description == "") {
       alert('please fil up all the input fields');
   }else if(data.error){
       alert(data.message);
   }else if(!data.error){
       alert(`${data.message}full`);
       window.location.href = "login.html"
   }

}
