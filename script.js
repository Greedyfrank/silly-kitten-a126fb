document.getElementById('year').textContent = new Date().getFullYear();

    document.getElementById('contactForm').addEventListener('submit', function (event) {
      event.preventDefault();
      const button = this.querySelector('button');
      const original = button.textContent;
      button.textContent = 'Demo request received';
      button.disabled = true;
      setTimeout(function () {
        button.textContent = original;
        button.disabled = false;
      }, 2200);
      event.target.reset();
    });
