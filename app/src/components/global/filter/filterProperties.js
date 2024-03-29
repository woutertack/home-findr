export const filterProperties = (
  data,
  { priceRange, selectedType, selectedProvince, selectedCity, sortOrder }
) => {
  // Apply filters to the property data
  const filteredData = data.filter((property) => {
    // Apply price range filter
    const price = property.price;
    if (price < priceRange[0] || price > priceRange[1]) {
      return false;
    }

    // Apply type filter
    if (selectedType !== "" && property.type !== selectedType) {
      return false;
    }

    // Apply province filter
    if (selectedProvince !== "" && property.province !== selectedProvince) {
      return false;
    }

    // Apply search by city filter
    if (
      selectedCity !== "" &&
      !property.city.toLowerCase().includes(selectedCity.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  // Sort by build year
  if (sortOrder === "oldToNew") {
    filteredData.sort((a, b) => a.buildyear - b.buildyear);
  } else if (sortOrder === "newToOld") {
    filteredData.sort((a, b) => b.buildyear - a.buildyear);
  }

  return filteredData;
};
