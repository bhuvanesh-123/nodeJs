exports.mainRoute = function (url, method, callback) {
  if (url === "/" && method === "GET") {
    let responseData = {
      status: 200,
      contentType: "text/html",
      responseData: "Welcome to homepage!!",
    };
    return callback(null, responseData);
  }

  if (url === "/dashboard" && method === "GET") {
    let dashboardData = {
      currentBalance: "$5000",
      maximumDebit: "$100000",
    };

    let responseData = {
      status: 200,
      contentType: "application/json",
      responseData: JSON.stringify(dashboardData),
    };

    return callback(null, responseData);
  }

  if (url === "/product" && method === "POST") {
    let products = ["apple", "orange", "grapes", "bananas"];

    let responseData = {
      status: 200,
      contentType: "application/json",
      responseData: JSON.stringify(products),
    };

    return callback(null, responseData);
  }

  let responseData = {
    status: 404,
    contentType: "text/plain",
    responseData: "Error: Route not found",
  };
  callback(null, responseData);
};
