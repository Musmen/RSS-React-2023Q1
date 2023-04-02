import './css/CardForm.css';

import React, { useCallback, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import CardFormFieldWrapper from './CardFormFieldWrapper/CardFormFieldWrapper';
import ErrorMessage from './ErrorMessage/ErrorMessage';

import { getNewCard, getTodayDateISOString } from './CardForm.helpers';
import { INPUT_OPTIONS, TYPE_SELECT_OPTIONS } from './CardForm.constants';
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
      name="cardForm"
      onSubmit={handleSubmit(cardFormSubmitHandler)}
      onReset={resetForm}
      noValidate
    >
      <fieldset className="CardForm-fieldset">
        <legend className="CardForm-legend">Create new image card</legend>
        <div className="form-two-columns-container">
          <CardFormFieldWrapper label="Image title:" errorMessage={errors.imageTitle?.message}>
            <input
              className="CardForm-input title-input input"
              placeholder="Input title, please"
              {...register('imageTitle', INPUT_OPTIONS.WITH_LENGTH_LIMITS)}
            />
          </CardFormFieldWrapper>

          <CardFormFieldWrapper label="Image author name" errorMessage={errors.author?.message}>
            <input
              className="CardForm-input author-input input"
              placeholder="Input author name, please"
              {...register('author', INPUT_OPTIONS.WITH_LENGTH_LIMITS)}
            />
          </CardFormFieldWrapper>
        </div>

        <div className="form-two-columns-container">
          <CardFormFieldWrapper label="Image creation date:" errorMessage={errors.date?.message}>
            <input
              data-testid="date-input"
              className="CardForm-input date-input input"
              type="date"
              max={getTodayDateISOString()}
              {...register('date', INPUT_OPTIONS.DATE)}
            />
          </CardFormFieldWrapper>

          <CardFormFieldWrapper
            label="Image type:"
            additionalClass="initial-cursor"
            errorMessage={errors.imageType?.message}
          >
            <select
              className="CardForm-select type-select select"
              {...register('imageType', INPUT_OPTIONS.REQUIRED)}
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
          </CardFormFieldWrapper>
        </div>

        <div className="form-two-columns-container">
          <CardFormFieldWrapper errorMessage={errors.responsibility?.message}>
            <span>Do you agree with responsibility?:</span>
            <input
              data-testid="responsibility-checkbox"
              className="CardForm-checkbox responsibility-checkbox"
              type="checkbox"
              {...register('responsibility', INPUT_OPTIONS.REQUIRED)}
            />
          </CardFormFieldWrapper>

          <div className="CardForm-field CardForm-field__gender">
            <div className="switcher">
              <legend className="switcher__legend">Image author gender: </legend>
              <input
                className="switcher__input"
                id="male"
                type="radio"
                value="male"
                {...register('gender', INPUT_OPTIONS.REQUIRED)}
              />
              <label className="switcher__label" htmlFor="male">
                male
              </label>
              <input
                className="switcher__input"
                id="female"
                type="radio"
                value="female"
                {...register('gender', INPUT_OPTIONS.REQUIRED)}
              />
              <label className="switcher__label" htmlFor="female">
                female
              </label>
            </div>
            <ErrorMessage errorMessage={errors.gender?.message} />
          </div>
        </div>

        <CardFormFieldWrapper
          additionalClass="CardForm-label_file"
          errorMessage={errors.file?.message}
        >
          <span>Upload this image:</span>
          <input
            data-testid="file-input"
            className="CardForm-input file-input input"
            type="file"
            accept=".jpg, .jpeg, .png"
            {...register('file', INPUT_OPTIONS.REQUIRED)}
          />
        </CardFormFieldWrapper>
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
