export const getCSRFToken = () => {
  const csrfToken = document.cookie.split(';').find(cookie => cookie.trim().startsWith('XSRF-TOKEN='));
  if (csrfToken) {
    return csrfToken.split('=')[1];
  }
  const csrfMetaTag = document.querySelector('meta[name="csrf-token"]');
  if (csrfMetaTag) {
    return csrfMetaTag.getAttribute('content');
  }
  return null;
};
