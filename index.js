const genPwd = (length, symbols) => {
  if (!Number.isInteger(length) || length < 1) return;
  if (typeof symbols !== 'boolean') return;

  const characters = symbols
    ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'
    : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }
  return password;
};

module.exports = genPwd;
