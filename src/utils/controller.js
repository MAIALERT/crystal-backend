const responseOk = (res, mensaje, datos = []) => {
  return res.status(200).json({
    mensaje,
    datos
  });
}
exports.responseOk = responseOk;

const responseError = (res, mensaje, datos = []) => {
  return res.status(422).json({
    mensaje,
    datos
  });
}
exports.responseError = responseError;
