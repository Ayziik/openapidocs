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
  // Заблокувати в одному стані назавжди:
  forceDarkModeState: 'dark', // або 'light'
  hideDarkModeToggle: true,

  // ── Layout ──────────────────────────────────────────────────────
  // 'modern' | 'classic'
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
  searchHotKey: 'k', // Cmd/Ctrl+K

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
  operationTitleSource: 'summary', // 'summary' | 'path'
  orderRequiredPropertiesFirst: true,
  orderSchemaPropertiesBy: 'preserve', // 'alpha' | 'preserve'

  // ── Developer tools bar (Configure / Share / Deploy) ────────────
  // 'always' | 'localhost' | 'never'
  showDeveloperTools: 'never',

  // ── Test Request button ─────────────────────────────────────────
  hideTestRequestButton: false,

  // ── Client libraries / code examples ────────────────────────────
  // true = сховати всі, [] = показати всі, або список конкретних
  hiddenClients: {
    node: false,
    php: false,
    python: false,
    go: false,
    shell: false,
    ruby: false,
    // все інше приховано
    c: true,
    http: true,
    clojure: true,
    csharp: true,
    dart: true,
    fsharp: true,
    java: true,
    js: false,
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
  // 'json' | 'yaml' | 'both' | 'direct' | 'none'
  documentDownloadType: 'yaml',

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

  // ── Servers ─────────────────────────────────────────────────────
  // Перезаписує servers з OpenAPI файлу:
  // servers: [
  //   { url: 'https://openapi.keycrm.app/v1', description: 'Production' },
  // ],

  // ── Proxy (для CORS) ────────────────────────────────────────────
  // proxyUrl: 'https://proxy.scalar.com',

  // ── Fonts ───────────────────────────────────────────────────────
  withDefaultFonts: true,

  // ── Telemetry ───────────────────────────────────────────────────
  telemetry: false,

  documentDownloadType: 'both',

  // ── Custom CSS ──────────────────────────────────────────────────
  customCss: `
  .dark-mode {
    /* Основний фон — глибокий нейтральний темний */
    --scalar-background-1: #141414;
    
    /* Фон карток і блоків — трохи світліший */
    --scalar-background-2: #1e1e1e;
    
    /* Фон hover і вкладених елементів */
    --scalar-background-3: #282828;
    
    /* Розділювачі — ледь помітні */
    --scalar-border-color: rgba(255, 255, 255, 0.07);

    /* Основний текст — теплий білий, не різкий */
    --scalar-color-1: #e2e2e2;
    
    /* Вторинний текст — описи */
    --scalar-color-2: rgba(226, 226, 226, 0.55);
    
    /* Третинний текст — плейсхолдери */
    --scalar-color-3: rgba(226, 226, 226, 0.30);
    
    /* Акцент — насичений зелено-блакитний, добре читається на темному */
    --scalar-color-accent: #00A6F2;
    
    /* Фон акцентних елементів */
    --scalar-background-accent: rgba(0, 166, 242, 0.10);
  }

  /* Кнопки — основний фон і колір тексту */
.dark-mode {
  --scalar-button-1: #0090d4;
  --scalar-button-1-hover: #0380baff;
  --scalar-button-1-color: #e2e2e2;
}

  .dark-mode .t-doc__sidebar,
  .dark-mode .sidebar {
    /* Сайдбар трохи темніший за основний фон */
    --scalar-sidebar-background-1: #0f0f0f;
    --scalar-sidebar-color-1: #e2e2e2;
    --scalar-sidebar-color-2: rgba(226, 226, 226, 0.45);
    --scalar-sidebar-border-color: rgba(255, 255, 255, 0.05);
    --scalar-sidebar-item-hover-background: rgba(255, 255, 255, 0.05);
    --scalar-sidebar-item-active-background: rgba(0, 166, 242, 0.12);
    --scalar-sidebar-item-hover-color: #00A6F2;
    --scalar-sidebar-color-active: #00A6F2;
    --scalar-sidebar-search-background: #1e1e1e;
    --scalar-sidebar-search-border-color: rgba(255, 255, 255, 0.07);
    --scalar-sidebar-search-color: rgba(226, 226, 226, 0.30);
  }

  /* Картки праворуч трохи світліші за фон */
  .endpoints-card,
  .request-card,
  .response-card {
    --scalar-background-2: #242424 !important;
  }

  .scalar-mcp-layer { display: none !important; }
  .darklight-reference > div:last-child a[href="https://www.scalar.com"] { display: none !important; }
  .introduction-card-item.scalar-reference-intro-clients { display: none !important; }
`,

})