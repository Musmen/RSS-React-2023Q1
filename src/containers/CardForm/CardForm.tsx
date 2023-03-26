import './CardForm.css';

import React, { Component, FormEvent } from 'react';

import { getRangeValidationErrorMessage, getTodayDateISOString } from './CardForm.helpers';

import {
  INPUT_DATE_FIELD_NAME,
  TYPE_SELECT_OPTIONS,
  VALIDATION_ERRORS_MESSAGES,
} from './CardForm.constants';

import { DEFAULT_STATE, Props, State } from './CardForm.models';
import { BigCardType } from '../../models/card';

class CardForm extends Component<Props, State> {
  state: State = { ...DEFAULT_STATE };

  form = React.createRef<HTMLFormElement>();
  author = React.createRef<HTMLInputElement>();
  title = React.createRef<HTMLInputElement>();
  date = React.createRef<HTMLInputElement>();
  type = React.createRef<HTMLSelectElement>();
  responsibility = React.createRef<HTMLInputElement>();
  genderMale = React.createRef<HTMLInputElement>();
  genderFemale = React.createRef<HTMLInputElement>();
  file = React.createRef<HTMLInputElement>();

  formFieldsRefsToValidate = [
    this.author,
    this.title,
    this.date,
    this.responsibility,
    this.file,
    this.type,
    this.genderMale,
    this.genderFemale,
  ];

  validityErrorHandler: React.FormEventHandler<HTMLInputElement | HTMLSelectElement> = (event) => {
    const { name } = event.currentTarget;

    if (event.currentTarget.validity.valueMissing) {
      this.setState((prevState) => ({
        ...prevState,
        validationErrorsMessages: {
          ...prevState.validationErrorsMessages,
          [name]: VALIDATION_ERRORS_MESSAGES.REQUIRED,
        },
      }));

      return;
    }

    if (event.currentTarget.name === INPUT_DATE_FIELD_NAME) {
      this.setState((prevState) => ({
        ...prevState,
        validationErrorsMessages: {
          ...prevState.validationErrorsMessages,
          [name]: VALIDATION_ERRORS_MESSAGES.DATE,
        },
      }));

      return;
    }

    const { minLength, maxLength } = event.currentTarget as HTMLInputElement;
    const rangeErrorMessage = getRangeValidationErrorMessage(minLength, maxLength);

    this.setState((prevState) => ({
      ...prevState,
      validationErrorsMessages: {
        ...prevState.validationErrorsMessages,
        [name]: rangeErrorMessage,
      },
    }));
  };

  clearErrors = () => {
    this.setState((prevState: State) => ({
      ...prevState,
      validationErrorsMessages: DEFAULT_STATE.validationErrorsMessages,
    }));
  };

  checkIsFormValid = () =>
    !this.formFieldsRefsToValidate
      .map((formFieldRef) => formFieldRef.current?.checkValidity())
      .some((formFieldValidationResult) => !formFieldValidationResult);

  getCheckedGender = () =>
    this.genderMale.current?.checked
      ? this.genderMale.current?.value
      : this.genderFemale.current?.value;

  getNewCard: () => BigCardType = () => {
    const imageFile = this.file?.current?.files && this.file.current.files[0];
    const imageBlob = new Blob([imageFile || '']);

    return {
      author: this.author.current?.value || '',
      authorGender: this.getCheckedGender(),
      title: this.title.current?.value || '',
      date: this.date.current?.value || '',
      type: this.type.current?.value || '',
      imgSrc: URL.createObjectURL(imageBlob),
      responsibility: Boolean(this.responsibility.current?.value) || false,
    };
  };

  resetForm = () => {
    this.setState({ ...DEFAULT_STATE });
  };

  cardFormSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    const { addCard, showMessage } = this.props;

    this.clearErrors();
    if (!this.checkIsFormValid()) return;

    const newCard = this.getNewCard();
    addCard(newCard);
    showMessage();

