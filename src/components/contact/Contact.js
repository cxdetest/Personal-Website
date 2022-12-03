import { useContext, useRef } from 'react';
import { FlexContainer } from '../reusable/containers';
import emailjs from '@emailjs/browser';
import './contact.css';
import { ThemeContext } from '../../contexts';

export const Contact = () => {
  const theme = useContext(ThemeContext);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_5pvk7hc',
        'template_7g0crf7',
        form.current,
        '-M-UeZAYV4Xx8HG9D'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <div
      id='contact'
      style={{ background: theme.background, color: theme.color }}
    >
      <FlexContainer>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor='fullname'>fullname</label>
          <input
            type='text'
            name='fullname'
            maxLength={100}
            style={{ boxShadow: theme.boxShadow, color: theme.color }}
            autoComplete='off'
            required
          />
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            maxLength={100}
            style={{ boxShadow: theme.boxShadow, color: theme.color }}
            autoComplete='off'
            required
          />
          <label htmlFor='message'>Tell me something</label>
          <textarea
            name='message'
            maxLength={500}
            style={{ boxShadow: theme.boxShadow, color: theme.color }}
            rows={8}
            required
          ></textarea>
          <input
            type='submit'
            value='Send'
            style={{
              color: theme.color,
              fontSize: 15,
            }}
          />
        </form>
      </FlexContainer>
    </div>
  );
};
