export default function convertModelToPojo(result) {
  if (Array.isArray(result)) {
    return result.map(convertModelToPojo);
  }

  return (result || {}).dataValues;
}
