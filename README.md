# Without Simbian vs With Simbian Dashboard

## Project Overview

This project is a visual, interactive demonstration that compares security operations with and without Simbian's security solution. The dashboard showcases the stark contrast between traditional security operation centers (SOCs) and Simbian-enhanced environments through engaging animations, real-time data visualization, and responsive design.

## Live Demo

[View Live Demo](https://simbian-dashboard.vercel.app)

## Features

- **Interactive Security Dashboard**: Visually compelling comparison between security operations with and without Simbian
- **Real-time Alert Animations**: Simulated alert flows with dynamically updating counters
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Transitions**: Polished animations that highlight the efficiency differences

## Technical Implementation

### Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS for responsive design
- **Animation**: Framer Motion for fluid transitions and interactive elements
- **State Management**: React Hooks for component-level state
- **Deployment**: Vercel

### My Approach

I wanted to create a visually striking dashboard that effectively communicates the benefits of Simbian's security solution. The "Without Simbian" section intentionally feels chaotic and overwhelming, with continuously increasing alerts and accumulating issues, while the "With Simbian" section demonstrates calm efficiency through organized, step-by-step processes.

For animations, I used Framer Motion to create fluid transitions between states and to simulate the real-time nature of security operations. The alert animations in the "Without Simbian" section deliberately create a sense of urgency and overwhelm, with elements shaking, glowing, and piling up. In contrast, the "With Simbian" section uses more controlled, purposeful animations that convey efficiency and organization.

### Structure and Organization

The project follows a component-based architecture:
- **Layout Components**: Handle responsive design across different devices
- **Dashboard Components**: Container components for each section
- **Alert Cards**: Reusable components for displaying security alerts
- **Animation Components**: Specialized components for interactive elements

## Future Improvements

With more time, I would:
- Add more detailed alert descriptions and categorization
- Implement user interaction to manually trigger certain security scenarios
- Create additional data visualizations showing historical performance
- Add accessibility improvements for screen readers
- Create a toggleable dark/light mode

## Running Locally

```bash
# Clone the repository
git clone https://github.com/your-username/simbian-dashboard.git

# Navigate to the project directory
cd simbian-dashboard

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Acknowledgments

This project was created as part of a frontend developer assignment to showcase interactive visualization capabilities and animation skills using modern web technologies.