import { useState } from "react";
import { idValidator, emailValidator, passwordValidator, confirmPasswordValidator } from "./validators";

const touchErrors = errors => {
    return Object.entries(errors).reduce((acc, [field, fieldError]) => {
      acc[field] = {
        ...fieldError,
        dirty: true,
      };
      return acc;
    }, {});
};

export const useSignupFormValidator = signupForm => {
    const [errors, setErrors] = useState({
      identifier: {
        dirty: false,
        error: false,
        message: "",
      },
      email: {
        dirty: false,
        error: false,
        message: "",
      },
      password: {
        dirty: false,
        error: false,
        message: "",
      },
      confirmPassword: {
        dirty: false,
        error: false,
        message: "",
      }
    })

    const validateSignupForm = ({ signupform, field, errors, forceTouchErrors = false }) => {
        let isValid = true;

        // Create a deep copy of the errors
        let nextErrors = JSON.parse(JSON.stringify(errors));

        // Force validate all the fields
        if (forceTouchErrors) {
            nextErrors = touchErrors(errors);
        }

        const { identifier, email, password, confirmPassword } = signupForm;

        if (nextErrors.identifier.dirty && (field ? field === "identifier" : true)) {
            const idMessage = idValidator(identifier, signupForm);
            nextErrors.identifier.error = !!idMessage;
            nextErrors.identifier.message = idMessage;
            if (!!idMessage) isValid = false;
        }

        if (nextErrors.email.dirty && (field ? field === "email" : true)) {
            const emailMessage = emailValidator(email, signupForm);
            nextErrors.email.error = !!emailMessage;
            nextErrors.email.message = emailMessage;
            if (!!emailMessage) isValid = false;
        }

        if (nextErrors.password.dirty && (field ? field === "password" : true)) {
            const passwordMessage = passwordValidator(password, signupForm);
            nextErrors.password.error = !!passwordMessage;
            nextErrors.password.message = passwordMessage;
            if (!!passwordMessage) isValid = false;
        }

        if (nextErrors.confirmPassword.dirty && (field ? field === "confirmPassword" : true)) {
            const confirmPasswordMessage = confirmPasswordValidator(confirmPassword, signupForm);
            nextErrors.confirmPassword.error = !!confirmPasswordMessage;
            nextErrors.confirmPassword.message = confirmPasswordMessage;
            if (!!confirmPasswordMessage) isValid = false;
        }

        setErrors(nextErrors);

        return {
            isValid,
            errors: nextErrors,
        };
    };

    const onBlurSignupField = event => {
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

        validateSignupForm({ signupForm, field, errors: updatedErrors });
    };

  return {
    validateSignupForm,
    onBlurSignupField,
    errors,
  };

};
