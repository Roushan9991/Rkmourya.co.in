const url = 'https://formsubmit.co/ajax/rkmourya999@gmail.com';
const body = new URLSearchParams();
body.append('name', 'Test');
body.append('email', 'test@example.com');
body.append('_subject', 'Quote Request from Website');
body.append('_captcha', 'false');
body.append('_next', 'http://localhost:3000');

(async () => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body,
    });
    console.log('status', res.status);
    console.log('ok', res.ok);
    const text = await res.text();
    console.log('body', text);
  } catch (error) {
    console.error('error', error);
  }
})();
