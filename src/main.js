import '@scalar/api-reference/style.css'
import { createApiReference } from '@scalar/api-reference'

createApiReference('#app', {

  // ── OpenAPI source ──────────────────────────────────────────────
  url: './api.yaml',
  // Або передати контент напряму:
  // content: '{ "openapi": "3.1.0", ... }',

  // ── Theme ───────────────────────────────────────────────────────
  // Варіанти: 'alternate' | 'default' | 'moon' | 'purple' | 'solarized'
  //           'bluePlanet' | 'saturn' | 'kepler' | 'mars' | 'deepSpace'
  //           'laserwave' | 'none'
  theme: 'saturn',

  // ── Dark mode ───────────────────────────────────────────────────
  darkMode: true,
  forceDarkModeState: 'dark',
  hideDarkModeToggle: true,

  // ── Layout ──────────────────────────────────────────────────────
  layout: 'modern',

  // ── Metadata ────────────────────────────────────────────────────
  metaData: {
    title: 'keyCRM API Reference',
    description: 'Official REST API documentation for keyCRM',
    ogDescription: 'Official REST API documentation for keyCRM',
    ogTitle: 'keyCRM API Reference',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
  },

  // ── Favicon ─────────────────────────────────────────────────────
  favicon: '/favicon.png',

  // ── Sidebar ─────────────────────────────────────────────────────
  showSidebar: true,

  // ── Search ──────────────────────────────────────────────────────
  hideSearch: false,
  searchHotKey: 'k',

  // ── Tags / sections ─────────────────────────────────────────────
  defaultOpenFirstTag: true,
  defaultOpenAllTags: false,

  // ── Models (schemas) ────────────────────────────────────────────
  hideModels: true,
  expandAllModelSections: false,

  // ── Responses ───────────────────────────────────────────────────
  expandAllResponses: false,

  // ── Operations ──────────────────────────────────────────────────
  showOperationId: false,
  operationTitleSource: 'summary',
  orderRequiredPropertiesFirst: true,
  orderSchemaPropertiesBy: 'preserve',

  // ── Developer tools bar ─────────────────────────────────────────
  showDeveloperTools: 'never',

  // ── Test Request button ─────────────────────────────────────────
  hideTestRequestButton: false,

  // ── Client libraries / code examples ────────────────────────────
  hiddenClients: {
    node: false,
    php: false,
    python: false,
    go: false,
    shell: false,
    ruby: false,
    js: false,
    c: true,
    http: true,
    clojure: true,
    csharp: true,
    dart: true,
    fsharp: true,
    java: true,
    kotlin: true,
    objc: true,
    ocaml: true,
    powershell: true,
    r: true,
    rust: true,
    swift: true,
  },
  hideClientButton: true,

  // ── Default HTTP client ─────────────────────────────────────────
  defaultHttpClient: {
    targetKey: 'node',
    clientKey: 'fetch',
  },

  // ── Download button ─────────────────────────────────────────────
  documentDownloadType: 'both',

  // ── Agent (AI chat) ─────────────────────────────────────────────
  agent: {
    disabled: true,
  },

  // ── MCP ─────────────────────────────────────────────────────────
  mcp: { name: 'My API', url: 'https://mcp.example.com', disabled: true },

  // ── Authentication ──────────────────────────────────────────────
  authentication: {
    preferredSecurityScheme: 'bearerAuth',
    securitySchemes: {
      bearerAuth: {
        token: '',
      },
    },
  },

  // ── Persist auth в localStorage ─────────────────────────────────
  persistAuth: false,

  // ── Fonts ───────────────────────────────────────────────────────
  withDefaultFonts: true,

  // ── Telemetry ───────────────────────────────────────────────────
  telemetry: false,

  // ── Custom CSS ──────────────────────────────────────────────────
  customCss: `
  /* ── Тональна ієрархія: один темний колір, три рівні глибини ── */
  .dark-mode {
    /* Базовий фон — найтемніший */
    --scalar-background-1: #0D1117;

    /* Картки і блоки — помітно світліші */
    --scalar-background-2: #0D1117;

    /* Hover і вкладені елементи */
    --scalar-background-3: #213040;

    /* Розділювачі */
    --scalar-border-color: rgba(255, 255, 255, 0.08);

    /* Основний текст — максимальний контраст */
    --scalar-color-1: #FFFFFF;

    /* Вторинний текст */
    --scalar-color-2: rgba(255, 255, 255, 0.55);

    /* Третинний текст */
    --scalar-color-3: rgba(255, 255, 255, 0.30);

    /* Акцент */
    --scalar-color-accent: #00A6F2;

    /* Фон акцентних елементів */
    --scalar-background-accent: rgba(0, 166, 242, 0.12);
  }

  /* ── Кнопки ── */
  .dark-mode {
    --scalar-button-1: #00A6F2;
    --scalar-button-1-hover: #0093d8;
    --scalar-button-1-color: #0D1117;
  }

  /* ── Сайдбар — один рівень світліший за базу ── */
  .dark-mode .t-doc__sidebar,
  .dark-mode .sidebar {
    --scalar-sidebar-background-1: #131B27;
    --scalar-sidebar-color-1: #ffffff;
    --scalar-sidebar-color-2: #CED6E0;
    --scalar-sidebar-border-color: rgba(255, 255, 255, 0.06);
    --scalar-sidebar-item-hover-background: rgba(255, 255, 255, 0.05);
    --scalar-sidebar-item-active-background: rgba(0, 166, 242, 0.12);
    --scalar-sidebar-item-hover-color: #00A6F2;
    --scalar-sidebar-color-active: #00A6F2;
    --scalar-sidebar-search-background: #1A2333;
    --scalar-sidebar-search-border-color: rgba(255, 255, 255, 0.08);
    --scalar-sidebar-search-color: rgba(255, 255, 255, 0.30);
  }

  /* ── Code panel — трохи світліший за базу, окремий відтінок ── */
  .dark-mode .scalar-code-block,
  .dark-mode .request-body-card,
  .dark-mode pre {
    --scalar-background-1: #111923;
    --scalar-background-2: #1A2333;
    --scalar-color-1: #FFFFFF;
    --scalar-color-2: rgba(255, 255, 255, 0.55);
    --scalar-border-color: rgba(255, 255, 255, 0.06);
  }

  /* ── Картки ендпоінтів — виступають над базовим фоном ── */
  .dark-mode .endpoints-card,
  .dark-mode .request-card,
  .dark-mode .response-card {
    --scalar-background-2: #1A2333 !important;
  }

  /* ── Intro блоки (Server і Authentication) — той самий рівень що й картки ── */
  .dark-mode .scalar-reference-intro-server,
  .dark-mode .scalar-reference-intro-auth {
    --scalar-background-1: #1A2333 !important;
    --scalar-background-2: #1A2333 !important;
    --scalar-background-3: #213040 !important;
    --scalar-border-color: rgba(255, 255, 255, 0.08) !important;
  }

  /* ── Активний item у sidebar:
       Scalar вже рендерить свій лівий border через --scalar-sidebar-color-active
       і власні класи. Додаткового border-left не додаємо — буде подвійна риска.
       Колір акценту керується змінною вище: --scalar-sidebar-color-active: #00A6F2
  ── */

  /* ── Прихована службова UI ── */
  .scalar-mcp-layer { display: none !important; }
  .darklight-reference > div:last-child a[href="https://www.scalar.com"] { display: none !important; }
  .introduction-card-item.scalar-reference-intro-clients { display: none !important; }
`,
})