export default class Constants {
  static API = {
    GENERIC: "/api/mail/generic",
    UPLOAD: "/api/mail/upload"
  };

  static FIREBASE_FOLDERS = {
    USERS_RESUMES: "cv"
  };

  static LANGUAGES = {
    ALL: ["en", "de", "es", "pl"],
    DEFAULT: "en"
  };

  static URLS = {
    INTIVE_PROD_URL: "https://intive.com",
    INTIVE_STAGING_URL: "https://intive3-staging.firebaseapp.com"
  };

  static URLS_PREFIXS = {
    http: "http",
    www: "www"
  };

  static ROUTES = {
    CAREERS: "careers"
  };

  static CONTENT_TYPES = {
    IMAGE: "image",
    IMAGE_SVG: "image/svg+xml",
    VIDEO: "video",
    PDF: "pdf"
  };

  static COLORS_IN_WORDS = {
    PINK: "pink",
    BLUE: "blue"
  };

  static IMAGE_POSITIONS = {
    RIGHT: "right",
    LEFT: "left",
    BELOW: "below",
    BACKGROUND: "background"
  };

  static LAYOUTS_INFO = {
    TITLE_LENGTH: 100,
    DESC_LENGTH: 400
  };

  static FORMS_ERRORS = {
    PERSONIO_APPLIED: "Applicant already applied to this position."
  };

  static THEME_PROP_TO_CSS_PROP = {
    primaryColor: "--theme-primary-color",
    secondaryColor: "--theme-secondary-color",
    tertiaryColor: "--theme-tertiary-color",
    shadowColor: "--theme-shadow-color",
    shadowSecondaryColor: "--theme-shadow-secondary-color",
    hoverColor: "--theme-hover-color"
  };

  static FILTERS = {
    ALL: "all",
    CAREERS: {
      MIN_LENGTH_TO_START: 2,
      SUGGESTION_START_INDEX: -1
    }
  };

  static SEARCH_PARAMS = {
    PAGE: "page",
    TAG: "tag",
    QUERY: "query",
    FILTERS: "filters",
    SORTING: "sorting"
  };

  static OFFERS_SEARCH_PARAMS = {
    KEYWORD: "keyword",
    LOCATION: "location",
    DISCIPLINE: "discipline"
  };

  static VAULT_SEARCH_PARAMS = {
    KEYWORD: "keyword",
    TYPE: "type",
    INDUSTRY: "industry"
  };

  static PAGES = {
    FIRST: 1
  };

  static INDICATORS = {
    LIST: {
      ARROWS: "arrows",
      ARROWS_ON_SLIDE: "arrows-on-slide",
      DOTS: "dots",
      DOTS_ON_SLIDE: "dots-on-slide",
      DOTS_AND_ARROWS: "dots-and-arrows"
    },
    DOTS: "..."
  };

  static DIRECTIONS = {
    LEFT: "left",
    RIGHT: "right",
    AS_INTEGER: {
      LEFT: -1,
      RIGHT: 1
    }
  };

  static LOCATIONS = {
    REMOTE: "remote"
  };

  static TRANSLATIONS_DYNAMIC = {
    FILTERS_KEYWORD_MIN_LENGTH: "%MIN_LENGTH%",
    UPLOAD_MAX_FILE_SIZE: "%MAX_FILE_SIZE%",
    UPLOAD_MAX_FILES_NUMBER: "%MAX_FILES_NUMBER%"
  };

  static COUNTRY_CODES_TO_CURRENCY = {
    UK: "GBP",
    ES: "EUR",
    DE: "EUR",
    PL: "PLN",
    UA: "USD",
    AR: "ARS",
    US: "USD"
  };

  static BREAKPOINTS = {
    MIN: {
      TABLET_M: "768px",
      TABLET_L: "1024px",
      DESKTOP_M: "1216px",
      DESKTOP_L: "1440px"
    }
  };

  static TEXT_ALIGN_TO_FLEX = {
    LEFT: "flex-start",
    CENTER: "center",
    RIGHT: "flex-end"
  };

