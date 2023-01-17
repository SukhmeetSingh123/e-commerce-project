import styled from "styled-components";
const Contact = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">Feel Free to Contact us</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.4977176546076!2d74.87430221463352!3d31.620220249369503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391963542e500067%3A0x71c08fc9c49abfb!2sGolden%20Temple%20Amritsar%20Tour!5e0!3m2!1sen!2sin!4v1672232469567!5m2!1sen!2sin" 
    width="100%"
    height="350"
    style={{border:0}}
    allowFullScreen=""
    loading="lazy"
    title="myMap"
    referrerPolicy="no-referrer-when-downgrade">        
</iframe>
<div className="container">
<div className="contact-form">
<form action="https://formspree.io/f/xpzeaerv" method="POST" className="contact-inputs">
<input type="text" 
placeholder="username" 
name="username"
required 
autoComplete="off"
/>
<input type="email" 
name="Email" 
placeholder="Email" 
autoComplete="off" 
required
/>
<textarea name="Message" 
cols="30" 
rows="10"  
required 
autoComplete="off" 
placeholder="Enter Your Message"></textarea>
<input type="submit" value="send"/>
</form>
</div>
</div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
    padding: 4rem 0 5rem 0;
    text-align: center;
    .container {
      margin-top: 6rem;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

export default Contact;