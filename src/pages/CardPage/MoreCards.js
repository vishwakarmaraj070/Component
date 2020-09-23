import React from "react";
import FieldSet from "../../master/component/FieldSet";
import { Card, CardBody, CardHeader, CardFooter } from "../../component/Card";
import {
  AddIconButton,
  TableEditButton,
  TableDeleteButton,
} from "../../component/Button";
import { Pagination } from "phoenix-component";
import { TableBody, TableHeader, Table } from "../../component/Table";
const MoreCards = (props) => {
  return (
    <div className="mb-3">
      <FieldSet legend="Cards">
        <div className="row-container">
          <div className="component-discription">
            <Card tableCard>
              <CardHeader />
              <CardBody>
                <Table small>
                  <TableHeader>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile </th>
                      <th>Department</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </TableHeader>
                  <TableBody>
                    <tr>
                      <td>Name</td>
                      <td>Email</td>
                      <td>Mobile </td>
                      <td>Department</td>
                      <td>Status</td>
                      <td>
                        <TableEditButton />
                        <TableDeleteButton />
                      </td>
                    </tr>
                    <tr>
                      <td>Name</td>
                      <td>Email</td>
                      <td>Mobile </td>
                      <td>Department</td>
                      <td>Status</td>
                      <td>
                        <TableEditButton />
                        <TableDeleteButton />
                      </td>
                    </tr>
                    <tr>
                      <td>Name</td>
                      <td>Email</td>
                      <td>Mobile </td>
                      <td>Department</td>
                      <td>Status</td>
                      <td>
                        <TableEditButton />
                        <TableDeleteButton />
                      </td>
                    </tr>
                    <tr>
                      <td>Name</td>
                      <td>Email</td>
                      <td>Mobile </td>
                      <td>Department</td>
                      <td>Status</td>
                      <td>
                        <TableEditButton />
                        <TableDeleteButton />
                      </td>
                    </tr>
                  </TableBody>
                </Table>
              </CardBody>
              <CardFooter>
                <Pagination />
                <AddIconButton />
              </CardFooter>
            </Card>
            <div className="discription">
              <pre>{`<Card tableCard>
              <CardHeader />
              <CardBody>
                <Table small>
                  <TableHeader>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile </th>
                      <th>Department</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </TableHeader>
                  <TableBody>
                    <tr>
                      <td>Name</td>
                      <td>Email</td>
                      <td>Mobile </td>
                      <td>Department</td>
                      <td>Status</td>
                      <td>
                        <TableEditButton />
                        <TableDeleteButton />
                      </td>
                    </tr>
                    <tr>
                      <td>Name</td>
                      <td>Email</td>
                      <td>Mobile </td>
                      <td>Department</td>
                      <td>Status</td>
                      <td>
                        <TableEditButton />
                        <TableDeleteButton />
                      </td>
                    </tr>
                    <tr>
                      <td>Name</td>
                      <td>Email</td>
                      <td>Mobile </td>
                      <td>Department</td>
                      <td>Status</td>
                      <td>
                        <TableEditButton />
                        <TableDeleteButton />
                      </td>
                    </tr>
                    <tr>
                      <td>Name</td>
                      <td>Email</td>
                      <td>Mobile </td>
                      <td>Department</td>
                      <td>Status</td>
                      <td>
                        <TableEditButton />
                        <TableDeleteButton />
                      </td>
                    </tr>
                  </TableBody>
                </Table>
              </CardBody>
              <CardFooter>
                <Pagination />
                  <AddIconButton />
              </CardFooter>
            </Card>`}</pre>
            </div>
          </div>
        </div>
      </FieldSet>
    </div>
  );
};

MoreCards.propTypes = {};

export default MoreCards;