  static GENERIC_COMPONENTS = {
    BACKGROUNDS: {
      SOLID: "solid",
      "STRIPES-HORIZONTAL": "stripesHor",
      "STRIPES-VERTICAL": "stripesVer",
      DEFAULT: "solid"
    }
  };

  static UPLOAD = {
    DEFAULT_MAX_FILE_SIZE: 5000,
    DEFAULT_MAX_FILES_NUMBER: 5,
    ACCEPTED_TYPES: [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.ms-word.document.macroEnabled.12",
      "application/vnd.ms-powerpoint",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    ],
    FILE_INPUT_PREFIX: "file-"
  };

  static FORMS = {
    NOTIFICATION_TYPES: {
      LOADING: "loading",
      SUCCESS: "success",
      ERROR: "error"
    },
    ERRORS: {
      SUBMIT: "errorSubmit",
      ROOT: "root"
    }
  };

  static DEVICE_MODE = {
    MOBILE: "mobile",
    DESKTOP: "desktop"
  };

  static POSTS_PER_PAGE = {
    INSIGHTS: 10
  };

  static STORAGE = {
    KEYS: {
      SEARCH: "searchQuery"
    }
  };

  static SEARCH = {
    RESULTS_PER_PAGE: 10,
    FILTERS: {
      KEY: "filters",
      KEYWORD: {
        KEY: "keyword"
      },
      PAGE_TYPES: {
        KEY: "type",
        DEFAULT: "all",
        ALL: "all",
        PAGE: "page",
        BLOGPOST: "blogpost"
      },
      DATE: {
        KEY: "date",
        DEFAULT: "all",
        ALL: "all",
        PAST_30: "30",
        PAST_60: "60",
        PAST_90: "90"
      }
    },
    SORTING: {
      KEY: "sorting",
      DEFAULT: "newest",
      NEWEST: "newest",
      OLDEST: "oldest",
      ALPHA_ASC: "alpha-asc",
      ALPHA_DESC: "alpha-desc"
    }
  };

  static TILES_GALLERY = {
    SHOW_MORE_BTN_MIN_LENGTH: 7
  };

  static HUBSPOT = {
    UPLOAD_FILE_URL: "https://api.hubapi.com/filemanager/api/v3/files/upload",
    FORM_SUBMIT_URL: "https://api.hsforms.com/submissions/v3/integration/submit/"
  };

  static HUBSPOT_STATIC_FORM_ID = {
    DEVELOPMENT: {
      HUBSPOT_PORTAL_ID: "143752362",
      WORK_WITH_INTIVE: "680c0c5e-cd8a-4a65-a83c-30047eeeebc8",
      CAREERS_AT_INTIVE_FORM_ID: "bb73cef9-a88f-49e3-ac6c-dbe762892423",
      GENERAL_QUESTIONS_FORM_ID: "d2bd06f9-aba4-4cbd-9458-a4b34eeb6583",
      MEDIA_INQUIRIES: "15680096-2641-4a95-aae7-3c8e8ca95ae7"
    },

    STAGING: {
      HUBSPOT_PORTAL_ID: "143752362",
      WORK_WITH_INTIVE: "680c0c5e-cd8a-4a65-a83c-30047eeeebc8",
      CAREERS_AT_INTIVE_FORM_ID: "bb73cef9-a88f-49e3-ac6c-dbe762892423",
      GENERAL_QUESTIONS_FORM_ID: "d2bd06f9-aba4-4cbd-9458-a4b34eeb6583",
      MEDIA_INQUIRIES: "15680096-2641-4a95-aae7-3c8e8ca95ae7"
    },

    PRODUCTION: {
      HUBSPOT_PORTAL_ID: "26689525",
      WORK_WITH_INTIVE: "1c1e9b1e-1679-4539-9555-21d9044c2983",
      CAREERS_AT_INTIVE_FORM_ID: "2ba82768-1f40-48e9-8f4f-6719224ccd42",
      GENERAL_QUESTIONS_FORM_ID: "571b71a1-70e4-4f2b-9c16-f5dd1e09f9b3",
      MEDIA_INQUIRIES: "571b71a1-70e4-4f2b-9c16-f5dd1e09f9b3"
    }
  };
}
