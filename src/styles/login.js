import styled from "styled-components";

export const LoginStyles = styled.div`
  .login{
    display: grid;
    justify-content: center;
    margin:10px 500px 200px 500px;
    color:white;
    border-radius: 20px;
    padding: 20px;
    background: hsla(182, 68%, 75%, 0.6);
    grid-gap: 10px;    
    grid-template-rows: 30px 20px 30px 20px 30px 20px 30px;
  }
  .login button {
    grid-template-rows: 10px !important;
    width: 80px;  
    margin: auto;
    color: white;
    height: 30px;
    background-color: black;
    border-radius: 10px;
}
  .login button:hover {
      background: red;    
  }
  .login h1 {
      text-align: center;
  }

  .login-wrapper{
    padding:10px;
    background:rgba(0,0,0,0.8);
  }

  @media (max-width: 768px){
    form.login {
    margin: 40px !important;    
    }
  }


`