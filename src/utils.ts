export const normalizePhone = (number:string):string => {

  const digitsOnly = number.replace(/\D/g, '');

  if (digitsOnly.length === 11) {
    if (digitsOnly.startsWith('8')) {
      return '+7' + digitsOnly.slice(1);
    }
    if (digitsOnly.startsWith('7')) {
      return '+' + digitsOnly;
    }
  }

  if (digitsOnly.length === 10) {
    return '+7' + digitsOnly;
  }

  return number;

}
