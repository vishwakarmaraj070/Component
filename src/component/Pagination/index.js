import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import PageItem from "./PageItem";
import PageLink from "./PageLink";
import AngleIcon from "./angle-right-b.svg";
import MoreIcon from "./ellipsis-h.svg";

const Pagination = (props) => {
  const {
    children,
    circle,
    totalLength,
    dataPerPage,
    onClick,
    onChange,
    color,
    ...attributes
  } = props;

  const [pageCount, setPageCount] = useState([]);
  const [pageRange, setPageRange] = useState([]);
  const [activePage, setActivePage] = useState();
  const [fromData, setFromData] = useState();
  const [toData, setToData] = useState();

  const [dataPerPageActive, setDataPerPageActive] = useState(5);
  const classes = classNames(
    `pg-${color}`,
    {
      "pagination-circle": circle,
    },
    "pagination"
  );

  const handleNextPage = () => {
    if (activePage !== pageCount.length) {
      if (activePage >= pageRange[pageRange.length - 1]) {
        let setRange = pageRange;
        let nextPlus = pageRange[pageRange.length - 1];
        setRange.splice(0, 3);
        for (let index = 1; index <= 3; index++) {
          if (pageCount.includes(nextPlus + index)) {
            setRange.push(nextPlus + index);
          }
        }
        setPageRange(setRange);
      }
      setActivePage(activePage + 1);
      handleOnClick(dataPerPageActive, activePage + 1);
    }
  };

  const handlePrevPage = () => {
    if (activePage !== 1) {
      if (activePage <= pageRange[0]) {
        let setRange = pageRange;
        let nextPlus = pageRange[0];
        setRange.splice(2, 3);
        for (let index = 1; index <= 3; index++) {
          if (pageCount.includes(nextPlus - index)) {
            setRange.unshift(nextPlus - index);
          }
        }
        setPageRange(setRange);
      }
      setActivePage(activePage - 1);
      handleOnClick(dataPerPageActive, activePage - 1);
    }
  };

  const handleMore = () => {
    if (pageCount[pageCount.length - 1] > pageRange[pageRange.length - 1]) {
      let range = [];
      for (
        let index = pageRange[pageRange.length - 1] + 1;
        index < pageRange[pageRange.length - 1] + 6;
        index++
      ) {
        if (pageCount.includes(index)) {
          range.push(index);
        }
      }
      if (activePage <= range[0]) {
        setActivePage(range[0]);
        handleOnClick(dataPerPageActive, range[0]);
      } else {
        handleOnClick(dataPerPageActive, activePage);
      }
      setPageRange(range);
    }
  };

  const handlePageCount = (perPage, e = false) => {
    const pageSize = Math.ceil(totalLength / perPage);
    let pageLength = [];
    for (let index = 1; index <= pageSize; index++) {
      pageLength.push(index);
    }
    setPageCount(pageLength);
    if (pageSize > 5) {
      setPageRange([1, 2, 3, 4, 5]);
    } else {
      setPageRange(pageLength);
    }

    if (activePage > pageLength.length) {
      setActivePage(pageLength.length);
      if (e) {
        handleOnClick(perPage, pageLength.length);
      }
    } else {
      if (e) {
        handleOnClick(perPage, activePage);
      }
    }
    setDataPerPageActive(perPage);
  };

  const handleOnClick = (
    dataPerPage = dataPerPageActive,
    page = activePage
  ) => {
    onClick &&
      onClick({
        dataPerPage: dataPerPage,
        currentPage: page,
      });
    onChange &&
      onChange({
        dataPerPage: dataPerPage,
        currentPage: page,
      });
    handleFromTo(dataPerPage, page);
  };

  const handleFromTo = (dataPerPage = dataPerPageActive, page = activePage) => {
    if (dataPerPage && page) {
      if (totalLength > 0) {
        setFromData(dataPerPage * page - (dataPerPage - 1));
      }
      if (totalLength > dataPerPage * page) {
        setToData(dataPerPage * page);
      } else {
        setToData(totalLength);
      }
    }
  };

  // handle actveDataPerPageTill
  const [actveDataPerPageTill, setActveDataPerPageTill] = useState();
  useEffect(() => {
    if (dataPerPage) {
      let till = 0;
      let isTrue = false;
      if (totalLength <= dataPerPage[dataPerPage.length - 1]) {
        dataPerPage.filter((list) => {
          if (list >= totalLength && !isTrue) {
            isTrue = true;
            till = list;
          }
        });
      } else {
        till = dataPerPage[dataPerPage.length - 1];
      }

      setActveDataPerPageTill(till);
    }
  }, [totalLength]);

  useEffect(() => {
    setDataPerPageActive(dataPerPage[0]);
    if (totalLength > 0) {
      setActivePage(1);
      setFromData(1);
    } else {
      setActivePage(0);
      setFromData(0);
    }

    handleFromTo(dataPerPage[0], 1);
    handlePageCount(dataPerPage[0]);
  }, [totalLength]);

  return (
    <div {...attributes} id="r-pagination">
      <ul className={classes}>
        <PageItem disabled>
          <PageLink
            style={{ paddingRight: "0px" }}
          >{`${fromData} - ${toData} Of ${totalLength}`}</PageLink>
        </PageItem>
        <PageItem
          disabled={activePage <= 1 || totalLength === 0 ? true : false}
          onClick={totalLength !== 0 && handlePrevPage}
        >
          <PageLink style={{ paddingLeft: "7px" }}>
            <span className="previous">
              <AngleIcon />
            </span>
            Prev
          </PageLink>
        </PageItem>
        {pageCount.length > 0 ? (
          pageCount.map((num) => {
            if (pageRange.includes(num))
              return (
                <PageItem
                  key={num}
                  active={activePage === num}
                  onClick={() => {
                    handleOnClick(dataPerPageActive, num);
                    setActivePage(num);
                  }}
                >
                  <PageLink key={num}>{num}</PageLink>
                </PageItem>
              );
          })
        ) : (
          <PageItem active>
            <PageLink>0</PageLink>
          </PageItem>
        )}
        {pageCount.length > 5 &&
          pageRange[pageRange.length - 1] !==
            pageCount[pageCount.length - 1] && (
            <PageItem onClick={handleMore}>
              <PageLink>
                <MoreIcon />
              </PageLink>
            </PageItem>
          )}
        <PageItem
          disabled={
            activePage === pageCount.length || totalLength === 0 ? true : false
          }
          onClick={handleNextPage}
        >
          <PageLink>
            Next <AngleIcon />
          </PageLink>
        </PageItem>
      </ul>
      <ul {...attributes} className={`pagination pg-secondary`}>
        <PageItem disabled>
          <PageLink>Per Page</PageLink>
        </PageItem>
        {dataPerPage.length > 0 &&
          dataPerPage.map((num) => {
            if (num <= actveDataPerPageTill) {
              return (
                <PageItem
                  key={num}
                  active={dataPerPageActive === num}
                  onClick={(e) => {
                    handlePageCount(num, e);
                  }}
                >
                  <PageLink key={num}>{num}</PageLink>
                </PageItem>
              );
            }
          })}
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  circle: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
  totalLength: PropTypes.number,
  dataPerPage: PropTypes.array,
  onClick: PropTypes.func,
};

Pagination.defaultProps = {
  circle: false,
  color: "primary",
  totalLength: 0,
  dataPerPage: [5, 25, 50, 100],
};

export default Pagination;
