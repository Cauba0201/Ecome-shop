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

const getAllProducts = async (req, res) => {
    
};