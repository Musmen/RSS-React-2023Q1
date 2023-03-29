import './CardForm.css';

import React, { Component, FormEvent } from 'react';
import ToolTip from '../../components/ToolTip/ToolTip';

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

  private updateValidationErrorMessageState(name: string, errorMessage: string) {
    this.setState((prevState) => ({
      validationErrorsMessages: {
        ...prevState.validationErrorsMessages,
        [name]: errorMessage,
      },
    }));
  }

  validityErrorHandler: React.FormEventHandler<HTMLInputElement | HTMLSelectElement> = (event) => {
    const { name } = event.currentTarget;

    if (event.currentTarget.validity.valueMissing) {
      this.updateValidationErrorMessageState(name, VALIDATION_ERRORS_MESSAGES.REQUIRED);
      return;
    }

    if (event.currentTarget.name === INPUT_DATE_FIELD_NAME) {
      this.updateValidationErrorMessageState(name, VALIDATION_ERRORS_MESSAGES.DATE);
      return;
    }

    const { minLength, maxLength } = event.currentTarget as HTMLInputElement;
    const rangeErrorMessage = getRangeValidationErrorMessage(minLength, maxLength);
    this.updateValidationErrorMessageState(name, rangeErrorMessage);
  };

  clearErrors = () => {
    this.setState({ validationErrorsMessages: DEFAULT_STATE.validationErrorsMessages });
  };

  checkIsFormValid = () => {
    const { author, imageTitle, date, responsibility, file, imageType } = this.form.current!;

    return [author, imageTitle, date, responsibility, file, imageType]
      .map((formFieldRef) => formFieldRef.checkValidity())
      .every((formFieldValidationResult) => formFieldValidationResult);
  };

  checkIsGenderValid = () => {
    const [maleInput, femaleInput] = this.form.current?.gender;

    if (!maleInput.checked && !femaleInput.checked) {
      this.setState((prevState) => ({
        validationErrorsMessages: {
          ...prevState.validationErrorsMessages,
          gender: VALIDATION_ERRORS_MESSAGES.REQUIRED,
        },
      }));
      return false;
    }

    return true;
  };

  getCheckedGender = () => {
    const [maleInput, femaleInput] = this.form.current?.gender;
    return maleInput.checked ? maleInput.value : femaleInput.value;
  };

  getNewCard: () => BigCardType = () => {
    const { file, author, imageTitle, date, imageType, responsibility } = this.form.current!;

    const imageFile = file.files && file.files[0];
    const imageBlob = new Blob([imageFile || '']);

    return {
      author: author.value || '',
      authorGender: this.getCheckedGender(),
      title: imageTitle.value || '',
      date: date.value || '',
      type: imageType.value || '',
      imgSrc: URL.createObjectURL(imageBlob),
      responsibility: Boolean(responsibility.value) || false,
    };
  };

  resetForm = () => {
    this.setState({ ...DEFAULT_STATE });
  };

  cardFormSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    this.clearErrors();

    const isGenderValid = this.checkIsGenderValid();
    if (!this.checkIsFormValid() || !isGenderValid) return;

    const newCard = this.getNewCard();
    const { addCard, showMessage } = this.props;
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
                  name="imageTitle"
                  type="text"
                  placeholder="Input title, please"
                  onInvalid={validityErrorHandler}
                  minLength={3}
                  maxLength={20}
                  required
                />
              </label>
              <ToolTip
                className="CardForm-validation-error-message"
                message={validationErrorsMessages.imageTitle}
              />
            </div>

            <div className="CardForm-field input-container">
              <label className="CardForm-label input-label">
                Image author name:
                <input
                  className="CardForm-input author-input input"
                  name="author"
                  type="text"
                  placeholder="Input author name, please"
                  onInvalid={validityErrorHandler}
                  minLength={3}
                  maxLength={20}
                  required
                />
              </label>
              <ToolTip
                className="CardForm-validation-error-message"
                message={validationErrorsMessages.author}
              />
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
                  onInvalid={validityErrorHandler}
                  max={today}
                  required
                />
              </label>
              <ToolTip
                className="CardForm-validation-error-message"
                message={validationErrorsMessages.date}
              />
            </div>

            <div className="CardForm-field select-container">
              <label className="CardForm-label select-label">
                Image type:
                <select
                  className="CardForm-select type-select select"
                  name="imageType"
                  defaultValue=""
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
              <ToolTip
                className="CardForm-validation-error-message"
                message={validationErrorsMessages.imageType}
              />
            </div>
          </div>

          <div className="form-two-columns-container">
            <div className="CardForm-field input-container CardForm-field__responsibility">
              <label className="CardForm-label input-label">
                <span>Do you agree with responsibility?:</span>
                <input
                  className="CardForm-checkbox responsibility-checkbox"
                  name="responsibility"
                  type="checkbox"
                  onInvalid={validityErrorHandler}
                  required
                />
              </label>
              <ToolTip
                className="CardForm-validation-error-message"
                message={validationErrorsMessages.responsibility}
              />
            </div>

            <div className="CardForm-field CardForm-field__gender">
              <div className="switcher">
                <legend className="switcher__legend">Image author gender: </legend>
                <input
                  className="switcher__input"
                  id="male"
                  name="gender"
                  type="radio"
                  value="male"
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
                  value="female"
                  required
                />
                <label className="switcher__label" htmlFor="female">
                  female
                </label>
              </div>
              <ToolTip
                className="CardForm-validation-error-message"
                message={validationErrorsMessages.gender}
              />
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
                  onInvalid={validityErrorHandler}
                  required
                />
              </label>
            </div>
            <ToolTip
              className="CardForm-validation-error-message"
              message={validationErrorsMessages.file}
            />
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
