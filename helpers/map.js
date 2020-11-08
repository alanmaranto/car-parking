export const convertCoordinates = (data) => {
  const formatedData = data.map((item) => {
    const newFormatData = {};
    newFormatData.id = item.id;
    newFormatData.title = item.title;
    newFormatData.description = item.description;
    newFormatData.price = item.price;
    newFormatData.rating = item.rating;
    newFormatData.spots = item.spots;
    newFormatData.free = item.free;
    newFormatData.coordinate = {
      latitude: item.location.lat,
      longitude: item.location.lng,
    };

    return newFormatData;
  });
  return formatedData;
};
