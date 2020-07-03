export default (name) => {
  if (!name) {
    return undefined;
  }

  const TYPE = name.toUpperCase();

  return {
    pending: `FETCH_${TYPE}`,
    success: `FETCH_${TYPE}_SUCCESS`,
    error: `FETCH_${TYPE}_ERROR`,
    reset: `FETCH_${TYPE}_RESET`,
  };
};
