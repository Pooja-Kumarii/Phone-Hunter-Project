const loadPhones = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones, isShowAll);
}

const displayPhones = (phones, isShowAll) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerText = ''; // Clear previous results

    // Only show 12 phones if "Show All" is not clicked
    const showAllContainer = document.getElementById('show-all-container');
    if (phones.length > 12 && !isShowAll) {
        showAllContainer.classList.remove('hidden');
    } else {
        showAllContainer.classList.add('hidden');
    }

    if (!isShowAll) {
        phones = phones.slice(0, 12);
    }

    phones.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-white p-4 shadow-xl rounded-lg`;
        phoneCard.innerHTML = `
            <img src="${phone.image}" class="mx-auto" />
            <h3 class="text-xl font-bold mt-4">${phone.phone_name}</h3>
            <p>Brand: ${phone.brand}</p>
            <button onclick="handleShowDetails('${phone.slug}')" class="bg-blue-500 text-white px-3 py-1 mt-3 rounded">Details</button>
        `;
        phoneContainer.appendChild(phoneCard);
    });
    toggleSpinner(false);
}

// Handle Search Button
const handleSearch = () => {
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText);
}

// Loading Spinner
const toggleSpinner = (isLoading) => {
    const spinner = document.getElementById('loading-spinner');
    if (isLoading) {
        spinner.classList.remove('hidden');
    } else {
        spinner.classList.add('hidden');
    }
}

// Show All Button Logic
const handleShowAll = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText, true);
}

// Show Details (API for specific phone)
const handleShowDetails = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phone = data.data;
    alert(`Name: ${phone.name}\nStorage: ${phone.mainFeatures.storage}`);
}

// Default Load (optional)
loadPhones('iphone');