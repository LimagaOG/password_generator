document.getElementById('generateBtn').addEventListener('click', () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!";
  let password = "";
  for (let i = 0; i < 12; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById('generatedPassword').value = password;
});

document.getElementById('checkInput').addEventListener('input', (e) => {
  const val = e.target.value;
  const output = document.getElementById('strengthOutput');

  if (val.length === 0) {
    output.textContent = "Strength: Enter password";
    output.style.color = "#94a3b8";
    return;
  }

  let score = 0;
  if (val.length >= 8) score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[@#$%&*!]/.test(val)) score++;

  if (score <= 1) {
    output.textContent = "Strength: Weak ❌";
    output.style.color = "#ef4444";
  } else if (score === 2 || score === 3) {
    output.textContent = "Strength: Medium ⚠️";
    output.style.color = "#f59e0b";
  } else {
    output.textContent = "Strength: Strong 🛡️";
    output.style.color = "#22c55e";
  }
});