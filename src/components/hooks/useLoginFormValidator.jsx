import { useState } from "react";
import { idValidator, passwordValidator } from "./validators";

const touchErrors = errors => {
    return Object.entries(errors).reduce((acc, [field, fieldError]) => {
      acc[field] = {
        ...fieldError,
        dirty: true,
      };
      return acc;
    }, {});
};

export const useLoginFormValidator = loginForm => {
    const [errors, setErrors] = useState({
      identifier: {
        dirty: false,
        error: false,
        message: "",
      },
      password: {
        dirty: false,
        error: false,
        message: "",
      }
    })

    const validateLoginForm = ({ loginForm, field, errors, forceTouchErrors = false }) => {
        let isValid = true;

        // Create a deep copy of the errors
        let nextErrors = JSON.parse(JSON.stringify(errors));

        // Force validate all the fields
        if (forceTouchErrors) {
            nextErrors = touchErrors(errors);
        }

        const { identifier, password } = loginForm;

        if (nextErrors.identifier.dirty && (field ? field === "identifier" : true)) {
            const idMessage = idValidator(identifier, loginForm);
            nextErrors.identifier.error = !!idMessage;
            nextErrors.identifier.message = idMessage;
            if (!!idMessage) isValid = false;
        }

        if (nextErrors.password.dirty && (field ? field === "password" : true)) {
            const passwordMessage = passwordValidator(password, loginForm);
            nextErrors.password.error = !!passwordMessage;
            nextErrors.password.message = passwordMessage;
            if (!!passwordMessage) isValid = false;
        }

        setErrors(nextErrors);

        return {
            isValid,
            errors: nextErrors,
        };
    };

    const onBlurLoginField = event => {
        const field = event.target.name;
        const fieldError = errors[field];
        if (fieldError.dirty) return;

        const updatedErrors = {
            ...errors,
            [field]: {
            ...errors[field],
            dirty: true,
        },
        };

        validateLoginForm({ loginForm, field, errors: updatedErrors });
    };

  return {
    validateLoginForm,
    onBlurLoginField,
    errors,
  };

};
