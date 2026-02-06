// ===== CONFIGURATION =====
const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your OpenWeatherMap API key
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// ===== DOM ELEMENTS =====
const elements = {
    cityInput: document.getElementById('cityInput'),
    searchBtn: document.getElementById('searchBtn'),
    locationBtn: document.getElementById('locationBtn'),
    loading: document.getElementById('loading'),
    weatherContent: document.getElementById('weatherContent'),
    healthSection: document.getElementById('healthSection'),
    errorMessage: document.getElementById('errorMessage'),
    errorText: document.getElementById('errorText'),

    // Weather info
    cityName: document.getElementById('cityName'),
    currentDate: document.getElementById('currentDate'),
    temperature: document.getElementById('temperature'),
    weatherIcon: document.getElementById('weatherIcon'),
    weatherDescription: document.getElementById('weatherDescription'),
    feelsLike: document.getElementById('feelsLike'),
    humidity: document.getElementById('humidity'),
    windSpeed: document.getElementById('windSpeed'),

    // Health info
    alertTitle: document.getElementById('alertTitle'),
    alertMessage: document.getElementById('alertMessage'),
    fruitsGrid: document.getElementById('fruitsGrid'),
    healthTipsList: document.getElementById('healthTipsList')
};

// ===== FRUIT DATABASE WITH WATER CONTENT =====
const fruitDatabase = {
    veryHot: [
        { emoji: '🍉', name: 'Watermelon', water: 92, benefits: 'Excellent hydration, rich in vitamins A & C, lycopene for heart health' },
        { emoji: '🥒', name: 'Cucumber', water: 95, benefits: 'Highest water content, electrolytes, vitamin K, cooling effect' },
        { emoji: '🍓', name: 'Strawberries', water: 91, benefits: 'High in antioxidants, vitamin C, fiber, natural energy boost' }
    ],
    hot: [
        { emoji: '🍉', name: 'Watermelon', water: 92, benefits: 'Natural hydration, vitamins A & C, helps regulate body temperature' },
        { emoji: '🍈', name: 'Cantaloupe', water: 90, benefits: 'Beta-carotene, potassium, vitamin C, supports immune system' },
        { emoji: '🍊', name: 'Oranges', water: 86, benefits: 'Vitamin C powerhouse, electrolytes, natural sugars for energy' },
        { emoji: '🍇', name: 'Grapefruit', water: 88, benefits: 'Hydrating, metabolism booster, rich in antioxidants' }
    ],
    warm: [
        { emoji: '🍑', name: 'Peaches', water: 88, benefits: 'Vitamins A & C, fiber, natural sweetness, gentle on digestion' },
        { emoji: '🍍', name: 'Pineapple', water: 86, benefits: 'Digestive enzymes, vitamin C, manganese, anti-inflammatory' },
        { emoji: '🍎', name: 'Apples', water: 84, benefits: 'Fiber-rich, quercetin for health, sustained energy' }
    ],
    moderate: [
        { emoji: '🍇', name: 'Grapes', water: 81, benefits: 'Antioxidants, natural sugars, resveratrol for heart health' },
        { emoji: '🍐', name: 'Pears', water: 84, benefits: 'High fiber, vitamin C, copper, promotes digestive health' },
        { emoji: '🫐', name: 'Blueberries', water: 84, benefits: 'Antioxidant champions, brain health, vitamin K' }
    ],
    cool: [
        { emoji: '🥝', name: 'Kiwi', water: 83, benefits: 'Vitamin C (more than oranges!), vitamin K, digestive enzymes' },
        { emoji: '🍎', name: 'Apples', water: 84, benefits: 'Immunity support, fiber, keeps you full longer' },
        { emoji: '🍊', name: 'Oranges', water: 86, benefits: 'Boost immunity with vitamin C, warm from the inside' }
    ],
    cold: [
        { emoji: '🍊', name: 'Citrus Fruits', water: 87, benefits: 'Vitamin C to fight cold, immunity booster, warm beverages ideal' },
        { emoji: '🍋', name: 'Lemons', water: 89, benefits: 'Add to warm water, vitamin C, aids digestion, detoxifying' },
        { emoji: '🍌', name: 'Bananas', water: 74, benefits: 'Energy-dense, potassium, B vitamins, quick warm-up fuel' }
    ]
};

