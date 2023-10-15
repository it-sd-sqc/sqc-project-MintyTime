# SQC-Project
Bradley Hayes

My name and link to GitHub repo with light and dark mode implemented.

https://sqc-project-zntq.onrender.com

---
Entity Relationship Diagram
---

erDiagram
   chapter ||--|{ section : contains
    chapter {
        id SERIAL pk
        title TEXT "Chapter title"
    }
    
   pageNumber ||--|{ chapter : contains
    pageNumber {
        id SERIAL pk
        page_id INT fk "Page ID"
        title TEXT "Page title"
        number INT "Page number"
    }
   
---
title: A Look at Go ER diagrams
---
erDiagram
  problem_types ||--o{ problems : "specifies type"
  chapters {
    id SERIAL pk
    title TEXT "Chapter title"
    body TEXT "Chapter text"
  }
  problem_types {
    id SERIAL pk
    name TEXT "Problem type name"
  }
  problems {
    id SERIAL pk
    problem_type_id INTEGER fk "Problem type"
    number TEXT "Original problem number, including ."
    to_play TEXT "Player who places the next stone"
    problem TEXT "SVG of initial problem"
    solutions TEXT "SVG(s) of solution(s)"
  }
   

   Hello from JENNIFER
