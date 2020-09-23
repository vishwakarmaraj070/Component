import React, { useState } from "react";
import { ReactComponent as PlusIcon } from "../../Icons/Basic/plus.svg";
import FieldSet from "../../master/component/FieldSet";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  WiderModal,
  NarrowModal,
} from "../../component/Modal";
import {
  Button,
  CloseButton,
  SubmitButton,
  MoreButton,
} from "../../component/Button";
import { Input } from "../../component/Input";

const Modals = (props) => {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);
  const [modal6, setModal6] = useState(false);
  return (
    <div className="mb-3">
      <FieldSet legend="Modals">
        <div className="row-container">
          <div className="component-discription">
            <Modal open={modal}>
              <ModalBody>this is the Modal with body</ModalBody>
              <CloseButton onClick={() => setModal(false)} />
            </Modal>
            <Button onClick={() => setModal(true)}>Modal</Button>
            <div className="discription">
              <pre>{`<Modal open={modal}>
          <ModalBody>this is the Modal with body</ModalBody>
          <CloseButton onClick={() => setModal(false)} />
        </Modal>`}</pre>
            </div>
          </div>
          <div className="component-discription">
            <Modal open={modal2}>
              <ModalHeader
                title="modal"
                icon={<PlusIcon />}
                formId="checkform"
                toggleOpen={setModal2}
              />
              <ModalBody>
                this is the Modal with body Header
                <form id="checkform" noValidate>
                  <Input required />
                </form>
              </ModalBody>
            </Modal>
            <Button color="secondary" onClick={() => setModal2(true)}>
              Modal With Header
            </Button>
            <div className="discription">
              <pre>{`<Modal open={modal2}>
          <ModalHeader
            title="modal"
            icon={<PlusIcon />}
            toggleOpen={setModal2}
          />
          <ModalBody>this is the Modal with body</ModalBody>
        </Modal>`}</pre>
            </div>
          </div>
          <div className="component-discription">
            <Modal open={modal3}>
              <ModalHeader
                title="modal"
                icon={<PlusIcon />}
                toggleOpen={setModal3}
              />
              <ModalBody>this is the Modal with body Header Footer</ModalBody>
              <ModalFooter right>
                <MoreButton />
                <SubmitButton />
              </ModalFooter>
            </Modal>
            <Button color="danger" onClick={() => setModal3(true)}>
              Modal With Header Footer
            </Button>
            <div className="discription">
              <pre>{`<Modal open={modal3}>
          <ModalHeader
            title="modal"
            icon={<PlusIcon />}
            toggleOpen={setModal3}
          />
          <ModalBody>this is the Modal with body Header Footer</ModalBody>
          <ModalFooter right>
            <MoreButton />
            <SubmitButton />
          </ModalFooter>
        </Modal>`}</pre>
            </div>
          </div>
          <div className="component-discription">
            <Modal open={modal4}>
              <ModalHeader
                title="modal allowClose"
                allowClose={false}
                icon={<PlusIcon />}
                toggleOpen={setModal4}
              />
              <ModalBody>this is the Modal with body Header Footer</ModalBody>
              <ModalFooter right>
                <SubmitButton />
              </ModalFooter>
            </Modal>
            <Button color="close" onClick={() => setModal4(true)}>
              Modal With allowClose
            </Button>
            <div className="discription">
              <pre>{`<Modal open={modal3}>
          <ModalHeader
            title="modal allowClose"
            allowClose={false}
            icon={<PlusIcon />}
            toggleOpen={setModal3}
          />
          <ModalBody>this is the Modal with body Header Footer</ModalBody>
          <ModalFooter right>
            <SubmitButton />
          </ModalFooter>
        </Modal>`}</pre>
            </div>
          </div>
          <div className="component-discription">
            <WiderModal open={modal5}>
              <ModalHeader
                title="WiderModal"
                icon={<PlusIcon />}
                toggleOpen={setModal5}
              />
              <ModalBody>
                this is the WiderModal with body Header Footer
              </ModalBody>
              <ModalFooter right>
                <SubmitButton />
              </ModalFooter>
            </WiderModal>
            <Button onClick={() => setModal5(true)}>WiderModal</Button>
            <div className="discription">
              <pre>{`<WiderModal open={modal9}>
          <ModalHeader
            title="WiderModal"
            icon={<PlusIcon />}
            toggleOpen={setModal9}
          />
          <ModalBody>
            this is the WiderModal with body Header Footer
          </ModalBody>
          <ModalFooter right>
            <SubmitButton />
          </ModalFooter>
        </WiderModal>`}</pre>
            </div>
          </div>
          <div className="component-discription">
            <NarrowModal open={modal6}>
              <ModalHeader
                title="NarrowModal"
                icon={<PlusIcon />}
                toggleOpen={setModal6}
              />
              <ModalBody>
                this is the NarrowModal with body Header Footer
              </ModalBody>
              <ModalFooter right>
                <SubmitButton />
              </ModalFooter>
            </NarrowModal>
            <Button color="secondary" onClick={() => setModal6(true)}>
              NarrowModal
            </Button>
            <div className="discription">
              <pre>{`<WiderModal open={modal9}>
          <ModalHeader
            title="WiderModal"
            icon={<PlusIcon />}
            toggleOpen={setModal9}
          />
          <ModalBody>
            this is the WiderModal with body Header Footer
          </ModalBody>
          <ModalFooter right>
            <SubmitButton />
          </ModalFooter>
        </WiderModal>`}</pre>
            </div>
          </div>
        </div>
      </FieldSet>
    </div>
  );
};

Modals.propTypes = {};

export default Modals;