// ===== HEALTH RECOMMENDATIONS DATABASE =====
const healthRecommendations = {
    veryHot: {
        title: '🔥 Extreme Heat Alert!',
        message: 'The temperature is dangerously high. Take immediate precautions to stay safe.',
        tips: [
            '💧 Drink 3-4 liters (12-16 glasses) of water throughout the day',
            '🏠 Stay indoors during peak heat hours (11 AM - 3 PM)',
            '🚫 Avoid strenuous outdoor activities and heavy exercise',
            '👕 Wear light-colored, loose-fitting, breathable clothing',
            '🧊 Use cooling methods: cold showers, ice packs, air conditioning',
            '⚠️ Watch for heat exhaustion symptoms: dizziness, nausea, rapid heartbeat'
        ]
    },
    hot: {
        title: '☀️ Hot Weather - Stay Hydrated!',
        message: 'It\'s quite hot today. Keep your body cool and well-hydrated.',
        tips: [
            '💧 Drink at least 2-3 liters (8-12 glasses) of water daily',
            '🌴 Seek shade when outdoors, use umbrella or hat',
            '⏰ Plan outdoor activities for early morning or evening',
            '🥗 Eat light, water-rich meals with fresh fruits and vegetables',
            '💦 Splash water on face and neck to cool down instantly',
            '🚰 Carry a water bottle wherever you go'
        ]
    },
    warm: {
        title: '🌤️ Warm & Pleasant Weather',
        message: 'Perfect weather for outdoor activities! Stay hydrated and enjoy.',
        tips: [
            '💧 Drink 2 liters (8 glasses) of water daily',
            '🏃 Great weather for exercise, walks, or outdoor sports',
            '🧴 Apply sunscreen if spending extended time outdoors',
            '🥤 Enjoy refreshing natural fruit juices',
            '🌳 Perfect for outdoor activities like picnics or hiking',
            '😎 Wear sunglasses to protect your eyes'
        ]
    },
    moderate: {
        title: '😊 Perfect Comfortable Weather',
        message: 'Ideal conditions! Maintain balanced nutrition and enjoy your day.',
        tips: [
            '💧 Drink 1.5-2 liters (6-8 glasses) of water daily',
            '🥗 Enjoy a balanced diet with fruits, vegetables, and proteins',
            '🏃 Excellent weather for all types of physical activities',
            '🌱 Fresh air is beneficial - take short walks',
            '🧘 Great for outdoor meditation or yoga',
            '📚 Comfortable for both indoor and outdoor activities'
        ]
    },
    cool: {
        title: '🍂 Cool Weather - Boost Your Immunity',
        message: 'It\'s getting cooler. Keep warm and strengthen your immune system.',
        tips: [
            '☕ Drink warm beverages: herbal tea, warm lemon water, ginger tea',
            '🧥 Layer your clothing to maintain body warmth',
            '🍲 Consume warm, nutritious meals like soups and broths',
            '🏃 Light exercise to keep blood circulation active',
            '💊 Ensure adequate vitamin C intake for immunity',
            '😴 Get sufficient sleep (7-8 hours) for immune health'
        ]
    },
    cold: {
        title: '❄️ Cold Weather - Stay Warm!',
        message: 'Bundle up and keep your body warm. Protect yourself from the cold.',
        tips: [
            '🧥 Wear multiple layers, including thermal wear',
            '🍵 Drink hot beverages regularly: tea, coffee, hot chocolate',
            '🍲 Eat warm, hearty meals with plenty of calories',
            '🏠 Keep your living space warm and dry',
            '🧤 Protect extremities: wear gloves, warm socks, and a hat',
            '💨 Avoid prolonged exposure to cold wind',
            '🏃 Do light indoor exercises to maintain body heat',
            '💧 Don\'t forget hydration - warm water counts too!'
        ]
    }
};

