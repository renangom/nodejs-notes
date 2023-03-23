export function add(a,b) {
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('Please use numbers only');
    }

    return a + b;
}


export function asyncFunction(success, message) {
    if(success) { 
        return Promise.resolve(message);
    } else {
        return Promise.reject(message);
    }
}