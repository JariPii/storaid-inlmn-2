# Assignment 2 at Ec Utbildning

This is the second assigment we got. It's a page where we are to create reusable components and create the page from a figma file.

<hr>

## Table of content

- [Assignment 2 at Ec Utbildning](#assignment-2-at-ec-utbildning)
  - [Table of content](#table-of-content)
  - [Project description](#project-description)
    - [To pass (Grade E or G in Sweden) the following is required:](#to-pass-grade-e-or-g-in-sweden-the-following-is-required)
    - [To pass with Distinction (Grade A or VG in Swden):](#to-pass-with-distinction-grade-a-or-vg-in-swden)
    - [My solutions](#my-solutions)
      - [1. This is for numbers 1 in the E grade and 4 in the A grade.](#1-this-is-for-numbers-1-in-the-e-grade-and-4-in-the-a-grade)
      - [2. This is for number 2 in the E grade](#2-this-is-for-number-2-in-the-e-grade)
  - [Tech Stack](#tech-stack)
      - [Frontend (Client-Side)](#frontend-client-side)
      - [Backend (Server-side)](#backend-server-side)
      - [Hosting \& Deployment](#hosting--deployment)
      - [Development Tools](#development-tools)
  - [Getting Started](#getting-started)
  - [Design section](#design-section)
    - [Color Palette](#color-palette)
    - [How to create Tables in markdown](#how-to-create-tables-in-markdown)
      - [Component-Specific Functions:](#component-specific-functions)
        - [This is the utility funtion for class name merging](#this-is-the-utility-funtion-for-class-name-merging)
        - [Example of usage](#example-of-usage)
        - [Npm links for clsx and Tailwind-merge](#npm-links-for-clsx-and-tailwind-merge)
      - [File tree](#file-tree)

<hr>

## Project description

The requirements for the project was to create a page from a figma file. I chose to do it with Next.js and Tailwind. The requirements for the assigment is

### To pass (Grade E or G in Sweden) the following is required:

1. The design file must be replicated, but some major deviations are allowed. - [My solution](#1-this-is-for-numbers-1-in-the-e-grade-and-4-in-the-a-grade)
2. The website must be built with React (React + Vite). - With permission from the teacher i did it with Next.js and Tailwind.
3. Each section must be its own reusable component that can be used on different pages.
4. The following pages must be included and have working navigation: Home, About Us, Contact Us.
5. Sections such as Testimonials, Latest Blogs and FAQs must be fetched from the Web API.
6. The FAQs accordion must function so that you can toggle between different questions.
7. All forms on the site must be properly validated. It was up to me to determine what validation is appropriate for each field.
8. You must use Git/GitHub to version control the code.

### To pass with Distinction (Grade A or VG in Swden):

1. All pages must be included and have working navigation.
2. Incorrect links or missing pages must lead to a 404 page.
3. Buttons, Cards, Tiles, Price List and Blog Posts must have hover effects, as shown in the Components section of the design file.
4. The site must be accessible according to WCAG 2.1 as far as possible. I was responsible for researching and determining what measures should be taken to meet this standard. - [My solution](#1-this-is-for-numbers-1-in-the-e-grade-and-4-in-the-a-grade)
5. I had to use React Hooks.
6. Form must:
   1. Send data to the correct API endpoint.
   2. Validate inputs using regular expressions.
   3. Display a confirmation message when a 200 OK response is received.
   4. Display the message from the API on the page.
   5. Clear all input fields after a successful submission.
   6. Handle error messages (400 Bad Request) appropriatly
7. I had to version controll the code with Git and GitHub bt:
   1. Creating components in separate branches
   2. Uploading all branches to GitHub (they must not be deleted)
   3. The final version must be merged into the main branch upon submission.

### My solutions

#### 1. This is for numbers 1 in the E grade and 4 in the A grade.

1.  I think that in the end my page was pretty close at least to the design in figma. My major differences has to do with the WCAG. In the design file there is a lot of yellow text on white background. I decided that instead of darken the yellow color I used the secondary green color that was in the design as backgrounds. In that way I stuck to the colorschemes that was in the design. To be able to match the WCAG standards the yellow color had to be darkened so much that it would have deviated from the companys color scheme. Areas where I took this desicion was in the navigation, section headers and form place holders. There was also an issue with the yellow text in the PricingPlan cards, that was not up to WCAG standards. So to make them pop out I chose to add some text shadow.

#### 2. This is for number 2 in the E grade

1. My components are reusable. I also added customizable styling for the components. I made Button component with predetermined visuals. And the possibility to choose where and for what they are used.

   1. ##### Buttons

      For the buttons that is used for CTAs I used Link from Next.js and med custom buttons visually as the regular buttons.

   2. ##### Sections

      I made a Section component to have the same consistent look on each section. I also added the possibility to add a background image for the Section component so it can be used with or without an image. It has a background image in the Testimonials section.

   3. ##### Hero

      The Hero is a resuable component that uses a list to render the content so it is easy to add or remove pages with their own hero sections.

   4. ##### Cards and Tiles
      1. Blog Cards: The BlogCard components maps through the available blogs. I made them clickable so they show the full content if wanted. In Tailwind had used group to be able to make all conent to change at hover state.
      2. Testimonials: TestimonialCard is just plain and simple that renders the result from the API.
      3. PricingPlan Cards: These cards fetches the content from a list that gives the "company" the possibility to add, remove or change for example prices in an easy way. The Rent Now buttons is also used to send the user to the booking form with the Selected Unit allready at hand when taken to the form.
   5. ##### Header
      1. NavBar: The links are in a separate file so the "company" can easily add or remove pages and links. It uses the Link from next.js to navigate.
      2. SocialIcons: These also comes from a list for easy usability.
      3. The Header itself I chose to make it sticky so it followes when scrolling down on the pages. This is to make it easy to navigate without the need to scroll to the top of the page.
   6. ##### FAQ

      Here i made one component that acts as a "dropdown" that I map to show the content.

   7. ##### Global components
      1. Skeletons: I made skeletons for the compoentns that fetches from an API. That is for the FAQ, BlogCards and Testimonials. If the API is down or something is wrong the page still renders, but with the Skeletons and a message that tells the user that the content is unavailable at the moment. This to keep the visuals the same with or without the proper content to show.
      2. Custom Toasts: I use the sonner Toast from shadcon/ui, but the defaul Toast does not in my oppinion match the page, so I decided to customize them. For success and errors. I also added the company logo in the Toast to make more personal connections with the user.

## Tech Stack

This section provides an overview of the technologies used to build and run the project.

#### Frontend (Client-Side)

- Tailwind CSS - [Tailwind documentation](https://tailwindcss.com/docs/installation/using-vite)
- TypeScript
- **Frameworks/Libraries:**
  - Next.js - [Next.js documentation](https://nextjs.org/docs)
- Zod for validation - [Zod Documentation](https://zod.dev/)

#### Backend (Server-side)

- **Languages**: Node.js (JavaScript), etc.
- **Frameworks:**
  - Express.js (Node.js)
  - Spring Boot (Java)
- **APIs:** REST, GraphQL

#### Hosting & Deployment

- **Platforms:** Vercel - [Deployed version](https://storaid-inlmn-2.vercel.app/)

#### Development Tools

- **Version Control:** Git + GitHub
- **Package Managers:** npm
- **Linters/Formatters:** ESLint, Prettier

## Getting Started

This section outlines the steps required to set up and run the project locally.

    git clone https://github.com/JariPii/storaid-inlmn-2.git

You can also [Download Project as zipfile](https://github.com/JariPii/storaid-inlmn-2/archive/refs/heads/main.zip) here.

Navigate into the project directory

    cd <project-directory>

Install dependencies with `npm` or `yarn` depending on what you use

    npm install

or

    yarn install

Run deployment server

    npm run dev

[Back to top](#table-of-content)

<hr>

## Design section

I mainly followed the figma design with minor tweaks on pixel sizes.

### Color Palette

What colors are used for the project. For example if you have a specific project color palette you can show it here. A good way is to show it as an image and a link to the file where it is found.

| Color | Colorcode    | Usage   | Location               |
| ----- | ------------ | ------- | ---------------------- |
| Red   | rgb(255,0,0) | Warning | [Style.css](Style.css) |
| Green | rgb(0,255,0) | Go      | [Style.css](Style.css) |

### How to create Tables in markdown

_Basic syntax:_

    | Header 1 | Header 2 | Header 3 | <- The first row defines the headers.
    | -------- | -------- | -------- | <- The second row uses -- to separate header from body.
    | Row 1    | Data     | Here     | <- Each row afterward is table data.
    | Row 2    | More     | Data     |

_Define alignment:_

| :-- left aligned column | :--: centered column | --: right aligned column |
| :---------------------- | :------------------: | -----------------------: |
| Row 1                   |         Data         |                     Here |
| Row 2                   |         More         |                     Data |

[Back to top](#table-of-content)

<hr>

#### Component-Specific Functions:

cn() for customizable tailwind classes without duplication thansk to twMerge.

##### This is the utility funtion for class name merging

    import { clsx, type ClassValue } from 'clsx';
    import { twMerge } from 'tailwind-merge';

    export function cn(...inputs: ClassValue[]) {
      return twMerge(clsx(inputs));
    }

##### Example of usage

I use the cn() utility to merge default Tailwind classes with additional className passed to the component. This sets the default styling for the component while still allowing customization when needed. If no className is porvided, the component uses its default styles

    <div className={`${withBackgroundImage[backroundImage]}`}>
          <div className={cn(`${backgroundColor[variant]} w-full h-auto`)}>
            <div className={cn('w-[min(100%,1320px)] mx-auto', className)}>
              {children}
            </div>
          </div>
        </div>

##### Npm links for clsx and Tailwind-merge

clsx -> [clsx](https://www.npmjs.com/package/clsx)

tailwind-merge -> [tailwind-merge](https://www.npmjs.com/package/tailwind-merge)

#### File tree

```
├── 📁 app
│   ├── 📁 404
│   │   └── 📄 page.tsx
│   ├── 📁 about
│   │   └── 📄 page.tsx
│   ├── 📁 bookings
│   │   └── 📄 page.tsx
│   ├── 📁 contact_us
│   │   └── 📄 page.tsx
│   ├── 📁 our_services
│   │   └── 📄 page.tsx
│   ├── 📄 favicon.ico
│   ├── 🎨 globals.css
│   ├── 📄 layout.tsx
│   └── 📄 page.tsx
├── 📁 components
│   ├── 📁 about
│   │   └── 📄 AboutSectio.tsx
│   ├── 📁 blog
│   │   ├── 📄 BlogCard.tsx
│   │   └── 📄 BlogSection.tsx
│   ├── 📁 brands
│   │   └── 📄 BrandsBar.tsx
│   ├── 📁 buttons
│   │   ├── 📄 Button.tsx
│   │   └── 📄 Buttons.tsx
│   ├── 📁 footer
│   │   └── 📄 Footer.tsx
│   ├── 📁 form
│   │   ├── 📄 Form.tsx
│   │   └── 📄 InputField.tsx
│   ├── 📁 header
│   │   ├── 📄 BookNow.tsx
│   │   ├── 📄 Contacts.tsx
│   │   ├── 📄 Header.tsx
│   │   ├── 📄 Logo.tsx
│   │   ├── 📄 NavLinks.tsx
│   │   └── 📄 Socials.tsx
│   ├── 📁 hero
│   │   ├── 📄 HeroAbout.tsx
│   │   ├── 📄 HeroBooking.tsx
│   │   ├── 📄 HeroContact.tsx
│   │   ├── 📄 HeroHome.tsx
│   │   └── 📄 HeroServices.tsx
│   ├── 📁 pricingplan
│   │   ├── 📄 PricingSection.tsx
│   │   └── 📄 PricingplanCard.tsx
│   ├── 📁 services
│   │   └── 📄 ServicesSection.tsx
│   ├── 📁 subscribe
│   │   └── 📄 SubscribeSection.tsx
│   ├── 📁 suggestion
│   │   └── 📄 SuggestionSection.tsx
│   ├── 📁 testimonials
│   │   ├── 📄 TestimonialCard.tsx
│   │   └── 📄 TestimonialsSection.tsx
│   ├── 📁 utils
│   │   ├── 📄 Section.tsx
│   │   ├── 📄 StatsCard.tsx
│   │   └── 📄 Tiles.tsx
│   └── 📁 why_choose_us
│       └── 📄 WhyChooseUs.tsx
├── 📁 lib
│   └── 📄 utils.ts
├── 📁 public
│   ├── 📁 images
│   │   ├── 📁 icons
│   │   │   ├── 📄 CheckMark.js
│   │   │   ├── 🖼️ broom.svg
│   │   │   ├── 🖼️ check.svg
│   │   │   ├── 🖼️ checkmark.svg
│   │   │   ├── 🖼️ clock.svg
│   │   │   ├── 📄 icons.ts
│   │   │   ├── 🖼️ moneybag.svg
│   │   │   └── 🖼️ padlock.svg
│   │   ├── 📁 layoutImages
│   │   │   ├── 🖼️ alberto-rodriguez--aCrA9FmT8Y-unsplash.jpg
│   │   │   ├── 🖼️ centre-for-ageing-better-ZlOlRnWk8zU-unsplash.jpg
│   │   │   ├── 🖼️ chuttersnap-BNBA1h-NgdY-unsplash.jpg
│   │   │   ├── 🖼️ jacques-dillies-jcav1COVvOc-unsplash.jpg
│   │   │   └── 🖼️ robinson-greig-HrnAxAUwle8-unsplash.jpg
│   │   ├── 🖼️ 54b19ada-d53e-4ee9-8882-9dfed1bf1396.jpg
│   │   ├── 🖼️ 62424a3e-9cdc-422f-a2c8-5cce272934e2.jpg
│   │   ├── 🖼️ BgImg.png
│   │   ├── 🖼️ Logo.png
│   │   ├── 🖼️ Logoipsum1.png
│   │   ├── 🖼️ Logoipsum2.png
│   │   ├── 🖼️ Logoipsum3.png
│   │   ├── 🖼️ Logoipsum4.png
│   │   ├── 🖼️ Logoipsum5.png
│   │   ├── 🖼️ Rectangle2.svg
│   │   ├── 🖼️ quotes.svg
│   │   └── 🖼️ star.svg
│   ├── 🖼️ file.svg
│   ├── 🖼️ globe.svg
│   ├── 🖼️ next.svg
│   ├── 🖼️ vercel.svg
│   └── 🖼️ window.svg
├── 📁 utils
│   └── 📄 links.ts
├── ⚙️ .gitignore
├── 📝 README.md
├── 📄 eslint.config.mjs
├── 📄 mockData.ts
├── 📄 next.config.ts
├── ⚙️ package-lock.json
├── ⚙️ package.json
├── 📄 postcss.config.mjs
└── ⚙️ tsconfig.json
```

[Back to top](#table-of-content)
