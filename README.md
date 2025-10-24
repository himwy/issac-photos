# Issac Photography Portfolio Website

An aesthetic photography portfolio website inspired by modern minimalist design.

## Features

- Clean, minimal design with smooth transitions
- Responsive grid-based portfolio layout
- Project detail pages
- Mobile-friendly navigation
- About and contact sections
- Instagram and email integration

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization Guide

### Adding Your Information

1. **Header & Contact Information**

   - Update the name "ISSAC" in `src/components/Header.tsx`
   - Replace placeholder email: `issac@example.com`
   - Replace Instagram handle: `@issac`
   - Add your phone number in the contact section

2. **About Section**

   - Edit `src/app/page.tsx` in the About section
   - Add your location, experience, and photography style
   - Update the bio text to reflect your story

3. **Portfolio Items**
   - Edit the `portfolioItems` array in `src/app/page.tsx`
   - Update titles, subtitles, and image paths
   - Add or remove projects as needed

### Adding Real Images

1. **Portfolio Grid Images**

   - Add your images to the `public` folder (e.g., `public/photos/project-1.jpg`)
   - Update the `image` property in `portfolioItems` array
   - Recommended size: 1200x900px (4:3 aspect ratio)

2. **Project Detail Images**

   - Add project images to `public/photos/` folder
   - Update the `projectData` object in `src/app/project/[id]/page.tsx`
   - Update the `images` array with your image paths
   - Recommended size: 1920x1080px (16:9 aspect ratio)

3. **Using Next.js Image Component** (for better performance)

   - Replace placeholder divs with Next.js Image component:

   ```tsx
   import Image from "next/image";

   <Image
     src="/photos/project-1.jpg"
     alt="Project title"
     width={1200}
     height={900}
     className="object-cover"
   />;
   ```

### Adding More Projects

1. Add new items to the `portfolioItems` array in `src/app/page.tsx`
2. Add corresponding data to `projectData` in `src/app/project/[id]/page.tsx`

## Placeholder Information to Replace

- [ ] Name: "ISSAC" → Your name
- [ ] Email: issac@example.com → Your email
- [ ] Instagram: @issac → Your handle
- [ ] Phone: +1 (234) 567-890 → Your phone
- [ ] Location: [Location] → Your location
- [ ] Experience: [X] years → Your years of experience
- [ ] All portfolio images
- [ ] All project details and descriptions
- [ ] About section bio

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript

## No Additional Plugins Required

All dependencies are already included in the project. No additional plugins need to be installed.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
