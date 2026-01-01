<div align="center">

# 🐉 DragonTech API

### Robust Backend Services

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)


</div>

---

## 📖 About

**DragonTech API** is the server-side logic powering the DragonTech e-commerce platform. It handles data persistence, business logic, and security integration.


---

## ✨ Features

- 🛡️ **Type Safety** - Full TypeScript implementation for robust code

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime Environment |
| Express | Web Framework |
| TypeScript | Static Typing |

---

# PRD DragonTech

## 1. Overview

**Product Name:**  DragonTech 
**Author:**  Diego Mora Blas
**Date:**  Dec 2025
**Version:** Not yet

## 2. Problem Statement

The web application is thinking for have 2 servers running, one only for administrator and the another one for users. Administrator server must have a preview where the admin could see the changes that he have made, moreover, he will be able to create discounts through a algorithm for the choosen products. A log will create a record for every change the administrator can do.

## 3. User Stories


| As a...       | I want to...                                                                        | So that...                                                                             |
| ------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Administrator | Preview the frontend after I apply the changes on the products or create discounts. | Someway create a temporaly array on the backend and delete it after close the preview. |
| Administrator | See the log historial                                                               | Save all the records with Observer Pattern                                             |
| Administrator | Create discounts easily.                                                            | Create buttons for facilitate the administrator to create discounts code,              |
| User          | I want to buy products safely without bugs.                                         | Do a correct cofiguration about Stripe on the backend.                                 |

