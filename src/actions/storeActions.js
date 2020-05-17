import { ADD_ITEM } from "./types";

export const addItem = (uuid, quantity) => async (dispatch) => {
  try {
    // idk check if item is still there or something
    // const response = await fetch(
    //   `${Config.API_URL + Config.routes.user.user}/${uuid || ''}`,
    //   {
    //     method: 'GET',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //       Authorization: `Bearer ${Storage.get('token')}`,
    //     },
    //   }
    // );

    // const status = await response.status;
    // if (status === 401 || status === 403) {
    //   // TODO: Logout user.
    //   return;
    // }

    // const data = await response.json();
    // if (!data) throw new Error('Empty response from server');
    // if (data.error) throw new Error(data.error.message);

    dispatch({
      type: ADD_ITEM,
      payload: {
        id: uuid,
        quantity: quantity
      },
    });
  } catch (error) {
    // TODO: Dispatch error message.
    
  }
};