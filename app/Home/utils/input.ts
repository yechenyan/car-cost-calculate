export const getNumberInput = (key, setCar, car) => {
  const onChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value !== "") {
      setCar({ [key]: Number(value) });
    } else {
      setCar({ [key]: value });
    }
  };
  const isError = isNaN(car[key]) || car[key] === "";
  return {
    sx: {
      marginTop: 2,
    },
    error: isError,
    onChange,
    value: car[key],
    fullWidth: true,
    required: true,
    helperText: isError ? "must be number and required" : "",
  };
};

export const getTextInput = (key, setCar, car) => {
  const onChange = (e) => {
    setCar({ [key]: e.target.value });
  };
  const isError = !car[key];

  return {
    sx: {
      marginTop: 2,
    },
    error: isError,
    onChange,
    value: car[key],
    type: "text",
    fullWidth: true,
    required: true,
    helperText: isError ? "required" : "",
  };
};

export const getSlideInput = (key, set, data) => {
  const onChange = (e) => {
    set({ [key]: e.target.value });
  };
  const value = data[key];

  return {
    onChange,
    value,
    valueLabelDisplay: "auto",
  };
};
