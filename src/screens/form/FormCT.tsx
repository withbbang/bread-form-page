import React, { useEffect } from 'react';
import { CommonState } from 'middlewares/reduxToolkits/commonSlice';
import { CustomWindow } from 'utils/types';
import { usePostDataByConfirmPopupHook } from 'utils/customHooks';
import FormPT from './FormPT';

function FormCT({}: FormCTProps): React.JSX.Element {
  const { useSetActivePostDataByConfirmPopup } =
    usePostDataByConfirmPopupHook();
  const onClick = () => {
    useSetActivePostDataByConfirmPopup({
      message: 'hello',
      url: '/wlekfj',
      params: {},
      successCb: () => console.warn('called successCb'),
      cancelBtnCb: () => console.warn('called cancelBtnCb'),
      failCb: () => console.warn('called failCb'),
      errorPopupBtnCb: () => console.warn('called errorPopupBtnCb'),
    });
  };
  useEffect(() => {
    const customWindow = window as CustomWindow;
    customWindow.goBack = handleGoBack;
    customWindow.onResult = handleOnResult;

    return () => {
      delete customWindow.goBack;
      delete customWindow.onResult;
    };
  }, []);

  const handleGoBack = (data?: any) => {
    console.warn('goBack visit? ', data);
  };

  const handleOnResult = (data?: any) => {
    console.warn('onResult visit?', data);
  };

  return <FormPT onClick={onClick} />;
}

interface FormCTProps extends CommonState {}

export default FormCT;
