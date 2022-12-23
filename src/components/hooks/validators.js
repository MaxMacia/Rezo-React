export const idValidator = identifier => {
    if (!identifier) {
      return "un identifiant est requis";
    }
    return "";
};

export const emailValidator = email => {
    if (!email) {
      return "un email est requis";
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
      return "le format de l'email est incorrect";
    }
    return "";
};
  
export const passwordValidator = password => {
    if (!password) {
      return "Un mot de passe est requis";
    }
    return "";
};
  
export const confirmPasswordValidator = (confirmPassword, form) => {
    if (!confirmPassword) {
      return "Un mot de passe de confirmation est requis";
    } else if (confirmPassword !== form.password) {
      return "Le mot de passe ne correspond pas au mot de passe de confirmation";
    }
    return "";
};
  