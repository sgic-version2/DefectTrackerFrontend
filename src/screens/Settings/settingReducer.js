// import * as actionType from "./settingConstant";
import { SYSTEM_LOGO_CHANGE, SHOW_ON_DASHBOARD_SIDEBAR } from "./settingConstant";
import { FAVICON_CHANGE } from './settingConstant';

const initialState = {
  systemLogo:
    "https://png.pngtree.com/element_origin_min_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg",
  showOnDashboard: true,
  favicon: "http://dlskits.com/wp-content/uploads/2018/04/Nike-Dream-League-Soccer-Logo.png"
};

export const systemLogoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SYSTEM_LOGO_CHANGE:
      return {
        systemLogo: (state.systemLogo = action.payload)
      };
    default:
      return state;
  }
};

export const showOnDashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ON_DASHBOARD_SIDEBAR:
      return {
        showOnDashboard: !state.showOnDashboard
      };
    default:
      return state;
  }
};

export const faviconReducer = (state = initialState, action) => {
  switch (action.type) {
    case FAVICON_CHANGE:
      return {
        favicon: (state.favicon = action.payload)
      };
    default:
      return state;
  }
};
