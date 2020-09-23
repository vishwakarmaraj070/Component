const checkOnSubmit = async (e, formId) => {
  e.preventDefault();
  let form;
  let errors = [];
  let SelectErrors = [];
  let inputs;
  let selects;
  if (formId) {
    form = formId;
  } else {
    form = e.target.id;
  }

  if (form) {
    inputs = document.querySelectorAll(`#${form} input`);
    selects = document.querySelectorAll(`#${form} select`);
  }
  // check required here
  try {
    if (inputs) {
      inputs.forEach((input, index) => {
        if (input.required) {
          if (!input.value) {
            input.focus();
            input.blur();
            errors.splice(index, 0, true);
          } else {
            if (input.getAttribute("error")) {
              errors.splice(index, 0, true);
            } else {
              errors.splice(index, 0, false);
            }
          }
        } else {
          if (input.getAttribute("error")) {
            errors.splice(index, 0, true);
          } else {
            errors.splice(index, 0, false);
          }
        }
      });
    }

    if (selects) {
      selects.forEach((select, index) => {
        if (select.required) {
          if (select.value === "-1") {
            select.focus();
            select.blur();
            SelectErrors.splice(index, 0, true);
          } else {
            if (select.getAttribute("error")) {
              SelectErrors.splice(index, 0, true);
            } else {
              SelectErrors.splice(index, 0, false);
            }
          }
        } else {
          if (select.getAttribute("error")) {
            SelectErrors.splice(index, 0, true);
          } else {
            SelectErrors.splice(index, 0, false);
          }
        }
      });
    }
    const isError = errors.indexOf(true);
    const selectErr = SelectErrors.indexOf(true);

    if (isError === -1 && selectErr === -1) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};

export default checkOnSubmit;
