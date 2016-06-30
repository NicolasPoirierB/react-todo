

import { createStore } from 'redux';
import todoApp from './reducers/todos';

import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions/todos';


let store = createStore(todoApp);

/*
// TEST APP 
let unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(toggleTodo(1));
store.dispatch(toggleTodo(2));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

unsubscribe();
/**/
