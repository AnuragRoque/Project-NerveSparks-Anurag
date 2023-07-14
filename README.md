# Car Dealership App

This is a web application for managing car dealerships.

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Create a `.env` file and set the following environment variables:
   - `PORT`: Port number for the server (default: 3000).
   - `JWT_SECRET`: Secret key for JWT token.
   - `DB_URL`: MongoDB database URL.
4. Start the server: `npm start` or `npm run dev` for development.

## API Endpoints

- `/auth/user-login`: User login endpoint.
- `/auth/dealership-login`: Dealership login endpoint.
- `/auth/admin-login`: Admin login endpoint.
- `/auth/logout`: Logout endpoint.
- `/auth/change-password`: Change password endpoint.
- `/users/cars`: Get all cars endpoint.
- `/users/cars/dealership/:id`: Get all cars in a dealership endpoint.
- `/users/cars/:model`: Get all dealerships with a certain car endpoint.
- `/users/owned-vehicles`: Get all vehicles owned by user endpoint.
- `/users/dealerships/range`: Get all dealerships within a certain range based on user location endpoint.
- `/users/deals/:model`: Get all deals on a certain car endpoint.
- `/users/deals/dealership/:id`: Get all deals from a certain dealership endpoint.
- `/users/buy-car`: Allow user to buy a car after a deal is made endpoint.
- `/dealerships/cars`: Get all cars endpoint.
- `/dealerships/cars/sold`: Get all cars sold by dealership endpoint.
- `/dealerships/cars`: Add cars to dealership endpoint.
- `/dealerships/deals`: Get deals provided by dealership endpoint.
- `/dealerships/deals`: Add deals to dealership endpoint.
- `/dealerships/sold-vehicles`: Get all vehicles dealership has sold endpoint.
- `/dealerships/sold-vehicles`: Add new vehicle to the list of sold vehicles after a deal is made endpoint.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
