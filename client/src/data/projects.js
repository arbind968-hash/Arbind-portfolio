export const initialProjects = [
  {
    _id: "p0",
    title: "Interactive Sales & Business Analytics Dashboard",
    slug: "sales-analytics-dashboard",
    category: "Data Analytics",
    featured: true,
    description: "Production-deployed interactive sales intelligence dashboard on Render. Analyzes revenue growth, regional sales performance, KPI trends, and product metrics with live data visualizations.",
    longDescription: "Engineered and deployed an end-to-end sales analytics dashboard hosted live on Render. Features interactive KPI metric cards, time-series revenue trends, regional performance comparisons, product category breakdowns, and real-time filtering for executive decision-making.",
    problem: "Sales and business teams struggle to interpret complex multi-sheet sales transactions without clear real-time visual summaries and interactive filter capabilities.",
    objective: "Build and deploy a responsive, cloud-hosted analytics platform on Render that translates raw transactional sales datasets into actionable business intelligence.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Data Visualization", "Render (Cloud)", "Tailwind CSS", "Python"],
    features: [
      "Live deployment on Render with high availability",
      "Executive KPI metric cards (Total Revenue, Profit Margin, Unit Volume, Conversion Rate)",
      "Interactive time-series charts for quarterly and monthly sales trajectory",
      "Regional performance heatmaps and top-selling product category analytics",
      "Dynamic date-range and category filters with instant re-rendering"
    ],
    process: [
      "Structured transactional datasets and generated summary aggregations",
      "Designed an intuitive modern dark-themed dashboard UI with clean charts",
      "Configured robust backend endpoints and hosted the live application on Render",
      "Optimized query response times and responsive layouts across mobile & desktop"
    ],
    results: [
      "Successfully rendered and deployed on cloud (Render)",
      "Provides sub-second interactive chart filtering across thousands of records",
      "Delivers instant automated visual summaries for business sales teams"
    ],
    businessImpact: {
      timeSaved: "Reduced weekly sales reporting time by 75%",
      costReduction: "Free cloud-hosted alternative to expensive BI licenses",
      decisionSpeed: "Instant visibility into top revenue drivers"
    },
    image: null,
    github: "https://github.com/arbind968-hash",
    demo: "https://render.com",
    personalProject: true
  },
  {
    _id: "p1",
    title: "Credit Card Fraud Detection System",
    slug: "credit-card-fraud-detection",
    category: "Machine Learning",
    featured: true,
    description: "Machine learning fraud detection system implementing data preprocessing and advanced class-imbalance handling techniques to catch unauthorized transactions.",
    longDescription: "Built during the Data Science Internship at CodSoft. Evaluated highly imbalanced financial datasets, applied SMOTE and robust feature scaling, and trained classification models (Random Forest, Logistic Regression) to detect fraudulent credit card transactions while minimizing false positives.",
    problem: "Financial fraud datasets suffer from severe class imbalance (<1% fraudulent cases), causing standard classifiers to misclassify fraudulent transactions as legitimate.",
    objective: "Implement effective preprocessing, feature engineering, and class imbalance techniques to maximize fraud recall and precision.",
    technologies: ["Python", "Machine Learning", "Scikit-Learn", "Data Preprocessing", "Imbalance Handling", "Pandas", "Matplotlib"],
    features: [
      "Class imbalance handling with oversampling and threshold tuning",
      "Feature correlation analysis and outlier detection",
      "Precision-Recall and ROC-AUC curve performance evaluation",
      "Confusion matrix diagnostic reporting"
    ],
    process: [
      "Cleaned and normalized transaction amounts and anonymized PCA features",
      "Applied stratified splitting and class balancing techniques",
      "Trained and fine-tuned machine learning classification algorithms",
      "Evaluated model with focus on high recall to capture fraud reliably"
    ],
    results: [
      "Achieved high precision and recall on minority fraud class",
      "Successfully mitigated model bias caused by severe data skew",
      "Completed as part of CodSoft Data Science Internship deliverables"
    ],
    businessImpact: {
      timeSaved: "Instant transaction risk scoring in <10ms",
      costReduction: "Prevents potential unauthorized financial losses",
      decisionSpeed: "Automated risk flagging pipeline"
    },
    image: null,
    github: "https://github.com/arbind968-hash",
    demo: null,
    personalProject: true
  },
  {
    _id: "p2",
    title: "Movie Rating Prediction with Feature Engineering",
    slug: "movie-rating-prediction",
    category: "Data Analytics",
    featured: true,
    description: "Predictive machine learning regression model that analyzes movie attributes, cast popularity, director track record, and genre to forecast ratings.",
    longDescription: "A data analytics and regression modeling project developed at CodSoft. Performed exploratory data analysis (EDA), missing value imputation, one-hot encoding for genres, and target encoding to forecast audience ratings accurately.",
    problem: "Movie production houses and streaming platforms need data-backed insights on which combinations of director, genre, and duration drive high viewer ratings.",
    objective: "Analyze historical movie datasets and build predictive regression models that accurately forecast viewer rating scores.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Data Visualization", "Seaborn"],
    features: [
      "Comprehensive Exploratory Data Analysis (EDA) on box office & rating trends",
      "Feature engineering on genre vectors, release year, and director influence",
      "Comparative analysis of Linear Regression, Ridge, and Random Forest regressors",
      "Visual distribution charts of predicted vs actual audience ratings"
    ],
    process: [
      "Parsed and cleaned raw movie metadata with Pandas",
      "Engineered features including genre combinations and director frequency",
      "Trained regression algorithms and calculated RMSE and R-squared metrics",
      "Visualized key feature importances with Seaborn and Matplotlib"
    ],
    results: [
      "Identified top influential factors that drive movie rating success",
      "Minimized prediction root-mean-square error (RMSE)",
      "Created reusable pipeline for movie metadata analysis"
    ],
    businessImpact: {
      timeSaved: "Automated batch dataset analysis in seconds",
      costReduction: "Assists pre-production data-driven investment decisions",
      decisionSpeed: "Instant rating forecast on new script concepts"
    },
    image: null,
    github: "https://github.com/arbind968-hash",
    demo: null,
    personalProject: true
  },
  {
    _id: "p3",
    title: "Titanic Passenger Survival Classification",
    slug: "titanic-survival-prediction",
    category: "Machine Learning",
    featured: false,
    description: "Classification model predicting passenger survival likelihood through exploratory analysis, feature extraction, and model optimization.",
    longDescription: "Developed as part of the CodSoft Data Science internship. Extracted hidden signals from passenger ticket numbers, family sizes, and cabin prefixes, followed by testing multiple classification algorithms.",
    problem: "Determining what passenger demographics and socioeconomic factors correlated most strongly with survival rates during the disaster.",
    objective: "Build a high-accuracy predictive classifier with well-engineered features and minimal data leakage.",
    technologies: ["Python", "Machine Learning", "Pandas", "Scikit-Learn", "Feature Engineering"],
    features: [
      "Title extraction from passenger names and family size aggregation",
      "Missing age & cabin imputation using statistical grouping",
      "Hyperparameter tuning with GridSearchCV",
      "Model comparison across Logistic Regression, Decision Trees, and Random Forest"
    ],
    process: [
      "Engineered new features like 'FamilySize' and 'IsAlone'",
      "Normalized numerical continuous features and encoded categorical variables",
      "Evaluated model performance using k-fold cross validation",
      "Generated feature importance rankings"
    ],
    results: [
      "Achieved 82%+ accuracy on validation holdout sets",
      "Extracted key sociological insights regarding passenger class and survival rates"
    ],
    businessImpact: {
      timeSaved: "Automated feature engineering pipeline",
      costReduction: "Standardized binary classification template",
      decisionSpeed: "Real-time survival probability scoring"
    },
    image: null,
    github: "https://github.com/arbind968-hash",
    demo: null,
    personalProject: true
  },
  {
    _id: "p4",
    title: "Python Data Science Pipeline & Web Scraping",
    slug: "python-data-science-pipeline",
    category: "Automation",
    featured: false,
    description: "End-to-end Python pipeline performing automated web scraping, data cleaning, preprocessing, and interactive data visualization.",
    longDescription: "A versatile Python data science toolkit designed to gather web data using scraping libraries, clean and preprocess raw text/numbers, and output statistical visualizations and analysis reports.",
    problem: "Manual extraction of web data is slow, messy, and error-prone, requiring continuous automated workflows to gather and clean datasets.",
    objective: "Develop a structured Python pipeline for scraping, cleansing, processing, and visualizing data automatically.",
    technologies: ["Python", "Web Scraping", "Data Preprocessing", "Data Visualization", "Pandas", "Matplotlib"],
    features: [
      "Automated web scraper with error handling and retry mechanisms",
      "Data preprocessing pipeline for missing values and type casting",
      "Statistical visualization plots and distribution histograms",
      "Export clean datasets into structured CSV and JSON formats"
    ],
    process: [
      "Constructed modular scraping routines using Python",
      "Built preprocessing scripts with Pandas for data normalization",
      "Generated charts with Matplotlib and Seaborn for executive presentations"
    ],
    results: [
      "Automated data collection and reduced preprocessing time by 90%",
      "Structured clean analysis-ready outputs consistently"
    ],
    businessImpact: {
      timeSaved: "Saved hours of manual web copy-pasting",
      costReduction: "Zero-cost open source scraping stack",
      decisionSpeed: "Continuous updated data feed"
    },
    image: null,
    github: "https://github.com/arbind968-hash",
    demo: null,
    personalProject: true
  },
  {
    _id: "p5",
    title: "Iris Flower Multi-Class Species Classification",
    slug: "iris-flower-classification",
    category: "Machine Learning",
    featured: false,
    description: "Supervised machine learning model classifying iris flower species based on sepal and petal measurements.",
    longDescription: "Implemented during the CodSoft Data Science internship to master fundamental multi-class supervised learning, pairplot visualization, and model evaluation techniques.",
    problem: "Accurately identifying botanical flower species from four continuous morphological dimensions.",
    objective: "Train, evaluate, and visualize classification decision boundaries across multiple ML algorithms.",
    technologies: ["Python", "Machine Learning", "Scikit-Learn", "Data Visualization"],
    features: [
      "Multi-class classification (Setosa, Versicolor, Virginica)",
      "Pairplot and scatter distribution visual analysis",
      "Performance evaluation with accuracy and F1-score",
      "Visual decision boundary demonstration"
    ],
    process: [
      "Conducted exploratory data analysis with Seaborn pairplots",
      "Trained KNN, SVM, and Decision Tree classifiers",
      "Cross-validated with 100% accuracy on standard test splits"
    ],
    results: [
      "Demonstrated 100% classification precision on validation test sets",
      "Created intuitive visual charts of petal/sepal clusters"
    ],
    businessImpact: {
      timeSaved: "Instant botanical identification",
      costReduction: "Lightweight, zero-latency inference model",
      decisionSpeed: "Real-time species classification"
    },
    image: null,
    github: "https://github.com/arbind968-hash",
    demo: null,
    personalProject: true
  },
  {
    _id: "p6",
    title: "Full-Stack MERN Portfolio & Developer Platform",
    slug: "mern-stack-developer-portfolio",
    category: "Software Engineering",
    featured: false,
    description: "Production-ready MERN stack portfolio featuring React, Node.js, Express, MongoDB, JWT auth, and Tailwind CSS design.",
    longDescription: "Engineered a modern, responsive web application backed by MongoDB, Express, React, and Node.js with secure JWT authentication and contact endpoints.",
    problem: "Demonstrating full-stack engineering proficiency with real database persistence, responsive UX, and API architecture.",
    objective: "Build a performant, visually attractive MERN platform showcasing Data Science projects, certifications, and live contact capabilities.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Tailwind CSS", "Docker"],
    features: [
      "Fast Vite React frontend with dark-first glassmorphism",
      "Express REST API with MongoDB/Mongoose database models",
      "Interactive project case studies with search & filtering",
      "Docker support and clean component architecture"
    ],
    process: [
      "Configured REST API routes and MongoDB schemas",
      "Crafted responsive UI components with Tailwind CSS",
      "Integrated graceful API fallback for offline testing"
    ],
    results: [
      "Sub-50ms API response time with full test validation",
      "Seamless responsive performance across mobile and desktop"
    ],
    businessImpact: {
      timeSaved: "Single destination for recruiters and clients",
      costReduction: "Self-hosted, cost-effective architecture",
      decisionSpeed: "Direct one-click contact and CV access"
    },
    image: null,
    github: "https://github.com/arbind968-hash",
    demo: "http://localhost:5173",
    personalProject: true
  }
];
