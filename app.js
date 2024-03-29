document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let correctCount = 0;

        const q1Answer = form.querySelector('input[name="q1"]:checked');
        if (q1Answer && q1Answer.value === 'correct') {
            correctCount++;
        }

        const q2Answer = form.querySelector('input[name="q2"]:checked');
        if (q2Answer && q2Answer.value === 'correct') {
            correctCount++;
        }

        const q3Answer = form.querySelector('input[name="q3"]:checked');
        if (q3Answer && q3Answer.value === 'correct') {
            correctCount++;
        }

        modalText.textContent = `Ви отримали ${correctCount} із 3 правильних відповідей.`;
        modal.style.display = 'block';
    });

    const closeModal = modal.querySelector('.close');
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