// ===== WEATHER ICONS MAPPING =====
const weatherIcons = {
    Clear: '☀️',
    Clouds: '☁️',
    Rain: '🌧️',
    Drizzle: '🌦️',
    Thunderstorm: '⛈️',
    Snow: '❄️',
    Mist: '🌫️',
    Fog: '🌫️',
    Haze: '🌫️'
};

// ===== EVENT LISTENERS =====
elements.searchBtn.addEventListener('click', () => {
    const city = elements.cityInput.value.trim();
    if (city) {
        getWeatherByCity(city);
    }
});

elements.cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const city = elements.cityInput.value.trim();
        if (city) {
            getWeatherByCity(city);
        }
    }
});

elements.locationBtn.addEventListener('click', getWeatherByLocation);

// ===== INITIALIZE APP =====
window.addEventListener('load', () => {
    // Check if API key is set
    if (API_KEY === 'YOUR_API_KEY_HERE') {
        // Show demo data without error message
        showDemoData();
    } else {
        getWeatherByLocation();
    }
});

// ===== CORE FUNCTIONS =====

function getWeatherByLocation() {
    if (navigator.geolocation) {
        showLoading();
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                fetchWeather(`lat=${latitude}&lon=${longitude}`);
            },
            (error) => {
                hideLoading();
                showError('Unable to get your location. Please search for a city instead.');
                console.error('Geolocation error:', error);
            }
        );
    } else {
        showError('Geolocation is not supported by your browser.');
    }
}

function getWeatherByCity(city) {
    if (API_KEY === 'YOUR_API_KEY_HERE') {
        // Show message that API key is needed for city search
        hideLoading();
        showError('To search for cities, please add your free API key from OpenWeatherMap (see instructions in the Demo Mode box above). For now, you can view the demo data showing 32°C weather below.');
        return;
    }
    showLoading();
    fetchWeather(`q=${city}`);
}

async function fetchWeather(query) {
    try {
        const response = await fetch(`${API_BASE_URL}?${query}&appid=${API_KEY}&units=metric`);

        if (!response.ok) {
            throw new Error('City not found or API error');
        }

        const data = await response.json();
        displayWeather(data);
        hideError();
    } catch (error) {
        hideLoading();
        showError('Unable to fetch weather data. Please check the city name or try again later.');
        console.error('Weather API error:', error);
    }
}

function displayWeather(data) {
    hideLoading();

    // Extract weather data
    const temp = Math.round(data.main.temp);
    const feelsLike = Math.round(data.main.feels_like);
    const humidity = data.main.humidity;
    const windSpeed = Math.round(data.wind.speed * 3.6); // Convert m/s to km/h
    const weatherCondition = data.weather[0].main;
    const description = data.weather[0].description;
    const cityName = data.name;
    const country = data.sys.country;

    // Update weather display
    elements.cityName.textContent = `${cityName}, ${country}`;
    elements.currentDate.textContent = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    elements.temperature.textContent = temp;
    elements.weatherIcon.textContent = weatherIcons[weatherCondition] || '🌡️';
    elements.weatherDescription.textContent = description;
    elements.feelsLike.textContent = `${feelsLike}°C`;
    elements.humidity.textContent = `${humidity}%`;
    elements.windSpeed.textContent = `${windSpeed} km/h`;

    // Show weather content
    elements.weatherContent.style.display = 'block';

    // Update health recommendations based on temperature
    updateHealthRecommendations(temp);

    // Change background gradient based on temperature
    updateBackgroundTheme(temp);
}

