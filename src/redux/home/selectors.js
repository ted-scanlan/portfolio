import React from "react";
import { useSelector } from "react-redux";

export const getInfo = () => useSelector((state) => state.description);
