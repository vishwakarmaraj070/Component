import React, { useState } from "react";
import PropTypes from "prop-types";
import FieldSet from "../../master/component/FieldSet";
import { Button } from "../../component/Button";
import {
  Notification,
  DeleteNotification,
  SaveNotification,
  UpdateNotification,
  WarningNotification,
} from "../../component/Notification";

const NotificationPosition = (props) => {
  const [n1, setN1] = useState(false);
  const [n2, setN2] = useState(false);
  const [n3, setN3] = useState(false);
  const [n4, setN4] = useState(false);
  const [n5, setN5] = useState(false);
  const [n6, setN6] = useState(false);

  return (
    <div className="page-container">
      <div className="mb-3">
        <FieldSet legend="Notification Position">
          <div className="row-container">
            <div className="component-discription">
              <Notification show={n1} toggle={setN1}>
                Notification msg
              </Notification>
              <Button onClick={() => setN1(true)}>default</Button>
              <div className="discription">
                <pre>{` <Notification show={n1} toggle={setN1}>
                Notification msg
              </Notification>`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <Notification
                show={n2}
                toggle={setN2}
                color="danger"
                position="top-left"
              >
                top-left
              </Notification>
              <Button color="danger" onClick={() => setN2(true)}>
                top-left
              </Button>
              <div className="discription">
                <pre>{`<Notification show={n2} toggle={setN2} color="danger" position="top-left">
                Danger Notification
              </Notification>`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <WarningNotification
                show={n3}
                toggle={setN3}
                position="bottom-left"
              />
              <Button color="close" onClick={() => setN3(true)}>
                bottom-left
              </Button>
              <div className="discription">
                <pre>{` <SaveNotification show={n3} toggle={setN3} position="bottom-left" />`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <UpdateNotification
                show={n4}
                toggle={setN4}
                position="bottom-right"
              />
              <Button color="secondary" onClick={() => setN4(true)}>
                bottom-right
              </Button>
              <div className="discription">
                <pre>{` <UpdateNotification show={n3} toggle={setN3} position="bottom-right"  />`}</pre>
              </div>
            </div>
          </div>
        </FieldSet>
      </div>
    </div>
  );
};

NotificationPosition.propTypes = {};

export default NotificationPosition;
