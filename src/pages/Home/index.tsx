import React from 'react';
import { useDispatch } from 'react-redux';

import { FaGithub } from 'react-icons/fa';
import { Container, Footer } from './styles';

import * as NotificationActions from '~/store/ducks/Notification/actions';

export default function App() {
  const dispatch = useDispatch();

  function showNotification() {
    dispatch(
      NotificationActions.addNotification({
        type: 'success',
        message: 'Hello World!',
      })
    );
  }

  return (
    <Container>
      <div>
        <h1>
          {'<'} Coding Labs {'/>'}
        </h1>
        <h2>Create-React-App Template</h2>
        <p>
          This template comes with a bunch of features to help you get started.
        </p>
        <p>
          Redux-Saga is already implemented with Reactotron for debugging and
          reduxsauce to reduce cluttering.
        </p>
        <p>
          There is a sample action to produce a notification with
          react-toastify.
        </p>
        <button type="button" onClick={showNotification}>
          Show me!
        </button>
        <p>For templating and styling, styled-components is used.</p>
        <p>
          Some other functions include: Prettier/ESLint with Airbnb guide,
          pre-commit hooks, extended support for Jest tests, among others .
        </p>
        <h2>Happy Coding!</h2>
      </div>
      <Footer>
        <a href="https://github.com/codinglabsdev">
          <FaGithub size={32} />
        </a>
      </Footer>
    </Container>
  );
}
