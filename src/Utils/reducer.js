export const initialState = {
  status: "void",
  error: null,
  user: {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    token: null,
  },
  logged: false,
  loginStatus: {
    valid: false,
  },
};

// actions creators
export const loginFetchingAction = (userCredentials) => ({
  type: "login/fetching",
  payload: userCredentials,
});

export const loginResolvedAction = (payload) => ({
  type: "login/resolved",
  payload: payload,
});

export const loginRejectedAction = (payload) => ({
  type: "login/rejected",
  payload: payload,
});

export const profileResolved = (payload) => ({
  type: "profile/resolved",
  payload: payload,
});

export const profileRejected = () => ({
  type: "profile/rejected",
});

export const updateProfileResolved = (payload) => ({
  type: "update/resolved",
  payload: payload,
});

export const updateProfileRejected = (payload) => ({
  type: "update/rejected",
  payload: payload,
});

export const resetStateAction = () => ({
  type: "reset",
});

export function userReducer(state = initialState, action) {
  if (action.type === "login/fetching") {
    console.log(action);
    return {
      ...state,
      status: "fetching",
      user: {
        ...state.user,
        email: action.payload.email,
        password: action.payload.password,
      },
    };
  }
  if (action.type === "login/resolved") {
    return {
      ...state,
      status: "resolved",
      user: {
        ...state.user,
        token: action.payload.token,
      },
      error: null,
      loginStatus: {
        ...state.loginStatus,
        valid: true,
      },
    };
  }
  if (action.type === "login/rejected") {
    return {
      ...state,
      status: "rejected",
      error: action.payload.message,
      loginStatus: {
        ...state.loginStatus,
        valid: false,
      },
    };
  }
  if (action.type === "profile/resolved") {
    return {
      ...state,
      logged: true,
      user: {
        ...state.user,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      },
    };
  }
  if (action.type === "profile/rejected") {
    return {
      ...state,
      logged: false,
    };
  }
  if (action.type === "update/resolved") {
    return {
      ...state,
      status: "resolved",
      user: {
        ...state.user,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      },
    };
  }
  if (action.type === "update/rejected") {
    return {
      ...state,
      status: "rejected",
      error: action.payload.message,
    };
  }
  if (action.type === "reset") {
    return {
      ...initialState,
    };
  }

  return state;
}
