# Slikked Freelancers

Slikked Freelancers is a modern freelancing platform and informational website built with Next.js. It provides resources and guides for freelancers and showcases talented freelancers from around the world with an interactive 3D globe visualization.

## Features

- Interactive 3D globe displaying freelancers globally with animated arcs connecting different locations.
- Informative hero section introducing freelancing and its benefits.
- Featured cards and feedback sections to highlight key information and user testimonials.
- Responsive design with smooth animations and modern UI components.

## Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <repository-directory>
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

### Running the Development Server

Start the development server with:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Building for Production

To build the app for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Project Structure

- `src/app/` - Main application directory with global styles and layout.
- `src/components/` - Reusable React components including HeroSection, Globe, FeaturedCards, Feedbacks, and Footer.
- `src/components/ui/` - UI-specific components and utilities.
- `src/data/` - JSON data files used in the app.
- `src/utils/` - Utility functions.
- `public/` - Static assets like images and icons.

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation.
- [React](https://reactjs.org/) - UI library.
- [Three.js](https://threejs.org/) and [react-three-fiber](https://github.com/pmndrs/react-three-fiber) - 3D graphics and globe visualization.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
- [Motion](https://motion.dev/) - Animation library for React.
- [Lucide React](https://lucide.dev/) - Icon library.

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

## License

This project is licensed under the MIT License.

## Learn More

To learn more about Next.js, visit the [Next.js Documentation](https://nextjs.org/docs).

## Deployment

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new).
