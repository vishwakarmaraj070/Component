import React, { useState } from "react";
import PropTypes from "prop-types";
const TestingPage = (props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>This is not for public</h3>
      {/* <AddIconButton size="sm" />
      <EditIconButton size="sm" />
      <DeleteIconButton />
      <TableEditButton />
      <TableDeleteButton />
      <Card>
        <CardHeader searchField />
        <CardBody>Body</CardBody>
        <CardFooter>
          <AddIconButton />
        </CardFooter>
      </Card>
      <SaveNotification />
      <FormModal open={toggle} toggleOpen={setToggle} />
      <Button onClick={() => setToggle(true)}>Notofication</Button> */}
    </div>
  );
};

TestingPage.propTypes = {};

export default TestingPage;
