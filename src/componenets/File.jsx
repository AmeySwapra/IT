const courses = [
  {
    id: 1,
    title: "Fullstack Python",
    duration: "160+ Hours",
    overview: "Learn Python for web development, data analysis, and automation.",
    detailDescription: [
      "This course covers Python programming from basics to advanced topics, including web frameworks like Django and Flask. You'll also learn about database integration, REST APIs, and deployment.",
      "By the end of the course, you'll be able to build full-stack web applications using Python. The course includes hands-on projects to solidify your understanding.",
      "Whether you're a beginner or an experienced developer, this course will help you master Python and its applications in real-world scenarios."
    ],
    content: [
      {
        topic: "Python Basics",
        TopicDescription: "Learn Python syntax, data types, and control structures."
      },
      {
        topic: "Web Development with Django",
        TopicDescription: "Build web applications using the Django framework."
      },
      {
        topic: "Data Analysis with Pandas",
        TopicDescription: "Analyze and manipulate data using the Pandas library."
      }
    ],
    image: [
      "https://adhyayann.com/wp-content/uploads/2023/06/python.jpg",
      "https://example.com/python-django.jpg",
      "https://example.com/python-pandas.jpg"
    ],
    courseDuration: [
      {
        fastTrackBatch: {
          days: '25',
          hour: '100'
        },
        NormalBatch: {
          days: '120',
          hour: '150'
        }
      }
    ],
    fees: [
      {
        fastrack: '500000 rs'
      },
      {
        normal: '35000 rs'
      }
    ],
    batchs: [
      {
        fastTrackBatch: {
          date: '25'
        },
        NormalBatch: {
          date: '120'
        }
      }
    ]
  },
  {
    id: 2,
    title: "MERN/MEAN Stack",
    duration: "180+ Hours",
    overview: "Master MERN/MEAN stack for full-stack web development.",
    detailDescription: [
      "This course covers MongoDB, Express.js, React/Node.js (MERN) and Angular (MEAN) for building modern web applications. You'll learn to create dynamic and responsive user interfaces.",
      "The course includes hands-on projects to help you understand the entire stack, from front-end to back-end development. You'll also learn about REST APIs and database integration.",
      "By the end of the course, you'll be able to build and deploy full-stack web applications using the MERN/MEAN stack."
    ],
    content: [
      {
        topic: "React.js Fundamentals",
        TopicDescription: "Learn React.js for building user interfaces."
      },
      {
        topic: "Node.js and Express.js",
        TopicDescription: "Build server-side applications using Node.js and Express.js."
      },
      {
        topic: "MongoDB for Database Management",
        TopicDescription: "Use MongoDB to store and manage data for your applications."
      }
    ],
    image: [
      "https://example.com/mern-stack.jpg",
      "https://example.com/react-js.jpg",
      "https://example.com/mongodb.jpg"
    ],
    courseDuration: [
      {
        fastTrackBatch: {
          days: '30',
          hour: '120'
        },
        NormalBatch: {
          days: '150',
          hour: '180'
        }
      }
    ],
    fees: [
      {
        fastrack: '600000 rs'
      },
      {
        normal: '40000 rs'
      }
    ],
    batchs: [
      {
        fastTrackBatch: {
          date: '30'
        },
        NormalBatch: {
          date: '150'
        }
      }
    ]
  },
  {
    id: 3,
    title: "Data Science",
    duration: "200+ Hours",
    overview: "Learn data science with Python, machine learning, and data visualization.",
    detailDescription: [
      "This course covers data science fundamentals, including data analysis, machine learning, and data visualization. You'll learn to use Python libraries like Pandas, NumPy, and Matplotlib.",
      "The course includes hands-on projects to help you apply data science techniques to real-world problems. You'll also learn about data cleaning, feature engineering, and model evaluation.",
      "By the end of the course, you'll be able to analyze data, build predictive models, and create visualizations to communicate your findings."
    ],
    content: [
      {
        topic: "Data Analysis with Python",
        TopicDescription: "Learn to analyze data using Python libraries."
      },
      {
        topic: "Machine Learning Basics",
        TopicDescription: "Understand the fundamentals of machine learning."
      },
      {
        topic: "Data Visualization with Matplotlib",
        TopicDescription: "Create visualizations to represent data effectively."
      }
    ],
    image: [
      "https://example.com/data-science.jpg",
      "https://example.com/python-ml.jpg",
      "https://example.com/data-visualization.jpg"
    ],
    courseDuration: [
      {
        fastTrackBatch: {
          days: '35',
          hour: '150'
        },
        NormalBatch: {
          days: '180',
          hour: '200'
        }
      }
    ],
    fees: [
      {
        fastrack: '700000 rs'
      },
      {
        normal: '45000 rs'
      }
    ],
    batchs: [
      {
        fastTrackBatch: {
          date: '35'
        },
        NormalBatch: {
          date: '180'
        }
      }
    ]
  },
  {
    id: 4,
    title: "C Language",
    duration: "100+ Hours",
    overview: "Learn C programming for system development and embedded systems.",
    detailDescription: [
      "This course covers the basics of C programming, including syntax, data types, and control structures. You'll also learn about pointers, memory management, and file handling.",
      "The course includes hands-on projects to help you understand how to write efficient and optimized C code. You'll also learn about debugging and testing your programs.",
      "By the end of the course, you'll be able to write and debug C programs for various applications, including system development and embedded systems."
    ],
    content: [
      {
        topic: "C Basics",
        TopicDescription: "Learn the fundamentals of C programming."
      },
      {
        topic: "Pointers and Memory Management",
        TopicDescription: "Understand pointers and dynamic memory allocation."
      },
      {
        topic: "File Handling in C",
        TopicDescription: "Learn to read and write files using C."
      }
    ],
    image: [
      "https://example.com/c-language.jpg",
      "https://example.com/c-pointers.jpg",
      "https://example.com/c-file-handling.jpg"
    ],
    courseDuration: [
      {
        fastTrackBatch: {
          days: '20',
          hour: '80'
        },
        NormalBatch: {
          days: '100',
          hour: '120'
        }
      }
    ],
    fees: [
      {
        fastrack: '300000 rs'
      },
      {
        normal: '20000 rs'
      }
    ],
    batchs: [
      {
        fastTrackBatch: {
          date: '20'
        },
        NormalBatch: {
          date: '100'
        }
      }
    ]
  },
  {
    id: 5,
    title: "Data Structure Using CPP",
    duration: "120+ Hours",
    overview: "Master data structures and algorithms using C++.",
    detailDescription: [
      "This course covers essential data structures like arrays, linked lists, stacks, queues, and trees. You'll also learn about algorithms for sorting, searching, and graph traversal.",
      "The course includes hands-on projects to help you understand how to implement and use data structures in C++. You'll also learn about time and space complexity analysis.",
      "By the end of the course, you'll be able to solve complex problems using efficient data structures and algorithms."
    ],
    content: [
      {
        topic: "Arrays and Linked Lists",
        TopicDescription: "Learn about arrays and linked lists in C++."
      },
      {
        topic: "Stacks and Queues",
        TopicDescription: "Understand the implementation of stacks and queues."
      },
      {
        topic: "Trees and Graphs",
        TopicDescription: "Learn about tree and graph data structures."
      }
    ],
    image: [
      "https://example.com/cpp-ds.jpg",
      "https://example.com/cpp-algorithms.jpg",
      "https://example.com/cpp-trees.jpg"
    ],
    courseDuration: [
      {
        fastTrackBatch: {
          days: '25',
          hour: '100'
        },
        NormalBatch: {
          days: '120',
          hour: '150'
        }
      }
    ],
    fees: [
      {
        fastrack: '400000 rs'
      },
      {
        normal: '25000 rs'
      }
    ],
    batchs: [
      {
        fastTrackBatch: {
          date: '25'
        },
        NormalBatch: {
          date: '120'
        }
      }
    ]
  },
  {
    id: 6,
    title: "C++ Language",
    duration: "100+ Hours",
    overview: "Learn C++ programming for system and game development.",
    detailDescription: [
      "This course covers the basics of C++ programming, including object-oriented programming, templates, and STL. You'll also learn about memory management and exception handling.",
      "The course includes hands-on projects to help you understand how to write efficient and optimized C++ code. You'll also learn about debugging and testing your programs.",
      "By the end of the course, you'll be able to write and debug C++ programs for various applications, including system and game development."
    ],
    content: [
      {
        topic: "C++ Basics",
        TopicDescription: "Learn the fundamentals of C++ programming."
      },
      {
        topic: "Object-Oriented Programming",
        TopicDescription: "Understand OOP concepts like classes and inheritance."
      },
      {
        topic: "STL and Templates",
        TopicDescription: "Learn about the Standard Template Library (STL)."
      }
    ],
    image: [
      "https://example.com/cpp-language.jpg",
      "https://example.com/cpp-oop.jpg",
      "https://example.com/cpp-stl.jpg"
    ],
    courseDuration: [
      {
        fastTrackBatch: {
          days: '20',
          hour: '80'
        },
        NormalBatch: {
          days: '100',
          hour: '120'
        }
      }
    ],
    fees: [
      {
        fastrack: '300000 rs'
      },
      {
        normal: '20000 rs'
      }
    ],
    batchs: [
      {
        fastTrackBatch: {
          date: '20'
        },
        NormalBatch: {
          date: '100'
        }
      }
    ]
  },
  {
    id: 7,
    title: "Machine Learning",
    duration: "200+ Hours",
    overview: "Learn machine learning algorithms and techniques.",
    detailDescription: [
      "This course covers the fundamentals of machine learning, including supervised and unsupervised learning. You'll learn to use Python libraries like Scikit-learn and TensorFlow.",
      "The course includes hands-on projects to help you apply machine learning techniques to real-world problems. You'll also learn about model evaluation and hyperparameter tuning.",
      "By the end of the course, you'll be able to build and deploy machine learning models for various applications."
    ],
    content: [
      {
        topic: "Supervised Learning",
        TopicDescription: "Learn about regression and classification algorithms."
      },
      {
        topic: "Unsupervised Learning",
        TopicDescription: "Understand clustering and dimensionality reduction."
      },
      {
        topic: "Deep Learning with TensorFlow",
        TopicDescription: "Learn to build neural networks using TensorFlow."
      }
    ],
    image: [
      "https://example.com/machine-learning.jpg",
      "https://example.com/scikit-learn.jpg",
      "https://example.com/tensorflow.jpg"
    ],
    courseDuration: [
      {
        fastTrackBatch: {
          days: '35',
          hour: '150'
        },
        NormalBatch: {
          days: '180',
          hour: '200'
        }
      }
    ],
    fees: [
      {
        fastrack: '700000 rs'
      },
      {
        normal: '45000 rs'
      }
    ],
    batchs: [
      {
        fastTrackBatch: {
          date: '35'
        },
        NormalBatch: {
          date: '180'
        }
      }
    ]
  },
  {
    id: 8,
    title: "Azure Certification | Microsoft Azure",
    duration: "150+ Hours",
    overview: "Prepare for Microsoft Azure certification exams.",
    detailDescription: [
      "This course covers the fundamentals of Microsoft Azure, including cloud computing, virtual machines, and storage. You'll learn to deploy and manage applications on Azure.",
      "The course includes hands-on labs to help you prepare for Azure certification exams. You'll also learn about Azure security, networking, and monitoring.",
      "By the end of the course, you'll be ready to take and pass Microsoft Azure certification exams."
    ],
    content: [
      {
        topic: "Azure Fundamentals",
        TopicDescription: "Learn the basics of Microsoft Azure."
      },
      {
        topic: "Azure Virtual Machines",
        TopicDescription: "Understand how to deploy and manage VMs on Azure."
      },
      {
        topic: "Azure Storage Solutions",
        TopicDescription: "Learn about Azure storage options and management."
      }
    ],
    image: [
      "https://example.com/azure-fundamentals.jpg",
      "https://example.com/azure-vm.jpg",
      "https://example.com/azure-storage.jpg"
    ],
    courseDuration: [
      {
        fastTrackBatch: {
          days: '30',
          hour: '120'
        },
        NormalBatch: {
          days: '150',
          hour: '180'
        }
      }
    ],
    fees: [
      {
        fastrack: '600000 rs'
      },
      {
        normal: '40000 rs'
      }
    ],
    batchs: [
      {
        fastTrackBatch: {
          date: '30'
        },
        NormalBatch: {
          date: '150'
        }
      }
    ]
  },
  {
    id: 9,
    title: "Software Testing",
    duration: "120+ Hours",
    overview: "Learn software testing techniques and tools.",
    detailDescription: [
      "This course covers the fundamentals of software testing, including manual and automated testing. You'll learn to use tools like Selenium and JUnit for testing.",
      "The course includes hands-on projects to help you understand how to write test cases and perform testing. You'll also learn about test automation and continuous integration.",
      "By the end of the course, you'll be able to perform software testing for various applications and ensure software quality."
    ],
    content: [
      {
        topic: "Manual Testing",
        TopicDescription: "Learn the basics of manual software testing."
      },
      {
        topic: "Automated Testing with Selenium",
        TopicDescription: "Understand how to automate tests using Selenium."
      },
      {
        topic: "Test Automation Frameworks",
        TopicDescription: "Learn about test automation frameworks and best practices."
      }
    ],
    image: [
      "https://example.com/software-testing.jpg",
      "https://example.com/selenium.jpg",
      "https://example.com/test-automation.jpg"
    ],
    courseDuration: [
      {
        fastTrackBatch: {
          days: '25',
          hour: '100'
        },
        NormalBatch: {
          days: '120',
          hour: '150'
        }
      }
    ],
    fees: [
      {
        fastrack: '400000 rs'
      },
      {
        normal: '25000 rs'
      }
    ],
    batchs: [
      {
        fastTrackBatch: {
          date: '25'
        },
        NormalBatch: {
          date: '120'
        }
      }
    ]
  },
  {
    id: 10,
    title: "Fullstack Java",
    duration: "180+ Hours",
    overview: "Master Java for full-stack web development.",
    detailDescription: [
      "This course covers Java programming from basics to advanced topics, including Spring Boot and Hibernate. You'll learn to build full-stack web applications using Java.",
      "The course includes hands-on projects to help you understand how to integrate front-end and back-end components. You'll also learn about REST APIs and database integration.",
      "By the end of the course, you'll be able to build and deploy full-stack web applications using Java."
    ],
    content: [
      {
        topic: "Java Basics",
        TopicDescription: "Learn the fundamentals of Java programming."
      },
      {
        topic: "Spring Boot for Backend Development",
        TopicDescription: "Build backend applications using Spring Boot."
      },
      {
        topic: "Hibernate for Database Integration",
        TopicDescription: "Learn to integrate databases using Hibernate."
      }
    ],
    image: [
      "https://example.com/java-language.jpg",
      "https://example.com/spring-boot.jpg",
      "https://example.com/hibernate.jpg"
    ],
    courseDuration: [
      {
        fastTrackBatch: {
          days: '30',
          hour: '120'
        },
        NormalBatch: {
          days: '150',
          hour: '180'
        }
      }
    ],
    fees: [
      {
        fastrack: '600000 rs'
      },
      {
        normal: '40000 rs'
      }
    ],
    batchs: [
      {
        fastTrackBatch: {
          date: '30'
        },
        NormalBatch: {
          date: '150'
        }
      }
    ]
  },
  {
    id: 11,
    title: "Cloud & DevOPS (AWS)",
    duration: "200+ Hours",
    overview: "Learn cloud computing and DevOps with AWS.",
    detailDescription: [
      "This course covers the fundamentals of cloud computing and DevOps using AWS. You'll learn to deploy and manage applications on AWS, and use DevOps tools like Docker and Kubernetes.",
      "The course includes hands-on projects to help you understand how to implement CI/CD pipelines and automate infrastructure. You'll also learn about AWS security and monitoring.",
      "By the end of the course, you'll be able to deploy and manage applications on AWS using DevOps practices."
    ],
    content: [
      {
        topic: "AWS Fundamentals",
        TopicDescription: "Learn the basics of Amazon Web Services."
      },
      {
        topic: "DevOps with Docker and Kubernetes",
        TopicDescription: "Understand containerization and orchestration."
      },
      {
        topic: "CI/CD Pipelines",
        TopicDescription: "Learn to implement continuous integration and deployment."
      }
    ],
    image: [
      "https://example.com/aws-fundamentals.jpg",
      "https://example.com/docker-kubernetes.jpg",
      "https://example.com/ci-cd.jpg"
    ],
    courseDuration: [
      {
        fastTrackBatch: {
          days: '35',
          hour: '150'
        },
        NormalBatch: {
          days: '180',
          hour: '200'
        }
      }
    ],
    fees: [
      {
        fastrack: '700000 rs'
      },
      {
        normal: '45000 rs'
      }
    ],
    batchs: [
      {
        fastTrackBatch: {
          date: '35'
        },
        NormalBatch: {
          date: '180'
        }
      }
    ]
  },
  {
    id: 12,
    title: "Data Analytics",
    duration: "150+ Hours",
    overview: "Learn data analytics techniques and tools.",
    detailDescription: [
      "This course covers the fundamentals of data analytics, including data cleaning, visualization, and statistical analysis. You'll learn to use tools like Python, R, and Tableau.",
      "The course includes hands-on projects to help you apply data analytics techniques to real-world problems. You'll also learn about data storytelling and reporting.",
      "By the end of the course, you'll be able to analyze data and create visualizations to communicate your findings effectively."
    ],
    content: [
      {
        topic: "Data Cleaning and Preparation",
        TopicDescription: "Learn to clean and prepare data for analysis."
      },
      {
        topic: "Data Visualization with Tableau",
        TopicDescription: "Create visualizations using Tableau."
      },
      {
        topic: "Statistical Analysis with R",
        TopicDescription: "Perform statistical analysis using R."
      }
    ],
    image: [
      "https://example.com/data-analytics.jpg",
      "https://example.com/tableau.jpg",
      "https://example.com/r-language.jpg"
    ],
    courseDuration: [
      {
        fastTrackBatch: {
          days: '30',
          hour: '120'
        },
        NormalBatch: {
          days: '150',
          hour: '180'
        }
      }
    ],
    fees: [
      {
        fastrack: '600000 rs'
      },
      {
        normal: '40000 rs'
      }
    ],
    batchs: [
      {
        fastTrackBatch: {
          date: '30'
        },
        NormalBatch: {
          date: '150'
        }
      }
    ]
  }
];