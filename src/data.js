import { 
    LineChart, Code2, Database, Wrench, 
    BarChart3, BrainCircuit, GraduationCap, Star, Target
  } from 'lucide-react';
  
  export const techStack = [
    "Python", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Streamlit", "Git & GitHub", "Kaggle"
  ];
  
  export const projects = [
    {
      id: 1,
      title: "IPL Data Analysis Dashboard",
      description: "Interactive dashboard analyzing 17 years of IPL data with player statistics, match insights, and visualizations.",
      tags: ["Python", "Pandas", "Plotly", "Streamlit"],
      status: "Featured",
      links: {
        github: "#",
        view: "#"
      }
    },
    {
      id: 2,
      title: "Netflix Data Analysis",
      description: "Performed exploratory data analysis on the Netflix dataset to uncover trends in content distribution, genres, release years, and country-wise production.",
      tags: ["Python", "Pandas", "Numpy"],
      status: "In Progress",
      links: {
        github: "#",
        view: "#"
      }
    },
    {
      id: 3,
      title: "Churn Prediction Model",
      description: "Machine learning model to predict customer churn using classification algorithms like Random Forest and XGBoost.",
      tags: ["Scikit-learn", "XGBoost", "Jupyter", "Python"],
      status: "In Progress",
      links: {
        github: "#",
        view: "#"
      }
    },
    {
      id: 4,
      title: "Govt Scheme AI Finder",
      description: "AI-powered system to match users with relevant government schemes using NLP and machine learning.",
      tags: ["NLP", "Machine Learning", "Python", "FastAPI"],
      status: "In Progress",
      links: {
        github: "#",
        preview: "#"
      }
    }
  ];
  
  export const skills = [
    {
      id: 1,
      title: "Languages",
      icon: Code2,
      tags: [
        { name: "Python", level: 90 },
        { name: "C++", level: 75 },
        { name: "SQL", level: 85 },
        { name: "HTML/CSS", level: 60 }
      ]
    },
    {
      id: 2,
      title: "Data Analysis",
      icon: LineChart,
      tags: [
        { name: "Pandas", level: 95 },
        { name: "NumPy", level: 85 },
        { name: "Polars", level: 70 }
      ]
    },
    {
      id: 3,
      title: "Visualization",
      icon: BarChart3,
      tags: [
        { name: "Matplotlib", level: 88 },
        { name: "Seaborn", level: 85 },
        { name: "Plotly", level: 80 }
      ]
    },
    {
      id: 4,
      title: "Machine Learning",
      icon: BrainCircuit,
      tags: [
        { name: "Scikit-learn", level: 90 },
        { name: "Regression", level: 85 },
        { name: "Classification", level: 88 }
      ]
    },
    {
      id: 5,
      title: "Databases",
      icon: Database,
      tags: [
        { name: "MySQL", level: 85 },
        { name: "Data Cleaning", level: 95 },
        { name: "EDA", level: 90 }
      ]
    },
    {
      id: 6,
      title: "Tools & Platforms",
      icon: Wrench,
      tags: [
        { name: "Jupyter", level: 95 },
        { name: "Git & GitHub", level: 85 },
        { name: "Streamlit", level: 75 }
      ]
    }
  ];
