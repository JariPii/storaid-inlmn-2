export function capitalizeFirstLetter(str: string) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function separateEmail(str: string) {
  const [email, ...rest] = str.split(' ');
  return { email, body: rest.join(' ') };
}

export function returnMessages(str: string) {
  if (!str) return { heading: '', body: '' };

  if (str.includes('@')) {
    const [email, ...rest] = str.split(' ');
    return {
      heading: `${email} `,
      body: rest.join(' '),
    };
  }

  const sentences = str.split('. ').filter(Boolean);

  if (sentences.length > 1) {
    const heading = sentences[0].endsWith('.')
      ? sentences[0]
      : `${capitalizeFirstLetter(sentences[0])}`;
    const body = sentences.slice(1).join('. ');
    return { heading, body };
  }

  return { heading: '', body: str };
}
