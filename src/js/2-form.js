const feedbackForm = document.querySelector('.feedback-form');
let data = {};

const fillFormFields = form => {
  const formDataFromLS = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  if (formDataFromLS === null) {
    return;
  }

  for (const key in formDataFromLS) {
    if (formDataFromLS.hasOwnProperty(key)) {
      form.elements[key].value = formDataFromLS[key];
      data[key] = formDataFromLS[key];
    }
  }
};

fillFormFields(feedbackForm);

const onFormFieldChange = event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value.trim();

  data[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(data));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();
  if (Object.keys(data).length !== 2) {
    alert('Fill please all fields');

    return;
  }

  console.log(data);
  event.target.reset();
  localStorage.removeItem('feedback-form-state');
  data = {}
};

feedbackForm.addEventListener('input', onFormFieldChange);
feedbackForm.addEventListener('submit', onFeedbackFormSubmit);
