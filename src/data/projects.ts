export interface Project {
  id: string;
  title: string;
  tagline: string;
  tech: string[];
  description: string;
  image?: string;
  iconName: string; // Used to map to Lucide icons dynamically
  github: string;
  demo?: string;
  metrics: { label: string; value: string }[];
  problem: string;
  architecture: string[];
  impact: string;
  isFeatured: boolean;
}

export const projects: Project[] = [
  {
    id: "luminadia",
    title: "LuminaDia — Eye Disease Detection",
    tagline: "Deep Learning • Explainable AI • Computer Vision",
    tech: ["Python", "PyTorch", "TensorFlow", "OpenCV", "Grad-CAM"],
    description: "Explainable AI retinal diagnostic platform using DenseNet architectures and Grad-CAM explainability overlays.",
    image: "https://raw.githubusercontent.com/savin-ss/LuminaDia/refs/heads/main/assests/Hero.png",
    iconName: "Eye",
    github: "https://github.com/savin-ss/LuminaDia",
    demo: "https://us9oehm5frd1vbs7.public.blob.vercel-storage.com/LuminaDia%20_%20XAI-Powered%20Diabetes%20Detection%20-%20Google%20Chrome%202026-05-30%2014-33-09.mp4",
    metrics: [
      { label: "Diagnostic Acc.", value: "94.2%" },
      { label: "Inference Time", value: "< 200ms" },
      { label: "False Positives", value: "< 2%" },
    ],
    problem: "Late detection of diabetic retinopathy and other eye diseases leads to irreversible vision loss. Manual retinal screening is subjective and prone to diagnostic delays.",
    architecture: [
      "Image preprocessing (CLAHE, normalization, cropping) via OpenCV",
      "Feature extraction using custom DenseNet121 architecture in PyTorch",
      "Generating diagnostic probabilities and heatmaps using Grad-CAM",
      "Inference served via scalable REST API backends"
    ],
    impact: "Reduces screening backlog by providing instant, highly accurate secondary diagnostic opinions for clinical ophthalmology teams.",
    isFeatured: true
  },
  {
    id: "churnsense-ai",
    title: "ChurnSense AI",
    tagline: "Machine Learning • Predictive Analytics • APIs",
    tech: ["Python", "XGBoost", "LightGBM", "FastAPI", "Streamlit", "SHAP"],
    description: "Enterprise-grade churn prediction platform using ensemble learning, SHAP explainability, FastAPI inference APIs, and Streamlit analytics dashboards.",
    image: "https://github.com/savin-ss/ai-churn-prediction-platform/raw/main/assests/Screenshot%202026-05-31%20235630.png?raw=true",
    iconName: "ChartBar",
    github: "https://github.com/savin-ss/ai-churn-prediction-platform",
    metrics: [
      { label: "Predictive Acc.", value: "89%" },
      { label: "Pipeline Latency", value: "120ms" },
      { label: "Retention Lift", value: "+ 15%" },
    ],
    problem: "High customer attrition rates in SaaS. Teams lack visibility into which customers are at risk and, more importantly, why they are leaving.",
    architecture: [
      "Data wrangling and feature engineering pipeline using Pandas/Scikit-Learn",
      "Model training utilizing ensemble XGBoost and LightGBM classifiers",
      "Feature importance interpretation layer powered by SHAP values",
      "Production-ready inference deployment using Docker and FastAPI"
    ],
    impact: "Empowers customer success teams to proactively intervene, potentially recovering thousands in MRR.",
    isFeatured: true
  },
  {
    id: "adhd-detection",
    title: "AI-Based ADHD Detection System",
    tagline: "Neuroscience • Computer Vision • Time-Series",
    tech: ["Python", "TensorFlow", "MediaPipe", "Scikit-Learn"],
    description: "Non-invasive computer vision pipeline analyzing facial micro-expressions and motor restlessness for early ADHD screening.",
    image: "https://raw.githubusercontent.com/savin-ss/AI-Based-ADHD-Detection-and-Classification-System/refs/heads/main/assests/home%20page.png",
    iconName: "BrainCircuit",
    github: "https://github.com/savin-ss/adhd-detection",
    metrics: [
      { label: "Screening Acc.", value: "87%" },
      { label: "Tracking FPS", value: "60 FPS" },
      { label: "Data Modality", value: "Visual & Motor" },
    ],
    problem: "Traditional ADHD diagnosis relies on subjective behavioral questionnaires which can take months to process.",
    architecture: [
      "Real-time pose and facial landmark tracking via Google MediaPipe",
      "Extraction of micro-movement frequency and attention span metrics",
      "Time-series data processing using sliding window algorithms",
      "Classification of hyperactive/inattentive traits using deep neural networks"
    ],
    impact: "Provides a quantifiable, objective data point to assist clinicians in the diagnostic workflow.",
    isFeatured: true
  },
  {
    id: "smart-plant-care",
    title: "Smart Indoor Plant Care System",
    tagline: "IoT • Data Telemetry • Hardware Integration",
    tech: ["C++", "Python", "MQTT", "Arduino", "ESP32", "InfluxDB"],
    description: "End-to-end IoT sensor network providing real-time telemetry, automated irrigation, and anomaly alerting for indoor agriculture.",
    image: "https://raw.githubusercontent.com/savin-ss/Smart-Indoort-Plant-Care-System/refs/heads/main/assests/home%20page.png",
    iconName: "Leaf",
    github: "https://github.com/savin-ss/smart-plant-care",
    metrics: [
      { label: "Sensor Uptime", value: "99.9%" },
      { label: "Telemetry Rate", value: "1Hz" },
      { label: "Water Savings", value: "30%" },
    ],
    problem: "Overwatering and poor environmental monitoring cause high mortality rates in indoor agriculture.",
    architecture: [
      "Hardware integration of soil moisture, temperature, and humidity sensors via ESP32",
      "Data transmission utilizing lightweight MQTT protocols over WiFi",
      "Time-series telemetry storage implemented with InfluxDB",
      "Automated logic control triggering localized irrigation pumps"
    ],
    impact: "Optimizes resource utilization and ensures ideal growing conditions autonomously.",
    isFeatured: true
  },
  {
    id: "nlp-essay-scoring",
    title: "NLP Essay Scoring System",
    tagline: "Natural Language Processing • Semantic Tokens",
    tech: ["Python", "Scikit-Learn", "NLTK", "Pandas"],
    description: "Automated semantic scoring engine using NLP feature extraction and machine learning ranking models (SVR). Provides unbiased baseline grading for written assignments.",
    image: "https://raw.githubusercontent.com/savin-ss/nlp-essay-scoring/8441d2ea878729a09e681fff78ee838a3d524eca/assests/Screenshot%202025-06-07%20200125.png",
    iconName: "BookOpen",
    github: "https://github.com/savin-ss/nlp-essay-scoring",
    metrics: [
      { label: "Scoring Accuracy", value: "91%" },
      { label: "Token Processing", value: "5k/sec" },
      { label: "Models Evaluated", value: "SVR, Random Forest" },
    ],
    problem: "Manual grading of standard essays is time-intensive and subject to evaluator bias.",
    architecture: [
      "Text normalization and cleaning using NLTK and regex",
      "Feature engineering: word count, sentence length, POS tagging",
      "Vectorization using TF-IDF and Doc2Vec",
      "Predictive grading using Support Vector Regression (SVR)"
    ],
    impact: "Provides an automated, unbiased baseline score for written assignments.",
    isFeatured: false
  },
  {
    id: "vulnerability-triage",
    title: "AI Bug Bounty Vulnerability Triage",
    tagline: "Cybersecurity • NLP",
    tech: ["Python", "Transformers", "FastAPI", "React"],
    description: "NLP-powered triage platform that automatically classifies and prioritizes incoming bug bounty reports based on severity against OWASP categories.",
    image: "https://raw.githubusercontent.com/savin-ss/ai-vulnerability-triage-system/555f830743569df80ca1760dc58c49fdb8479354/assests/login-page.png",
    iconName: "Shield",
    github: "https://github.com/savin-ss/ai-vulnerability-triage-system",
    metrics: [
      { label: "Triage Accuracy", value: "93%" },
      { label: "API Latency", value: "110ms" },
      { label: "Classification", value: "OWASP Top 10" },
    ],
    problem: "Security teams are overwhelmed by thousands of duplicate or low-priority bug reports.",
    architecture: [
      "Incoming report ingestion via RESTful FastAPI endpoints",
      "Text preprocessing and artifact extraction (IPs, CVEs)",
      "Transformer-based NLP classification against OWASP categories",
      "Severity scoring algorithm triggering automated escalation"
    ],
    impact: "Reduces manual triage load by prioritizing high-risk exploits automatically.",
    isFeatured: false
  }
];
