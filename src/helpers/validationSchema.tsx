import * as Yup from "yup";

export const validateLoginForm = Yup.object({
  username: Yup.string().trim().required("Le nom d'utilisateur est requis"),
  password: Yup.string().trim().required("Le mot de passe est requis"),
});

export const validateRegistration = Yup.object({
  email: Yup.string().email("Veuillez entrer une adresse mail valide"),
  last_name: Yup.string().required("Veuillez entrer votre nom"),
  first_name: Yup.string().required("Veuillez entrer votre prénom"),
  password: Yup.string().required("Veuillez définir un mot de passe"),
  confirmPassword: Yup.string().required(
    "Veuilllez confirmer votre mot de passe"
  ),
});
