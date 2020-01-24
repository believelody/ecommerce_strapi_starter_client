import api from "../api";

export default (email, subject, text, html) => api.user.confirmEmail({ to: email, subject, text, html })