# Ecommerce Webapp

This is an ecommerce webapp built with Next.js and React using Sanity as the backend Content management system. 


![Ecommerce Application](https://user-images.githubusercontent.com/48595932/212309842-f980c92e-a755-44b9-b6ec-6fe90029f58f.png)
```
```

## Getting Started

1. Clone the repository to your local machine.
2. Run `npm install` to install all dependencies.
3. Get secret and publishable API keys from Stripe (You will have to create an account if you dont have one already). Here are the steps to get your Stripe API keys https://stripe.com/docs/keys
4. Get a Public Sanity token. You will need to set up an account at Sanity.io to be able to run a backend for this project
5. Create a .env file in the root folder of the project and add the `STRIPE_SECRET_KEY` `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` and `NEXT_PUBLIC_SANITY_TOKEN`API keys and save the file.
6. Run `npm run dev`in your terminal to start the development server.
7. Follow the link in your terminal to view the app in your browser.

## Features
- Browse and purchase items
- Shopping cart feature
- Checkout and Stripe payment integration

## Built With
- Next.js - Web Framework
- React - JavaScript library for building user interfaces
- Sanity - Content Management System

## Contributions

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
