import React, { useState } from "react";
import FieldSet from "../../master/component/FieldSet";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  NarrowCard,
  WiderCard,
} from "../../component/Card";
import { ReactComponent as PlusIcon } from "../../Icons/Basic/plus.svg";
import { AddIconButton } from "../../component/Button";
const Cards = (props) => {
  const [name, setName] = useState("");
  return (
    <div className="mb-3">
      <FieldSet legend="Cards">
        <div className="row-container">
          <div className="component-discription">
            <Card>
              <CardBody>this is the card with body</CardBody>
            </Card>
            <div className="discription">
              <pre>{`<Card>
          <CardBody>this is the card with body</CardBody>
        </Card>`}</pre>
            </div>
          </div>
          <div className="component-discription">
            <Card>
              <CardHeader title="card" icon={<PlusIcon />} />
              <CardBody>Card with header and body</CardBody>
            </Card>
            <div className="discription">
              <pre>{`<Card>
          <CardHeader title="header card" icon={<PlusIcon />} />
          <CardBody>Card with header and body</CardBody>
        </Card>`}</pre>
            </div>
          </div>
          <div className="component-discription">
            <Card>
              <CardHeader title="card" icon={<PlusIcon />} />
              <CardBody>Card with header body and footer</CardBody>
              <CardFooter right>
                <AddIconButton />
              </CardFooter>
            </Card>
            <div className="discription">
              <pre>{`<Card>
          <CardHeader title="header card" icon={<PlusIcon />} />
          <CardBody>Card with header and body</CardBody>
          <CardFooter right>
            <AddIconButton />
          </CardFooter>
        </Card>`}</pre>
            </div>
          </div>
          <div className="component-discription">
            <Card>
              <CardHeader
                title="card"
                icon={<PlusIcon />}
                searchField
                value={name}
                onClick={() => alert("click")}
                onClose={() => setName("")}
                onChange={(e) => setName(e.target.value)}
              />
              <CardBody>Card with header body and footer</CardBody>
              <CardFooter right>
                <AddIconButton />
              </CardFooter>
            </Card>
            <div className="discription">
              <pre>{`<Card>
          <CardHeader
            title="card"
            icon={<PlusIcon />}
            searchField
            onChange={(e) => console.log(e)}
          />
          <CardBody>Card with header body and footer</CardBody>
          <CardFooter right>
            <AddIconButton />
          </CardFooter>
        </Card>`}</pre>
            </div>
          </div>
          <div className="component-discription">
            <NarrowCard>
              <CardHeader title="NarrowCard card" icon={<PlusIcon />} />
              <CardBody>NarrowCard with body</CardBody>
            </NarrowCard>
            <div className="discription">
              <pre>{`<NarrowCard>
          <CardHeader title="header card" icon={<PlusIcon />} />
          <CardBody>this is the NarrowCard card with body</CardBody>
        </NarrowCard>`}</pre>
            </div>
          </div>
          <div className="component-discription">
            <NarrowCard>
              <CardHeader title="NarrowCard card" icon={<PlusIcon />} />
              <CardBody>NarrowCard with body and footer</CardBody>
              <CardFooter right>
                <AddIconButton />
              </CardFooter>
            </NarrowCard>
            <div className="discription">
              <pre>{`<NarrowCard>
          <CardHeader title="header card" icon={<PlusIcon />} />
          <CardBody>
            this is the NarrowCard card with body and footer
          </CardBody>
          <CardFooter right>
            <AddIconButton />
          </CardFooter>
        </NarrowCard>`}</pre>
            </div>
          </div>
          <div className="component-discription">
            <WiderCard>
              <CardHeader title="WiderCard card" icon={<PlusIcon />} />
              <CardBody> WiderCard with body</CardBody>
            </WiderCard>
            <div className="discription">
              <pre>{`<WiderCard>
          <CardHeader title="WiderCard card" icon={<PlusIcon />} />
          <CardBody>this is the WiderCard with body</CardBody>
        </WiderCard>`}</pre>
            </div>
          </div>
          <div className="component-discription">
            <WiderCard>
              <CardHeader title="WiderCard card" icon={<PlusIcon />} />
              <CardBody>WiderCard with body and footer</CardBody>
              <CardFooter right>
                <AddIconButton />
              </CardFooter>
            </WiderCard>
            <div className="discription">
              <pre>{`<WiderCard>
          <CardHeader title="WiderCard card" icon={<PlusIcon />} />
          <CardBody>this is the WiderCard with body and footer</CardBody>
          <CardFooter right>
            <AddIconButton />
          </CardFooter>
        </WiderCard>`}</pre>
            </div>
          </div>
        </div>
      </FieldSet>
    </div>
  );
};

Cards.propTypes = {};

export default Cards;
