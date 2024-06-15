import React, { useReducer, useState, useRef, useContext } from "react";
import styles from "./JournalForm.module.css";
import Button from "../Button/Button";
import classNames from "classnames";
import { useEffect } from "react";
import { INIT_STATE, formReduser } from "./JournalForm.state";
import Input from "../Input/Input";

const JournalForm = ({ onSubmit, data, onDelete }) => {
  const [formState, dispatchForm] = useReducer(formReduser, INIT_STATE);
  const { isValid, isFormReadyToSubmit, values } = formState;
  const titleRef = useRef();
  const dateRef = useRef();
  const postRef = useRef();

  const focusError = (isValid) => {
    switch (true) {
      case !isValid.title:
        titleRef.current.focus();
        break;
      case !isValid.date:
        dateRef.current.focus();
        break;
      case !isValid.post:
        postRef.current.focus();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (data) {
      dispatchForm({ type: "SET_VALUE", payload: { ...data } });
    }
    if (!data) {
      dispatchForm({ type: "CLEAR" });
    }
  }, [data]);

  useEffect(() => {
    let timerId;
    if (!isValid.date || !isValid.post || !isValid.title) {
      focusError(isValid);
      timerId = setTimeout(() => {
        dispatchForm({ type: "RESET_VALIDITY" });
      }, 2000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [isValid]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onSubmit(values);
      dispatchForm({ type: "CLEAR" });
    }
  }, [isFormReadyToSubmit, values, onSubmit]);

  const addJournalItem = (e) => {
    e.preventDefault();
    dispatchForm({ type: "SUBMIT" });
  };

  const onChange = (e) => {
    dispatchForm({
      type: "SET_VALUE",
      payload: { [e.target.name]: e.target.value },
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatchForm({ type: "SUBMIT" });
  };

  const deleteJournalItem = () => {
    onDelete(data.id);
    dispatchForm({ type: "CLEAR" });
  };
  return (
    <form className={styles.journalForm} onSubmit={submitHandler} action="">
      <div className={styles["form-row"]}>
        <Input
          type="text"
          name="title"
          ref={titleRef}
          value={values.title}
          onChange={onChange}
          apperence="title"
          isValid={isValid.title}
        />
        {data?.id && (
          <button
            type="button"
            onClick={() => deleteJournalItem()}
            className="ease-in-out duration-300 w-14 h-14 rounded cursor-pointer hover:bg-amber-600 p-3 "
          >
            <img src="/Trash.svg" alt="delete" />
          </button>
        )}
      </div>
      <div className={styles["form-row"]}>
        <label htmlFor="date" className={styles["form-label"]}>
          <img
            width={18}
            height={18}
            src="./Calendar.svg"
            alt="Calendar icon"
          />
          <span>Дата</span>
        </label>
        <Input
          id="date"
          type="date"
          name="date"
          ref={dateRef}
          value={
            values.date ? new Date(values.date).toISOString().slice(0, 10) : ""
          }
          onChange={onChange}
          apperence="date"
          isValid={isValid.date}
        />
      </div>
      <div className={styles["form-row"]}>
        <label htmlFor="tag" className={styles["form-label"]}>
          <img width={18} height={18} src="./Info.svg" alt="Tags icon" />
          <span>Метки</span>
        </label>
        <Input
          value={values.tag}
          onChange={onChange}
          id="tag"
          type="text"
          name="tag"
          apperence="tag"
        />
      </div>

      <textarea
        name="post"
        id=""
        cols="30"
        rows="10"
        ref={postRef}
        value={values.post}
        onChange={onChange}
        apperence="post"
        className={classNames(styles["input"], styles["text"], {
          [styles["invalid"]]: !isValid.post,
        })}
      ></textarea>
      <Button>Save</Button>
    </form>
  );
};

export default JournalForm;
