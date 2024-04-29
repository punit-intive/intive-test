import "./FileInfo.scss";

const FileInfo = ({ file, fileId, error, onDeleteFile }) => {
  return (
    <div className={cx("n-upload-area-file", { "n-upload-area-file--error": !!error })}>
      <div className='n-upload-area-file__bar'>
        <span>
          <span className='n-upload-area-file__name'>{file.name}</span>

          <span>({file.size / 1000} kB)</span>
        </span>

        <span
          className='icon material-symbols-outlined'
          onClick={() => onDeleteFile(fileId)}
          onKeyDown={() => onDeleteFile(fileId)}
          role='button'
          tabIndex={0}
        >
          delete
        </span>
      </div>

      {!!error && <span className='n-upload-area-file__error caption'>{error}</span>}
    </div>
  );
};


export default FileInfo;
