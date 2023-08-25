# food-delivery-app Website with React

![GitHub last commit](https://img.shields.io/github/last-commit/AdarshTheki/food-delivery-app)
![GitHub repo size](https://img.shields.io/github/repo-size/AdarshTheki/food-delivery-app)
![GitHub](https://img.shields.io/github/license/AdarshTheki/food-delivery-app)

## Features

- **Product Catalog**: Browse a wide range of products organized into categories.
- **Product Details**: View detailed information about each product, including images, descriptions, and specifications.
- **Search and Filters**: Easily find products using the search bar and apply filters based on categories and attributes.
- **Shopping Cart**: Add products to the cart and review the selected items before proceeding to checkout.
- **User Authentication**: Allow users to sign up, log in, and manage their accounts.
- **Secure Checkout**: Provide a secure checkout process for customers to complete their purchases.
- **Order History**: Users can view their order history and track the status of their orders.
- **Admin Dashboard**: Administrators can manage products, categories, and orders using a dedicated dashboard.
- **Coming Soon... more Technology**

## Technologies Used

- React for building the user interface.
- React Router for managing routes and navigation.
- Redux for state management.
- Axios for making HTTP requests.
- @reduxjs/toolkit install and used with react-redux.

## Getting Started

1. Clone the repository:

```sh
  git clone https://github.com/AdarshTheki/food-delivery-app.git
  cd food-delivery-app
```

2. Start the development server:

```sh
  npm install
```

3. Open the website in your browser:

```sh
  npm run dev
  http://localhost:5173
```

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-new-branch`
3. Make your changes.
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push the branch: `git push origin my-new-branch`
6. Submit a pull request.

## License

This project is licensed under the MIT License - see the **[LICENSE](./LICENSE)** file for details.

## Descriptions
  soon....\
Happy Coding...😍

---

### Auth0 React SDK for Single Page Apps `npm install @auth0/auth0-react`

- npm install react-slick
- How to use the `auth0-react`

  ```jsx
    import { useAuth0 } from "@auth0/auth0-react";
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  ```

  - isAuthenticated = return boolean value
  - loginWithRedirect = One time login and redirect to the page
  - user = user full details likes image, name, position etc.

- Colors:
  ```jsx
    --heading: #18181d;
    --text: #18181d;
    --white: #fff;
    --black: #212529;
    --helper: #8490ff;
    --bg: #efefff;
    --footer_bg: #0a1435;
    --btn: #594aff;
    --border: #6254f380;
    --hr: #fff;
    --gradient: linear-gradient(0deg, var(--helper) 0%, #62bdfc 100%);
    --shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.149) 0px 0px 0px 1px;
    --shadowSupport: rgba(0, 0, 0, 0.161) 0px 1px 4px;
  ```