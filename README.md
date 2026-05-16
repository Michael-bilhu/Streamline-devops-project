# StreamLine CI/CD Deployment System

A real-world DevOps portfolio project demonstrating CI/CD automation, Docker containerization, reverse proxy architecture, and cloud deployment on AWS.

---

# Tech Stack

- AWS EC2
- Docker
- Docker Compose
- Nginx
- Node.js Express API
- Jenkins
- GitHub
- Linux
- Redis

---

# Architecture

```text
Developer
↓
GitHub
↓
Jenkins CI/CD
↓
SSH Deployment
↓
AWS EC2
↓
Docker Compose
├── Nginx Reverse Proxy
├── Frontend Container
├── Backend API Container
└── Redis Container
```

---

# Features

- Automated CI/CD pipeline using Jenkins
- Multi-container Docker Compose architecture
- Nginx reverse proxy routing
- Backend API integration
- Redis service integration
- Automated deployment from GitHub to EC2
- Infrastructure as Code approach
- Dynamic frontend-backend communication

---

# Backend API Example

Endpoint:

```bash
/api/message
```

Response:

```json
{
  "message": "Backend API is running successfully!"
}
```

---

# Deployment Workflow

```text
Git Push
↓
Jenkins Pipeline Trigger
↓
SSH Into EC2
↓
Docker Compose Rebuild
↓
Updated Application Deployment
```

---

# Learning Objectives

This project demonstrates practical understanding of:

- CI/CD pipelines
- Docker containerization
- Reverse proxy architecture
- Infrastructure as Code
- Container networking
- Stateless vs Stateful services
- Cloud deployment workflows
- Multi-service application design

---

# Future Improvements

- HTTPS with SSL certificates
- Domain name integration
- Kubernetes deployment
- Prometheus monitoring
- Grafana dashboards
- Terraform infrastructure provisioning
- Load balancing
- Health checks & self-healing containers