    this.form.current?.reset();
    this.resetForm();
  };

  render() {
    const { validationErrorsMessages } = this.state;
    const { validityErrorHandler, cardFormSubmitHandler, resetForm } = this;
    const today = getTodayDateISOString();

    return (
      <form
        className="CardForm"
        name="card-form"
        onSubmit={cardFormSubmitHandler}
        onReset={resetForm}
        noValidate
        ref={this.form}
      >
        <fieldset className="CardForm-fieldset">
          <legend className="CardForm-legend">Create new image card</legend>

          <div className="form-two-columns-container">
            <div className="CardForm-field input-container">
              <label className="CardForm-label input-label">
                Image title:
                <input
                  className="CardForm-input title-input input"
                  name="title"
                  type="text"
                  placeholder="Input title, please"
                  ref={this.title}
                  onInvalid={validityErrorHandler}
                  minLength={3}
                  maxLength={20}
                  required
                />
              </label>
              <span className="CardForm-validation-error-message">
                {validationErrorsMessages.title}
              </span>
            </div>

            <div className="CardForm-field input-container">
              <label className="CardForm-label input-label">
                Image author name:
                <input
                  className="CardForm-input author-input input"
                  name="author"
                  type="text"
                  placeholder="Input author name, please"
                  ref={this.author}
                  onInvalid={validityErrorHandler}
                  minLength={3}
                  maxLength={20}
                  required
                />
              </label>
              <span className="CardForm-validation-error-message">
                {validationErrorsMessages.author}
              </span>
            </div>
          </div>

          <div className="form-two-columns-container">
            <div className="CardForm-field input-container">
              <label className="CardForm-label input-label">
                Image creation date:
                <input
                  className="CardForm-input date-input input"
                  name="date"
                  type="date"
                  ref={this.date}
                  onInvalid={validityErrorHandler}
                  max={today}
                  required
                />
              </label>
              <span className="CardForm-validation-error-message">
                {validationErrorsMessages.date}
              </span>
            </div>

            <div className="CardForm-field select-container">
              <label className="CardForm-label select-label">
                Image type:
                <select
                  className="CardForm-select type-select select"
                  name="type"
                  defaultValue=""
                  ref={this.type}
                  onInvalid={validityErrorHandler}
                  required
                >
                  <option value="" disabled>
                    Select image type
                  </option>
                  {TYPE_SELECT_OPTIONS.map(({ value, description }) => (
                    <option
                      className="CardForm-option type-option"
                      value={value}
                      key={`${value}-${description}`}
                    >
                      {description}
                    </option>
                  ))}
                </select>
              </label>
              <span className="CardForm-validation-error-message">
                {validationErrorsMessages.type}
              </span>
            </div>
          </div>

          <div className="form-two-columns-container">
            <div className="CardForm-field input-container CardForm-field__responsibility">
              <div className="CardForm-container__responsibility">
                <label className="CardForm-label input-label">
                  <span>Do you agree with responsibility?:</span>
                  <input
                    className="CardForm-checkbox responsibility-checkbox"
                    name="responsibility"
                    type="checkbox"
                    ref={this.responsibility}
                    onInvalid={validityErrorHandler}
                    required
                  />
                </label>
              </div>
              <span className="CardForm-validation-error-message">
                {validationErrorsMessages.responsibility}
              </span>
            </div>

            <div className="CardForm-field CardForm-field__gender">
              <div className="switcher">
                <legend className="switcher__legend">Image author gender: </legend>
                <input
                  className="switcher__input"
                  id="male"
                  name="gender"
                  type="radio"
                  ref={this.genderMale}
                  value="male"
                  onInvalid={validityErrorHandler}
                  required
                />
                <label className="switcher__label" htmlFor="male">
                  male
                </label>
                <input
                  className="switcher__input"
                  id="female"
                  name="gender"
                  type="radio"
                  ref={this.genderFemale}
                  value="female"
                  onInvalid={validityErrorHandler}
                  required
                />
                <label className="switcher__label" htmlFor="female">
                  female
                </label>
              </div>
              <span className="CardForm-validation-error-message">
                {validationErrorsMessages.gender}
              </span>
            </div>
          </div>

          <div className="CardForm-field input-container">
            <div className="CardForm-container__file">
              <label className="CardForm-label CardForm-label_file input-label">
                <span>Upload this image:</span>
                <input
                  className="CardForm-input file-input input"
                  name="file"
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  ref={this.file}
                  onInvalid={validityErrorHandler}
                  required
                />
              </label>
            </div>
            <span className="CardForm-validation-error-message">
              {validationErrorsMessages.file}
            </span>
          </div>
        </fieldset>

        <fieldset className="CardForm-fieldset controls-fieldset">
          <button className="CardForm-button button__submit form-button" type="submit">
            create card
          </button>
          <button className="CardForm-button button__reset form-button" type="reset">
            reset form
          </button>
        </fieldset>
      </form>
    );
  }
}

export default CardForm;
