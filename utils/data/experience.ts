// ─── Centralised stack badge colours ────────────────────────────────────────
// Change a colour here and it updates everywhere across all projects.
const STACK_STYLES: Record<string, string> = {
  // Frontend frameworks
  "React": "default",
  "React.js": "default",
  "Next.js": "dark",

  // Language
  "TypeScript": "blue",

  // State & data fetching
  "TanStack Query": "indigo",
  "React Query": "indigo",
  "Redux Toolkit": "red",
  "Redux": "red",

  // UI libraries
  "Ant Design": "yellow",
  "Bootstrap": "purple",
  "Tailwind CSS": "blue",

  // Backend / runtime
  "Node.js": "green",
  "Express.js": "dark",

  // Databases
  "MySQL": "blue",
  "MongoDB": "green",

  // Other tools & services
  "Firebase FCM": "yellow",
  "Hasura": "indigo",
  "Vitest & Playwright": "green",
  "OpenAI": "default",
};

/** Returns a `{ name, style }` stack badge object using the centralised colour map. */
const st = (name: string) => ({ name, style: STACK_STYLES[name] ?? "default" });
// ─────────────────────────────────────────────────────────────────────────────

const sslStack =
  "React.js, Next.js, TypeScript, Redux, TanStack Query, Ant Design, Tailwind CSS";

