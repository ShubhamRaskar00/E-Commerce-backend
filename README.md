# E-Shop Backend

A robust e-commerce backend application built with Node.js, Express, and MongoDB. This application provides all necessary APIs for a full-featured online shopping platform.

## 📁 Project Structure
```
backend/
├── config/         # Configuration files and environment setup
├── controller/     # Request handlers/controllers
├── db/            # Database connection and configurations
├── middleware/    # Custom middleware functions
├── model/         # Database models/schemas
├── app.js         # Express app configuration
└── server.js      # Server entry point
```

## 🚀 Features

- User Authentication & Authorization
- Product Management
- Shopping Cart Functionality
- Order Processing
- Payment Integration with Stripe
- File Upload with Cloudinary
- Email Notifications
- Admin Dashboard APIs

## ⚙️ Prerequisites

- Node.js 18.x
- MongoDB
- Cloudinary Account
- Stripe Account
- SMTP Server Access

## 🔧 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/ShubhamRaskar00/E-Commerce-backend.git
cd E-Commerce-backend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Environment Variables:**
Create a `.env` file in the root directory with the following variables:
```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES=7d

# Cloudinary Config
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# SMTP Config
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_SERVICE=gmail
SMTP_MAIL=your_email@gmail.com
SMTP_PASSWORD=your_app_password

# Stripe Config
STRIPE_API_KEY=your_stripe_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

## 🏃‍♂️ Running the Application

**Development mode:**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

## 📚 API Endpoints

### Authentication
```
POST /api/v1/auth/register    - Register new user
POST /api/v1/auth/login       - User login
GET  /api/v1/auth/logout      - User logout
```

### User
```
GET    /api/v1/users/profile  - Get user profile
PUT    /api/v1/users/update   - Update user profile
DELETE /api/v1/users/delete   - Delete user account
```

### Products
```
GET    /api/v1/products       - Get all products
GET    /api/v1/products/:id   - Get single product
POST   /api/v1/products       - Create product (Admin)
PUT    /api/v1/products/:id   - Update product (Admin)
DELETE /api/v1/products/:id   - Delete product (Admin)
```

### Orders
```
POST   /api/v1/orders        - Create new order
GET    /api/v1/orders        - Get all orders (Admin)
GET    /api/v1/orders/:id    - Get single order
PUT    /api/v1/orders/:id    - Update order status (Admin)
```

## 🔒 Dependencies

- **bcrypt & bcryptjs**: Password hashing
- **cloudinary**: Cloud storage for images
- **cookie-parser**: Parse Cookie header
- **cors**: Enable CORS
- **dotenv**: Environment variables management
- **express**: Web framework
- **jsonwebtoken**: JWT authentication
- **mongoose**: MongoDB ODM
- **nodemailer**: Email sending
- **stripe**: Payment processing
- **nodemon**: Development auto-reload

## 🛡️ Security

- JWT based authentication
- Password hashing
- Protected routes
- Input validation
- CORS configuration
- Secure cookie usage

## 💻 Development

The application uses nodemon for development, which automatically restarts the server when file changes are detected.

To contribute:
1. Fork the repository
2. Create a feature branch
```bash
git checkout -b feature/YourFeature
```
3. Commit changes
```bash
git commit -m 'Add some feature'
```
4. Push to the branch
```bash
git push origin feature/YourFeature
```
5. Create a Pull Request

## ⚖️ License

This project is licensed under the ISC License.

## 👨‍💻 Author

Shubham Raskar

## 🤝 Support

For support, email shubhamraskar69@gmail.com or join our Slack channel.