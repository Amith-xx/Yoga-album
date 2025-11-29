🧘‍♂️ Yoga Album

A simple and beautiful web application to explore different yoga poses with search, sorting, and filtering options.

🚀 Live Demo

(If you deployed with GitHub Pages, add your link here)
https://Amith-xx.github.io/Yoga-album

📌 Features

🔍 Search yoga poses by name

↕️ Sort by A–Z, Z–A, Shortest duration, Longest duration

🖼 Image gallery for each pose

📄 Pose description (name, duration, difficulty)

⚡ Fast data fetching using custom useFetch hook

🎨 Simple and clean UI

📱 Responsive design

🛠 Tech Stack

React

JavaScript (ES6+)

CSS

Custom Hooks (useFetch)

GitHub Pages (for deployment)

📥 Installation
git clone https://github.com/your-username/Yoga-album.git
cd Yoga-album
npm install
npm start

📂 Project Structure
Yoga-album/
│
├── public/
├── src/
│   ├── components/
│   ├── hooks/
│   │   └── useFetch.js
│   ├── App.js
│   ├── index.js
│   ├── FetchData.css
│   └── yoga.json (if using local data)
│
├── package.json
├── README.md
└── .gitignore

🔧 How It Works
1️⃣ Fetching Data

Using a reusable custom hook:

const [data, loading, error] = useFetch("API_URL");

2️⃣ Filtering & Sorting

Done using useMemo for better performance.

3️⃣ Rendering Cards

Each yoga pose is shown with an image and basic details.

🖥 Deployment (GitHub Pages)
npm run build
npm run deploy


This will automatically push your production build to the gh-pages branch.

🤝 Contributing

Pull requests are welcome!
Feel free to open issues for bugs or new feature suggestions.

📜 License

This project is open-source under the MIT License.
