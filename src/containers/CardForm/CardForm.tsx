import './CardForm.css';

import React, { useCallback, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import ToolTip from '../../components/ToolTip/ToolTip';

import { getNewCard, getTodayDateISOString } from './CardForm.helpers';
const today = getTodayDateISOString();

import {
  INPUT_VALUE_LENGTH,
  TYPE_SELECT_OPTIONS,
  VALIDATION_ERRORS_MESSAGES,
} from './CardForm.constants';

import { DEFAULT_STATE, CardFormProps, CardFormState } from './CardForm.models';

function CardForm(props: CardFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<CardFormState>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: DEFAULT_STATE,
  });

  const resetForm = useCallback(() => reset(DEFAULT_STATE), [reset]);

  useEffect(() => {
    if (isSubmitSuccessful) resetForm();
  }, [isSubmitSuccessful, resetForm]);

  const cardFormSubmitHandler: SubmitHandler<CardFormState> = useCallback(
    (formData: CardFormState) => {
      const newCard = getNewCard(formData);
      const { addCard, renderMessage } = props;
      addCard(newCard);
      renderMessage();
    },
    [props]
  );

  return (
    <form
      className="CardForm"
      name="card-form"
      onSubmit={handleSubmit(cardFormSubmitHandler)}
      onReset={resetForm}
      noValidate
    >
      <fieldset className="CardForm-fieldset">
        <legend className="CardForm-legend">Create new image card</legend>

        <div className="form-two-columns-container">
          <div className="CardForm-field input-container">
            <label className="CardForm-label input-label">
              Image title:
              <input
                className="CardForm-input title-input input"
                placeholder="Input title, please"
                {...register('imageTitle', {
                  required: VALIDATION_ERRORS_MESSAGES.REQUIRED,
                  minLength: {
                    value: INPUT_VALUE_LENGTH.MIN,
                    message: VALIDATION_ERRORS_MESSAGES.LENGTH,
                  },
                  maxLength: {
                    value: INPUT_VALUE_LENGTH.MAX,
                    message: VALIDATION_ERRORS_MESSAGES.LENGTH,
                  },
                })}
              />
            </label>
            <ToolTip
              className="CardForm-validation-error-message"
              message={errors.imageTitle?.message}
            />
          </div>

          <div className="CardForm-field input-container">
            <label className="CardForm-label input-label">
              Image author name:
              <input
                className="CardForm-input author-input input"
                placeholder="Input author name, please"
                {...register('author', {
                  required: VALIDATION_ERRORS_MESSAGES.REQUIRED,
                  minLength: {
                    value: INPUT_VALUE_LENGTH.MIN,
                    message: VALIDATION_ERRORS_MESSAGES.LENGTH,
                  },
                  maxLength: {
                    value: INPUT_VALUE_LENGTH.MAX,
                    message: VALIDATION_ERRORS_MESSAGES.LENGTH,
                  },
                })}
              />
            </label>
            <ToolTip
              className="CardForm-validation-error-message"
              message={errors.author?.message}
            />
          </div>
        </div>

        <div className="form-two-columns-container">
          <div className="CardForm-field input-container">
            <label className="CardForm-label input-label">
              Image creation date:
              <input
                className="CardForm-input date-input input"
                type="date"
                max={today}
                {...register('date', {
                  required: VALIDATION_ERRORS_MESSAGES.REQUIRED,
                  max: {
                    value: today,
                    message: VALIDATION_ERRORS_MESSAGES.DATE,
                  },
                })}
              />
            </label>
            <ToolTip className="CardForm-validation-error-message" message={errors.date?.message} />
          </div>

          <div className="CardForm-field select-container">
            <label className="CardForm-label select-label">
              Image type:
              <select
                className="CardForm-select type-select select"
                {...register('imageType', { required: VALIDATION_ERRORS_MESSAGES.REQUIRED })}
              >
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
              message={errors.imageType?.message}
            />
          </div>
        </div>

        <div className="form-two-columns-container">
          <div className="CardForm-field input-container CardForm-field__responsibility">
            <label className="CardForm-label input-label">
              <span>Do you agree with responsibility?:</span>
              <input
                className="CardForm-checkbox responsibility-checkbox"
                type="checkbox"
                {...register('responsibility', { required: VALIDATION_ERRORS_MESSAGES.REQUIRED })}
              />
            </label>
            <ToolTip
              className="CardForm-validation-error-message"
              message={errors.responsibility?.message}
            />
          </div>

          <div className="CardForm-field CardForm-field__gender">
            <div className="switcher">
              <legend className="switcher__legend">Image author gender: </legend>
              <input
                className="switcher__input"
                id="male"
                type="radio"
                value="male"
                {...register('gender', { required: VALIDATION_ERRORS_MESSAGES.REQUIRED })}
              />
              <label className="switcher__label" htmlFor="male">
                male
              </label>
              <input
                className="switcher__input"
                id="female"
                type="radio"
                value="female"
                {...register('gender', { required: VALIDATION_ERRORS_MESSAGES.REQUIRED })}
              />
              <label className="switcher__label" htmlFor="female">
                female
              </label>
            </div>
            <ToolTip
              className="CardForm-validation-error-message"
              message={errors.gender?.message}
            />
          </div>
        </div>

        <div className="CardForm-field input-container">
          <div className="CardForm-container__file">
            <label className="CardForm-label CardForm-label_file input-label">
              <span>Upload this image:</span>
              <input
                className="CardForm-input file-input input"
                type="file"
                accept=".jpg, .jpeg, .png"
                {...register('file', { required: VALIDATION_ERRORS_MESSAGES.REQUIRED })}
              />
            </label>
          </div>
          <ToolTip className="CardForm-validation-error-message" message={errors.file?.message} />
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

export default CardForm;
