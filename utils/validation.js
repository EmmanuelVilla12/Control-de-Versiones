function validateEmail(email) {
  if (!email) return false;

  return email.includes("@");
}

module.exports = validateEmail;