# Weather Health Advisor 🌡️🍉

A modern, interactive weather application that provides personalized health recommendations and fruit suggestions based on current temperature conditions.

## ✨ Features

- **Real-time Weather Data**: Fetches current weather using OpenWeatherMap API
- **Geolocation Support**: Automatically detects your location
- **City Search**: Look up weather for any city worldwide
- **Health Recommendations**: Get personalized health tips based on temperature
- **Fruit Suggestions**: Discover fruits with high water content
  - Each fruit shows its exact water percentage (e.g., Watermelon 92% water)
  - Includes nutritional benefits and vitamins
- **Beautiful UI**: Modern design with glassmorphism effects and smooth animations
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Demo Mode**: Test the app without an API key

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- (Optional) OpenWeatherMap API key for live weather data

### Installation

1. **Get an API Key** (Optional - app works in demo mode without it):
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Get your API key from the dashboard

2. **Configure the Application**:
   - Open `script.js`
   - Find line 2: `const API_KEY = 'YOUR_API_KEY_HERE';`
   - Replace `YOUR_API_KEY_HERE` with your actual API key
   - Save the file

3. **Run the Application**:
   ```powershell
   # Navigate to the project directory
   cd "c:\Users\sujie\OneDrive\Documents\weather application with health instreation"
   
   # Start a local server (choose one method):
   
   # Method 1: Python
   python -m http.server 8000
   
   # Method 2: PHP
   php -S localhost:8000
   
   # Method 3: Node.js (if you have http-server installed)
   npx http-server -p 8000
   ```

4. **Open in Browser**:
   - Navigate to `http://localhost:8000`
   - Allow location access when prompted (optional)
   - Start exploring weather and health recommendations!

## 📱 Usage

### Getting Weather Information

1. **Auto-detect Location**: Click "Use My Location" button
2. **Search by City**: Type a city name and press Enter or click the search icon

### Understanding Health Recommendations

The app provides different recommendations based on temperature:

- **Very Hot (>35°C)**: Extreme heat warnings, high-water-content fruits
- **Hot (30-35°C)**: Hydration focus, watermelon, oranges, cantaloupe
- **Warm (25-30°C)**: Light fruits, outdoor activity tips
- **Moderate (15-25°C)**: Balanced nutrition suggestions
- **Cool (10-15°C)**: Immunity-boosting fruits, warm beverages
- **Cold (<10°C)**: Energy-dense fruits, warming tips

### Example: Hot Weather (32°C)

When it's 32°C, the app will suggest:
- **Watermelon** (92% water) - Natural hydration + Vitamins A & C
- **Cantaloupe** (90% water) - Beta-carotene + Potassium
- **Oranges** (86% water) - Vitamin C + Electrolytes
- Plus 6-8 additional health tips for hot weather

## 🛠️ Technology Stack

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with animations
- **JavaScript (ES6+)**: Dynamic functionality
- **OpenWeatherMap API**: Weather data
- **Google Fonts**: Inter font family

## 📂 Project Structure

```
weather application with health instreation/
│
├── index.html          # Main HTML structure
├── styles.css          # Styling and animations
├── script.js           # Weather API and health logic
└── README.md           # This file
```

## 🎨 Features Breakdown

### Weather Display
- Current temperature with feels-like
- Humidity percentage
- Wind speed in km/h
- Weather condition icons
- City name and current date

### Health Recommendations
- Temperature-based alerts
- Specific fruit recommendations with:
  - Emoji icons
  - Water content percentage
  - Nutritional benefits
- 6-8 actionable health tips
- Dynamic background themes

## 🌐 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 📝 Notes

- The app works in **Demo Mode** without an API key (shows 32°C sample data)
- OpenWeatherMap free tier allows 60 calls/minute, 1,000,000 calls/month
- Geolocation requires HTTPS in production (works on localhost)

## 🔒 Privacy

- Location data is only used to fetch weather information
- No personal data is stored or transmitted
- All processing happens in your browser

## 🐛 Troubleshooting

**Issue**: "Please add your OpenWeatherMap API key"
- **Solution**: Add your API key in `script.js` or use demo mode

**Issue**: "Unable to get your location"
- **Solution**: Grant location permission or use city search

**Issue**: Weather not updating
- **Solution**: Check internet connection and API key validity

## 📄 License

This project is open source and available for personal and educational use.

## 🤝 Contributing

Feel free to enhance this application with:
- More fruit varieties
- Additional health metrics
- Localization support
- Weather forecasts
- And more!

---

**Enjoy staying healthy with Weather Health Advisor!** 🌡️🍉💚
