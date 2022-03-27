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

export const isLoading: any = (state = { isLoading: false }) =>
  !!state.isLoading;
export const isLoaded: any = (state = { isLoaded: false }) => !!state.isLoaded;
export const isError: any = (state = { isError: false }) => !!state.isError;

export const getData = (state = { data: {} }, defaultValue = {}) =>
  state.data || defaultValue;
export const hasData: any = (state = { data: {} }) => !!state.data;
export const shouldLoad = (state = { isLoaded: false, isLoading: false }) =>
  !state.isLoaded && !state.isLoading;
