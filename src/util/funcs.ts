export const getRes = (data?: any, err?: any) => {
  if (err) {
    return {
      success: false,
      error: err,
    };
  }

  return {
    succes: true,
    data: data,
  };
};
