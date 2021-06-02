<!-- TOC depthFrom:2 -->

## Overview

A template for quickly building login systems using Node.js, Express.js MySQL, Passport, bcrypt & sequelize.

> Demo Users
>
> | Email              | Password |
> | ------------------ | -------- |
> | `user@example.com` | `secret` |

<br>
<!-- /TOC -->

## 1. :rocket: Getting Started

### 1.1 Prerequisites

To get started, ensure that you have the following installed on your local machine:

- [NodeJS](https://nodejs.org/en/download/)
- [MySQL](https://www.mysql.com/downloads/)

### 1.2. Run locally

- Clone repository or clone your own fork

  ```bash
  git clone https://github.com/sarthakgoenka/Nodejs-login-signup.git
  ```

  - Make a duplicate of `.env.example` and rename to `.env`, then configure your credentials.
  - Install dependencies by running `npm i` or `npm install` on your terminal.
  - Run migration: `npm run db:migrate`
  - Seed dummy data `npm run db:seed`
  - Two npm scripts are availiable to spin up the app server:
  - `npm run start` spin up the server without watching for any file changes
  - `npm run serve` watches for any file changes and reloads the server
