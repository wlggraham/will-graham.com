document.addEventListener('DOMContentLoaded', () => {
    var modal = document.getElementById('lightbox-modal');
    var img = document.getElementById('lightbox-img');
    var caption = document.getElementById('caption');
    var closeBtn = document.getElementsByClassName('close')[0];

    document.querySelectorAll('.single-project-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            var imgSrc = item.getAttribute('data-img');
            img.src = imgSrc;
            caption.textContent = item.querySelector('.single-project-title').textContent;
            modal.style.display = 'block';
        });
    });

    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});
