import React, { useState, useEffect } from "react";

const withActivePage = OriginalComponent => {
  const NewComponent = props => {
    const [state, setState] = useState({
      activePageState: 0,
      dotCount: 0
    });

    const {
      className,
      vertical,
      num,
      stepclass,
      id,
      activePage,
      color,
      ...attributes
    } = props;
    const { dotCount, activePageState } = state;

    useEffect(() => {
      let steps;
      if (id) {
        steps = document.querySelector(`#${id} .step-container`);
      } else {
        steps = document.querySelector(`.r-stepper .step-container`);
      }
      setState({
        activePageState: activePage ? activePage - 1 : 0,
        dotCount: steps.childElementCount
      });
      if (id) {
        const stepAll = document.querySelectorAll(`#${id} .r-step`);
        stepAll.forEach(step => {
          step.classList.remove("active-dot-page");
        });
      } else {
        const stepAll = document.querySelectorAll(`.r-stepper .r-step`);
        stepAll.forEach(step => {
          step.classList.remove("active-dot-page");
        });
      }
      const activeStep = steps.children[activePageState];
      activeStep.classList.add("active-dot-page");
    }, [activePage, activePageState, props, id]);

    return (
      <OriginalComponent
        className={className}
        dotCount={dotCount}
        stepclass={stepclass}
        id={id}
        num={num}
        color={color}
        activePage={activePageState}
        vertical={vertical}
        {...attributes}
      />
    );
  };

  return NewComponent;
};

export default withActivePage;
