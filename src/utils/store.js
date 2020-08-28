export const getLoadingState = (state = {}) => ({
  ...state,
  isLoading: true,
  isLoaded: false,
  isError: false,
});

export const getReadyState = (data = {}) => ({
  data,
  isLoading: false,
  isLoaded: true,
  isError: false,
});

export const getErrorState = (data = {}) => ({
  data,
  isLoading: false,
  isLoaded: false,
  isError: true,
});

export const isLoading = (state = {}) => !!state.isLoading;
export const isLoaded = (state = {}) => !!state.isLoaded;
export const isError = (state = {}) => !!state.isError;

export const getData = (state = {}, defaultValue = {}) =>
  state.data || defaultValue;
export const hasData = (state = {}) => !!state.data;
export const shouldLoad = (state = {}) => !state.isLoaded && !state.isLoading;
