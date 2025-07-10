const validation = {
    isEmpty: (data) => {
        // console.log("Data", data)
        if(
            data === undefined || data === 'undefined'
			|| data === null || data === 'null'
			|| data === 0 || data === '0'
			|| data === ''
			|| (typeof data === 'string' && data.trim() === '')
			|| (Array.isArray(data) && data.length === 0)
        ) {
            return true;
        }
        return false;
    },

    isNotEmpty: (data) =>{
        return !(validation.isEmpty(data));
    }
}


const JUtilsValid = validation;

export {
    JUtilsValid
}