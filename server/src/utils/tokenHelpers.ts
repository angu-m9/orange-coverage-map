function parseTokenExpiration(expiration: string): number | null {
    const match = expiration.match(/(\d+)([hms])/);
    if (!match) return null;
  
    const [, amount, unit] = match;
    switch (unit) {
      case 'h': // horas
        return Number(amount) * 60 * 60 * 1000;
      case 'm': // minutos
        return Number(amount) * 60 * 1000;
      case 's': // segundos
        return Number(amount) * 1000;
      default:
        return null;
    }
  }
  
  export default parseTokenExpiration