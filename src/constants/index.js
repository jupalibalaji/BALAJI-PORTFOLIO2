import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Java Full Stack Developer @ Capital One | Delivering Secure, Scalable Microservices for Finance & Healthcare Sectors | Spring Boot | Kafka | AWS`;

export const ABOUT_TEXT = `Full Stack Java Developer with proven expertise in building secure, scalable microservices using Java, Spring Boot, Kafka, and AWS. Skilled in designing RESTful APIs, real-time data streaming, cloud-native deployments, and responsive UIs with React.js. Passionate about delivering high-performance, resilient platforms that drive business value. Actively seeking opportunities to leverage my skills in developing innovative enterprise applications.`;

export const EXPERIENCES = [
  {
    year: "Jul 2024 - Present",
    role: "Java Full Stack Developer",
    company: "Capital One",
    description: `Architected a microservices-based Fraud Detection Platform using Java, Spring Boot, and Kafka to enable real-time monitoring of millions of daily transactions. Implemented Spring Boot Actuator to track application health, system load, and throughput, improving service observability and stability. Developed and deployed secure RESTful APIs for fraud detection services, integrating OAuth 2.0 and JWT to manage large volumes of authentication requests across mobile and web platforms. Engineered high-performance Node.js microservices for processing fraud detection API requests, integrating MongoDB for efficient storage and retrieval of fraud profiles and transaction histories. Designed a cloud-native risk management system on AWS using EC2, RDS, and Lambda to scale real-time fraud detection and maintain high availability. Integrated Node.js with AWS Lambda and API Gateway to automate fraud alert notifications, ensuring immediate response to suspicious activities. Optimized AWS S3 for secure archiving and retrieval of historical fraud data while adhering to financial compliance standards. Created real-time dashboards using React.js to visualize high-risk account activity and transaction alerts, improving analyst efficiency. Enhanced frontend performance with React.js hooks and implemented automated regression testing using Selenium and JUnit to validate critical fraud detection workflows. Used Docker and OpenShift for containerized deployments and automated CI/CD pipelines with Jenkins and GitHub Actions for streamlined and reliable delivery`,
    technologies: ["Java", "Kafka", "Node.js", "Spring Actuator", "mongoDB", "OAuth 2.0", "JWT", "RDS", "Lambda", "API Gateway", "AWS S3","OpenShift"],
  },
  {
    year: "Nov 2023 - Apr 2023",
    role: "Full Stack Developer- Intern",
    company: "PICKET",
    description: `Architected robust Web APIs using Java 8, JEE, JSP, Servlets, JDBC, Spring, SOAP, REST, and XML to enable seamless integration between client systems and efficiently handle high volumes of daily API requests. Deployed microservices-based applications on AWS EC2 with Elastic Load Balancing and Auto Scaling to ensure high availability and fault tolerance. Developed scalable solutions using microservices architecture and Spring Boot for automating license-based software tracking. Designed and implemented responsive web pages using HTML, CSS, JavaScript, and React.js to enhance user experience and interface performance. Integrated CI/CD pipelines with Jenkins, Docker, and Kubernetes to automate the build, test, and deployment lifecycle, improving release consistency. Additionally, optimized database performance using advanced SQL queries and indexing techniques in MySQL and Oracle, enabling smooth and efficient data handling for enterprise-grade applications.`,
    technologies: ["Java", "Spring Boot", "JEE", "SOAP", "AWS EC2","React.js", "Jenkins", "Docker", "Kubernetes", "Oracle", "Postgres"],
  },
  {
    year: "Jan 2019 - Jul 2022",
    role: "Java Developer",
    company: "TRANSOL SYSTEMS PVT LTD",
    description: `Led the integration of Node.js with the hospital’s Electronic Health Records (EHR) system, allowing physicians to seamlessly access patient history and risk scores for high-risk case management. Utilized Azure SQL and Blob Storage to securely store and archive patient data while ensuring HIPAA compliance and improving data accessibility. Streamlined real-time integration between third-party medical devices and the hospital’s monitoring systems using Azure API Management to support continuous patient metric updates. Automated CI/CD pipelines with Azure DevOps to accelerate the deployment of critical patient-monitoring features such as sepsis and heart failure detection. Developed Angular.js interfaces to display real-time cardiac and admission data, improving clinical decision-making and patient care navigation. Built responsive web applications using HTML, CSS, and Angular.js, enhancing usability for nurses and physicians accessing real-time patient metrics. Additionally, upgraded the telemedicine platform by integrating Node.js and Azure services to support live video consultations for high-risk patients, increasing the hospital’s remote care capabilities.`,
    technologies: ["Java", "JSP", "JSX", "Node.js","Angular", "Azure SQL", "CI/CD", "HTML", "CSS"],
  },
];

export const PROJECTS = [
  {
    title: "FitIntel – AI-Powered Real-Time Fitness Companion",
    image: project1,
    description:
      "Built a smart fitness application that leverages Spring Boot, Python, and AI/ML to track real-time user activity and provide personalized health insights and workout recommendations. The backend, developed in Spring Boot, manages user data, workout logs, and API integrations with fitness devices/sensors. AI models built in Python analyze real-time data (heart rate, steps, calories) to offer customized suggestions for workouts, recovery, and nutrition. The system features RESTful APIs, role-based access, and a dashboard to visualize progress, enabling a seamless and intelligent fitness experience. Designed for scalability and deployed in a cloud environment for high availability.",
    technologies: ["Java", "Kafka", "Node.js", "Spring Actuator", "mongoDB", "OAuth 2.0", "JWT", "RDS", "Lambda", "API Gateway", "AWS"],
  },
  {
    title: "Food Waste Management System using Java Spring Boot and AI",
    image: project2,
    description:
      "Developed an AI-powered Food Waste Management System using Java, Spring Boot, and MySQL to optimize food surplus tracking and reduce waste in urban areas. The system leverages machine learning to predict food waste patterns and suggest intelligent redistribution strategies, connecting donors such as restaurants and grocery stores with NGOs and local shelters. I built secure RESTful APIs for user interaction, real-time alerts, and role-based dashboards to monitor surplus availability and coordinate pickups. The platform supports scalable cloud deployment and aims to promote sustainability through smart resource utilization.",
    technologies: ["Java", "JSP", "JSX", "Node.js","Angular", "Azure SQL", "CI/CD", "HTML", "CSS"],
  },
];

export const CONTACT = {
  address: " 2536 Carywood Dr, Cary, NC, 27513 ",
  phoneNo: "+1 937 867 8224",
  email: "balajijupallivelama@gmail.com",
};
