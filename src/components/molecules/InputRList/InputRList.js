import React from 'react';
import InputR from '../../atoms/InputR/InputR';
import classes from './InputRList.module.css';

const InputRList = (props) => {
  return (
    <>
      {props.items.map((record, index) => {
        return (
          <div key={record.path} className={classes.wrapper}>
            {index > 0 && index + 1 < props.items.length && (
              <InputR name="slider" id={`s${index + 1}`}></InputR>
            )}
            {index === 0 && (
              <InputR className="first" name="slider" id={`s${index + 1}`} defaultChecked></InputR>
            )}

            {index + 1 === props.items.length && (
              <InputR className="last" name="slider" id={`s${index + 1}`}></InputR>
            )}
          </div>
        );
      })}
    </>
  );
};

export default InputRList;
