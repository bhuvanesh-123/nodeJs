exports.mainRoute = function (url, method, callback) {
  if (url === "/" && method === "GET") {
    let homePageResponse = {
      status: 200,
      contentType: "text/html",
      responseData: "Welcome to HomePage!!",
    };
    return callback(null, homePageResponse);
  }
  if (url === "/dashboard" && method === "GET") {
    let dashboardData = {
      currentBalance: "$2000",
      minimumBalance: "$500",
      maximumTransaction: "&100000",
    };
    let dashboardResponse = {
      status: 200,
      contentType: "application/JSON",
      responseData: JSON.stringify(dashboardData),
    };
    return callback(null, dashboardResponse);
  }
  if (url === "/product" && method === "Post") {
    let productData = ["apple", "orange", "banana"];
    let productResponse = {
      status: 200,
      contentType: "text/html",
      responseData: productData,
    };
    return callback(null, productData);
  }
};
