# Assignment 2 at Ec Utbildning

This is the second assigment we got. It's a page where we are to create reusable components and create the page from a figma file.

<hr>

## Table of content

- [Assignment 2 at Ec Utbildning](#assignment-2-at-ec-utbildning)
  - [Table of content](#table-of-content)
  - [Tech Stack](#tech-stack)
    - [Frontend (Client-Side)](#frontend-client-side)
    - [Backend (Server-side)](#backend-server-side)
    - [Hosting \& Deployment](#hosting--deployment)
    - [Testing](#testing)
    - [Development Tools](#development-tools)
  - [Getting Started](#getting-started)
  - [Design section](#design-section)
    - [Color Palette](#color-palette)
    - [How to create Tables in markdown](#how-to-create-tables-in-markdown)
      - [Component-Specific Functions:](#component-specific-functions)
        - [This is the utility funtion for class name merging](#this-is-the-utility-funtion-for-class-name-merging)
        - [Example of usage](#example-of-usage)
        - [Npm links for clsx and Tailwind-merge](#npm-links-for-clsx-and-tailwind-merge)

<hr>

## Tech Stack

This section provides an overview of the technologies used to build and run the project.

#### Frontend (Client-Side)

- Tailwind CSS - [Tailwind documentation](https://tailwindcss.com/docs/installation/using-vite)
- TypeScript
- **Frameworks/Libraries:**
  - Next.js - [Next.js documentation](https://nextjs.org/docs)

#### Backend (Server-side)

- **Languages**: Node.js (JavaScript), etc.
- **Frameworks:**
  - Express.js (Node.js)
  - Spring Boot (Java)
- **APIs:** REST, GraphQL

#### Hosting & Deployment

- **Platforms:** Vercel - [Deployed version](https://storaid-inlmn-2.vercel.app/)

#### Testing

- Jest, Cypress, etc.

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

[Back to top](#table-of-content)
