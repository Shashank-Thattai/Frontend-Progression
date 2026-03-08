export var initialFormState = {
  step: 1,
  fields: {
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  errors: {}, // { fieldName: 'error message' }
  submitted: false,
};

export default function formReducer(state, action) {
  switch (action.type) {
    case "update_fields":
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.payload.fields]: action.payload.value,
        },
      };
  }
}
