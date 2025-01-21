import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

export default function Contact() {
  const { isAuthenticated , user} = useAuth0();

  return (
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>
      <iframe
       title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.009900321283!2d75.8367426!3d26.903180900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6c3c557f4a9%3A0xfe12f55417b92461!2sPink%20Square%20Mall!5e0!3m2!1sen!2sin!4v1735120776461!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mqaaezkj"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              value={isAuthenticated ? user.name : ""}
              required
              autoComplete="off"
              readOnly
            ></input>
            <input
              type="email"
              placeholder="Email"
              name="Email"
              value={isAuthenticated ? user.email : ""}
              required
              autoComplete="off"
              readOnly
            ></input>
            <textarea
              name="Message"
              cols="30"
              row="10"
              required
              autoComplete="off"
              placeholder="Enter you'r message"
            ></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
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
