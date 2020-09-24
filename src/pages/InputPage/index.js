import React from "react";
import FieldSet from "../../master/component/FieldSet";
import { Input } from "../../component/Input";

const index = (props) => {
  return (
    <div className="page-container">
      <div className="mb-3">
        <FieldSet legend="Inputs">
          <div className="row-container">
            <div className="component-discription">
              <Input size="sm" required />
              <Input required />
              <Input size="lg" required />
              <div className="discription">
                <pre>{`<Input size="sm" required />`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <Input size="sm" required error="Field required" />
              <Input required error="Field required" />
              <Input
                size="lg"
                required
                className="input2"
                error="Field required"
              />
              <div className="discription">
                <pre>{` <Input
                size="sm"
                required
                className="input2"
                error="Field required"
              />`}</pre>
              </div>
            </div>
          </div>
        </FieldSet>
      </div>
    </div>
  );
};

index.propTypes = {};

export default index;
