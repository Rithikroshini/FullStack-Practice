document.addEventListener('DOMContentLoaded', function () {
    const adForm = document.getElementById('adForm');
    const adsContainer = document.getElementById('adsContainer');

    adForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const title = document.getElementById('adTitle').value.trim();
        const description = document.getElementById('adDescription').value.trim();
        const price = document.getElementById('adPrice').value.trim();

        if (!title || !description || !price) {
            alert("All fields are required!");
            return;
        }

        const newAd = document.createElement('div');
        newAd.classList.add('ad');
        newAd.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
            <p>Price: $${price}</p>
        `;

        
        adsContainer.appendChild(newAd);

        
        document.getElementById('adTitle').value = "";
        document.getElementById('adDescription').value = "";
        document.getElementById('adPrice').value = "";
    });
});
