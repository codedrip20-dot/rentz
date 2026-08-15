Rentz 🏠

«A full-stack property management and rental marketplace platform built with Next.js, React, TypeScript, Firebase, and modern cloud services.»

Rentz is a SaaS-oriented property management and rental marketplace platform designed around the relationship between Properties → Rooms → Marketplace.

The platform brings property management, room management, marketplace discovery, booking workflows, tenant management, location services, and owner dashboards into a unified web application.

🌐 Live Demo

"Visit Rentz Live Demo" (https://reference-url-citation.invalid/1)

---

🚀 Overview

Rentz is being developed as a complete digital platform for property owners and renters.

Property owners can manage properties and rooms through dedicated management workflows, while users can discover available rooms through the marketplace and proceed through booking workflows.

The application is designed with a focus on:

- Scalable data modeling
- Modular application architecture
- Type-safe development
- Reusable React components
- Separation of business logic
- Cloud-based infrastructure
- Responsive and mobile-first UI/UX
- Real-world property management workflows

---

✨ Core Features

🏠 Property Management

- Create and manage properties
- Property information management
- Property location management
- Property-level room organization
- Property dashboard
- Property statistics
- Property status and metadata

🛏️ Room Management

- Create rooms
- Update rooms
- Delete rooms
- Room availability management
- Room details
- Room amenities
- Room validation
- Room image uploads
- Room-specific workflows

🌐 Marketplace

Rentz generates marketplace data around available rooms.

The marketplace service:

1. Retrieves available rooms
2. Extracts their associated property IDs
3. Fetches the related property information
4. Combines the data for marketplace presentation

This creates a separation between the property management domain and the marketplace discovery experience.

📅 Booking System

Rentz includes a modular booking workflow containing:

- Booking creation
- Room availability checking
- Booking validation
- Pricing calculation
- Payment workflow
- Booking expiration handling
- Booking status management
- Tenant association
- Property and room association

The booking process is organized through dedicated services rather than placing all business logic inside UI components.

Booking Flow

Booking Request
      │
      ▼
Booking Service
      │
      ├── Fetch Room
      │
      ├── Fetch Property
      │
      ├── Fetch Existing Bookings
      │
      ▼
Booking Validation
      │
      ▼
Availability Check
      │
      ▼
Pricing Calculation
      │
      ▼
Payment Workflow
      │
      ▼
Booking Creation
      │
      ▼
Firestore

👤 Authentication

Rentz uses Firebase Authentication and currently supports:

- Email/password registration
- Email/password login
- Google Sign-In
- Email verification
- Password reset
- Logout
- User profile updates
- Authentication state listeners
- Current-user management

Authentication state is centralized through a dedicated authentication context and Firebase authentication layer.

👨‍💼 Owner Platform

Owner-oriented functionality includes:

- Owner registration
- Owner plans
- Owner profile management
- Owner dashboard
- Property management
- Room management
- Property statistics
- Owner-specific workflows

👥 Tenant Platform

Rentz contains a dedicated tenant domain supporting:

- Tenant data
- Tenant services
- Tenant-oriented dashboard functionality
- Booking relationships
- Room/property relationships

📍 Location System

Rentz integrates Google Maps and Places services into the property location workflow.

The location system supports structured location information including:

- Place ID
- Formatted address
- Street address
- Landmark
- City
- District
- State
- Country
- Postal code
- Latitude
- Longitude

Location Flow

Address Search
      │
      ▼
Google Places
      │
      ▼
Place Details
      │
      ▼
Place Parser / Mapper
      │
      ▼
Structured Location
      │
      ▼
Property

Using a Google Place ID provides a consistent reference for property location data.

☁️ Cloudinary Image Management

Cloudinary is used for property and room image management.

The application includes an API route for handling Cloudinary uploads and maintains image metadata such as:

- URL
- Public ID
- Dimensions
- Format
- File size

This keeps large media assets outside Firestore while allowing application data to reference the resulting media.

---

🏗️ Architecture

Rentz follows a monolithic application architecture supported by serverless/cloud infrastructure.

Application Architecture — Next.js Monolith

The core application is maintained within a single Next.js repository using the App Router.

The application contains:

- UI components
- Pages/routes
- Application state
- Custom hooks
- Business services
- Firebase data access
- API routes
- Domain types
- Utility functions

This provides a unified application while keeping internal responsibilities separated into dedicated modules.

                    RENTZ
                      │
              Next.js Application
                 Monolithic App
                      │
      ┌───────────────┼───────────────┐
      │               │               │
      ▼               ▼               ▼
   UI Layer      Service Layer     API Routes
      │               │               │
      │               │          ┌────┴────┐
      │               │          │         │
      │               │      Cloudinary  Payment
      │               │         API        API
      │               │
      └───────────────┼───────────────┘
                      │
                      ▼
              Firebase Data Layer
                      │
               ┌──────┴──────┐
               │             │
          Firebase Auth   Firestore

---

☁️ Serverless / Cloud Architecture

Rather than maintaining dedicated backend servers for core infrastructure, Rentz relies on managed cloud services.

Firebase

Used for:

- Authentication
- Firestore database
- Cloud-based application data

Cloudinary

Used for:

- Image storage
- Image delivery
- Image metadata

Google APIs

Used for:

- Places
- Maps
- Location search
- Property geolocation

Next.js API Routes

The application also contains server-side API endpoints for operations such as:

- Cloudinary uploads
- Payment workflow initialization

This combination allows Rentz to maintain a unified application codebase while leveraging managed cloud infrastructure.

---

🧩 Service-Oriented Business Logic

One of the important architectural decisions in Rentz is separating business logic from presentation components.

Instead of placing complex workflows directly inside React components, dedicated services handle domain operations.

Example

services/
│
├── booking/
│   ├── bookingService
│   ├── bookingAvailabilityService
│   ├── bookingPricingService
│   ├── bookingPaymentService
│   └── bookingValidationService
│
├── marketServices/
│   ├── marketplaceService
│   ├── propertyService
│   └── roomService
│
├── room/
│   ├── createRoom
│   ├── updateRoom
│   ├── deleteRoom
│   ├── getRoom
│   └── uploadRoomImages
│
└── tenant/
    └── tenantService

This separation makes domain logic easier to maintain, test, extend, and reason about as the platform grows.

---

🗄️ Data Architecture

Rentz uses Cloud Firestore as its primary application database.

The application separates major business domains into dedicated data-access modules and types.

Core domains include:

User
 │
 ├── Owner
 │     │
 │     └── Property
 │            │
 │            └── Room
 │                  │
 │                  └── Availability
 │
 └── Tenant
        │
        └── Booking

The property and room relationship is central to Rentz.

A property acts as the organizational entity, while rooms represent the individual rentable units that can become available through the marketplace.

---

🔐 Authentication Architecture

Authentication is implemented through Firebase Authentication with a dedicated Firebase authentication layer.

React / Next.js
       │
       ▼
AuthContext
       │
       ▼
Firebase Auth Layer
       │
       ▼
Firebase Authentication

The authentication layer provides reusable functions for registration, login, logout, password reset, email verification, Google authentication, profile updates, and authentication state monitoring.

---

💳 Payment Architecture

Rentz currently contains a payment workflow abstraction and API endpoint with simulated payment processing.

The current implementation is intentionally structured so that a production payment provider can be integrated later without coupling payment logic directly to the booking UI.

Booking
   │
   ▼
Booking Payment Service
   │
   ▼
Payment API
   │
   ▼
Payment Provider

«Current status: payment processing is simulated in the development implementation and is not presented as a production payment gateway.»

---

🎨 UI/UX

Rentz is designed around a modern SaaS-style interface with a strong focus on usability and responsiveness.

The UI system emphasizes:

- Mobile-first responsive layouts
- Reusable components
- Consistent visual hierarchy
- Modern dashboard interfaces
- Interactive forms
- Property and room presentation
- Smooth transitions
- Motion-based interactions
- Responsive navigation
- Clean marketplace experiences

UI Technologies

- Tailwind CSS
- Framer Motion
- shadcn
- Lucide React
- React Icons
- React Day Picker

---

📁 Project Structure

src/
│
├── app/
│   ├── api/
│   ├── booking/
│   ├── marketplace/
│   ├── owner/
│   ├── ownerDashboard/
│   ├── profile/
│   ├── register/
│   ├── rooms/
│   ├── tenant/
│   └── ...
│
├── components/
│   ├── auth/
│   ├── bookingPage/
│   ├── home/
│   ├── marketPlacePage/
│   ├── ownerDashboard/
│   ├── property/
│   ├── room/
│   ├── tenantPage/
│   ├── ui/
│   └── ...
│
├── constants/
│
├── context/
│   ├── AuthContext.tsx
│   ├── PropertyWizardContext.tsx
│   └── RoomWizardContext.tsx
│
├── hooks/
│   ├── google/
│   ├── location/
│   ├── useProperties.tsx
│   ├── usePropertyDashboard.ts
│   ├── useRoomAvailability.ts
│   └── ...
│
├── lib/
│   ├── cloudinary/
│   ├── firebase/
│   ├── google/
│   ├── location/
│   ├── property/
│   └── storage/
│
├── routes/
│
├── services/
│   ├── booking/
│   ├── marketServices/
│   ├── room/
│   ├── roomDisplay/
│   └── tenant/
│
├── types/
│
└── utils/

---

🛠️ Tech Stack

Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn
- Lucide React
- React Icons
- React Day Picker

Backend / Cloud

- Firebase
- Firebase Authentication
- Cloud Firestore
- Next.js API Routes
- Cloudinary

Location

- Google Maps
- Google Places
- "@react-google-maps/api"

Development

- TypeScript
- ESLint
- Git
- GitHub

Deployment

- Netlify

---

⚙️ Getting Started

Prerequisites

- Node.js
- npm
- Git

Installation

Clone the repository:

git clone <repository-url>

Navigate into the project:

cd rentz

Install dependencies:

npm install

Create a local environment file:

.env.local

Configure the required Firebase, Google Maps/Places, and Cloudinary environment variables.

Start the development server:

npm run dev

Open:

http://localhost:3000

---

📜 Available Scripts

Development

npm run dev

Starts the Next.js development server.

Production Build

npm run build

Creates an optimized production build.

Production Server

npm run start

Starts the production server.

Lint

npm run lint

Runs ESLint.

---

🧠 Engineering Highlights

Rentz demonstrates practical experience across several areas of full-stack development:

- Next.js App Router architecture
- React component architecture
- TypeScript type modeling
- Firebase Authentication
- Firestore data access
- Modular service-layer architecture
- Booking domain logic
- Availability validation
- Pricing calculation
- Payment workflow abstraction
- Property and room management
- Marketplace data aggregation
- Tenant management
- Google Places integration
- Google Maps integration
- Cloudinary media management
- API route development
- Context-based state management
- Custom React hooks
- Reusable UI components
- Responsive/mobile-first UI/UX
- Cloud/serverless infrastructure

---

🗺️ Roadmap

Rentz is an actively developed project.

Future development areas include:

- Production payment gateway integration
- Advanced authorization and access control
- Enhanced tenant management
- Advanced marketplace search and filtering
- Notifications
- Property analytics
- Booking improvements
- Owner subscription billing
- Additional property management workflows
- Production scalability and security hardening

---

👨‍💻 Author

Utsav Karki

Software Engineer | Full-Stack Developer

Building Rentz as a practical exploration of modern full-stack development, SaaS architecture, cloud infrastructure, and property technology.

Tech Focus

Next.js • React • TypeScript • Firebase • Firestore • Cloudinary • Google Maps • Tailwind CSS • Framer Motion

---

⭐ Project Status

Actively developed

Rentz is an ongoing project focused on building a complete property management and rental marketplace platform with a scalable domain structure and modern cloud-based architecture.