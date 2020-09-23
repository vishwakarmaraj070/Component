import React, { useState } from "react";
import { ReactComponent as PlusIcon } from "../../Icons/Basic/plus.svg";
import FieldSet from "../../master/component/FieldSet";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "../../component/Modal";
import { Button, SubmitButton, MoreButton } from "../../component/Button";

const ModalPosition = (props) => {
  const [modal7, setModal7] = useState(false);
  const [modal8, setModal8] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);
  const [modal6, setModal6] = useState(false);
  return (
    <div className="mb-3">
      <FieldSet legend="Modals Position">
        <div className="row-container">
          <div className="component-discription">
            <Modal open={modal4}>
              <ModalHeader
                title="modal Default"
                icon={<PlusIcon />}
                toggleOpen={setModal4}
              />
              <ModalBody>this is the Modal with body Header Footer</ModalBody>
              <ModalFooter right>
                <SubmitButton />
              </ModalFooter>
            </Modal>
            <Button onClick={() => setModal4(true)}>Modal default</Button>
            <div className="discription">
              <pre>{`<Modal open={modal4}>
                <ModalHeader
                  title="modal "
                  icon={<PlusIcon />}
                  toggleOpen={setModal4}
                />
                <ModalBody>this is the Modal with body Header Footer</ModalBody>
                <ModalFooter right>
                  <SubmitButton />
                </ModalFooter>
              </Modal>`}</pre>
            </div>
          </div>
          <div className="component-discription">
            <Modal open={modal5} position="top-left">
              <ModalHeader
                title="modal top-left"
                icon={<PlusIcon />}
                toggleOpen={setModal5}
              />
              <ModalBody>this is the Modal with body Header Footer</ModalBody>
              <ModalFooter right>
                <SubmitButton />
              </ModalFooter>
            </Modal>
            <Button color="secondary" onClick={() => setModal5(true)}>
              Modal top-left
            </Button>
            <div className="discription">
              <pre>{`<Modal open={modal5} position="top-left">
                <ModalHeader
                  title="modal"
                  icon={<PlusIcon />}
                  toggleOpen={setModal5}
                />
                <ModalBody>this is the Modal with body Header Footer</ModalBody>
                <ModalFooter right>
                  <SubmitButton />
                </ModalFooter>
              </Modal>`}</pre>
            </div>
          </div>
          <div className="component-discription">
            <Modal open={modal6} position="top-right">
              <ModalHeader
                title="modal top-right"
                icon={<PlusIcon />}
                toggleOpen={setModal6}
              />
              <ModalBody>this is the Modal with body Header Footer</ModalBody>
              <ModalFooter right>
                <SubmitButton />
              </ModalFooter>
            </Modal>
            <Button color="danger" onClick={() => setModal6(true)}>
              Modal top-right
            </Button>
            <div className="discription">
              <pre>{`<Modal open={modal4}>
                <ModalHeader
                  title="modal"
                  icon={<PlusIcon />}
                  toggleOpen={setModal4}
                />
                <ModalBody>this is the Modal with body Header Footer</ModalBody>
                <ModalFooter right>
                  <SubmitButton />
                </ModalFooter>
              </Modal>`}</pre>
            </div>
          </div>
          <div className="component-discription">
            <Modal open={modal7} position="bottom-left">
              <ModalHeader
                title="modal bottom-left"
                icon={<PlusIcon />}
                toggleOpen={setModal7}
              />
              <ModalBody>this is the Modal with body Header Footer</ModalBody>
              <ModalFooter right>
                <SubmitButton />
              </ModalFooter>
            </Modal>
            <Button color="close" onClick={() => setModal7(true)}>
              Modal bottom-left
            </Button>
            <div className="discription">
              <pre>{`<Modal open={modal4}>
                <ModalHeader
                  title="modal"
                  icon={<PlusIcon />}
                  toggleOpen={setModal4}
                />
                <ModalBody>this is the Modal with body Header Footer</ModalBody>
                <ModalFooter right>
                  <SubmitButton />
                </ModalFooter>
              </Modal>`}</pre>
            </div>
          </div>
          <div className="component-discription">
            <Modal open={modal8} position="bottom-right">
              <ModalHeader
                title="modal bottom-right"
                icon={<PlusIcon />}
                toggleOpen={setModal8}
              />
              <ModalBody>this is the Modal with body Header Footer</ModalBody>
              <ModalFooter right>
                <MoreButton />
                <SubmitButton />
              </ModalFooter>
            </Modal>
            <Button onClick={() => setModal8(true)}>Modal bottom-right</Button>
            <div className="discription">
              <pre>{`<Modal open={modal4}>
                <ModalHeader
                  title="modal"
                  icon={<PlusIcon />}
                  toggleOpen={setModal4}
                />
                <ModalBody>this is the Modal with body Header Footer</ModalBody>
                <ModalFooter right>
                  <MoreButton />
                  <SubmitButton />
                </ModalFooter>
              </Modal>`}</pre>
            </div>
          </div>
        </div>
      </FieldSet>
    </div>
  );
};

ModalPosition.propTypes = {};

export default ModalPosition;
