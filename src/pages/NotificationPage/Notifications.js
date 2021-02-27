import React, { useEffect, useState } from "react";
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

const Notifications = (props) => {
  const [n1, setN1] = useState(false);
  const [n2, setN2] = useState(false);
  const [n3, setN3] = useState(false);
  const [n4, setN4] = useState(false);
  const [n5, setN5] = useState(false);
  const [n6, setN6] = useState(false);



  useEffect(() => {
    setTimeout(() => {
      setN1(true)
    },5000)
  },[])

  return (
    <div className="page-container">
      <div className="mb-3">
        <FieldSet legend="Notifications">
          <div className="row-container">
            <div className="component-discription">
              <Notification show={n1}  toggle={setN1}>
                Notification msg
              </Notification>
              <Button onClick={() => setN1(true)}>Notification</Button>
              <div className="discription">
                <pre>{` <Notification show={n1} toggle={setN1}>
                Notification msg
              </Notification>`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <Notification show={n2} toggle={setN2} color="danger">
                Danger Notification
              </Notification>
              <Button color="danger" onClick={() => setN2(true)}>
                danger Notification
              </Button>
              <div className="discription">
                <pre>{`<Notification show={n2} toggle={setN2} color="danger">
                Danger Notification
              </Notification>`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <SaveNotification show={n3} toggle={setN3} />
              <Button onClick={() => setN3(true)}>SaveNotification</Button>
              <div className="discription">
                <pre>{` <SaveNotification show={n3} toggle={setN3} />`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <UpdateNotification show={n4} toggle={setN4} />
              <Button color="secondary" onClick={() => setN4(true)}>
                UpdateNotification
              </Button>
              <div className="discription">
                <pre>{` <UpdateNotification show={n3} toggle={setN3} />`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <DeleteNotification show={n5} toggle={setN5} />
              <Button color="danger" onClick={() => setN5(true)}>
                DeleteNotification
              </Button>
              <div className="discription">
                <pre>{` <DeleteNotification show={n3} toggle={setN3} />`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <WarningNotification
                show={n6}
                toggle={setN6}
                msg="Warning Message"
              />
              <Button color="close" onClick={() => setN6(true)}>
                WarningNotification
              </Button>
              <div className="discription">
                <pre>{` <WarningNotification show={n3} toggle={setN3} />`}</pre>
              </div>
            </div>
          </div>
        </FieldSet>
      </div>
    </div>
  );
};

Notifications.propTypes = {};

export default Notifications;
