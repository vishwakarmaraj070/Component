import React from "react";
import FieldSet from "../../master/component/FieldSet";
import {
  Button,
  IconButton,
  SubmitButton,
  MoreButton,
  DeleteButton,
  CloseButton,
  AddIconButton,
  EditIconButton,
  DeleteIconButton,
  CloseIconButton,
  TableDeleteButton,
  TableEditButton,
} from "../../component/Button";
import { ReactComponent as PlusIcon } from "../../Icons/Basic/plus.svg";
const index = (props) => {
  return (
    <div className="page-container">
      <div className="mb-3">
        <FieldSet legend="Buttons">
          <div className="row-container">
            <div className="component-discription">
              <Button>Button </Button>
              <div className="discription">
                <pre>{`<Button>Button</Button>`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <Button rounded>Rounded</Button>
              <div className="discription">
                <pre>{`<Button rounded>Rounded</Button>`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <Button outlined>outlined</Button>
              <div className="discription">
                <pre>{`<Button outlined>outlined</Button>`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <Button outlined rounded>
                Rounded outlined
              </Button>
              <div className="discription">
                <pre>{`<Button outlined rounded>
          Rounded outlined
        </Button>`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <Button flat>Flat</Button>
              <div className="discription">
                <pre>{`<Button flat>Flat</Button>`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <Button rounded flat>
                Flat rounded
              </Button>
              <div className="discription">
                <pre>{`<Button rounded flat>
            Flat rounded
          </Button>`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <Button isLoading={true}>Loading</Button>
              <div className="discription">
                <pre>{`<Button isLoading={true}>Loading</Button>`}</pre>
              </div>
            </div>
          </div>
        </FieldSet>
      </div>
      {/*  */}
      <div className="mb-3">
        <FieldSet legend="Icon Button">
          <div className="row-container">
            <div className="component-discription">
              <IconButton>
                <PlusIcon />
              </IconButton>
              <div className="discription">
                <pre>{`<IconButton>
                <PlusIcon />
              </IconButton>`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <IconButton rounded>
                <PlusIcon />
              </IconButton>
              <div className="discription">
                <pre>{`<IconButton rounded>
                <PlusIcon />
              </IconButton>`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <IconButton outlined>
                <PlusIcon />
              </IconButton>
              <div className="discription">
                <pre>{`<IconButton outlined>
                <PlusIcon />
              </IconButton>`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <IconButton outlined rounded>
                <PlusIcon />
              </IconButton>
              <div className="discription">
                <pre>{`<IconButton outlined rounded>
                <PlusIcon />
              </IconButton>`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <IconButton flat>
                <PlusIcon />
              </IconButton>
              <div className="discription">
                <pre>{`<IconButton flat>
                <PlusIcon />
              </IconButton>`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <IconButton rounded flat>
                <PlusIcon />
              </IconButton>
              <div className="discription">
                <pre>{`<IconButton rounded flat>
                <PlusIcon />
              </IconButton>`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <IconButton isLoading={true}>
                <PlusIcon />
              </IconButton>
              <div className="discription">
                <pre>{` <IconButton isLoading={true}>
                <PlusIcon />
              </IconButton>`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <IconButton title="Add">
                <PlusIcon />
              </IconButton>
              <div className="discription">
                <pre>{`<IconButton title="Add">
                <PlusIcon />
              </IconButton>`}</pre>
              </div>
            </div>
          </div>
        </FieldSet>
      </div>
      {/*  */}
      <div className="mb-3">
        <FieldSet legend="Button Colors">
          <div className="row-container">
            <div className="component-discription">
              <Button>Primary</Button>
              <div className="discription">
                <pre>{`<Button>Primary</Button>`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <Button color="secondary">secondary</Button>
              <div className="discription">
                <pre>{`<Button color="secondary">secondary</Button>`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <Button color="danger">danger</Button>
              <div className="discription">
                <pre>{`<Button color="danger">danger</Button>`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <Button color="close">close</Button>
              <div className="discription">
                <pre>{`<Button color="close">
                close
              </Button>`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <IconButton>
                <PlusIcon />
              </IconButton>
              <div className="discription">
                <pre>{` <IconButton>
                <PlusIcon />
              </IconButton>`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <IconButton color="secondary">
                <PlusIcon />
              </IconButton>
              <div className="discription">
                <pre>{`<IconButton color="secondary"><PlusIcon /></IconButton>`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <IconButton color="danger">
                <PlusIcon />
              </IconButton>
              <div className="discription">
                <pre>{`<IconButton color="danger"><PlusIcon /></IconButton>`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <IconButton color="close">
                <PlusIcon />
              </IconButton>
              <div className="discription">
                <pre>{`<IconButton color="close"><PlusIcon /></IconButton>`}</pre>
              </div>
            </div>
          </div>
        </FieldSet>
      </div>
      {/*  */}
      <div className="mb-3">
        <FieldSet legend="Button Sizes">
          <div className="row-container">
            <div className="component-discription">
              <Button size="sm">Sm</Button>
              <div className="discription">
                <pre>{`<Button size="sm">small</Button>`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <Button color="secondary">middium</Button>
              <div className="discription">
                <pre>{`<Button color="secondary">middium</Button>`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <Button size="lg" color="danger">
                Large
              </Button>
              <div className="discription">
                <pre>{`<Button size="lg" color="danger">Large</Button>`}</pre>
              </div>
            </div>

            <div className="component-discription">
              <IconButton size="sm">
                <PlusIcon />
              </IconButton>
              <div className="discription">
                <pre>{`<IconButton size="sm">
                <PlusIcon />
              </IconButton>`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <IconButton color="secondary">
                <PlusIcon />
              </IconButton>
              <div className="discription">
                <pre>{`<IconButton color="secondary"><PlusIcon /></IconButton>`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <IconButton size="lg" color="danger">
                <PlusIcon />
              </IconButton>
              <div className="discription">
                <pre>{`<IconButton size="lg" color="danger">
                <PlusIcon />
              </IconButton>`}</pre>
              </div>
            </div>
          </div>
        </FieldSet>
      </div>
      {/*  */}
      <div className="mb-3">
        <FieldSet legend="More Buttons">
          <div className="row-container">
            <div className="component-discription">
              <SubmitButton />
              <div className="discription">
                <pre>{`<SubmitButton />`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <MoreButton />
              <div className="discription">
                <pre>{`<MoreButton />`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <DeleteButton />
              <div className="discription">
                <pre>{`<DeleteButton />`}</pre>
              </div>
            </div>

            <div className="component-discription">
              <CloseButton />
              <div className="discription">
                <pre>{`<CloseButton />`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <AddIconButton size="sm" />
              <div className="discription">
                <pre>{`<AddIconButton />`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <EditIconButton />
              <div className="discription">
                <pre>{`<EditIconButton />`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <DeleteIconButton />
              <div className="discription">
                <pre>{`<DeleteIconButton />`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <CloseIconButton size="sm" />
              <div className="discription">
                <pre>{`<CloseIconButton />`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <TableDeleteButton />
              <div className="discription">
                <pre>{`<TableDeleteButton />`}</pre>
              </div>
            </div>
            <div className="component-discription">
              <TableEditButton />
              <div className="discription">
                <pre>{`<TableEditButton />`}</pre>
              </div>
            </div>
          </div>
        </FieldSet>
      </div>
      {/*  */}
    </div>
  );
};

index.propTypes = {};

export default index;
