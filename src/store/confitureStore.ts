import { createStore } from 'redux';
import module from './module';

export default function configureStore() {
    const store = createStore(
        module,
        (window as any).__REDUX_DEVTOOLS_EXTENSION__&& (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}