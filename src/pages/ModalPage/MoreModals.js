import React, { useState } from "react";
import { ReactComponent as PlusIcon } from "../../Icons/Basic/plus.svg";
import FieldSet from "../../master/component/FieldSet";
import { FormModal, DeleteModal, WarningModal } from "../../component/Modal";
import { Button } from "../../component/Button";

const MoreModal = (props) => {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  return (
    <div className="mb-3">
      <FieldSet legend="Modals">
        <div className="row-container">
          <div className="component-discription">
            <FormModal
              onClick={(e) => console.log(e)}
              isLoading={false}
              firstBtn="Save"
              secondBtn="More"
              isSecondLoading={false}
              onSecondClick={(e) => console.log(e)}
              open={modal}
              toggleOpen={setModal}
              title="FormModal"
              icon={<PlusIcon />}
            >
              Form modal Data
            </FormModal>
            <Button onClick={() => setModal(true)}>FormModal</Button>
            <div className="discription">
              <pre>{`<FormModal
              onClick
              isLoading={false}
              firstBtn="Save"
              secondBtn="More"
              isSecondLoading={false}
              onSecondClick
              open={modal}
              toggleOpen={setModal}
              title="FormModal"
              icon={<PlusIcon />}
            >
              Form modal Data
            </FormModal>`}</pre>
            </div>
          </div>
          <div className="component-discription">
            <DeleteModal
              toggleOpen={setModal2}
              open={modal2}
              isLoading={false}
              onClick={(e) => console.log(e)}
            />

            <Button color="danger" onClick={() => setModal2(true)}>
              DeleteModal
            </Button>
            <div className="discription">
              <pre>{`<DeleteModal
              toggleOpen={setModal2}
              open={modal2}
              isLoading={false}
              onClick
            />`}</pre>
            </div>
          </div>
          <div className="component-discription">
            <WarningModal
              toggleOpen={setModal3}
              open={modal3}
              isLoading={false}
              onClick={(e) => console.log(e)}
              msg="Warning msg"
            />
            <Button color="close" onClick={() => setModal3(true)}>
              WarningModal
            </Button>
            <div className="discription">
              <pre>{`<WarningModal
              toggleOpen={setModal3}
              open={modal3}
              isLoading={false}
              onClick
              msg="Warning msg"
            />`}</pre>
            </div>
          </div>
        </div>
      </FieldSet>
    </div>
  );
};

export default MoreModal;
