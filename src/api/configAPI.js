export const baseUrl =
  'https://amoozeshyar-khu.iran.liara.run';

export const API_LOGIN =
  baseUrl + '/api/user/login/';
export const API_REGISTER =
  baseUrl + '/api/user/register/';
export const API_CREATE_CV = baseUrl + '/api/cv/';
export const API_ADD_EDU_CV = (cv_id) =>
  baseUrl + `/api/cv/${cv_id}/education/`;
export const API_ADD_WORK_CV = (cv_id) =>
  baseUrl + `/api/cv/${cv_id}/work/`;
export const API_GET_CVID =
  baseUrl + '/api/cv/get_cv-id/';
export const API_TALENT =
  baseUrl + '/api/skills/link';