export const totalExperience = [
  {
    id: "ssl-senior",
    title: "Senior Software Engineer",
    company: "SSL Wireless",
    company_url: "https://sslwireless.com/",
    duration: "January 2026 - Present",
    stacks: sslStack,
    area: "Frontend",
    promoted: true,
    summary: [
      "Architect and deliver high-impact frontend systems across banking, ERP, and payment products.",
      "Drive engineering standards and mentor teammates on patterns, performance, and API integration.",
    ],
    companyDescription:
      "SSL Wireless is a leading technology company providing payment solutions and value-added services to businesses and consumers across Bangladesh.",
    animationDelay: 500,
    projects: [
      {
        id: "sbplc-npsb-1",
        featured: true,
        name: "NPSB SaaS Admin Dashboard — Banking & Payment Switch Platform",
        live_url: "",
        description:
          "Architected and delivered the frontend of a large-scale NPSB (National Payment Switch Bangladesh) admin dashboard for a major bank, covering the full lifecycle of interbank payments, settlements, QR transactions, and regulatory reporting.",
        details:
          "As the senior frontend engineer, I made all architecture and technology decisions for this platform from the ground up. The system spans more than a dozen functional modules — transaction monitoring and dispute management, RTP (Request to Pay) sent/received flows, multi-layer settlement processing with manual reconciliation and credit request approval, Bangla QR merchant and acquirer settlement tracking, central bank (Bangladesh Bank) dispute reporting, DMS (Dispute Management System) issue tracking, ISO and CBS API log inspection, bulk upload pipelines, and full user/role/permission management with granular RBAC. I designed a permission-driven routing system, a reusable cursor-based paginated data table, and standardized filter/export patterns used consistently across every module.",
        status: "successful",
        responsibilities: [
          "Architected the entire frontend from scratch — chose the tech stack, defined project structure, established patterns for routing, data fetching, state management, and component composition.",
          "Designed and implemented a permission-driven dynamic routing system with role-based access control (RBAC) enforced at both the route and UI element level.",
          "Built reusable, cursor-based paginated data table and standardized filter/export components adopted consistently across 20+ modules.",
          "Integrated TanStack Query for server-state management, covering optimistic updates, background refetching, and mutation handling with user-facing notifications.",
          "Collaborated closely with backend engineers on API contract design to ensure clean data flow across transaction, settlement, QR, and reporting domains.",
          "Delivered modules covering NPSB transaction monitoring, dispute handling, RTP flows, multi-stage settlement reconciliation, Bangla QR acquirer/merchant settlement, central bank reporting, DMS issue tracking, bulk upload pipelines, ISO/CBS API log viewers, and system configuration.",
          "Set up unit testing with Vitest and end-to-end testing with Playwright; enforced code quality through ESLint, Prettier, Husky, and commitlint.",
        ],
        stacks: [
          st("React"),
          st("TypeScript"),
          st("TanStack Query"),
          st("Redux Toolkit"),
          st("Ant Design"),
          st("Vitest & Playwright"),
        ],
        animationDuration: 2000,
        animationDelay: 600,
      },
      {
        id: "ssl-2",
        featured: true,
        name: "Automated Distribution System",
        live_url: "https://stl-paysync-admin.sslwireless.com/sign-in",
        description:
          "Scalable solution for an international brand to optimize global distribution with rich data visualization.",
        details:
          "Created advanced UI components for operational dashboards and data management, helping teams monitor distribution and act on insights quickly.",
        status: "successful",
        responsibilities: [
          "Contributed to requirement analysis with PMO and UI team to align technical scope with business goals.",
          "Designed system architecture to support scalable, maintainable distribution workflows.",
          "Designed and developed advanced UI components for operational dashboards and data management views.",
          "Conducted code reviews to ensure quality, consistency, and adherence to project standards.",
          "Collaborated in developing backend APIs to support frontend data requirements and business logic.",
          "Developed an OCR module leveraging OpenAI integration to automate document processing workflows.",
        ],
        stacks: [
          st("React.js"),
          st("TypeScript"),
          st("TanStack Query"),
        ],
        animationDuration: 2000,
        animationDelay: 600,
      },
      {
        id: "heidelberg-materials-admin-1",
        featured: true,
        name: "Heidelberg Materials Admin Dashboard — Cement Logistics & Plant Operations Platform",
        live_url: "https://heidelberg-automation-admin.sslwireless.com/",
        description:
          "Architected and delivered the frontend of a full-scale logistics and operations admin dashboard for Heidelberg Materials, covering the complete supply chain from sales order management and multi-stage delivery workflows to plant gate weight-bridge operations and barcode-based challan generation.",
        details:
          "As the senior frontend engineer, I designed and built the entire frontend from the ground up. The system operates in two distinct modes — a central admin panel and a local plant/gate mode — spanning 15+ functional modules. These include a real-time KPI dashboard with a time-based truck activity heatmap, multi-stage delivery lifecycle management (request → approval → order → active tracking → completion), sales analytics with summary cards, master data management for customers, materials, truck fleet, and shipping addresses, plant gate weight-bridge entry and exit recording, digital challan generation with barcode support, a support ticket center with resolve/reject workflows, device monitoring, and full user/role/permission management with granular RBAC. I designed a permission-driven routing architecture, a reusable paginated data table and standardized filter pattern adopted across every module, and bulk Excel upload pipelines used across 10+ entities.",
        status: "successful",
        responsibilities: [
          "Architected the entire frontend from scratch — chose the tech stack, defined project structure, and established patterns for routing, data fetching, state management, and component composition.",
          "Designed a dual-mode system (central admin vs. local plant/gate mode) with permission-driven routing and role-based access control (RBAC) enforced at both the route and UI-element level.",
          "Built reusable paginated data tables and standardized filter/export components adopted consistently across 15+ modules.",
          "Integrated TanStack Query for all server-state management, covering background refetching, optimistic updates, and mutation handling with user-facing notifications.",
          "Implemented plant gate weight-bridge entry/exit recording and barcode-based digital challan generation for local plant operations.",
          "Built bulk Excel upload pipelines with client-side parsing and validation (XLSX) for customers, materials, trucks, shipping addresses, and delivery orders.",
          "Developed a multi-stage delivery lifecycle system — from request creation and approval through active truck-stage monitoring to completed delivery archival.",
          "Collaborated closely with backend engineers on API contract design to ensure clean data flow across logistics, plant-gate, and user management domains.",
          "Set up unit testing with Vitest and Testing Library; enforced code quality through ESLint and Prettier with standardized commit conventions.",
        ],
        stacks: [
          st("React"),
          st("TypeScript"),
          st("TanStack Query"),
          st("Redux Toolkit"),
          st("Ant Design"),
        ],
        animationDuration: 2000,
        animationDelay: 600,
      },
    ],
  },
  {
    id: "ssl-swe",
    title: "Software Engineer",
    company: "SSL Wireless",
    company_url: "https://sslwireless.com/",
    duration: "December 2023 - January 2026",
    stacks: sslStack,
    area: "Frontend",
    summary: [
      "Built scalable UIs for government, distribution, and financial platforms from spec to production.",
      "Owned frontend delivery across 4+ concurrent client projects at SSL Wireless.",
    ],
    companyDescription:
      "SSL Wireless is Bangladesh's first payment gateway and SMS service provider, serving clients directly with banking, reconciliation, ERP, and analytics solutions.",
    animationDelay: 500,
    projects: [
      {
        id: "ceo360-dashboard-1",
        featured: true,
        name: "CEO360 — Executive Financial KPI & Analytics Dashboard",
        live_url: "",
        description:
          "Developed the frontend of a pixel-perfect, multi-module executive dashboard for a leading digital financial services company, consolidating financial KPIs, working capital analytics, payment gateway performance, HR workforce metrics, and internal admin operations into a single unified platform for C-suite decision-making.",
        details:
          "Responsible for architecting and delivering a high-fidelity, permission-gated dashboard covering 10+ functional modules — financial & strategic KPI overview with P&L bridge and annual target tracking, accounts receivable and payable with aging analysis and client/vendor breakdowns, payment gateway (PGW) scheme analyzer covering card, MFS, bKash incentive, and CBL channels, HR on-time punctuality dashboard with department-level performance breakdowns, sales performance and business unit overview, file ingestion with upload and history management, and full configuration modules for cash flow, PGW targets, MFS, accounts, and business units, plus user and role management with RBAC. Integrated three charting libraries (Recharts, ECharts, Plotly.js) for diverse visualizations including waterfall/P&L bridge charts, bar, line, and pie charts with animated counters. Implemented a robust Axios instance with NProgress, a 401-triggered token refresh queue, and TanStack Query v5 with custom stale-time and GC settings across 13 API service modules. Enforced RBAC at both route and UI-element level using server-provided permission strings via a custom useHasPermissions hook and PrivateWrapper guards.",
        status: "successful",
        responsibilities: [
          "Built and maintained 10+ functional modules end-to-end — financial KPIs, AR/AP working capital, PGW scheme analytics, HR on-time metrics, sales performance, file management, configuration, and user/role administration.",
          "Implemented pixel-perfect UI using a hybrid Ant Design 5 + Bootstrap 5 system with IBM Plex Sans typography and Ant Design ConfigProvider theme tokens for consistent design language across all modules.",
          "Integrated three charting libraries — Recharts for revenue/expense overviews, ECharts for pie/distribution charts, and Plotly.js for waterfall P&L bridge charts — with animated count-up transitions via react-countup.",
          "Architected a shared Axios instance with NProgress request indicators and a token-refresh queue to serialize concurrent requests on 401, preventing race conditions during session renewal.",
          "Enforced RBAC at route and UI element level using server-provided permission strings, a custom useHasPermissions hook, and PrivateWrapper/PrivateLayout guards that conditionally render sections and protect routes.",
          "Managed server state with TanStack Query v5 (custom stale-time, GC, and retry config) across 13 API service modules with centralized endpoint constants, and client state (auth tokens, selected year/month filters) with Redux Toolkit + redux-persist.",
          "Delivered responsive layout with a collapsible Ant Design Sider that auto-collapses at 768 px, Suspense-based lazy loading for all route-level pages, and a Loader/ErrorBoundary shell for consistent loading and error UX.",
        ],
        stacks: [
          st("React"),
          st("TypeScript"),
          st("Ant Design"),
          st("TanStack Query"),
          st("Redux Toolkit"),
        ],
        animationDuration: 2000,
        animationDelay: 600,
      },
      {
        id: "bat-partner-admin-1",
        featured: false,
        name: "BAT Partner App — Admin & Operations Management Platform",
        live_url: "",
        description:
          "Developed the admin frontend of a large-scale B2B partner management platform for British American Tobacco (BAT), covering the full operational lifecycle of partner engagement — from sales reporting and inventory tracking through gift incentive programmes, habituation campaigns, training management, and push notification delivery.",
        details:
          "Responsible for building and maintaining a pixel-perfect, consistent UI across 15+ functional modules and 45+ pages — an analytics dashboard with Recharts visualisations (Halkhata entry trends, sale report breakdowns, inventory and gift charts), combined and company-level sale reports with drill-down detail views, Halkhata ledger management, combined and company inventory tracking, a multi-stage gift incentive system (wishlist, claimlist, catalogue, schedules), habituation campaign management with leaderboard reports, weekly gift enlistment reports and gift reports, general campaign management with reporting, app usage reports broken down by partner and by location, training management (categories and content), push notification management with group targeting, store and popup management, file upload, and full user/role/app-user management with server-side RBAC enforced at both route and UI-element level. Applied consistent patterns for data tables, filter sections, and reusable form components across every module.",
        status: "successful",
        responsibilities: [
          "Built and maintained 15+ functional modules end-to-end across 45+ pages, spanning sales reporting, inventory, gift incentive programmes, habituation and general campaigns, training, notifications, and access control.",
          "Implemented permission-driven route protection and UI-element visibility using server-provided permission strings, with RBAC enforced via a custom useHasPermissions hook backed by Redux state.",
          "Wrote custom data-fetching and mutation hooks (useFetch, usePost, usePut, usePatch, useDelete) wrapping TanStack React Query to provide a uniform, type-safe API layer across all modules.",
          "Built an analytics dashboard integrating Recharts area, line, and bar charts to visualise Halkhata entry trends, regional sale reports, inventory levels, and gift programme metrics.",
          "Developed complex campaign modules including habituation campaigns with leaderboard reporting, weekly gift enlistment tracking, gift reports, and general campaign report views.",
          "Implemented app usage reporting split by partner and by location, giving operational stakeholders granular visibility into platform adoption.",
          "Maintained strict code quality, standardised component patterns (data tables, filter forms, modals), and naming conventions across a large multi-module codebase with lazy-loaded routes for optimal bundle performance.",
        ],
        stacks: [
          st("React"),
          st("TypeScript"),
          st("Ant Design"),
          st("TanStack Query"),
          st("Redux Toolkit"),
        ],
        animationDuration: 2000,
        animationDelay: 600,
      },
      {
        id: "heidelberg-web-panel-1",
        featured: false,
        name: "Heidelberg Enterprise Admin Panel",
        live_url: "",
        description:
          "Architected and delivered the full frontend foundation of a production-grade enterprise admin panel for Heidelberg, establishing a scalable, permission-driven React SPA with OTP-based authentication, dark/light theming, and a provider-composition architecture designed to support large module growth.",
        details:
          "As the senior frontend engineer, I made every architecture and technology decision for this platform from day one. I designed a permission-driven dynamic routing system where each route carries a required permission key checked against the authenticated user's permission array, enforcing RBAC at both the route and render level. I implemented a sophisticated JWT token lifecycle — including silent refresh with a concurrent-request queue that holds in-flight API calls and replays them automatically once a new token is issued, preventing race conditions under high load. The provider stack is cleanly composed (Redux, TanStack Query, Router, Theme) to keep concerns isolated and independently testable. OTP-based two-step auth flows are handled through a dedicated service layer backed by Axios interceptors with NProgress feedback. A custom ThemeProvider supports dark/light mode with system preference detection and localStorage persistence. The project also enables the React Compiler for automatic memoization and uses Tailwind CSS v4 with a PostCSS pipeline, ESLint, and Prettier enforced across the codebase.",
        status: "successful",
        responsibilities: [
          "Architected the entire frontend from scratch — selected the tech stack, defined folder and module structure, and established patterns for routing, data fetching, state management, and component composition.",
          "Designed and implemented a permission-driven dynamic routing system with RBAC enforced at both the route level and UI element level, keyed against a server-issued permissions array stored in persisted Redux state.",
          "Built a production-grade JWT token refresh mechanism with a concurrent-request queue that pauses in-flight API calls during refresh and replays them automatically once a new access token is issued.",
          "Configured TanStack Query as the server-state layer with Axios interceptors, NProgress loading feedback, and 5-minute request timeout handling.",
          "Implemented OTP-based two-step authentication flow with dedicated service and API endpoint abstraction.",
          "Set up a composable provider architecture (Redux Persist, TanStack Query, React Router v7, custom ThemeProvider) keeping concerns isolated and independently replaceable.",
          "Established code quality tooling with ESLint, Prettier, and enabled the React Compiler for automatic memoization optimization across the application.",
        ],
        stacks: [
          st("React"),
          st("TypeScript"),
          st("TanStack Query"),
          st("Redux Toolkit"),
          st("Tailwind CSS"),
        ],
        animationDuration: 2000,
        animationDelay: 600,
      },
      {
        id: "smart-municipality-admin-1",
        featured: false,
        name: "Smart Municipality — Civic Administration & Service Management Platform",
        live_url: "",
        description:
          "Built the complete frontend of a pixel-perfect, bilingual (English & Bengali) municipal back-office platform for Bangladesh, covering citizen certificate applications, trade licensing, dynamic form management, geographic mapping, and multi-domain reporting across 35+ distinct screens.",
        details:
          "Architected and delivered a medium-to-large scale TypeScript SPA (226 source files, 39 pages, 33 lazy-loaded private routes) against an API gateway. Domains covered: certificate application lifecycle with day-by-day reports and payment/transaction summaries, trade license operations (request management, demand reports, approved summaries), dynamic drag-and-drop form builder using react-dnd, geography management (wards, villages, counselor mapping), banner/news configuration, user and role administration, and a real-time dashboard with animated stat cards. Permission-driven routing and sidebar render server-issued RBAC permission strings using a central hasPermission utility wired to Redux-persisted auth. Server state is managed with TanStack Query (custom useFetch, usePost, usePut, usePatch, useDelete hooks) over a centralised Axios instance handling Bearer tokens, Accept-Language headers, and 401 auto-logout. Client state uses Redux Toolkit with 11 feature slices and selective redux-persist. Certificate and trade-license documents are fetched via dedicated download endpoints. Deployed via a multi-stage Docker build into an nginx container on port 3010.",
        status: "successful",
        responsibilities: [
          "Architected and built 35+ screens across 6 functional domains — certificate applications, trade licensing, dynamic forms, reports, geography, and access control — with consistent pixel-perfect UI using Ant Design v5.",
          "Implemented RBAC permission-driven route protection and sidebar rendering using server-issued permission strings, enforced at both route and UI-element level via a centralised hasPermission utility backed by Redux.",
          "Built a drag-and-drop dynamic form builder (react-dnd) supporting creation, editing, and preview of configurable municipality forms.",
          "Wrote custom server-state hooks (useFetch, usePost, usePut, usePatch, useDelete) wrapping TanStack Query and Axios with Bearer auth, bilingual Accept-Language headers, and uniform mutation feedback.",
          "Delivered multi-domain reporting screens — application, certificate, transaction, counselor-activity, trade-license demand, and expiry reports — with paginated data tables and drill-down day/detail views.",
          "Integrated bilingual support (English and Bengali) using react-i18next with a runtime language toggle and language-scoped query keys for cache isolation.",
          "Containerised the application with a multi-stage Dockerfile (Node 18 build → nginx) and maintained CRA environment configuration for API gateway targeting.",
        ],
        stacks: [
          st("React"),
          st("TypeScript"),
          st("Ant Design"),
          st("Redux Toolkit"),
          st("TanStack Query"),
        ],
        animationDuration: 2000,
        animationDelay: 600,
      },
      {
        id: "otl-erp-1",
        featured: true,
        name: "OTL ERP — Apparel & Textile Enterprise Resource Planning Platform",
        live_url: "",
        description:
          "Developed and maintained the frontend of a large-scale, multi-module ERP system for an apparel and textile enterprise, covering the full operational lifecycle from import and production through supply chain, inventory, quality control, and regulatory reporting.",
        details:
          "Responsible for building and sustaining high-quality, consistent UI across 14+ functional modules — LC and PI/CI-based import management, export documentation, multi-stage production tracking with requisition and handover flows, inventory and stock-in control, supply chain operations (vehicles, delivery schedules, gate passes, customs, consumption), quality control inspection reporting, marketing visit plans and sales projections, Metabase-embedded BI dashboards, support ticket management, and full user/role/warehouse permission management with RBAC. Consistently applied established patterns for reusable async-paginated select components, filter sections, export, PDF generation, and print utilities across every module. The app runs across four environments (dev, UAT, prod, UI/UX) with versioned cache-busting and organisation/workstation-scoped sessions.",
        status: "successful",
        responsibilities: [
          "Built and maintained 14+ functional modules end-to-end, from import (LC, PI, CI) and export through production, supply chain, inventory, quality control, marketing, and access control.",
          "Implemented permission-driven sidebar and route protection using server-provided permission strings with RBAC enforced at both route and UI element level.",
          "Developed reusable async-paginated select components, standardised filter sections, and export/print utilities used consistently across 20+ modules.",
          "Wrote custom data-fetching hooks (useGetData, usePostData, useInfiniteSelect, useFetchDataWithPageChange) wrapping Axios to handle pagination and mutation feedback uniformly.",
          "Integrated PDF generation and in-browser printing pipelines using @react-pdf/renderer and react-to-print, producing commercial documents such as PI, CI, gate passes, and inspection reports.",
          "Collaborated with backend engineers on API contracts to ensure clean data flow across import, production, supply chain, and reporting domains.",
          "Maintained consistent code quality, component patterns, and naming conventions across a large multi-developer codebase spanning multiple environments.",
        ],
        stacks: [
          st("React"),
          st("Ant Design"),
          st("Tailwind CSS"),
        ],
        animationDuration: 2000,
        animationDelay: 600,
      },
      {
        id: "kpi-mgmt-1",
        featured: false,
        name: "KPI Management System — Internal Engineering Performance & Operations Platform",
        live_url: "",
        description:
          "Contributed to the frontend and API development of a comprehensive internal platform for managing employee KPIs, project cost tracking, attendance, worklog reporting, presales estimation, and role-based administrative operations across an engineering organisation.",
        details:
          "Joined the frontend and backend development effort to design and implement RESTful APIs and React-based UI modules powering a hybrid full-stack application. The system spans multiple operational domains — KPI tracking and evaluation with configurable types, impacts, definitions, and targets; project setup with resource allocation and team membership management; multi-format worklog reporting (date-wise, issue-wise, weekly); release planning with Gantt chart data feeds; attendance records; presales project estimation with engineering resource breakdowns, team composition, BN-SME projections, and grand total calculations; user engagement analytics; and a full RBAC admin panel for user, role, and business unit management. The application serves both server-rendered EJS pages and API-driven React modules through a unified Express backend, with permission-scoped data access enforced at every endpoint.",
        status: "successful",
        responsibilities: [
          "Designed and implemented RESTful API endpoints across KPI, project, reporting, presales, and admin domains using Node.js and Express.",
          "Built the presales estimation API — handling complex JSON payloads for engineering resources, others resources, project rate tables, team composition, and BN-SME data with upsert logic tied to a presales reference.",
          "Developed permission-aware API middleware enforcing RBAC at the endpoint level, ensuring data access is scoped to user roles and permissions.",
          "Implemented worklog reporting APIs supporting date-wise, issue-wise, and weekly aggregation with flexible query parameters for filtering and pagination.",
          "Contributed to KPI evaluation and settings APIs — covering KPI types, impacts, definitions, targets, and score update flows.",
          "Collaborated with the frontend team on API contracts to ensure seamless integration between React components, EJS-rendered views, and backend data models.",
          "Structured route and controller layers (routes/api.js, routes/web.js, controller/) for maintainability and separation of concerns across a multi-module codebase.",
        ],
        stacks: [
          st("Node.js"),
          st("Express.js"),
          st("MySQL"),
          st("Next.js"),
          st("TypeScript"),
        ],
        animationDuration: 2000,
        animationDelay: 600,
      },
      {
        id: "quick-response-1",
        featured: false,
        name: "Quick Response — Emergency Incident Management & Alerting Platform",
        live_url: "",
        description:
          "Built the complete frontend of a web-based emergency alert admin platform for SSL Wireless, enabling operators to receive, create, manage, and act on real-time emergency incidents with media attachments, OTP-authenticated access, and Firebase Cloud Messaging push notifications.",
        details:
          "Delivered a pixel-perfect, production-grade admin interface covering the full incident lifecycle — mobile OTP authentication and registration, alert list dashboard, incident creation with in-browser audio recording (MediaRecorder API) and image upload via FormData, incident detail and action flows, filtered incident history, and a structured law-enforcement contact directory. Integrated Firebase Cloud Messaging (foreground + background via service worker) for real-time push alerts. Built a centralised API layer using custom React Query hooks (useFetch, usePost, usePut, usePatch, useDelete) wrapping Axios with a global 401 interceptor that clears persisted state and redirects to login. Auth state is persisted via redux-persist; route protection is enforced through Private and Guest route wrappers. The app includes deep-link redirect pages for universal links targeting Play Store, App Store, and environment-specific web URLs for the companion mobile app.",
        status: "successful",
        responsibilities: [
          "Architected the full frontend from routing, layout, and state management through API integration, building a scalable layered structure (pages → api → hooks → axios config).",
          "Implemented mobile OTP-based authentication flow with Redux Toolkit slices, redux-persist for durable session storage, and Private/Guest route wrapper guards.",
          "Built the incident creation flow with in-browser audio capture using the MediaRecorder API, image upload via react-dropzone, and multipart FormData submission.",
          "Developed reusable server-state hooks (useFetch, usePost, usePut, usePatch, useDelete) wrapping TanStack React Query and Axios, providing consistent pagination, mutation feedback, and error handling across all modules.",
          "Integrated Firebase Cloud Messaging for real-time push notifications, including foreground message handling and a background service worker for OS-level alerts.",
          "Designed and built the incident history module with a collapsible filter drawer, paginated data table, and dynamic query state management.",
          "Implemented a responsive Ant Design layout with a collapsible sidebar at ≤768px, lazy-loaded routes, Suspense boundaries, and an ErrorBoundary fallback.",
        ],
        stacks: [
          st("React"),
          st("TypeScript"),
          st("Ant Design"),
          st("React Query"),
          st("Firebase FCM"),
        ],
        animationDuration: 2000,
        animationDelay: 600,
      },
      {
        id: "aem-ssl-1",
        featured: false,
        name: "Automated Escalation Matrix — Alert & Escalation Policy Management Platform",
        live_url: "",
        description:
          "Built the complete frontend of a real-time alert and escalation management system for SSL Wireless, enabling operations teams to configure escalation policies, manage on-call teams, and respond to alerts through a fully permission-gated admin interface.",
        details:
          "Solely responsible for the frontend architecture and all feature delivery across the platform. Implemented alert lifecycle management (listing, detail view, status updates, responder assignment), full CRUD for escalation policies with notification type configuration and activation controls, teams and member assignment, user management with role-based access, and a profile/security module with OTP phone verification. Built a permission-driven collapsible sidebar and route guards using server-returned permission strings, enforcing RBAC at both navigation and UI-element level. Architected a thin but consistent data-fetching layer with custom hooks (useFetch, usePost, usePut, usePatch, useDelete) wrapping TanStack Query and Axios, with centralised 401 interception and toast feedback. Established reusable component patterns (DataTable, async selects, breadcrumbs, page meta) and enforced consistent naming and structure across all feature modules. Delivered pixel-perfect UI against Figma designs using Ant Design 5 with Tailwind utility overrides.",
        status: "successful",
        responsibilities: [
          "Architected the full frontend from project scaffold to production delivery, including routing, state management, HTTP layer, and all feature modules.",
          "Built alert management module with list view, detail page, status update flows, and responder assignment.",
          "Developed escalation policy CRUD with multi-step configuration, notification type controls, activate/deactivate, and delete with confirmation guards.",
          "Implemented teams management and user-to-team assignment, plus user management with admin-initiated password reset.",
          "Built an ACL module (roles and permissions) and enforced RBAC across the entire app — permission-gated sidebar items and action-level UI using server-provided permission strings and a useHasPermission hook.",
          "Designed and implemented a centralised data-fetching layer with custom TanStack Query hooks wrapping Axios, handling pagination, mutation feedback, and global 401 redirect uniformly.",
          "Integrated OTP-based phone verification and notification preference management in the account settings module.",
          "Maintained pixel-perfect fidelity to Figma designs using Ant Design 5 with consistent component patterns, lazy loading, and Redux-persisted auth sessions.",
        ],
        stacks: [
          st("Next.js"),
          st("TypeScript"),
          st("Ant Design"),
          st("Redux Toolkit"),
          st("React Query"),
        ],
        animationDuration: 2000,
        animationDelay: 600,
      },
      {
        id: "ssl-project-estimation-1",
        featured: false,
        name: "Project Estimation Tool — Internal Task & Man-Hour Estimation Platform",
        live_url: "",
        description:
          "Built an internal SPA for Software Shop Limited (SSL Wireless) enabling project managers to manage projects, track task requirements, and maintain estimated man-hours across the full project lifecycle with a structured dashboard and analytics overview.",
        details:
          "Developed a full-featured project estimation platform with a collapsible sidebar layout, authentication flow, and a two-tier data model — Projects and their child Tasks with requirement IDs and man-hour estimates. The dashboard surfaces key metrics via animated stat cards and ECharts-powered pie and bar charts. Task records expose requirement descriptions, estimated vs. updated man-hours, and an audit trail (updated_by, timestamps). Inline editing via a modal form allows project managers to revise man-hour estimates post-estimation. Route architecture uses React Router v6 with lazy-loaded pages wrapped in Suspense and an ErrorBoundary for resilience. All data-fetching is handled through custom TanStack Query hooks (useFetch, usePost) wrapping Axios, with a shared query-key registry ensuring consistent cache invalidation. The layout applies Ant Design 5 with custom ConfigProvider theming (branded sidebar at #272A68) and responsive Ant Design Grid throughout. State persistence is handled by Redux Toolkit with redux-persist to maintain session across reloads.",
        status: "successful",
        responsibilities: [
          "Architected and implemented the full frontend from scratch — authentication, private layout with collapsible sidebar, dashboard, project list, and task management modules.",
          "Built custom TanStack Query wrapper hooks (useFetch, usePost, usePut, usePatch, useDelete) with a shared query-key registry to standardise data fetching and cache invalidation across all modules.",
          "Designed and implemented a paginated DataTable component with reusable column definitions and query-state synchronisation used consistently across project and task listings.",
          "Integrated ECharts (via echarts-for-react) for dashboard analytics — pie charts and bar charts — alongside react-countup animated stat cards for KPI summaries.",
          "Implemented lazy-loaded route code-splitting with React.lazy and Suspense, paired with a custom ErrorBoundary to ensure graceful failure handling across all pages.",
          "Applied Ant Design 5 ConfigProvider theming to maintain brand-consistent sidebar, header, and component styling without overriding global styles.",
          "Wired Redux Toolkit with redux-persist for cross-session state persistence, and react-hot-toast for uniform mutation feedback across all form submissions.",
        ],
        stacks: [
          st("React"),
          st("TypeScript"),
          st("Ant Design"),
          st("TanStack Query"),
          st("Redux Toolkit"),
        ],
        animationDuration: 2000,
        animationDelay: 400,
      },
      {
        id: "sms-fraud-detect-1",
        featured: false,
        name: "SMS Fraud Detection — AI-Powered SMS Screening & Analytics Admin Dashboard",
        live_url: "",
        description:
          "Built the complete frontend of an AI-driven SMS fraud detection platform, providing real-time message screening, fraud analytics, and operational history tracking through a pixel-perfect admin dashboard.",
        details:
          "Developed and delivered the full frontend of an AI-backed fraud detection system that classifies incoming SMS messages as fraudulent or legitimate using a machine learning model on the backend. The admin panel surfaces a rich analytics dashboard with animated KPI cards (total records, fraud records, screening counts), time-series line charts (fraud messages over time, message volume, fraud-to-non-fraud and non-fraud-to-fraud trend lines), and pie charts for Fraud vs Non-Fraud distribution and model prediction accuracy. The live Fraud Detection screen lets operators submit arbitrary messages and receive instant AI classifications with supporting reasons. Gateway and Screening History modules expose filterable, paginated record logs. The app is fully containerised with Docker (production Nginx target on port 5006), and state is persisted across sessions via Redux Persist with scoped auth slices.",
        status: "successful",
        responsibilities: [
          "Architected and built the end-to-end frontend — dashboard, AI screening interface, gateway history, and screening history — from scratch using React 18 and TypeScript.",
          "Implemented an AI-powered real-time fraud detection screen that posts SMS messages to the ML backend and renders structured results (fraud flag, classification reason) with instant feedback.",
          "Built an analytics-rich dashboard with animated CountUp KPI cards, ECharts-powered line charts (fraud over time, message volume, trend corrections) and pie charts (fraud distribution, model accuracy).",
          "Authored custom React Query wrapper hooks (useFetch, usePost, usePut, usePatch, useDelete) around Axios to standardise data-fetching, mutation handling, and error reporting across all modules.",
          "Implemented protected routing with Guest and Private route wrapper components, persisted auth state using Redux Toolkit + Redux Persist, and scoped user sessions to login tokens.",
          "Designed and applied pixel-perfect UI using Ant Design 5 with consistent card layouts, responsive grid breakpoints, and CSS Modules — faithfully translating Figma designs with zero visual drift.",
          "Containerised the production build with Docker (multi-stage Dockerfile, Nginx serving on port 5006) for environment-agnostic deployments.",
        ],
        stacks: [
          st("React"),
          st("TypeScript"),
          st("Ant Design"),
          st("Redux Toolkit"),
          st("React Query"),
        ],
        animationDuration: 2000,
        animationDelay: 600,
      },
    ],
  },
  {
    id: "j1",
    title: "Software Engineer",
    company: "SVAM International Inc.",
    company_url: "https://www.svam.com/",
    duration: "July 2022 - November 2023",
    stacks: "React.js, TypeScript, Redux, Redux-Saga, Bootstrap, AngularJS",
    area: "Frontend",
    summary: [
      "Maintained and scaled a React.js lending platform serving 3k+ merchants and lenders daily.",
      "Integrated third-party APIs and implemented business logic for complex loan evaluation flows.",
    ],
    companyDescription:
      "SVAM International Inc. is a global IT services and consulting company delivering technology solutions worldwide.",
    animationDelay: 500,
    projects: [
      {
        id: "j1p1",
        featured: true,
        name: "Big Think Capital",
        live_url: "https://apply.bigthinkcapital.com/",
        description:
          "Loan and merchant platform serving thousands of daily users—credit evaluation, offers, and operational tooling for lenders and merchants.",
        details:
          "A platform that evaluates loan suitability from credit history, revenue, inception date, and more. Administrators review documents, tailor offers, and communicate with customers while the UI keeps complex business flows understandable and fast.",
        status: "successful",
        responsibilities: [
          "Developed and maintained the frontend for a product serving 3k+ merchants and lenders daily using React.js.",
          "Shipped new features and reusable components to improve interactivity and maintainability.",
          "Integrated REST and third-party APIs to extend product capabilities.",
          "Implemented business logic on the frontend with a strong grasp of lending workflows.",
          "Collaborated with backend engineers on API shapes and data flow.",
          "Resolved defects and improved UX through continuous enhancements (on the order of 30–35% UX improvement in targeted areas).",
          "Worked with local and international teammates to meet deadlines and quality goals.",
        ],
        stacks: [
          st("React.js"),
          st("Bootstrap"),
          st("TypeScript"),
          st("Redux"),
        ],
        animationDuration: 2000,
        animationDelay: 600,
      },
    ],
  },
  {
    id: "j2",
    title: "Junior Web Developer",
    company: "Unishopr.com",
    company_url: "https://unishopr.com/",
    duration: "July 2021 - June 2022",
    stacks: "React.js, Next.js, Node.js, Express.js, GraphQL, Hasura, MongoDB",
    area: "Full Stack",
    summary: [
      "Developed full-stack features for a cross-border e-commerce platform handling 500+ daily orders.",
      "Prototyped an MVP that opened a new business line and generated significant revenue.",
    ],
    companyDescription:
      "UniShopr is an overseas online shopping platform to get items from anywhere in the world.",
    animationDelay: 500,
    projects: [
      {
        id: "j2p1",
        featured: true,
        name: "Unishopr.com",
        live_url: "https://unishopr.com/",
        description:
          "Cross-border e-commerce platform handling international orders, logistics, and daily operations.",
        details:
          "UniShopr enables users to purchase from international sites with transparent pricing (currency, shipping, taxes) and managed fulfillment. The stack combined React/Next on the frontend with Node, GraphQL, and Hasura on the backend.",
        status: "successful",
        responsibilities: [
          "Developed and maintained frontend and backend for e-commerce serving 500+ orders daily.",
          "Prototyped an MVP with the MERN stack for a new business line that generated significant revenue for the company.",
          "Built features and reusable React.js components with a focus on quality UX.",
          "Implemented APIs with Hasura, GraphQL, and REST using Node.js and Express.js.",
          "Performed debugging and testing across the stack to improve stability.",
          "Collaborated with senior developers on delivery goals.",
          "R&D and UX improvements contributed to roughly 20% growth in engagement and satisfaction.",
        ],
        stacks: [
          st("React.js"),
          st("Next.js"),
          st("TypeScript"),
          st("Node.js"),
          st("Hasura"),
        ],
        bgColor: "bg-gray-300",
        darkBgColor: "dark:bg-gray-800",
        animationDuration: 2000,
        animationDelay: 600,
      },
      {
        id: "j2p2",
        name: "Unishopr Pilot",
        live_url: "",
        description:
          "Internal platform for overseas delivery staff to manage flights, documents, and order history.",
        details:
          "A system for passengers and operations to store personal data, legal documents, flying history, and upcoming flights securely and efficiently.",
        status: "successful",
        responsibilities: [
          "Delivered features for 50+ internal users managing flying schedules and orders.",
          "Built reusable React.js components.",
          "Implemented REST APIs with Node.js, Express.js, and MongoDB.",
        ],
        stacks: [
          st("React.js"),
          st("Node.js"),
          st("Express.js"),
          st("MongoDB"),
        ],
        bgColor: "bg-gray-300",
        darkBgColor: "dark:bg-gray-800",
        animationDuration: 2000,
        animationDelay: 600,
      },
      {
        id: "j2p3",
        name: "Desh Door",
        live_url: "",
        description:
          "Pilot e-commerce concept connecting Bangladeshi expatriates with products from home.",
        details:
          "Desh Door is a pioneering ecommerce platform designed to connect Bangladeshi expatriates worldwide with authentic Bangladeshi products and doorstep delivery. Built as a pilot for UniShopr to validate market demand across cultures and continents.",
        status:
          "This project is deprecated. It was a pilot project for UniShopr.com.",
        responsibilities: [
          "Built the pilot from scratch to test customer demand.",
          "Implemented React.js UI and Node/Express/MongoDB APIs.",
        ],
        stacks: [
          st("React.js"),
          st("Node.js"),
          st("Express.js"),
          st("MongoDB"),
        ],
        bgColor: "bg-gray-300",
        darkBgColor: "dark:bg-gray-800",
        animationDuration: 2000,
        animationDelay: 600,
      },
    ],
  },
];
