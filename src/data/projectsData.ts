export type Project = {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  badges: string[];
  github?: string;
  dissertationLink?: string;
  imageCount: number;
  hasVideo: boolean;
  category: ("Game" | "Web" | "AI/ML" | "Computer Vision" | "Systems")[];
};

export const projects: Project[] = [
  {
    id: "privacy-perservation-in-human-motion-analysis",
    title: "Privacy Preservation in Human Motion Analysis",
    shortDescription:
      "Dissertation: privacy-preserving deep learning for radar-based human activity recognition.",
    description: `Privacy Preservation in Human Motion Analysis is my final-year dissertation project, focusing on the intersection of machine learning, healthcare technology, and data privacy. The project investigates how Human Action Recognition (HAR) systems can leverage radar-based sensing technologies to analyze human movement while minimizing the risk of exposing sensitive personal information.

Human motion analysis has become increasingly important in healthcare applications, where deep learning models can be used to monitor patient activities, detect abnormalities, and support clinical decision-making. However, traditional data collection methods, such as cameras and wearable devices, often raise significant privacy concerns by capturing personally identifiable information. This project explores radar sensing as a privacy-conscious alternative and addresses the challenge of preventing user identification from radar-generated motion data.

The research involved developing deep learning models for both activity classification and user identification, followed by the design of a multi-task learning framework to evaluate the trade-off between utility and privacy. I proposed a novel technique called Adaptive Feature-based Perturbation (AFP), which selectively perturbs only the most identity-sensitive features — unlike conventional differential privacy methods that add noise uniformly.

Experimental results demonstrated that AFP reduced the risk of user identification by 98.39% while achieving a 50% improvement in classification accuracy compared to standard differential privacy techniques.`,
    badges: ["Python", "TensorFlow"],
    github:
      "https://github.com/Boondirek-Kanjanapongporn/Privacy-Preservation-in-Human-Motion-Analysis",
    dissertationLink:
      "https://drive.google.com/file/d/1YzeJvAnYrltyJHLKFgyV86f_W6c3CDcY/view?usp=drive_link",
    imageCount: 15,
    hasVideo: false,
    category: ["AI/ML"],
  },
  {
    id: "glasgow-city-portrait",
    title: "Glasgow City Portrait",
    shortDescription:
      "Interactive ecological data visualization platform for Glasgow City Council.",
    description: `Glasgow City Portrait is a web-based data visualization platform developed as a final-year group project by a team of six students from the School of Computing Science at the University of Glasgow. The project was commissioned by GALLANT in collaboration with Glasgow City Council to support the visualization and exploration of urban ecological data.

The platform provides an interactive and intuitive representation of ecological factors affecting the city through a dynamic donut chart visualization. Each ecological factor is displayed as an interactive element, allowing users to explore detailed information and understand how individual factors deviate from their ideal conditions.

To support ongoing data management, the project includes a dedicated administrative interface that enables Glasgow City Council staff to update the visualization in real time — adding or removing ecological factors, modifying values, and managing relationships between interconnected factors without requiring technical intervention.`,
    badges: ["TypeScript", "React.js", "Express.js", "D3.js"],
    github: "https://github.com/karl03/Glasgow-Donut",
    imageCount: 10,
    hasVideo: true,
    category: ["Web"],
  },
  {
    id: "warp-ex",
    title: "warpEx",
    shortDescription:
      "Computer vision app for document scanning, OCR, and multilingual text extraction.",
    description: `warpEx is a computer vision and image processing application developed as my first-year C++ final project. The project was created to explore practical applications of computer vision, optical character recognition (OCR), and real-time image processing using modern machine learning–enhanced libraries.

warpEx functions as an integrated tool for image scanning, object detection, and text extraction. The application allows users to capture images from a device camera or upload images from a gallery, and then processes them to extract readable text content. It supports multiple languages, including Thai, English, Chinese, Korean, and Japanese, through the Tesseract OCR engine developed by Google.

A key feature of warpEx is its document detection and perspective correction system. Using OpenCV, the application identifies document boundaries within an image, even when captured at an angle, then applies image warping techniques to transform the document into a properly aligned, scan-like representation. After preprocessing, warpEx utilizes Leptonica and Tesseract's LSTM-based recognition models to extract text from the processed image.`,
    badges: ["C++", "OpenCV", "Tesseract", "Leptonica", "Raylib"],
    github: "https://github.com/Boondirek-Kanjanapongporn/warpEx",
    imageCount: 9,
    hasVideo: true,
    category: ["Computer Vision", "AI/ML"],
  },
  {
    id: "stupid-rocket",
    title: "The Stupid Rocket",
    shortDescription:
      "Pathfinding simulation comparing DFS and BFS algorithms with a visual rocket navigator.",
    description: `The Stupid Rocket (TSR) is a pathfinding simulation developed as my first-year final project using C. The project was created to explore fundamental artificial intelligence concepts and to gain a deeper understanding of graph traversal algorithms, particularly Depth-First Search (DFS) and Breadth-First Search (BFS).

The simulation revolves around a rocket whose objective is to transport passengers from a starting location to a target destination while navigating around obstacles represented by floating asteroids. Users can customize the simulation by selecting the map size, defining start and destination nodes, and choosing between DFS and BFS to calculate a route.

The project was implemented using C and the Raylib framework for the GUI and simulation components, while C++ was used to develop the pathfinding algorithms. By comparing DFS and BFS within an interactive visual environment, TSR serves as an educational tool demonstrating the strengths and behavioral differences of two fundamental search algorithms.`,
    badges: ["C", "C++", "Raylib"],
    github: "https://github.com/Boondirek-Kanjanapongporn/The-Stupid-Rocket",
    imageCount: 6,
    hasVideo: true,
    category: ["AI/ML"],
  },
  {
    id: "abduction-activity",
    title: "Abduction Activity",
    shortDescription:
      "Arcade game where you pilot a UFO to abduct humans, with accounts, shop, and upgrades.",
    description: `Abduction Activity is an original arcade-style game developed in Python as a first-year university final project. Built using Object-Oriented Programming principles and the Pygame framework, the project demonstrates both game development and software engineering fundamentals through an engaging gameplay experience.

Players take control of a UFO with the objective of abducting as many humans as possible while navigating through a hazardous environment filled with obstacles. The game challenges players to balance speed, precision, and survival to achieve the highest possible score.

The project features a built-in player data management system that securely stores user accounts, passwords, high scores, in-game currency, and progression data. Players can create accounts, track their performance, and compete for top scores. An integrated in-game shop allows users to spend earned coins on new UFO skins and permanent stat upgrades.`,
    badges: ["Python", "Pygame", "Pickle", "Math", "Random"],
    github: "https://github.com/Boondirek-Kanjanapongporn/Abduction-Activity",
    imageCount: 13,
    hasVideo: true,
    category: ["Game"],
  },
  {
    id: "loan-survivor",
    title: "Loan Survivor",
    shortDescription:
      "Survival zombie shooter with random spawns, ammo collection, and a high-score system.",
    description: `Loan Survivor is the first game project I developed after beginning my journey in programming and game development. Created using Construct 2, the project was designed to help me understand fundamental programming concepts, game logic, event-driven development, and interactive gameplay mechanics.

The game is a survival-based zombie shooter in which players must eliminate as many zombies as possible while staying alive. Zombies spawn randomly from different sides of the screen, creating an increasingly challenging environment. Players must collect ammunition that appears at random locations throughout the map, balancing resource management with survival.

As the game progresses, the number and unpredictability of enemies increase, encouraging players to improve their strategy. The game includes a high-score system that records and preserves the player's best performance, providing an incentive to continually beat previous records.`,
    badges: ["Construct 2"],
    imageCount: 4,
    hasVideo: true,
    category: ["Game"],
  },
];
