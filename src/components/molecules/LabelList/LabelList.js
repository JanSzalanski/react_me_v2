import React, { Fragment } from 'react';
import Label from '../../atoms/Label/Label';
import Card from '../Card/Card';

const LabelList = (props) => {
  return (
    <>
      {props.items.map((record, index) => {
        return (
          <React.Fragment key={record.path}>
            <Label
              key={record.title}
              htmlFor={`s${index + 1}`}
              id={`slide${index + 1}`}
              name={`slide${index + 1}`}
            >
              <Card
                path={record.path}
                date={record.date}
                title={record.title}
                content={record.content}
              ></Card>
            </Label>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default LabelList;
