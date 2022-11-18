const password = document.getElementById('password-id');
const eye = document.getElementById('password-eye');

eye.addEventListener('click', () => {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    eye.classList.toggle('fa-eye-slash');
    eye.classList.toggle('fa-eye');
});