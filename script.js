const byId = (id) => {
    return document.getElementById(id);
};
const $signUpButton = byId('signUp');
const $signInButton = byId('signIn');
const $container = byId('container');


$signUpButton.addEventListener("click",()=>
{
    $container.classList.add('right-panel-active');
});

$signInButton.addEventListener("click",()=>{
    $container.classList.remove('right-panel-active');
});

const error= document.getElementById("error-msg")
const errorSignin= document.getElementById("error-msg-signin")

/*function validateusername()
{
    const username=document.getElementById("username").value;
   

    if(/[^a-zA-Z]/.test(username))
    {
        error.textContent="Alphabets only"

        document.getElementById("username").value=username.replace(/[^a-zA-Z]/g,"")
    }


     
}

function validatepassword()
{
    const password=document.getElementById("password").value;
    const passwordSignIn=document.getElementById("password-signin").value;
   
    //SignUp
    if(password.length<6)
    {
        error.textContent="Password must be 6 characters long"
    }
    else{
        error.textContent=""
    }
        
    //SignIn

        if(passwordSignIn.length<6)
            {
                errorSignin.textContent="Password must be 6 characters long"
            }
            else{
                errorSignin.textContent=""
            }
    
  
    
}


function validateemail()
{
    const email=document.getElementById("email").value;
    const emailSignin=document.getElementById("email-signin").value;
    
   
    //SignUp

    if(/\s/.test(email))
    {
        error.textContent="Email must not have spaces"

        document.getElementById("email").value=email.replace(/\s/g,"")
    }
    else if(/[^a-zA-Z0-9@.]/.test(email))
    {
        error.textContent="Invalid email"
    }
    else
    {
        error.textContent=""
    }
  
    //signIn 

    if(/\s/.test(emailSignin))
        {
            errorSignin.textContent="Email must not have spaces"
    
            document.getElementById("email-signin").value=emailSignin.replace(/\s/g,"")
        }
        else if(/[^a-zA-Z0-9@.]/.test(emailSignin))
        {
            errorSignin.textContent="Invalid email"
        }
        else
        {
            errorSignin.textContent=""
        }
    
 }
function check()
{
  
    //SignUp and //Signin combine 
   
    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;
    const email=document.getElementById("email").value;

    const emailSignin=document.getElementById("email-signin").value;
    const passwordSignIn=document.getElementById("password-signin").value;
   

    if(username=="" || password=="" ||  email=="" || emailSignin=="" || passwordSignIn=="")
    {
        error.textContent="All Fields Required"
        errorSignin.textContent="All Fields Required"
        return false;
    }
    else{
        error.textContent=""
        return true;
    }

    
 
    
  
}*/
document.getElementById("loginForm").addEventListener("submit" , async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value
    const password = document.getElementById("loginPassword").value

    try {
        const endpoint = "http://localhost:4003/user/login"
        const response = await fetch(endpoint , {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body : JSON.stringify({email , password})
        })
        const data =  await response.json()
        console.log(data)

        if(data.success) {
            
            setTimeout(() => {
                window.location.href = "/dashboard.html"
            },3000)
            window.alert(data.message);
        }
        else{
            window.alert(data.message);
        }
        
    } catch (error) {

        console.log(error)
        
    }
})


//signup 


document.getElementById("signupForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("signupName").value
    const email = document.getElementById("signupEmail").value
    const password = document.getElementById("signupPassword").value

    try {
        
        const endpoint = "http://localhost:4003/user/register"
        const response = await fetch(endpoint , {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body : JSON.stringify({username , password , email})
            
    
        })
        const data = await response.json()
        console.log(data)

        if(data.success) {
            window.alert(data.message)
           
        }
        else {
            window.alert("Error creating user")
        }


    } catch (error) {
        console.error(error)
    }
})
