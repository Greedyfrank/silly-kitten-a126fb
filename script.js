document.getElementById('year').textContent = new Date().getFullYear();

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', async function (event) {
  event.preventDefault();

  const form = event.currentTarget;
  const button = form.querySelector('button');
  const status = document.getElementById('formStatus');
  const original = button.textContent;
  const formData = new FormData(form);
  const destination = form.getAttribute('action') || '/';

  button.textContent = 'Sending...';
  button.disabled = true;
  status.textContent = '';

  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    });

    if (!response.ok) {
      throw new Error('Submission failed');
    }

    button.textContent = 'Demo request received';
    status.textContent = 'Your request was sent successfully. Redirecting...';
    window.location.assign(destination);
  } catch (error) {
    button.textContent = original;
    status.textContent = 'We could not send your request. Please try again or email info@kryossecuritygroup.com.';
  } finally {
    if (button.textContent !== 'Demo request received') {
      button.disabled = false;
      return;
    }
  }
  });
}
