export const baseUrl =
  'https://Amoozeshyar.iran.liara.run';

export const POST_CONFIG = (user_token) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${user_token}`,
    },
  };
};

export const POST_CONFIG_FILE = (user_token) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Token ${user_token}`,
    },
  };
};

export const PATCH_CONFIG_FILE = (user_token) => {
  return {
    method: 'PATCH',
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Token ${user_token}`,
    },
  };
};

export const GET_CONFIG = (
  user_token,
  params,
) => {
  return {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${user_token}`,
    },
    params,
  };
};

export const PATCH_CONFIG = (user_token) => {
  return {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${user_token}`,
    },
  };
};

export const DELETE_CONFIG = (user_token) => {
  return {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${user_token}`,
    },
  };
};

export const API_LOGIN =
  baseUrl + '/api/user/login/';
export const API_REGISTER =
  baseUrl + '/api/user/register/';

export const API_FORGOT_PASSWORD =
  baseUrl + '/api/user/forget-password/';

export const API_CHANGE_PASSWORD =
  baseUrl + '/api/user/password-reset/';

// --- very funny API

// export const API_GET_CV_ID =
//   baseUrl + '/api/cv/get_cv-id/';

export const API_GET_USER_ID =
  baseUrl + '/user/get_user-id';

// very funny API ---

// --- Profile API

export const API_UPLOAD_IMAGE_PROFILE =
  baseUrl + '/user/upload_image/';

export const API_GET_PROFILE =
  baseUrl + '/user/profile/setting/';

export const API_CHANGE_FIELD_PROFILE =
  baseUrl + '/user/profile/setting/';

// Profile API ---

// --- Resume API

export const API_GET_CV = (user_id) =>
  baseUrl + `/api/cv/${user_id}/`;

export const API_CREATE_CV = baseUrl + '/api/cv/';

export const API_ADD_EDU_CV = (cv_id) =>
  baseUrl + `/api/cv/${cv_id}/education/`;

export const API_ADD_WORK_CV = (cv_id) =>
  baseUrl + `/api/cv/${cv_id}/work/`;

export const API_ADD_SKILL_CV = (cv_id) =>
  baseUrl + `/api/cv/${cv_id}/skill/`;

export const API_DELETE_SKILL_CV = (
  cv_id,
  skill_id,
) =>
  baseUrl + `/api/cv/${cv_id}/skill/${skill_id}/`;

// Resume API ---

// --- API TALENT API
export const API_TALENT =
  baseUrl + '/api/skills/link';
//  API TALENT API ---

// --- User Ticket API

export const API_ADD_TICKET =
  baseUrl + '/api/ticket/';

export const API_GET_USER_TICKETS =
  baseUrl + '/user/profile/ticket/';

export const API_TICKET_SEND_MESSAGE =
  baseUrl + '/api/ticket/send-message/';

export const API_TICKET_END =
  baseUrl + '/api/ticket/end/';

//  User Ticket API ---

// --- Moshaver API
export const API_GET_MOSHAVER_ALL_TICKETS =
  baseUrl + '/api/consultation/ticket/';

export const API_GET_MOSHAVER_OWN_TICKETS =
  baseUrl + '/api/consultation/ticket/';

//  Moshaver API ---

// --- Talent API

export const API_TALENT_TESTS = (user_id) =>
  baseUrl +
  `/user/user-talent-surveys/${user_id}`;

export const API_SEND_TALENT_TESTS =
  baseUrl + '/api/talent-survey/';

// Talent API ---
