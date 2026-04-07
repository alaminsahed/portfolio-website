export type ProjectCategory =
  | "projects"
  | "open-source"
  | "extensions"
  | "collaboration";

export const projectLists = [
  {
    id: 1,
    name: "Codealoy",
    category: "open-source" as ProjectCategory,
    details:
      "Codealoy is an open-source interactive learning web platform that intend to make learning programming & web development easier in Bangla (Bengali Language).",
    type: "Open Source",
    techTags: [
      {
        name: "Next.js",
        style: "default",
      },
      {
        name: "Tailwind CSS",
        style: "red",
      },
      {
        name: "Markdoc",
        style: "purple",
      },
      {
        name: "tRPC",
        style: "green",
      },
      {
        name: "TypeScript",
        style: "blue",
      },
    ],
    features: [
      "Homepage: User can find their courses from homepage according to their level",
      "Course Details: After click on a course, users can see the course details and course content",
      "Practice: User can practice their code from here",
      "Career: User can find their career path from here",
      "Blog: User can read blog from here",
      "Industry standard: User can find industry standard from here",
    ],
    githubLink: "https://github.com/codealoy/codealoy",
    live_url: "https://www.codealoy.com/",
  },
  {
    id: 2,
    category: "projects" as ProjectCategory,
    name: "Online Shopping Cart (Sam's accurium)",
    details:
      "A web-based application that allows users to buy and sell products online.",
    techTags: [
      {
        name: "React.js",
        style: "default",
      },
      {
        name: "Redux",
        style: "red",
      },
      {
        name: "React Bootstrap",
        style: "purple",
      },
      {
        name: "Node.js",
        style: "green",
      },
      {
        name: "Express.js",
        style: "blue",
      },
      {
        name: "MongoDB",
        style: "green",
      },
    ],
    features: [
      "Homepage: User can find their products from homepage",
      "Product Details and Review: After click on a product, users can see the product details and review. After signIn, user can write review for a product",
      "SignIn page: User and Admin can singIn though this page.",
      "Signup Page: User can create profile from this page.",
      "My Cart: User can add their products in their cart. User can’t purchase products without login.",
      "Shipping Address: User has to fill the shipping Address form to get the products.",
      "Place Order: After select the payment method, user get the place order page and able to pay via online payment system.",
      "Update Profile and Order History: User and Admin can update their profile information and see order history from this page.",
      "Admin User Management: Admin can manage user information.",
      "Admin Order Management: Admin can manage orders and update delivery status.",
      "Admin Admin Add New Admin: Admin can add new admin from users profile.",
      "Admin Add Product: Admin can add new products and update product information.",
      "Logout: User and Admin can logout from this page.",
    ],
    githubLink: "https://github.com/alaminsahed/onlineShop",
    live_url: "",
    images: [
      "/images/projects/onlineShopping/homepage.webp",
      "/images/projects/onlineShopping/productDetails.webp",
      "/images/projects/onlineShopping/signin.webp",
      "/images/projects/onlineShopping/signup.webp",
      "/images/projects/onlineShopping/cart.webp",
      "/images/projects/onlineShopping/shipping.webp",
      "/images/projects/onlineShopping/placeOrder.webp",
      "/images/projects/onlineShopping/usersProfile.webp",
      "/images/projects/onlineShopping/updateProduct.webp",
      "/images/projects/onlineShopping/adminUserManage.webp",
      "/images/projects/onlineShopping/adminOrderManage.webp",
    ],
  },
  {
    id: 3,
    category: "projects" as ProjectCategory,
    name: "Employee Management System",
    details:
      "The Employee Management System automates HR tasks like employee data, payroll, attendance, and leave management.",
    techTags: [
      {
        name: "React.js",
        style: "default",
      },
      {
        name: "Material UI",
        style: "purple",
      },
      {
        name: "Node.js",
        style: "green",
      },
      {
        name: "Express.js",
        style: "blue",
      },
      {
        name: "MongoDB",
        style: "green",
      },
      {
        name: "Socket.io",
        style: "red",
      },
    ],
    features: [
      "Login: Employees and Admins both can login from this page.",
      "Forget Password: User will give his registered email address and press the submit button. A recovery link will send to the user email.",
      "Home Page: After login, user will see his dashboard.",
      "Change password: User can change his password from this page.",
      "Profile: View Personal Information, current projects and monetary details.",
      "Edit personal Information: User authorized to edit only personal information",
      "Users All Projects Details: User can view his all projects lists from joining date to now.",
      "Claim leave request: User can claim for leave from here",
      "View leave request status: User can view their accepted or rejected leave request list.",
      "Download payslip: User can download monthly payslip from here",
      "View notice: User can view general and private notice. Other users can't view any one's particular notice.",
      "Real time notification: If admin change any user's information, that user get notification about that update.",
      "Admin Dashboard: Admin can view all users list and their information from here.",
      "Admin Add New User: Admin can add new user from here.",
      "Admin Update and Delete User Information: Admin can update any user's information from here.",
      "Admin add new project: Admin can add new project from here.",
      "Admin update and delete project information: Admin can update any project's information from here.",
      "Admin assign project to user: Admin can assign project to any user from here.",
      "Admin view all leave request: Admin can view all leave request from here.",
      "Admin accept or reject leave request: Admin can accept or reject any leave request from here.",
      "Admin view all notice: Admin can view all notice from here.",
      "Admin add new notice: Admin can add new notice from here.",
      "Admin send private notice to user: Admin can send private notice to any user from here.",
    ],
    githubLink: "https://github.com/alaminsahed/employee-management",
    live_url: "",
    images: [
      "https://github.com/alaminsahed/employee-managment/assets/57568263/697a248d-ade8-4131-957b-94921ea6ea65",
      "https://github.com/alaminsahed/employee-managment/assets/57568263/fcd0c93b-ae36-4fba-8545-ae89d5dc76ac",
      "https://github.com/alaminsahed/employee-managment/assets/57568263/14692139-1d75-4ac4-973c-721375ae0e32",
      "https://github.com/alaminsahed/employee-managment/assets/57568263/79e825ed-c4dc-4207-b060-6c5e31bd97eb",
      "https://github.com/alaminsahed/employee-managment/assets/57568263/96a7c37f-e05b-433e-8451-32d4a53764af",
      "https://github.com/alaminsahed/employee-managment/assets/57568263/ef71ff8a-2d5b-48c7-ba25-d6a1852c3ff3",
      "https://github.com/alaminsahed/employee-managment/assets/57568263/2758b2f6-ca92-40cf-a4f4-ac36e56649c5",
      "https://github.com/alaminsahed/employee-managment/assets/57568263/a45fdfc8-4e18-419e-9073-0cb232a19c5e",
      "https://github.com/alaminsahed/employee-managment/assets/57568263/54ce55f7-de93-43d8-a29f-d3530608e5f3",
      "https://github.com/alaminsahed/employee-managment/assets/57568263/376f8748-1337-4322-80d3-194e0f46c74d",
      "https://github.com/alaminsahed/employee-managment/assets/57568263/7000711d-59a7-458e-9bc7-6f4a3ef50231",
      "https://github.com/alaminsahed/employee-managment/assets/57568263/eebab9e4-e627-405e-a221-23cda2b630f5",
      "https://github.com/alaminsahed/employee-managment/assets/57568263/4f331519-612d-4b4d-99bc-95ef5b3e1e79",
      "https://github.com/alaminsahed/employee-managment/assets/57568263/bd7af739-8bc9-447b-9316-b3594f7db4d4",
      "https://github.com/alaminsahed/employee-managment/assets/57568263/aba8550b-5ed5-458d-8147-88ba7c2e74d0",
      "https://github.com/alaminsahed/employee-managment/assets/57568263/2dd43381-a2af-42b6-9510-d53d9cb89b33",
      "https://github.com/alaminsahed/employee-managment/assets/57568263/38a82c0b-52c0-4826-8d5b-d38e70928e30",
      "https://github.com/alaminsahed/employee-managment/assets/57568263/85b23285-ea36-44e6-9da5-80a6a58d3853",
      "https://github.com/alaminsahed/employee-managment/assets/57568263/bf86a1fa-e5ad-4d79-be96-ef610aa82299",
    ],
  },
  {
    id: 4,
    category: "projects" as ProjectCategory,
    name: "Covid Tracker",
    details:
      "Covid Tracker is a web-based application that allows users to see the current covid-19 situation in all over the world.",
    techTags: [
      {
        name: "React.js",
        style: "default",
      },
      {
        name: "React Bootstrap",
        style: "purple",
      },
    ],
    features: [
      "Homepage: User can see the current covid-19 situation in all over the world.",
      "Country wise covid-19 situation: User can see the current covid-19 situation in all over the world.",
      "Search country: User can search any country and see the current covid-19 situation.",
    ],
    githubLink: "https://github.com/alaminsahed/covid-tracer",
    live_url: "https://covid-tracerbd.netlify.app/",
    images: ["/images/projects/covidTracer/covid.png"],
  },

  // ── Extensions ──────────────────────────────────────────────────────────
  {
    id: 5,
    category: "extensions" as ProjectCategory,
    name: "Hide Reels and Shorts",
    details:
      "A Chrome extension that declutters social feeds by hiding Facebook Reels and YouTube Shorts, helping users reduce distractions and stay focused while browsing.",
    type: "Extension",
    techTags: [
      { name: "TypeScript", style: "blue" },
      { name: "Chrome API", style: "default" },
      { name: "DOM Manipulation", style: "purple" },
    ],
    features: [
      "Hides Facebook Reels from feed views for a cleaner browsing experience",
      "Removes YouTube Shorts sections to reduce short-form content distraction",
      "Lightweight extension with a simple setup focused on distraction-free browsing",
    ],
    githubLink: "",
    live_url:
      "https://chromewebstore.google.com/detail/hide-reels-and-shorts/jmbhodgakcniidbdongdcbofojfjiocf",
  },
  {
    id: 7,
    category: "extensions" as ProjectCategory,
    name: "ChatGPT ATS Resume Analyzer",
    details:
      "A premium GPT extension that analyzes resumes for ATS compatibility, measures JD-resume keyword matching, and provides targeted suggestions to improve interview readiness for both freshers and experienced professionals.",
    type: "Extension",
    techTags: [
      { name: "ChatGPT", style: "green" },
      { name: "ATS Optimization", style: "purple" },
      { name: "Prompt Engineering", style: "blue" },
    ],
    features: [
      "Generates an ATS compatibility score to highlight how well a resume aligns with automated screening expectations",
      "Provides a JD-resume match score based on role-specific keyword and requirement alignment",
      "Delivers actionable improvement suggestions to strengthen resume impact before applying",
    ],
    githubLink: "",
    live_url: "https://lnkd.in/gTuamwTP",
  },

  // ── Mentorship ───────────────────────────────────────────────────────────
  {
    id: 6,
    category: "collaboration" as ProjectCategory,
    name: "Karigor AI — Multi-Tenant AI Support Platform",
    details:
      "Led senior-level engineering across a production SaaS monorepo to build an AI-powered customer support platform with configurable agents, tool-calling workflows, omnichannel messaging, and embeddable chat experiences for multiple organizations.",
    type: "AI SaaS Collaboration",
    techTags: [
      { name: "Next.js", style: "blue" },
      { name: "TypeScript", style: "default" },
      { name: "Hono API", style: "green" },
      { name: "PostgreSQL", style: "purple" },
      { name: "Vercel AI SDK", style: "blue" },
      { name: "OpenAI API", style: "green" },
      { name: "Tool Calling", style: "purple" },
      { name: "Embeddable Widget", style: "default" },
    ],
    features: [
      "Architected a multi-tenant AI agent pipeline that combines conversation memory, organization-level prompts, and multi-step tool execution for reliable customer support automation",
      "Implemented hybrid tool-calling architecture with built-in static tools (FAQ, product search, order status) plus dynamic external API tools configurable per organization",
      "Enabled organization-specific AI behavior through bot profile controls (tone, fallback, welcome message, identity) and custom instruction overrides",
      "Built AI training loop by capturing unresolved/handover conversations and routing them into a review pipeline to continuously improve assistant quality",
      "Developed omnichannel support flow that processes web chat and Facebook Messenger messages through the same AI orchestration and human handoff logic",
      "Delivered embeddable website chat widget with persistent session storage, typing indicators, responsive UI, and configurable branding for easy client integration",
    ],
    githubLink: "",
    live_url: "https://support.unishopr.com/",
  },
];
