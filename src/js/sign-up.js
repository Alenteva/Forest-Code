import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const formContainer = document.querySelector('.Form-window');
const closeFormBtn = document.querySelector('.Close-form-btn');
const btnSignUp = document.querySelector('.header-user');

btnSignUp.addEventListener('click', function () {
  formContainer.classList.add('is-open');
  //   document.body.style.overflow = 'hidden';
});

closeFormBtn.addEventListener('click', function () {
  formContainer.classList.remove('is-open');
  //   document.body.style.overflow = '';
});

const firebaseConfig = {
  apiKey: 'AIzaSyD8UvisVnkCvMijmf6q4ZtLkQgC43vz2KM',
  authDomain: 'dookshelf-357a4.firebaseapp.com',
  projectId: 'dookshelf-357a4',
  storageBucket: 'dookshelf-357a4.appspot.com',
  messagingSenderId: '957443484270',
  appId: '1:957443484270:web:de06245395594e6cf9947f',
  measurementId: 'G-PGZE6HZC47',
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const signUpButton = document.querySelector('.form__btn-up');
// Додавання обробника подій для кнопки "Sign up"
signUpButton.addEventListener('click', event => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(username, email, password)
    .then(userCredential => {
      // Успішно створено обліковий запис користувача
      const user = userCredential.user;
      btnSignUp.textContent = username;
    })
    .catch(error => {
      // Обробка помилок під час реєстрації користувача
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Registration error:', errorMessage);
    });
});
// ============================

// const signUpButton = document.querySelector('.header-user'); // Змінюємо селектор на клас кнопки з іменем "header-user"

// // Додавання обробника подій для кнопки "Sign up"
// signUpButton.addEventListener('click', event => {
//   event.preventDefault();
//   const username = document.getElementById('username').value;
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;

//   firebase
//     .auth()
//     .createUserWithEmailAndPassword(email, password)
//     .then(userCredential => {
//       // Успішно створено обліковий запис користувача
//       const user = userCredential.user;
//       console.log('User registered:', user);

//       // Відобразити ім'я користувача на кнопці "Sign up"
//       signUpButton.textContent = username;
//     })
//     .catch(error => {
//       // Обробка помилок під час реєстрації користувача
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.error('Registration error:', errorMessage);
//     });
// });
