const clearInputError = formId => {
  let form;
  let inputs;
  let selects;
  if (formId) {
    form = formId;
  }

  if (form) {
    inputs = document.querySelectorAll(`#${form} input`);
    selects = document.querySelectorAll(`#${form} select`);
  }

  try {
    if (inputs) {
      inputs.forEach(input => {
        if (input.required) {
          input.focus();
          input.blur();
        }
      });
    }

    if (selects) {
      selects.forEach(select => {
        if (select.required) {
          select.focus();
          select.blur();
        }
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export default clearInputError;
