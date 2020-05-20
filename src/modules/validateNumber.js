const validateNumber = tel => {
    const strNumber = tel[0].value.length;
    if (strNumber === 18) {
      return false;
    }else return true;    
};

export default validateNumber;
