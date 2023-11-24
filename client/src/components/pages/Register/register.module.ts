export function createCookie(name, value, daysToExpire) {
    const expires = new Date();
    expires.setTime(expires.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;Samesite=Lax`;
  }
  