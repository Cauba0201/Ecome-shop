const { type } = require("express/lib/response");
const prima = require("../utills/db");

// Security: Define whitelists for allowed filter types and operators
const ALLOWED_FILTER_TYPES = [
  "price",
  "rating",
  "category",
  "inStock",
  "outOfStock",
];
const ALLOWED_OPERATIONS = ["equals", "lt", "gt", "gte", "lte", "contains"];
const ALLOWED_SORT_VALUES = ["asc", "desc"];

function validateFilterType(filterType) {
  return ALLOWED_FILTER_TYPES.includes(filterType);
}

function validateOperation(operation) {
  return ALLOWED_OPERATIONS.includes(operation);
}

function validateSortValue(sortValue) {
  return ALLOWED_SORT_VALUES.includes(sortValue);
}

function validateAndSanitizeFilterValues(filterType, filterValue) {
  switch (filterType) {
    case "price":
    case "rating":
    case "inStock":
    case "outOfStock":
      const numberValue = parseInt(filterValue);
      return isNaN(numberValue) ? null : numberValue;
    case "category":
      return typeof filterValue === "string" && filterValue.trim().length > 0
        ? filterValue.trim()
        : null;
    default:
      return null;
  }
}

// Security: Safe filter object builder
function buildFilterObject(filterArray) {
  const filterObject = {};
  for (const item of filterArray) {
    if (!validateFilterType(item.filterType)) {
      console.log(`Invalid filter type: ${item.filterType}`);
      continue;
    }
  }

  return filterObject;
}

// xử lý trang theo mode admin và user và xử lý lọc, sắp xếp sản phẩm
const getAllProducts = async (req, res) => {
  const mode = req.query.mode || "";
  if (mode === "admin") {
    const adminProducts = await prima.product.findMany({});
    return res.json(adminProducts);
  } else {
    const dividerLocation = req.url.indexOf("?");
    let filterObject = {};
    let sortObject = {};
    let sortByValue = "defaultSort";

    const page = Number(req.query.page);
    const validatePage = page && page > 0 ? page : 1;

    if (dividerLocation !== -1) {
      const queryArray = req.url.substring(dividerLocation + 1).split("&");

      let filterType;
      let filterArray = [];

      for (let i = 0; i < queryArray.length; i++) {
        const queryParam = queryArray[i];

        if (queryParam.includes("filters")) {
          if (queryParam.includes("price")) {
            filterType = "price";
          }
        } else if (queryParam.includes("rating")) {
          filterType = "rating";
        } else if (queryParam.includes("category")) {
          filterType = "category";
        } else if (queryParam.includes("inStock")) {
          filterType = "inStock";
        } else if (queryParam.includes("outOfStock")) {
          filterType = "outOfStock";
        } else if (queryParam.includes("sortBy")) {
          const sortValue = queryParam.split("=")[1];
          if (validateSortValue(sortValue)) {
            sortByValue = sortValue;
          }
        } else {
          continue;
        }
      }

      if (queryParam.includes("sort")) {
        // Trích xuất giá trị sắp xếp từ queryParam
        const extractedSortValue = queryParam.substring(queryParam.indexOf("=") + 1);
        if (validateSortValue(extractedSortValue)) {
          sortByValue = extractedSortValue;
        }
      }

      if (queryParam.includes("filters") && filterType) {
        let filterValue;

        if (filerType === "category") {
          filterValue = queryParam.substring(queryParam.indexOf("=") + 1);
        } else {
          const numValue = parseInt(queryParam.substring(queryParam.indexOf("=") + 1));
          filterValue = isNaN(numValue) ? null : numValue;
        }
      }

      
    }
  }
};
