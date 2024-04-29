const lettersAndSpacesOnly = {
  rule: val => {
    const regexp = /^[-a-zA-Z\p{L}\s]+$/gu;
    const minuses = val.split("-").length - 1;
    return regexp.test(val) && minuses < 2;
  },
  translationId: "forms.validation.onlyLettersAndSpaces"
};

const lettersAndSingleSpaceOnly = {
  rule: val => {
    const regexp = /^([-a-zA-Z\p{L}]+\s)*[-a-zA-Z\p{L}]+$/u;
    const minuses = val.split("-").length - 1;
    return regexp.test(val) && minuses < 2;
  },
  translationId: "forms.validation.onlyLettersAndSingleSpace"
};

// https://stackoverflow.com/questions/8634139/phone-validation-regex
const phoneNumber = {
  rule: val => {
    const regexp = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/g;
    return regexp.test(val);
  },
  translationId: "forms.validation.phonenumber"
};

const alphanumeric = {
  rule: val => {
    const regexp = /^[-a-zA-Z0-9\p{L}\s]+$/g;
    return regexp.test(val);
  },
  translationId: "forms.validation.alphanumeric"
};

// email rule that is compliant with RFC2822
// https://regexr.com/2rhq7
// link to RFC: http://www.faqs.org/rfcs/rfc2822.html

// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

const emailFormat = {
  rule: val => {
    const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(val);
  },
  translationId: "forms.validation.onlyEmail"
};

// https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url/3809435#3809435
const weblinkFormat = {
  rule: val => {
    const regexp = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;
    return regexp.test(val);
  },
  translationId: "forms.validation.onlyWeb"
};

const linkedinUrlOnly = {
  rule: val => {
    const regexp = /(www)?(\.[-a-zA-Z])?(\.)?(linkedin\.com\/in\/)\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;
    return regexp.test(val);
  },
  translationId: "forms.validation.onlyLinkedin"
};

const fiveFilesOnly = {
  rule: val => Array.from(val).length <= 5,
  translationId: "forms.validation.onlyFiveFiles"
};

const fileExtensions = {
  rule: val => {
    const allowedExtensions = ["doc", "docx", "pdf", "docm", "ppt", "pptx", "pptxs"];

    return Array.from(val).every(file => {
      const fileExtension = file.name.split(".").pop();

      return allowedExtensions.includes(fileExtension);
    });
  },
  translationId: "forms.validation.fileTypes"
};

const filesize5MB = {
  rule: val =>
    !Array.from(val).some(({ size }) => {
      const maxAllowedSize = 5 * 1024 * 1024;
      return size >= maxAllowedSize;
    }),
  translationId: "form.validation.maxFilesize5MB"
};

const decimals = {
  rule: val => {
    const regexp = /^[0-9.,+\s]*$/g;
    return regexp.test(val);
  },
  translationId: "form.validation.decimals"
};

const max500chars = {
  rule: val => val.length <= 500,
  translationId: "form.validation.max500chars"
};

const max17chars = {
  rule: val => val.length <= 17,
  translationId: "form.validation.max17chars"
};

export {
  alphanumeric,
  decimals,
  emailFormat,
  fileExtensions,
  filesize5MB,
  fiveFilesOnly,
  lettersAndSingleSpaceOnly,
  lettersAndSpacesOnly,
  linkedinUrlOnly,
  max17chars,
  max500chars,
  phoneNumber,
  weblinkFormat
};
