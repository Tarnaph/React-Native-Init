import { createReducer, createActions } from 'reduxsauce';

/* Types & Actions Creators */
const { Types, Creators } = createActions({
  modalContactVisibilityOn: null,
  modalContactVisibilityOff: null,

});
export { Types };
export default Creators;

/* Initial State */
export const INITIAL_STATE = {
  visibility: false,
};

/* Reducers */
export const on = state => ({ ...state, visibility: true });
export const off = state => ({ ...state, visibility: false });

/* Reducers to Types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.MODAL_CONTACT_VISIBILITY_ON]: on,
  [Types.MODAL_CONTACT_VISIBILITY_OFF]: off,
});
