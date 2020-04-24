import styled from "styled-components";

export const SignupStyle = styled.div`
  .signup{
    display: grid;
    justify-content: center;
    margin:10px 500px 200px 500px;
    color:white;
    border-radius: 20px;
    padding: 20px;
    background: hsla(182, 68%, 75%, 0.6);
    grid-gap: 10px;    
    grid-template-rows: 30px 10px 30px 10px 30px 10px 30px 10px 30px 10px 30px;
  }
  .signup button {
    grid-template-rows: 10px !important;
    width: 80px;  
    margin: auto;
    color: white;
    height: 30px;
    background-color: black;
    border-radius: 10px;
}
  .signup button:hover {
      background: red;    
  }
  .signup h1 {
      text-align: center;
  }

  .signup-wrapper{
    padding:10px;
    background:rgba(0,0,0,0.8);
  }

  @media (max-width: 768px){
    form.signup {
    margin: 40px !important;    
    }
  }

`