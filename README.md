# MV DRVO - Wood Products Showcase Platform

## Overview
MV DRVO is a professional web platform dedicated to showcasing and promoting wood materials and products. The platform serves as a digital catalog where customers can explore products and contact the company through various channels (phone, social media, contact form) to make purchases. Orders and payments are handled directly with the company through traditional methods.

## Features
- **Product Showcase**: Detailed presentation of wood materials and products
- **Digital Catalog**: Browse through various wood categories and products
- **User Comments**: Customer feedback and review system
- **Responsive Design**: Fully optimized for all devices
- **User Authentication**: Secure login and registration system
- **Contact System**: Multiple ways to reach out (phone, social media, contact form)
- **Product Search**: Advanced search functionality
- **Company Information**: Detailed information about services and products

## Technologies Used

### Frontend
- Angular 17
- TypeScript
- HTML5
- CSS3
- Bootstrap
- Font Awesome

### Backend
- ASP.NET Core
- C#
- Entity Framework Core
- SQL Server
- RESTful API

## Prerequisites
- Node.js (version 18.x or higher)
- Angular CLI
- .NET 8.0 SDK
- Visual Studio 2022 or VS Code
- SQL Server

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/mv-drvo.git
```

2. Install Frontend Dependencies
```bash
cd mv-drvo/ClientApp
npm install
```

3. Install Backend Dependencies
```bash
cd ../Server
dotnet restore
```

4. Configure the Database
- Update connection string in `appsettings.json`
- Run migrations:
```bash
dotnet ef database update
```

5. Run the Application
```bash
# Frontend (Angular)
ng serve

# Backend (.NET)
dotnet run
```

## Project Structure
```
mv-drvo/
├── ClientApp/              # Angular frontend application
│   ├── src/
│   │   ├── app/
│   │   ├── assets/
│   │   └── environments/
│   └── package.json
│
└── Server/                 # .NET backend application
    ├── Controllers/
    ├── Models/
    ├── Services/
    └── appsettings.json
```

## How to Purchase
1. Browse through our product catalog
2. Contact us through:
   - Phone: +381 63 800 8054
   - Social Media (Facebook, Instagram, TikTok)
   - Contact Form on our website
3. Payment options:
   - Bank transfer
   - Cash on delivery
   - Direct payment

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact
- Website: [www.mvdrvo.com](http://www.mvdrvo.com) -not live rn
- Email: mvasic1973@gmail.com
- Phone: +381 63 800 8054
- Social Media:
  - Facebook: [MV DRVO](https://www.facebook.com/profile.php?id=61572044206347)
  - Instagram: [@mvdrvo](https://www.instagram.com/mvdrvo/)
  - TikTok: [@mvdrvo](https://www.tiktok.com/@mvdrvo)

## Acknowledgments
- Thanks to all contributors who have helped with the development
- Special thanks to our customers for their valuable feedback
- Icons provided by Font Awesome
- Images sourced from our own product catalog

---

**Note**: This project is under active development. Features and documentation may be updated regularly.