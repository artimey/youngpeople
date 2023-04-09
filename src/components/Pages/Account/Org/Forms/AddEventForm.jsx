import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import React from 'react';

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: false,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

export const AddEventForm = () => {

  const UploadSvg = () => (
    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.5 16.2H16.5V18H0.5V16.2ZM9.38889 7.2H15.6111L8.5 14.4L1.38889 7.2H7.61111V0H9.38889V7.2Z" 
      fill="white" fillOpacity="0.5" />
    </svg>
  )

  return (
    <Dragger {...props}>
      <div className="text-[1.6rem] h-[7rem] text-white50 font-[500] flex justify-center items-center">
        <span className="inline-block mr-[1.2rem]">Загрузите изображение</span>
        <UploadSvg />
      </div>
    </Dragger>
  )
};
