const onlyLetther = /^[a-zA-ZÑñ]+$/;
const onlyNumber = /^[0-9]+$/;
const onlyUrlValid = /^https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/;
const validatioName = (name) => {
  let error = [];
  if (!name) error.push("should not be empty");
  if (!onlyLetther.test(name)) error.push("enter only Letthers");
  if (error.length) return error;
  else return null;
};


const validationIntegerInputs = (value) => {
  let error = [];
  if (!value) error.push("should not be empty");
  else {
    if (!onlyNumber.test(value)) error.push("enter only integer characters");
    if (value <= 0)
      error.push("Enter an integer that is equal to or greater than 1.");
  }
  if (error.length) return error;
  else return null;
};

const validationUrl = (value) => {
  let error = [];
  if (!value) error.push("should not be empty");
  if (!onlyUrlValid.test(value)) error.push("enter a valid url");
  if (error.length) return error;
  else return null;
};

function validation(inputs) {
  let errors = {};
  if (inputs) {
    const { name, attack, defense, hp, speed, heigth, weitgh, image,type } = inputs;
    if (validatioName(name)) errors.name = validatioName(name);
    let handleErrorNumber = validationIntegerInputs(attack);

    if (handleErrorNumber) errors.attack = handleErrorNumber;
    handleErrorNumber = validationIntegerInputs(defense);
    if (handleErrorNumber) errors.defense = handleErrorNumber;
    handleErrorNumber = validationIntegerInputs(hp);
    if (handleErrorNumber) errors.hp = handleErrorNumber;
    handleErrorNumber = validationIntegerInputs(speed);
    if (handleErrorNumber) errors.speed = handleErrorNumber;
    handleErrorNumber = validationIntegerInputs(heigth);
    if (handleErrorNumber) errors.heigth = handleErrorNumber;
    handleErrorNumber = validationIntegerInputs(weitgh);
    if (handleErrorNumber) errors.weitgh = handleErrorNumber;
    if (validationUrl(image)) errors.image = validationUrl(image);
    if(!type || !type.length) errors.type = ["you must select at least 1 type"];
  }

  return errors;
}

export default validation;
