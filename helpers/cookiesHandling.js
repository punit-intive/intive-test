const getCookie = name => document.cookie.split(";").some(c => c.trim().startsWith(`${name}=`));

const deleteCookie = name => {
  if (getCookie(name)) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT`;
  }
};

const deleteMatchedCookie = (value, domain, path) => {
  const allCookies = document.cookie.split(";");
  const cookiesMatched = allCookies.filter(c => c.trim().includes(value));

  if (cookiesMatched?.length) {
    cookiesMatched.forEach(cookie => {
      const name = cookie.split("=")[0];

      document.cookie = `${name}=${path ? `;path=${path}` : ""}${domain ? `;domain=${domain}` : ""};expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    });
  }
};

export { deleteCookie, deleteMatchedCookie };
