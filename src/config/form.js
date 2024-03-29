import moment from "moment";

const getFormData = (event, el) => {
  let formData = {};
  let form;
  if (el === "element") {
    form = event;
  } else {
    form = event.target;
  }

  for (let i = 0; i < form.length; i++) {
    const element = form.elements[i];
    const name = element.name;
    const value = element.value;
    const type = element.type;
    if (value) {
      switch (type) {
        case "checkbox":
          formData[name] = element.checked ? element.checked : false;
          break;
        case "radio":
          const els = document.getElementsByName(name);
          els.forEach((e) => {
            if (e.checked) {
              formData[name] = e.value;
            }
          });
          break;
        default:
          formData[name] = value;
          break;
      }
    }
  }
  return formData;
};
const getMultipleFormData = (event) => {
  let formData = {};
  let arrayData = [];
  const form = event.target;
  for (let i = 0; i < form.length; i++) {
    const element = form.elements[i];
    const name = element.name;
    const value = element.value;
    const type = element.type;
    const elementId = element.getAttribute("elementId");
    if (value) {
      switch (type) {
        case "checkbox":
          formData[name] = element.checked ? element.checked : false;
          break;
        case "radio":
          const els = document.getElementsByName(name);
          els.forEach((e) => {
            if (e.checked) {
              formData[name] = e.value;
            }
          });
          break;
        default:
          formData[name] = value;
          if (name && elementId) {
            arrayData.push({ [name]: value, docId: elementId });
          }
          break;
      }
    }
  }
  // return formData;
  return arrayData;
};

const getIdentifier = (tag = "GDMS") => {
  return tag + "-" + moment().format("YYYY-MM-DD") + "-" + Date.now();
};

// const getMultipleData = (event) => {
//   let formData = [{}];
//   const form = event.target;
//   for (let i = 0; i < form.length; i++) {
//     const element = form.elements[i];
//     const name = element.name;
//     const value = element.value;
//     formData.push({ name: value });
//   }
//   return formData;
// };

export { getFormData, getIdentifier, getMultipleFormData };
