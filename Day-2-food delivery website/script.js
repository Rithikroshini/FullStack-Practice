const categories = [
  { icon: '🍕', title: 'Pizza', description: 'Classic slices and cheesy favorites.' },
  { icon: '🍔', title: 'Burgers', description: 'Juicy patties with loaded toppings.' },
  { icon: '🥗', title: 'Healthy', description: 'Fresh bowls and light meals.' },
  { icon: '🍣', title: 'Sushi', description: 'Fresh rolls and sushi combos.' },
];

const restaurants = [
  {
    name: 'Sunset Grill',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    rating: '4.9',
    time: '18-25 min',
    fee: 'Free delivery',
    price: '$18+',
  },
  {
    name: 'Green Bowl',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
    rating: '4.8',
    time: '15-20 min',
    fee: 'Fast delivery',
    price: '$12+',
  },
  {
    name: 'Fire & Flame',
    image:
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80',
    rating: '4.9',
    time: '20-30 min',
    fee: 'Popular',
    price: '$22+',
  },
];

const categoryGrid = document.getElementById('categoryGrid');
const restaurantGrid = document.getElementById('restaurantGrid');
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

function renderCategories() {
  categoryGrid.innerHTML = categories
    .map(
      (category) => `
        <article class="category-card">
          <div class="category-icon">${category.icon}</div>
          <h3>${category.title}</h3>
          <p>${category.description}</p>
        </article>
      `
    )
    .join('');
}

function renderRestaurants() {
  restaurantGrid.innerHTML = restaurants
    .map(
      (restaurant) => `
        <article class="restaurant-card">
          <img src="${restaurant.image}" alt="${restaurant.name}" />
          <div class="restaurant-body">
            <div class="restaurant-header">
              <h3>${restaurant.name}</h3>
              <span class="rating">⭐ ${restaurant.rating}</span>
            </div>

            <div class="meta-line">
              <span>${restaurant.time}</span>
              <span>${restaurant.fee}</span>
            </div>

            <div class="restaurant-footer">
              <span class="price">${restaurant.price}</span>
              <span class="tag">Open now</span>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

function setupMobileNav() {
  if (!navToggle || !mainNav) return;

  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

renderCategories();
renderRestaurants();
setupMobileNav();
