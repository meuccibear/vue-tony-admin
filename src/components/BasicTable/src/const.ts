import componentSetting from '@/settings/componentSetting'

const { table } = componentSetting

const { pageSizeOptions, pageLayoutOptions, defaultPageSize, fetchSetting, defaultSortFn, defaultFilterFn } = table

export const ROW_KEY = 'key'

// Optional display number per page;
export const PAGE_SIZE_OPTIONS = pageSizeOptions

export const PAGE_LAYOUT_OPTIONS = pageLayoutOptions

// Number of items displayed per page
export const PAGE_SIZE = defaultPageSize

// Common interface field settings
export const FETCH_SETTING = fetchSetting

// Configure general sort function
export const DEFAULT_SORT_FN = defaultSortFn

export const DEFAULT_FILTER_FN = defaultFilterFn