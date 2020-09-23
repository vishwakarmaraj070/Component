import React, { useState, useEffect, createRef } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import DownArrow from "./down-arrow.svg";
import CloudUpload from "./cloud-upload.svg";
import FileIcon from "./file-alt.svg";
import Progress from "../ProgressBar";
import Button from "../Button/Button";

const DragAndDrop = (props) => {
  const {
    className,
    onClick,
    onChange,
    progressValue,
    files,
    clearEvent,
    ...attributes
  } = props;

  const [dropFiles, setDropFiles] = useState([]);

  const inputRef = createRef();

  const dragAndDropStyle = classnames("r-drag-drop", {
    "drop-over": dropFiles.length,
  });

  // function
  const handleDragOver = (e) => {
    e.preventDefault();
    let dargDrop = document.querySelector(".r-drag-drop");
    dargDrop.classList.add("drop-over");
  };

  const handlEDragLeave = (e) => {
    e.preventDefault();
    let dargDrop = document.querySelector(".r-drag-drop");
    dargDrop.classList.remove("drop-over");
  };

  const startUpLoading = (files) => {
    let fileObj = [];
    // file array

    for (let index = 0; index < files.length; index++) {
      fileObj.push(files[index]);
    }
    setDropFiles(fileObj);
  };

  const handleDrop = (e, file) => {
    e.preventDefault();
    onChange && onChange(e, file);
    if (!files) {
      startUpLoading(file);
    }
  };

  const handleUploadFile = (e) => {
    onClick && onClick(e, dropFiles);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setDropFiles([]);
    inputRef.current.value = null;
    clearEvent(files);
  };

  useEffect(() => {
    if (files) {
      startUpLoading(files);
    }
  }, [files]);

  return (
    <div>
      <label
        htmlFor="file"
        id="drop-zone"
        onDrop={(e) => handleDrop(e, e.dataTransfer.files)}
        onDragOver={(e) => handleDragOver(e)}
        onDragLeave={(e) => handlEDragLeave(e)}
        className={dragAndDropStyle}
        {...attributes}
      >
        {/* input */}
        <input
          ref={inputRef}
          type="file"
          id="file"
          multiple
          className="drop-zone"
          onChange={(e) => handleDrop(e, e.target.files)}
        />
        {/* placeholder */}
        {!dropFiles.length && (
          <div className="drop-box-center">
            <p>Click or Drag and Drop File here</p>
            <DownArrow />
          </div>
        )}
        {/* drop file container */}
        <div
          className="drop-file-container"
          onClick={(e) => e.preventDefault()}
        >
          {dropFiles.length > 0 &&
            dropFiles.map((file, index) => (
              <div key={index} className="drop-file-box">
                <div className="file-image">
                  <FileIcon fill="#5f75b9" />
                </div>
                <div className="file-name">
                  <p>{file.name}</p>
                </div>
              </div>
            ))}
        </div>
        {/* progress bar */}
        <div className="progress-wrapper">
          {dropFiles.length > 0 && (
            <Progress value={progressValue}>{progressValue}%</Progress>
          )}
        </div>
      </label>
      <div>
        <div className="mt-1">
          <Button onClick={handleUploadFile}>
            <CloudUpload fill="white" style={{ marginRight: "15px" }} />
            Upload file from computer
          </Button>
          <Button color="close" onClick={handleClose}>
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
};
DragAndDrop.defaultProps = {
  progressValue: 0,
};

DragAndDrop.propTypes = {
  progressValue: PropTypes.number,
};

export default DragAndDrop;
