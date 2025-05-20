 function openModal() {
      document.getElementById('popup').style.display = 'flex';
    }

    function closeModal() {
      document.getElementById('popup').style.display = 'none';
    }

    // Optional: Close modal if clicked outside
    window.addEventListener('click', function(e) {
      const popup = document.getElementById('popup');
      if (e.target === popup) {
        closeModal();
      }
    });