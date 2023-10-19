# SQC-Project
Bradley Hayes

My name and link to GitHub repo with light and dark mode implemented.

https://sqc-project-zntq.onrender.com

---
Entity Relationship Diagram
---
```mermaid
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
```
   Hello from JENNIFER
