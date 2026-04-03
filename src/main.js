import "@scalar/api-reference/style.css";
import { createApiReference } from "@scalar/api-reference";

createApiReference("#app", {
  // ── OpenAPI source ──────────────────────────────────────────────
  url: "./api.yaml",
  // Або передати контент напряму:
  // content: '{ "openapi": "3.1.0", ... }',

  // ── Theme ───────────────────────────────────────────────────────
  // Варіанти: 'alternate' | 'default' | 'moon' | 'purple' | 'solarized'
  //           'bluePlanet' | 'saturn' | 'kepler' | 'mars' | 'deepSpace'
  //           'laserwave' | 'none'
  theme: "saturn",

  // ── Dark mode ───────────────────────────────────────────────────
  darkMode: true,
  forceDarkModeState: "dark",
  hideDarkModeToggle: true,

  // ── Layout ──────────────────────────────────────────────────────
  layout: "modern",

  // ── Metadata ────────────────────────────────────────────────────
  metaData: {
    title: "keyCRM API Reference",
    description: "Official REST API documentation for keyCRM",
    ogDescription: "Official REST API documentation for keyCRM",
    ogTitle: "keyCRM API Reference",
    ogImage: "https://example.com/image.png",
    twitterCard: "summary_large_image",
  },

  // ── Favicon ─────────────────────────────────────────────────────
  favicon: "/favicon.png",

  // ── Sidebar ─────────────────────────────────────────────────────
  showSidebar: true,

  // ── Search ──────────────────────────────────────────────────────
  hideSearch: false,
  searchHotKey: "k",

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
  operationTitleSource: "summary",
  orderRequiredPropertiesFirst: true,
  orderSchemaPropertiesBy: "preserve",

  // ── Developer tools bar ─────────────────────────────────────────
  showDeveloperTools: "never",

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
    targetKey: "node",
    clientKey: "fetch",
  },

  // ── Download button ─────────────────────────────────────────────
  documentDownloadType: "both",

  // ── Agent (AI chat) ─────────────────────────────────────────────
  agent: {
    disabled: true,
  },

  // ── MCP ─────────────────────────────────────────────────────────
  mcp: { name: "My API", url: "https://mcp.example.com", disabled: true },

  // ── Authentication ──────────────────────────────────────────────
  authentication: {
    preferredSecurityScheme: "bearerAuth",
    securitySchemes: {
      bearerAuth: {
        token: "",
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
  /* ── Палітра: холодний сланцево-синій + бренд #00A6F2 ── */
  .dark-mode {
    /* Базовий фон — глибокий холодний темно-синій */
    --scalar-background-1: #0D1117;

    /* Фон карток і блоків */
    --scalar-background-2: #161C26;

    /* Фон hover і вкладених елементів */
    --scalar-background-3: #1A2230;

    /* Розділювачі — легкий бренд-тінт замість нейтрального білого */
    --scalar-border-color: rgba(0, 166, 242, 0.08);

    /* Основний текст — холодний білий під палітру */
    --scalar-color-1: #DDE6F0;

    /* Вторинний текст — описи */
    --scalar-color-2: rgba(221, 230, 240, 0.50);

    /* Третинний текст — плейсхолдери */
    --scalar-color-3: rgba(221, 230, 240, 0.28);

    /* Акцент — фірмовий #00A6F2 */
    --scalar-color-accent: #00A6F2;

    /* Фон акцентних елементів */
    --scalar-background-accent: rgba(0, 166, 242, 0.10);
  }

  /* ── Кнопки ── */
  .dark-mode {
    --scalar-button-1: #00A6F2;
    --scalar-button-1-hover: #0093d8;
    --scalar-button-1-color: #0D1117;
  }

  /* ── Сайдбар — найтемніший шар ── */
  .dark-mode .t-doc__sidebar,
  .dark-mode .sidebar {
    --scalar-sidebar-background-1: #0A0F15;
    --scalar-sidebar-color-1: #F0F6FF;
    --scalar-sidebar-color-2: rgba(240, 246, 255, 0.65);
    --scalar-sidebar-border-color: rgba(0, 166, 242, 0.06);
    --scalar-sidebar-item-hover-background: rgba(0, 166, 242, 0.06);
    --scalar-sidebar-item-active-background: rgba(0, 166, 242, 0.12);
    --scalar-sidebar-item-hover-color: #00A6F2;
    --scalar-sidebar-color-active: #00A6F2;
    --scalar-sidebar-search-background: #13181F;
    --scalar-sidebar-search-border-color: rgba(0, 166, 242, 0.10);
    --scalar-sidebar-search-color: rgba(221, 230, 240, 0.28);
  }

  /* ── Code panel — найглибший шар ── */
  .dark-mode .scalar-code-block,
  .dark-mode .request-body-card,
  .dark-mode pre {
    --scalar-background-1: #0A0F15;
    --scalar-background-2: #13181F;
  }

  /* ── Картки ендпоінтів ── */
  .dark-mode .endpoints-card,
  .dark-mode .request-card,
  .dark-mode .response-card {
    --scalar-background-2: #1C2433 !important;
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
});
