# **NestJS API CRUD dengan Autentikasi JWT**

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
</p>

## 📜 Deskripsi

Proyek ini adalah **REST API CRUD** berbasis **NestJS** yang menggunakan **TypeORM dan PostgreSQL** sebagai database. API ini mencakup **fitur autentikasi JWT** untuk login dan manajemen user dengan hashing password menggunakan bcrypt.

## 🚀 Fitur Utama

✅ **Autentikasi & Otorisasi** dengan **JWT & Passport**  
✅ **Hashing Password** menggunakan **bcrypt**  
✅ **CRUD User** dengan **TypeORM**  
✅ **Validasi Input** menggunakan **class-validator**  
✅ **Konfigurasi Environment** dengan **@nestjs/config**  
✅ **Logging Query Database** untuk debugging  

## 📦 Tech Stack

- **Backend**: NestJS (TypeScript)
- **Database**: PostgreSQL dengan TypeORM
- **Autentikasi**: JWT + Passport
- **Dependency Manager**: npm

## 📌 Instalasi

1️⃣ **Clone Repository**
```sh
git clone <repository-url>
cd nestjs-api-crud
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## 📌 Endpoint API

## API Endpoints

| Method | Endpoint       | Deskripsi              | Authentication |
|--------|--------------|----------------------|---------------|
| **POST**   | `/auth/register` | Register User        | ❌ Tidak perlu |
| **POST**   | `/auth/login`    | Login & Dapatkan Token | ❌ Tidak perlu |
| **GET**    | `/users`         | Get List User        | ✅ Perlu Token |
| **PUT**    | `/users/:id`     | Update User         | ✅ Perlu Token |
| **DELETE** | `/users/:id`     | Hapus User         | ✅ Perlu Token |


## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
