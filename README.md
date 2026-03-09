# 🏙️ Smart City Planner

An AI-powered smart city planning and visualization system with real-time analytics, 3D views, and sustainability metrics.

![Version](https://img.shields.io/badge/version-2.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- **AI-Powered Generation** - Describe your city and let Gemini AI generate optimized layouts
- **Interactive 2D/3D Views** - Seamlessly switch between 2D canvas and 3D Three.js visualization
- **Live Traffic Simulation** - Real-time traffic flow graph with 24-hour simulation cycle
- **Transit Network Visualization** - Clean metro-style transit routes using MST algorithm
- **Accessibility & Routing** - Mark ramps/elevators and compute accessible routes on demand
- **Public Service Planner** - AI suggests locations for hospitals, schools, police, and parks
- **Citizen Feedback System** - Report issues and get AI‑powered categorization and priorities
- **Sustainability Advisor** - AI recommends green infrastructure improvements
- **Urban Safety Analysis** - Identify risky areas and suggest lighting/patrols
- **Voice Interface** - Control the app with simple spoken commands
- **Sustainability Metrics** - Track carbon footprint, energy efficiency, green coverage, and more
- **City Comparison** - Save and compare multiple city configurations
- **PDF Export** - Generate detailed reports with charts and screenshots
- **Layer System** - Toggle zones, population heatmap, energy grid, traffic, transit, routes, services and safety layers

## 🚀 Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/smart-city-planner.git
   cd smart-city-planner
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   
   Navigate to `http://localhost:5173` (or the URL shown in terminal)

## 🔧 Configuration

### Gemini API Key (Optional)

To enable AI-powered city generation:

1. Get an API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Click the ⚙️ Settings button in the app
3. Enter your API key and save

Without an API key, the app runs in demo mode with preset city templates.

## 📦 Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder. Preview the build with:

```bash
npm run preview
```

## 🎮 Usage

### Quick Start
1. Enter a city description (e.g., "Eco-friendly city with lots of parks")
2. Click **Generate City** or choose a preset
3. Use zoom/pan to explore, toggle layers for different visualizations

### Tools Tab
- Switch to the **Tools** tab to access routing, service planning, feedback reporting, sustainability and safety analysis.
- Use the **Accessibility** tool in the toolbar to mark ramps on roads before computing routes.
- Voice commands can be triggered with the mic button in the header ("Generate city...", "Find accessible route ...").

### Tools
| Key | Tool |
|-----|------|
| 1 | Select/Pan |
| 2 | Residential Zone |
| 3 | Commercial Zone |
| 4 | Industrial Zone |
| 5 | Green Space |
| 6 | Transit Hub |
| 7 | Road |

### Layer Toggles
- **Zones** - Zone type coloring
- **Population** - Density heatmap
- **Energy** - Power grid overlay
- **Traffic** - Moving vehicle particles
- **Transit** - Metro route network

## 🛠️ Tech Stack

- **Frontend**: Vanilla JavaScript, HTML5 Canvas
- **3D Rendering**: Three.js
- **Charts**: Chart.js
- **Build Tool**: Vite
- **AI Integration**: Google Gemini API
- **PDF Export**: jsPDF + html2canvas

## 📁 Project Structure

```
smart-city-planner/
├── index.html          # Main HTML entry
├── src/
│   ├── main.js         # App entry point
│   ├── engine/         # Core rendering
│   │   ├── CityModel.js
│   │   ├── Renderer.js
│   │   ├── Renderer3D.js
│   │   ├── Metrics.js
│   │   └── Simulator.js
│   ├── ai/             # AI generation
│   │   └── AIGenerator.js
│   ├── utils/          # Helpers & constants
│   └── styles/         # CSS styles
├── package.json
└── vite.config.js
```

## 📄 License

MIT License - feel free to use for personal or commercial projects.

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

Made with ❤️ for sustainable urban planning by TeamXO.
