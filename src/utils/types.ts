export interface TypeKeyValueForm {
  [key: string]: number | string;
}

/**
 * [커스텀 window 타입]
 *
 * Native -> Web 호출을 위함
 */
export interface CustomWindow extends Window {
  goBack?: (data?: any) => any;
  onResult?: (data?: any) => any;
  onResume?: (data?: any) => any;
  // TODO: add others...
}

/**
 * [API 네트워크 에러가 났을 경우 호출되는 함수(handleThrowErrorInAPI)의 파라미터 타입]
 *
 * @type {number} status: 상태코드
 * @type {string | undefined} message: 메세지
 * @type {Function | undefined} failCb: API 실패시 바로 실행하는 콜백
 * @type {Function | undefined} errorPopupBtnCb: 팝업 확인 버튼 콜백
 */
export interface TypeThrowErrorInAPI {
  status: number;
  message?: string;
  failCb?: () => any;
  errorPopupBtnCb?: () => any;
}

/**
 * [Status Code는 정상이지만 서버 로직에 의한 에러 타입]
 *
 * @type {string} code: 결과 코드
 * @type {string | undefined} message: 메세지
 * @type {Function | undefined} failCb: API 실패시 바로 실행하는 콜백
 * @type {Function | undefined} errorPopupBtnCb: 팝업 확인 버튼 콜백
 */
export interface TypeThrowCustomErrorInAPI {
  code: string;
  message: string;
  failCb?: () => any;
  errorPopupBtnCb?: () => any;
}

/**
 * [Get API 호출 커스텀 훅 파라미터 타입]
 *
 * @type {string | undefined} url: api url
 * @type {Function | undefined} checkValidatioinCb: 요청 전 유효성 검사 콜백
 * @type {Function | undefined} successCb: API 성공시 바로 실행하는 콜백
 * @type {Function | undefined} failCb: API 실패시 바로 실행하는 콜백
 * @type {Function | undefined} errorPopupBtnCb: 에러팝업 버튼 콜백
 */
export interface TypeGetAPIHookParams {
  url?: string;
  checkValidatioinCb?: () => any;
  successCb?: () => any;
  failCb?: () => any;
  errorPopupBtnCb?: () => any;
}

/**
 * [Post API 호출 커스텀 훅 파라미터 타입]
 *
 * @type {string | undefined} url: api url
 * @type {any} params: body 데이터
 * @type {Function | undefined} checkValidatioinCb: 요청 전 유효성 검사 콜백
 * @type {Function | undefined} successCb: API 성공시 바로 실행하는 콜백
 * @type {Function | undefined} failCb: API 실패시 바로 실행하는 콜백
 * @type {Function | undefined} errorPopupBtnCb: 에러팝업 버튼 콜백
 */
export interface TypePostAPIHookParams {
  url?: string;
  params: any;
  checkValidatioinCb?: () => any;
  successCb?: () => any;
  failCb?: () => any;
  errorPopupBtnCb?: () => any;
}

/**
 * [Post API 확인 팝업 호출 커스텀 훅 파라미터 타입]
 *
 * @type {string | undefined} url: api url
 * @type {any} params: body 데이터
 * @type {Function | undefined} successCb: API 성공시 바로 실행하는 콜백
 * @type {Function | undefined} cancelBtnCb: 확인 팝업 취소 버튼 콜백
 * @type {Function | undefined} failCb: API 실패시 바로 실행하는 콜백
 * @type {Function | undefined} errorPopupBtnCb: 에러팝업 버튼 콜백
 */
export interface TypePostAPIByConfirmPopupHook {
  message: string;
  url: string;
  params: any;
  successCb?: () => any;
  cancelBtnCb?: () => any;
  failCb?: () => any;
  errorPopupBtnCb?: () => any;
}

/**
 * [Javascript Interface 호출 전용 타입]
 *
 * Web -> Native 호출을 위함
 *
 * @type {string} action: 액션 이름
 * @type {string} bridge: 브릿지 이름
 * @type {any | undefined} data: Native에 전달할 데이터
 */
export interface TypeJavascriptInterface {
  action: string;
  bridge: string;
  data?: any;
}

/**
 * 일반 SVG들 변환 파일의 props
 */
export interface SVGProps {
  type?: string;
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
}
