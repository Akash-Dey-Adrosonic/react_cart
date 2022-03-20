const FormatPrice = (price) => {
  return (Math.round(price * 100) / 100).toLocaleString();
};

export default FormatPrice;