function updateHealthRecommendations(temp) {
    let category, fruits, recommendations;

    // Determine temperature category
    if (temp > 35) {
        category = 'veryHot';
    } else if (temp >= 30) {
        category = 'hot';
    } else if (temp >= 25) {
        category = 'warm';
    } else if (temp >= 15) {
        category = 'moderate';
    } else if (temp >= 10) {
        category = 'cool';
    } else {
        category = 'cold';
    }

    fruits = fruitDatabase[category];
    recommendations = healthRecommendations[category];

    // Update health alert
    elements.alertTitle.textContent = recommendations.title;
    elements.alertMessage.textContent = recommendations.message;

    // Update fruit recommendations
    elements.fruitsGrid.innerHTML = '';
    fruits.forEach((fruit, index) => {
        const fruitCard = document.createElement('div');
        fruitCard.className = 'fruit-card';
        fruitCard.style.animationDelay = `${index * 0.1}s`;
        fruitCard.innerHTML = `
            <span class="fruit-emoji">${fruit.emoji}</span>
            <div class="fruit-name">${fruit.name}</div>
            <span class="water-content">${fruit.water}% Water</span>
            <div class="fruit-benefits">${fruit.benefits}</div>
        `;
        elements.fruitsGrid.appendChild(fruitCard);
    });

    // Update health tips
    elements.healthTipsList.innerHTML = '';
    recommendations.tips.forEach((tip, index) => {
        const li = document.createElement('li');
        li.textContent = tip;
        li.style.animationDelay = `${index * 0.1}s`;
        elements.healthTipsList.appendChild(li);
    });

    // Show health section
    elements.healthSection.style.display = 'block';
}

function updateBackgroundTheme(temp) {
    const body = document.body;

    // Remove existing theme classes
    body.classList.remove('theme-hot', 'theme-warm', 'theme-cool', 'theme-cold');

    // Add appropriate theme class
    if (temp > 30) {
        body.classList.add('theme-hot');
    } else if (temp >= 20) {
        body.classList.add('theme-warm');
    } else if (temp >= 10) {
        body.classList.add('theme-cool');
    } else {
        body.classList.add('theme-cold');
    }
}

// ===== UI HELPER FUNCTIONS =====
function showLoading() {
    elements.loading.style.display = 'flex';
    elements.weatherContent.style.display = 'none';
    elements.healthSection.style.display = 'none';
    hideError();
}

function hideLoading() {
    elements.loading.style.display = 'none';
}

function showError(message) {
    elements.errorText.textContent = message;
    elements.errorMessage.style.display = 'flex';
}

function hideError() {
    elements.errorMessage.style.display = 'none';
}

// ===== DEMO DATA (for when API key is not set) =====
function showDemoData() {
    const demoData = {
        name: 'Demo City',
        sys: { country: 'XX' },
        main: {
            temp: 32,
            feels_like: 35,
            humidity: 65
        },
        wind: { speed: 4.5 },
        weather: [
            {
                main: 'Clear',
                description: 'clear sky'
            }
        ]
    };

    setTimeout(() => {
        displayWeather(demoData);
        // Show info message
        const infoDiv = document.createElement('div');
        infoDiv.style.cssText = `
            background: rgba(102, 126, 234, 0.1);
            border: 2px solid #667eea;
            border-radius: 16px;
            padding: 20px;
            margin: 20px 0;
            text-align: center;
            animation: fadeIn 0.5s ease;
        `;
        infoDiv.innerHTML = `
            <h3 style="margin-bottom: 10px;">📝 Demo Mode</h3>
            <p>This is demo data showing 32°C. To see real weather:</p>
            <ol style="text-align: left; margin: 15px auto; max-width: 400px;">
                <li>Get a free API key from <a href="https://openweathermap.org/api" target="_blank" style="color: #667eea;">OpenWeatherMap</a></li>
                <li>Open <code style="background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px;">script.js</code></li>
                <li>Replace <code style="background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px;">YOUR_API_KEY_HERE</code> with your API key</li>
            </ol>
        `;
        document.querySelector('.container').insertBefore(infoDiv, document.querySelector('.weather-card'));
    }, 500);
}
