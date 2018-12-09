import {
  ActionReducer,
  MetaReducer,
  ActionReducerMap,
  createFeatureSelector
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../../environments/environment';
import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from '@marvel-app/shared/models/router-state-url.model';

/**
 * Top level state
 */
export interface State {
  router: fromRouter.RouterReducerState;
}

/**
 * Called with each dispatched action
 */
export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer
};

/**
 * Log all actions
 */
export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state: any, action: any) {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateUrl>
>('router');
