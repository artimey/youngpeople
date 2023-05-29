import Dragger from "antd/es/upload/Dragger";
import { useRef } from "react";

const UploadSvg = () => (
  <svg
    width="17"
    height="18"
    viewBox="0 0 17 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.5 16.2H16.5V18H0.5V16.2ZM9.38889 7.2H15.6111L8.5 14.4L1.38889 7.2H7.61111V0H9.38889V7.2Z"
      fill="white"
      fillOpacity="0.5"
    />
  </svg>
);

export const DraggArea = ({ onUpload }) => {
  const handleChange = useRef((info) => {
    onUpload(info.file);
  });

  const handleDrop = (e) => {
    onUpload(e.dataTransfer.files[0]);
  };

  return (
    <Dragger
      name="eventPhoto"
      maxCount={1}
      multiple={false}
      onChange={handleChange.current}
      openFileDialogOnClick={false}
      onDrop={handleDrop}
      accept="image/png, image/jpeg, image/jpg,image/jpeg,image/heic"
    >
      <div className="text-[1.6rem] h-[7rem] text-white50 font-[500] flex justify-center items-center">
        <span className="inline-block mr-[1.2rem]">Загрузите изображение</span>
        <UploadSvg />
      </div>
    </Dragger>
  );
};
