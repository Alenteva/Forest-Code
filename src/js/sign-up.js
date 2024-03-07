import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithCustomToken,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD8UvisVnkCvMijmf6q4ZtLkQgC43vz2KM',
  authDomain: 'dookshelf-357a4.firebaseapp.com',
  projectId: 'dookshelf-357a4',
  storageBucket: 'dookshelf-357a4.appspot.com',
  messagingSenderId: '957443484270',
  appId: '1:957443484270:web:de06245395594e6cf9947f',
  measurementId: 'G-PGZE6HZC47',
};
initializeApp(firebaseConfig);
const auth = getAuth();

const formContainer = document.querySelector('.Form-window');
const closeFormBtn = document.querySelector('.Close-form-btn');
const headerSignUp = document.querySelector('.sign-up');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const usernamelInput = document.getElementById('username');
const signInButton = document.querySelector('.quickstart-sign-in');
const signUpButton = document.querySelector('.quickstart-sign-up');
const headerNav = document.querySelector('.header-nav');
const passwordResetButton = document.querySelector('.reset-btn');
const logOutBtn = document.querySelector('.log-out-btn');
// ========================================================================

headerSignUp.addEventListener('click', function () {
  formContainer.classList.add('is-open');
  //   document.body.style.overflow = 'hidden';
});

closeFormBtn.addEventListener('click', function () {
  formContainer.classList.remove('is-open');
  //   document.body.style.overflow = '';
});
// =================================================
function toggleSignIn() {
  if (auth.currentUser) {
    signOut(auth).then(() => {
      handleSignOut();
      updateUI();
    });
  } else {
    const email = emailInput.value;
    const password = passwordInput.value;
    const name = usernamelInput.value;

    if (email.length < 4) {
      alert('Please enter an email address');
      return;
    }

    if (password.length < 4) {
      alert('Please enter a password with at least 4 characters');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        user.displayName = name;
        formContainer.classList.remove('is-open');
        headerNav.style.display = 'flex';
        headerSignUp.textContent = user.displayName;
        iziToast.show({
          title: 'Hello',
          message: `Welcome, ${user.displayName}!`,
          color: 'blue',
          position: 'topCenter',
        });
        localStorage.setItem(
          'user-data',
          JSON.stringify({
            name: user.displayName,
            mail: user.email,
          })
        );
        user.getIdToken().then(token => {
          localStorage.setItem('userToken', token);
        });
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password');
        } else {
          alert(errorMessage);
        }
        console.error(error);
      });
  }
}
// ===============================================
function handleSignUp() {
  const email = emailInput.value;
  const password = passwordInput.value;
  const name = usernamelInput.value;
  if (email.length < 4) {
    alert('Please enter an email address.');
    return;
  }
  if (password.length < 4) {
    alert('Please enter a password.');
    return;
  }
  // Create user with email and pass.
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      user.displayName = name;
      formContainer.classList.remove('is-open');
      headerNav.style.display = 'flex';
      headerSignUp.textContent = user.displayName;
      iziToast.show({
        title: 'Ok',
        message: 'You have successfully registered!',
        color: 'blue',
        position: 'topCenter',
      });
      localStorage.setItem(
        'user-data',
        JSON.stringify({
          name: user.displayName,
          mail: user.email,
        })
      );
      user.getIdToken().then(token => {
        localStorage.setItem('userToken', token);
      });
    })
    .catch(function (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
}
// =========================================================================
window.onload = function () {
  const token = localStorage.getItem('userToken');
  if (token) {
    signInWithCustomToken(auth, token)
      .then(userCredential => {
        const user = userCredential.user;
        const userData = JSON.parse(localStorage.getItem('user-data'));
        if (userData) {
          user.displayName = userData.name;
          user.email = userData.mail;
          formContainer.classList.remove('is-open');
          headerNav.style.display = 'flex';
          headerSignUp.textContent = user.displayName;
          updateUI(user);
        }
      })
      .catch(error => {
        console.error(error);
      });
  } else {
    updateUI();
  }
};

function updateUI(user = null) {
  if (user) {
    // Відображення UI для автентифікованого користувача
    formContainer.classList.remove('is-open');
    headerNav.style.display = 'flex';
    headerSignUp.textContent = user.displayName;
  } else {
    // Відображення UI для неавтентифікованого користувача
    headerNav.style.display = 'none';
    formContainer.classList.remove('is-open');
  }
}
// ========================================================================
function resetPassword() {
  const email = emailInput.value;
  sendPasswordResetEmail(auth, email)
    .then(function () {
      iziToast.show({
        message: 'Password reset email sent. Check your email',
        color: 'yellow',
        position: 'topCenter',
      });
    })
    .catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode == 'auth/invalid-email') {
        alert(errorMessage);
      } else if (errorCode == 'auth/user-not-found') {
        alert(errorMessage);
      }
      console.log(error);
    });
}
// ========================================================================
function handleSignOut() {
  if (auth.currentUser) {
    signOut(auth).then(() => {
      localStorage.removeItem('user-data'); // Очищення кешованих даних користувача
      localStorage.removeItem('userToken'); // Видалення токена після виходу
      updateUI(); // Оновлення UI після виходу
    });
  }
}
// ========================================================================
signUpButton.addEventListener('click', function (event) {
  event.preventDefault();
  handleSignUp();
});

signInButton.addEventListener('click', function (event) {
  event.preventDefault();
  toggleSignIn();
});

passwordResetButton.addEventListener('click', function (event) {
  event.preventDefault();
  resetPassword();
});

logOutBtn.addEventListener('click', function (event) {
  event.preventDefault();
  handleSignOut();
});

// ======================================================================
